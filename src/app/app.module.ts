import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAppVersionModule } from 'ngx-app-version';
import { NgxFixedFooterModule } from 'ngx-fixed-footer';
import { VERSION } from 'src/environments/version';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgxFixedFooterModule.forRoot({
      containerSelector: '.permanent-main',
      cssAttribute: 'margin',
    }),
    NgxAppVersionModule.forRoot({
      version: VERSION.version,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
