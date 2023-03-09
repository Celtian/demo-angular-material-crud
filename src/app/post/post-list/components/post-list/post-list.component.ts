import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap } from 'rxjs';
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

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((params) =>
          this.apiService.list(
            // TODO move to coerce utils
            Number(params?.['pageIndex']),
            Number(params?.['pageSize']),
            params?.['sortBy'] as any,
            params?.['sortDirection'] as any
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
}
