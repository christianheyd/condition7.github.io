import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';

@Component({
  selector: 'app-originals',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent,
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
