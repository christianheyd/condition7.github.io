import { Injectable } from '@angular/core';
import { ImageFile } from './image-file.interface';

enum PROJECT_CATEGORIES {
  Originals = 'Originals',
  Portraits = 'Portraits',
  Students = 'Students',
}

@Injectable({
  providedIn: 'root'
})
export class ImageFileRegistryService {
  /** 
   * The root folder for your image files. This can be found under the 'public' folder in the project root.
   * */
  private readonly IMAGE_FOLDER_PATH = 'assets/images';

  /** 
   * This is the array of ImageFile objects. All of these will be displayed in the home view,
   * and the category property will decide which images will be displayed on the individual pages.
   * For explanations of each property of the ImageFile, see image-file.interface.ts in the same 
   * folder as this service.
   * */
  public images: Array<ImageFile> = [
    {
      name: 'Blue',
      path: `${this.IMAGE_FOLDER_PATH}/originals/blue.jpg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Gone Swimming',
      path: `${this.IMAGE_FOLDER_PATH}/originals/gone_swimming.jpg`,
      category: PROJECT_CATEGORIES.Originals,
    }
  ];


  /** Returns all images in the registry. */
  getImages(): Array<ImageFile> {
    return this.images;
  }

  /** Gets the specified ImageFile for the provided name. */
  getImage(name: string): ImageFile | null {
    // filter the image array by name
    const matchingImages = this.images.filter((i) => i.name === name);
    // return the first matched image, or null if no match is found
    return matchingImages ? matchingImages[0] : null;
  }


  /** Filters the image list to those with the specified category */
  filterImagesByCategory(category: string): Array<ImageFile> {
    return this.images.filter((i) => i.category === category);
  }
}
