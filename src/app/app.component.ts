import { Portal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { Observable } from 'rxjs';
import { VERSION } from 'src/environments/version';
import { BreadcrumbsPortalService } from './shared/services/breadcrumbs-portal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  hostDirectives: [NgxAppVersionDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public endYear = new Date(VERSION.date).getFullYear();

  public breadcrumbsPortal$!: Observable<Portal<any>>;

  constructor(private breadcrumbsPortalService: BreadcrumbsPortalService) {}

  public ngOnInit(): void {
    this.breadcrumbsPortal$ = this.breadcrumbsPortalService.portal$;
  }
}
