import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UserDto } from '../shared/dto/user.dto';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class UserInfoComponent {
  @Input({ required: true }) public user!: UserDto;
  @Input({ required: true }) public isLoading = false;
}
