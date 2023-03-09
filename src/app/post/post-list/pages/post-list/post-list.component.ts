import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, filter, first, map, switchMap } from 'rxjs';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { DeletePostDialogComponent } from '../../components/delete-post-dialog/delete-post-dialog.component';

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
  public displayedColumns: string[] = ['id', 'title', 'actions'];
  public query = '';

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
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

  public onDelete(row: PostDto): void {
    const dialogRef = this.dialog.open(DeletePostDialogComponent, {
      width: 'sm',
    });
    dialogRef
      .afterClosed()
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(row.id))
      )
      .subscribe({
        next: () => {
          this.data = this.data.filter((i) => i.id !== row.id);
          this.cdr.markForCheck();
          this.snackBar.open('Succesfully deleted', 'Close');
        },
        error: () => {
          this.snackBar.open('Deletion failed', 'Close');
        },
      });
  }
}
