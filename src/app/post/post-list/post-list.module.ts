import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostListRoutingModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class PostListModule {}
