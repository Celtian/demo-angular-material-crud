import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { PostInputDto } from 'src/app/shared/dto/post.dto';
import { CanComponentDeactivate } from 'src/app/shared/guards/can-deactivate-guard.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';

@Component({
  standalone: true,
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    PortalModule,
    TranslateModule,
    ConfirmDialogComponent,
    RouterLink,
    LocalizeRouterModule,
  ],
})
export class PostCreateComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public form = this.fb.group({
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(3)] }),
    body: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(3)] }),
    userId: new FormControl<number>(1, { nonNullable: true }),
  });

  constructor(
    private apiService: ApiService,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private lr: LocalizeRouterService,
    private translate: TranslateService,
    private confirm: CustomConfirmDialogService,
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {
    return this.form.pristine || this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork);
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public onSubmit(): void {
    this.apiService
      .create(this.form.value as PostInputDto)
      .pipe(first())
      .subscribe({
        next: (post) => {
          this.form.reset(post);
          this.snackBar.open(this.translate.instant('response.create.success'), this.translate.instant('uni.close'));
          const translatedRoute = this.lr.translateRoute(`/`);
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.create.failed'), this.translate.instant('uni.close'));
        },
      });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset();
  }
}
