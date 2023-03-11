import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostEditRoutingModule } from './post-edit-routing.module';

@NgModule({
  declarations: [PostEditComponent],
  imports: [
    CommonModule,
    PortalModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    PostEditRoutingModule,
    TranslateModule,
  ],
})
export class PostEditModule {}
