import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxAppVersionDirective } from 'ngx-app-version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  hostDirectives: [NgxAppVersionDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
