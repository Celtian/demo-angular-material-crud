import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { UpperCasePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay, filter, first, map, switchMap, tap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { UserInfoComponent } from 'src/app/shared/components/user-info/user-info.component';
import { DEFAULT_EXPANDED_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { ExpandedPostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UpperCasePipe,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PortalModule,
    TranslateModule,
    ConfirmDialogComponent,
    UserInfoComponent,
    RouterLink,
    LocalizeRouterModule,
  ],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private destroyRef = inject(DestroyRef);

  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public dataSource = new DataSource<ExpandedPostDto>(DEFAULT_EXPANDED_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private language: LanguageService,
    private seoService: SeoService,
    private lr: LocalizeRouterService,
    private confirm: CustomConfirmDialogService,
    private router: Router,
    private snackBar: MatSnackBar,
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
                    title: this.translate.instant(`SEO.${ROUTE_DEFINITION.POSTS.DETAIL}.title`),
                    description: this.translate.instant(`SEO.${ROUTE_DEFINITION.POSTS.DETAIL}.description`),
                  },
                  canonical,
                );
              },
            }),
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    idFromRoute
      .pipe(
        delay(500),
        tap((id) => {
          if (Number.isNaN(Number(id))) {
            this.dataSource.setData(DEFAULT_EXPANDED_POST);
          }
        }),
        filter((id) => !Number.isNaN(Number(id))),
        switchMap((id) => this.apiService.detailExpanded(Number(id))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse && err.status >= 400 && err.status < 500) {
            this.dataSource.setData(DEFAULT_EXPANDED_POST);
          } else {
            const error = this.translate.instant('error.unexpected-exception');
            this.dataSource.setError(error);
          }
        },
      });
  }

  public onDelete(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.dataSource.data().id)),
      )
      .subscribe({
        next: () => {
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('uni.close'));
          const translatedRoute = this.lr.translateRoute(`/`);
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('uni.close'));
        },
      });
  }
}
