import { 
  ChangeDetectionStrategy, 
  Component, 
  inject, 
  Input, 
  TemplateRef, 
  ViewChild 
} from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ImageFile } from '../../services/image-file-registry/image-file.interface';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  dialog = inject(Dialog);

  @ViewChild('imageDialog') dialogTemplate: TemplateRef<ImageFile> | undefined;
  
  /** The image's metadata */
  @Input() image: ImageFile | undefined;

  openImageDialog(): void {
    if (!this.dialogTemplate) return;

    this.dialog.open(this.dialogTemplate, {
      width: '80vw',
      data: {
        image: this.image
      },
    });   
  }
}
