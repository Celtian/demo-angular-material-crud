import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UserDto } from '../../dto/user.dto';

@Component({
  standalone: true,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class UserInfoComponent {
  public user = input.required<UserDto>();
  public isLoading = input.required<boolean>();
}
