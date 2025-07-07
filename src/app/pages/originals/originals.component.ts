import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ImageComponent } from '../../components/image/image.component';
import { ImageCategoryService } from '../../services/image/image-category.service';

@Component({
  selector: 'app-originals',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageComponent,
  ],
  templateUrl: './originals.component.html',
  styleUrl: './originals.component.scss',
})
export class OriginalsComponent {
  public imageCategoryService = inject(ImageCategoryService);
  
  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    this.imageCategoryService.getImages('originals');
  }
}
