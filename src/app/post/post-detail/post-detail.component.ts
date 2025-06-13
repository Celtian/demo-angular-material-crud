import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { UpperCasePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, OnDestroy, OnInit, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay, switchMap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { UserInfoComponent } from 'src/app/shared/components/user-info/user-info.component';
import { DEFAULT_EXPANDED_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDeleteDirective } from 'src/app/shared/directives/post-delete.directive';
import { ExpandedPostDto } from 'src/app/shared/dto/post.dto';
import { filterNumber } from 'src/app/shared/rxjs/filter-number';
import { getParamId } from 'src/app/shared/rxjs/get-param-id';
import { setInitialIfNotNumber } from 'src/app/shared/rxjs/set-initial-if-not-number';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';

@Component({
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
    UserInfoComponent,
    RouterLink,
    LocalizeRouterModule,
    PostDeleteDirective,
  ],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);
  private breadcrumbsPortalService = inject(BreadcrumbsPortalService);
  private lr = inject(LocalizeRouterService);
  private router = inject(Router);

  public readonly portalContent = viewChild.required(CdkPortal);
  private destroyRef = inject(DestroyRef);
  public dataSource = new DataSource<ExpandedPostDto>(DEFAULT_EXPANDED_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  public ngOnDestroy(): void {
    this.portalContent()?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent());

    this.route.paramMap
      .pipe(
        delay(500),
        getParamId(),
        setInitialIfNotNumber(this.dataSource),
        filterNumber(),
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

  public onDeleted(): void {
    const translatedRoute = this.lr.translateRoute(`/`);
    this.router.navigate([translatedRoute]);
  }
}
