import { CdkPortal } from '@angular/cdk/portal';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { delay, filter, first, map, switchMap, tap } from 'rxjs';
import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from 'src/app/confirm-dialog/services/custom-confirm-dialog.service';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_EXPANDED_POST } from 'src/app/shared/constants/post.constant';
import { ROUTES } from 'src/app/shared/constants/route.constant';
import { ExpandedPostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@UntilDestroy()
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public dataSource = new DataSource<ExpandedPostDto>(DEFAULT_EXPANDED_POST);
  public readonly ROUTES = ROUTES;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private language: LanguageService,
    private seoService: SeoService,
    private lr: LocalizeRouterService,
    private confirm: CustomConfirmDialogService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);

    const idFromRoute = this.route.paramMap.pipe(map((paramMap) => paramMap.get('id')));

    idFromRoute
      .pipe(
        filter((id) => !Number.isNaN(Number(id))),
        switchMap((id) =>
          this.language.language$.pipe(
            tap({
              next: () => {
                const canonical = this.lr.translateRoute(`/${id}`) as string;
                this.seoService.setSeo(
                  {
                    title: this.translate.instant(`SEO.${ROUTES.POSTS.DETAIL}.title`),
                    description: this.translate.instant(`SEO.${ROUTES.POSTS.DETAIL}.description`),
                  },
                  canonical
                );
              },
            })
          )
        ),
        untilDestroyed(this)
      )
      .subscribe();

    idFromRoute
      .pipe(
        delay(500),
        tap((id) => {
          if (Number.isNaN(Number(id))) {
            this.dataSource.setData(DEFAULT_EXPANDED_POST);
            this.cdr.markForCheck();
          }
        }),
        filter((id) => !Number.isNaN(Number(id))),
        switchMap((id) => this.apiService.detailExpanded(Number(id))),
        untilDestroyed(this)
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.cdr.markForCheck();
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse && err.status >= 400 && err.status < 500) {
            this.dataSource.setData(DEFAULT_EXPANDED_POST);
          } else {
            const error = this.translate.instant('ERROR.unexpected-exception');
            this.dataSource.setError(error);
          }
          this.cdr.markForCheck();
        },
      });
  }

  public onDelete(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.dataSource.data.id))
      )
      .subscribe({
        next: () => {
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('UNI.close'));
          const translatedRoute = this.lr.translateRoute(`/`);
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('UNI.close'));
        },
      });
  }
}
