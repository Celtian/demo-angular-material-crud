import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostListRoutingModule],
})
export class PostListModule {}
