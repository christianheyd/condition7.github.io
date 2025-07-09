import { Component, inject } from '@angular/core';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { AsyncPipe } from '@angular/common';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';

@Component({
  selector: 'app-portraits',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent,
  ],
  templateUrl: './portraits.component.html',
  styleUrl: './portraits.component.scss',
})
export class PortraitsComponent { 
  public imageCategoryService = inject(ImageCategoryService);
  
    ngOnInit(): void {
      this._getImages();
    }
  
    private _getImages(): void {
      this.imageCategoryService.getImages('portraits');
    }
}
