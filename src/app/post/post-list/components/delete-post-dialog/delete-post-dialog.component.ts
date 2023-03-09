import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeletePostDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeletePostDialogComponent>) {}
}
