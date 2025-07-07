import { Injectable } from '@angular/core';
import { ImageFileRegistryService } from '../image-file-registry/image-file-registry.service';
import { BehaviorSubject } from 'rxjs';
import { ImageFile } from '../image-file-registry/image-file.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(
    imageFileRegistryService: ImageFileRegistryService,
  ) { }

  /** The array of images to display. */
  private _images$ = new BehaviorSubject<Array<ImageFile>>([]);
  public images$ = this._images$.asObservable();

  
}
