import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input({ required: true }) public user!: UserDto;
  @Input({ required: true }) public isLoading = false;
}
