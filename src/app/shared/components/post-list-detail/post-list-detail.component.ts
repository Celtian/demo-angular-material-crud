import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { debounceTime } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_USER } from 'src/app/shared/constants/user.constant';
import { UserDto } from 'src/app/shared/dto/user.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-post-list-detail',
  templateUrl: './post-list-detail.component.html',
  styleUrl: './post-list-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UserInfoComponent, TranslateModule],
})
export class PostListDetailComponent {
  public id = input.required<number>();

  public dataSource = new DataSource<UserDto>(DEFAULT_USER);
  private destroyRef = inject(DestroyRef);
  private apiService = inject(ApiService);
  private translate = inject(TranslateService);

  constructor() {
    effect(() => {
      this.apiService
        .user(this.id())
        .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (res) => {
            this.dataSource.setData(res);
          },
          error: () => {
            const error = this.translate.instant('error.unexpected-exception');
            this.dataSource.setError(error);
          },
        });
    });
  }
}
