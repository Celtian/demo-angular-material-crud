import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, first, map, switchMap } from 'rxjs';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';

@UntilDestroy()
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  public data: PostDto[] = [];
  public totalCount = 0;
  public displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  public query = '';

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
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
        pageIndex: 0,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public onPageChange(event: any): void {
    this.router.navigate([], {
      queryParams: {
        pageIndex: event.pageIndex,
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
        pageIndex: 0,
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
        pageIndex: 0,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
