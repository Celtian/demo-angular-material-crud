import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { debounceTime, filter, first, map, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { PostListDetailComponent } from 'src/app/shared/components/post-list-detail/post-list-detail.component';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  standalone: true,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [
    FormsModule,
    LocalizeRouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    PostListDetailComponent,
    RouterLink,
    TranslateModule,
    PortalModule,
    ConfirmDialogComponent,
  ],
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;
  public readonly displayedColumns: string[] = ['id', 'title', 'actions'];
  public readonly displayedColumnsExpanded = [...this.displayedColumns, 'expand'];
  public readonly pageSizeOptions = [5, 10, 25, 100];
  public data = signal<PostDto[]>([]);
  public totalCount = signal(0);
  public query = '';
  public expandedElement: PostDto | null = null;
  private destroyRef = inject(DestroyRef);

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
    private confirm: CustomConfirmDialogService,
  ) {}

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);

    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const canonical = this.lr.translateRoute(`/`) as string;
      this.seoService.setSeo(
        {
          title: this.translate.instant(`SEO.${ROUTE_DEFINITION.APP.POSTS}.title`),
          description: this.translate.instant(`SEO.${ROUTE_DEFINITION.APP.POSTS}.description`),
        },
        canonical,
      );
    });

    this.route.queryParamMap
      .pipe(
        first(),
        map((paramMap) => paramMap.get('query') || ''),
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
            params?.['sortBy'] as keyof PostDto | undefined,
            params?.['sortDirection'] as 'asc' | 'desc' | undefined,
            params?.['query'] as string,
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((posts) => {
        this.data.set(posts.items);
        this.totalCount.set(posts.totalCount);
      });
  }

  public onSortChange(event: Sort): void {
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

  public onPageChange(event: PageEvent): void {
    this.router.navigate([], {
      queryParams: {
        pageIndex: event.pageIndex > 0 ? event.pageIndex : null,
        pageSize: event.pageSize,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onQueryChange(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
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
        switchMap(() => this.apiService.delete(row.id)),
      )
      .subscribe({
        next: () => {
          this.data.update((value) => value.filter((i) => i.id !== row.id));
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('uni.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('uni.close'));
        },
      });
  }

  public onExpand(event: Event, element: PostDto): void {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.cdr.markForCheck();
    event.stopPropagation();
  }

  public trackByPostId(index: number, target: PostDto): string | number {
    return target.id;
  }
}
