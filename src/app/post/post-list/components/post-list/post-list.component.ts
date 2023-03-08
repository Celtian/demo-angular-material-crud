import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApiService } from 'src/app/shared/services/api.service';

@UntilDestroy()
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService
      .list()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
