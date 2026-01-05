import { PortalModule } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { NgxFixedFooterDirective } from 'ngx-fixed-footer';
import { DEFAULT_LANGUAGE } from './shared/constants/language.constant';
import { SeoDirective } from './shared/directives/seo.directive';
import { BreadcrumbsPortalService } from './shared/services/breadcrumbs-portal.service';
import { LanguageService } from './shared/services/language.service';
import { VERSION_INFO } from './version';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    MatToolbarModule,
    LocalizeRouterModule,
    PortalModule,
    NgxFixedFooterDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [NgxAppVersionDirective, SeoDirective],
})
export class AppComponent implements OnInit {
  private breadcrumbsPortalService = inject(BreadcrumbsPortalService);
  private language = inject(LanguageService);

  private destroyRef = inject(DestroyRef);
  public endYear = new Date(VERSION_INFO.date).getFullYear();
  public breadcrumbsPortal = toSignal(this.breadcrumbsPortalService.portal$);
  public lang = DEFAULT_LANGUAGE;

  constructor() {
    this.language.initLang();
  }

  public ngOnInit(): void {
    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((language) => (this.lang = language));
  }

  public toggleLanguage() {
    this.language.setLang(this.lang === 'en' ? 'cs' : 'en');
  }
}
