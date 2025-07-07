import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  /** The image's metadata */
  @Input() image: ImageFile | undefined;

  /** The click event handler */
  @Output() wasClicked = new EventEmitter<string>();

  click(): void {
    if (!this.image) return;

    this.wasClicked.emit(this.image.name);
  }
}
