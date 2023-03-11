import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'src/app/confirm-dialog/confirm-dialog.module';
import { UserInfoComponent } from 'src/app/user-info/user-info.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PortalModule,
    TranslateModule,
    ConfirmDialogModule,
    UserInfoComponent,
  ],
})
export class PostDetailModule {}
