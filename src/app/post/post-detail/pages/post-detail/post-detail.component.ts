import { CdkPortal } from '@angular/cdk/portal';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { delay, filter, map, switchMap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';

@UntilDestroy()
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public dataSource = new DataSource<PostDto>(DEFAULT_POST);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private breadcrumbsPortalService: BreadcrumbsPortalService
  ) {}

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);

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
            this.dataSource.setData(DEFAULT_POST);
          } else {
            const error = this.translate.instant('ERROR.unexpected-exception');
            this.dataSource.setError(error);
          }
          this.cdr.markForCheck();
        },
      });
  }
}
