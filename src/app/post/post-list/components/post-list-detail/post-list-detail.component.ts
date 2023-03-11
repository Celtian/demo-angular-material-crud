import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_USER } from 'src/app/shared/constants/user.constant';
import { UserDto } from 'src/app/shared/dto/user.dto';
import { ApiService } from 'src/app/shared/services/api.service';

@UntilDestroy()
@Component({
  selector: 'app-post-list-detail',
  templateUrl: './post-list-detail.component.html',
  styleUrls: ['./post-list-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListDetailComponent implements OnChanges, OnInit {
  @Input() public id!: number;

  public dataSource = new DataSource<UserDto>(DEFAULT_USER);
  private idSubj = new Subject<number>();

  constructor(private apiService: ApiService, private translate: TranslateService, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.idSubj
      .pipe(
        debounceTime(500),
        switchMap((id) => this.apiService.user(id)),
        untilDestroyed(this)
      )
      .subscribe({
        next: (res) => {
          this.dataSource.setData(res);
          this.cdr.markForCheck();
        },
        error: () => {
          const error = this.translate.instant('ERROR.unexpected-exception');
          this.dataSource.setError(error);
          this.cdr.markForCheck();
        },
      });

    this.idSubj.next(this.id);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.idSubj.next(this.id);
    }
  }
}
