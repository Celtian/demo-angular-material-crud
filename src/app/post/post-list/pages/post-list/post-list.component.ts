import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, filter, first, map, switchMap } from 'rxjs';
import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from 'src/app/confirm-dialog/services/custom-confirm-dialog.service';
import { ROUTES } from 'src/app/shared/constants/route.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@UntilDestroy()
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public readonly ROUTES = ROUTES;
  public readonly displayedColumns: string[] = ['id', 'title', 'actions'];
  public readonly displayedColumnsExpanded = [...this.displayedColumns, 'expand'];
  public readonly pageSizeOptions = [5, 10, 25, 100];
  public data: PostDto[] = [];
  public totalCount = 0;
  public query = '';
  public expandedElement: any | null;
  public animationInProgress = false;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private language: LanguageService,
    private seoService: SeoService,
    private lr: LocalizeRouterService,
    private translate: TranslateService,
    private confirm: CustomConfirmDialogService
  ) {}

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);

    this.language.language$.pipe(untilDestroyed(this)).subscribe(() => {
      const canonical = this.lr.translateRoute(`/`) as string;
      this.seoService.setSeo(
        {
          title: this.translate.instant(`SEO.${ROUTES.APP.POSTS}.title`),
          description: this.translate.instant(`SEO.${ROUTES.APP.POSTS}.description`),
        },
        canonical
      );
    });

    this.route.queryParamMap
      .pipe(
        first(),
        map((paramMap) => paramMap.get('query') || '')
      )
      .subscribe((query) => {
        this.query = query;
        this.cdr.markForCheck();
      });

    this.route.queryParams
      .pipe(
        debounceTime(500),
        switchMap((params) =>
          this.apiService.list(
            // TODO move to coerce utils
            Number.isNaN(Number(params?.['pageIndex'])) ? 1 : Number(params?.['pageIndex']),
            Number.isNaN(Number(params?.['pageSize'])) ? 5 : Number(params?.['pageSize']),
            params?.['sortBy'] as any,
            params?.['sortDirection'] as any,
            params?.['query'] as any
          )
        ),
        untilDestroyed(this)
      )
      .subscribe((posts) => {
        this.data = posts.items;
        this.totalCount = posts.totalCount;
        this.cdr.markForCheck();
      });
  }

  public onSortChange(event: any): void {
    this.router.navigate([], {
      queryParams: {
        sortBy: event.active,
        sortDirection: event.direction,
        pageIndex: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onPageChange(event: any): void {
    this.router.navigate([], {
      queryParams: {
        pageIndex: event.pageIndex > 0 ? event.pageIndex : null,
        pageSize: event.pageSize,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onQueryChange(event: any): void {
    const query = event.target.value;
    this.router.navigate([], {
      queryParams: {
        query: query ? encodeURIComponent(query) : null,
        pageIndex: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onQueryRemove(): void {
    this.query = '';
    this.router.navigate([], {
      queryParams: {
        query: null,
        pageIndex: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onClear(): void {
    this.query = '';
    this.router.navigate([], {
      queryParams: {
        query: null,
        pageIndex: null,
        pageSize: null,
        sortBy: null,
        sortDirection: null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onDelete(row: PostDto): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(row.id))
      )
      .subscribe({
        next: () => {
          this.data = this.data.filter((i) => i.id !== row.id);
          this.cdr.markForCheck();
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('UNI.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('UNI.close'));
        },
      });
  }

  public onExpand(event: Event, element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.animationInProgress = true;
    event.stopPropagation();
    setTimeout(() => {
      this.animationInProgress = false;
      this.cdr.markForCheck();
    }, 225); // duration of animation is 225ms ... then remove from DOM to prevent performance issues
  }
}
