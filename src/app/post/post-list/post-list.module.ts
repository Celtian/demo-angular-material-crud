import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'src/app/confirm-dialog/confirm-dialog.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';
import { PostListDetailComponent } from './components/post-list-detail/post-list-detail.component';

@NgModule({
  declarations: [PostListComponent, PostListDetailComponent],
  imports: [
    CommonModule,
    PostListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    FormsModule,
    PortalModule,
    TranslateModule,
    ConfirmDialogModule,
  ],
})
export class PostListModule {}
