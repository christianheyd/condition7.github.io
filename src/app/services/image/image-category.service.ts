import { inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageFile } from '../image-file-registry/image-file.interface';
import { ImageFileRegistryService, PROJECT_CATEGORIES } from '../image-file-registry/image-file-registry.service';

@Injectable({
  providedIn: 'root'
})
export class ImageCategoryService implements OnDestroy {
  PROJECT_CATEGORIES = PROJECT_CATEGORIES;
  private _imageFileRegistryService = inject(ImageFileRegistryService);

  /** The array of images to display. */
  private _images$ = new BehaviorSubject<Array<ImageFile>>([]);
  public images$ = this._images$.asObservable();

  ngOnDestroy(): void {
    this._images$.next([]);
  }

  /** Updates the internal array of images based on the provided context. */
  getImages(context?: string): void {
    switch (context) {
      default:
      case PROJECT_CATEGORIES.Home: {
        this._images$.next(this._imageFileRegistryService.getImages());
        break;
      }

      case PROJECT_CATEGORIES.Originals: {
        this._images$.next(this._imageFileRegistryService.filterImagesByCategory(PROJECT_CATEGORIES.Originals));
        break;
      }

      case PROJECT_CATEGORIES.Portraits: {
        this._images$.next(this._imageFileRegistryService.filterImagesByCategory(PROJECT_CATEGORIES.Portraits));
        break;
      }

      // case PROJECT_CATEGORIES.Students: {
      //   this._images$.next(this._imageFileRegistryService.filterImagesByCategory(PROJECT_CATEGORIES.Students));
      //   break;
      // }
    };

    console.log(this._images$.value);
  }
}
