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
import { VERSION } from 'src/environments/version';
import { DEFAULT_LANGUAGE } from './shared/constants/language.constant';
import { SeoDirective } from './shared/directives/seo.directive';
import { BreadcrumbsPortalService } from './shared/services/breadcrumbs-portal.service';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  hostDirectives: [NgxAppVersionDirective, SeoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
})
export class AppComponent implements OnInit {
  private breadcrumbsPortalService = inject(BreadcrumbsPortalService);
  private language = inject(LanguageService);

  private destroyRef = inject(DestroyRef);
  public endYear = new Date(VERSION.date).getFullYear();
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
