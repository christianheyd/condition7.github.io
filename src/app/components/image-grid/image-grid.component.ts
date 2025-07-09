import { Component, Input } from '@angular/core';
import { ImageFile } from '../../services/image-file-registry/image-file.interface';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [
    ImageComponent
  ],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss',
})
export class ImageGridComponent {
  @Input() images: Array<ImageFile> | null | undefined;
}
