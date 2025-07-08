import { Component, inject, OnInit } from '@angular/core';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { AsyncPipe } from '@angular/common';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public imageCategoryService = inject(ImageCategoryService);

  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    // this.imageCategoryService.getImages();
    this.imageCategoryService.getImages('home');
  }

}
