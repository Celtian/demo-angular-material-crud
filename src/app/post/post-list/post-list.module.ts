import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeletePostDialogComponent } from './components/delete-post-dialog/delete-post-dialog.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';

@NgModule({
  declarations: [PostListComponent, DeletePostDialogComponent],
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
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    PortalModule,
  ],
})
export class PostListModule {}
