import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { delay, filter, map, switchMap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';

const DEFAULT_VALUE: PostDto = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum debitis eius et eaque beatae qui delectus ullam esse, quis distinctio fugit quod. Doloremque consequatur commodi id, corporis iure cum?',
  id: 1,
  title: 'Lorem ipsum dolor sit amet',
  userId: 1,
};

@UntilDestroy()
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  public dataSource = new DataSource<PostDto>(DEFAULT_VALUE);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        delay(500),
        map((paramMap) => paramMap.get('id')),
        filter((id) => !Number.isNaN(Number(id))),
        switchMap((id) => this.apiService.detail(Number(id))),
        untilDestroyed(this)
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.cdr.markForCheck();
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse && err.status >= 400 && err.status < 500) {
            this.dataSource.setData(DEFAULT_VALUE);
          } else {
            const error = this.translate.instant('ERROR.unexpected-exception');
            this.dataSource.setError(error);
          }
          this.cdr.markForCheck();
        },
      });
  }
}
