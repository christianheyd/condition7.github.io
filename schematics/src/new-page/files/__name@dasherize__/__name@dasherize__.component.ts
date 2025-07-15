import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent,
  ],
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrl: './<%= dasherize(name) %>.component.scss',
})
export class <%= classify(name) %>Component {
  public imageCategoryService = inject(ImageCategoryService);
  
  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    this.imageCategoryService.getImages('<%= name %>');
  }
}
