import { 
  ChangeDetectionStrategy, 
  Component, 
  inject, 
  Input, 
  TemplateRef, 
  ViewChild 
} from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImageFile } from '../../services/image-file-registry/image-file.interface';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  dialog = inject(Dialog);


  private _dialogRef: DialogRef<{
      data: {
        image: ImageFile,
      }
    }, 
    ImageFile
  > | undefined;

  @ViewChild('imageDialog') dialogTemplate: TemplateRef<ImageFile> | undefined;
  
  /** The image metadata */
  @Input() image: ImageFile | undefined;

  openImageDialog(): void {
    if (!this.dialogTemplate) return;

    this._dialogRef = this.dialog.open(this.dialogTemplate, {
      data: {
        image: this.image
      },
    });   
  }

  closeDialog(): void {
    if (!this._dialogRef) return;

    this._dialogRef.close();
  }
}
