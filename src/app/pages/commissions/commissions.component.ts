import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';

@Component({
  selector: 'app-commissions',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent,
  ],
  templateUrl: './commissions.component.html',
  styleUrl: './commissions.component.scss',
})
export class CommissionsComponent {
  public imageCategoryService = inject(ImageCategoryService);
  
  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    this.imageCategoryService.getImages('commissions');
  }
}
