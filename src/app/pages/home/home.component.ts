import { Component, inject, OnInit } from '@angular/core';
import { ImageCategoryService } from '../../services/image/image-category.service';
import { AsyncPipe } from '@angular/common';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';
import { RotatingQuoteComponent } from '../../components/rotating-quote/rotating-quote.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    ImageGridComponent,
    RotatingQuoteComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public imageCategoryService = inject(ImageCategoryService);

  quotes: Array<string> = [
    'A face in time\nA time and place\nThe rain and grime\nThe blood and paint',
  ]

  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    // this.imageCategoryService.getImages();
    this.imageCategoryService.getImages('home');
  }

}
