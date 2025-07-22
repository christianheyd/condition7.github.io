import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent,
  ],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.scss',
})
export class WorkshopsComponent {
  public imageCategoryService = inject(ImageCategoryService);
  
  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    this.imageCategoryService.getImages('workshops');
  }
}
