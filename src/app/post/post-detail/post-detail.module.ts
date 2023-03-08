import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule, PostDetailRoutingModule, MatCardModule, MatIconModule, TranslateModule],
})
export class PostDetailModule {}
