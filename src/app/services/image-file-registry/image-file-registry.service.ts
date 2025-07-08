import { Injectable } from '@angular/core';
import { ImageFile } from './image-file.interface';

export enum PROJECT_CATEGORIES {
  Home = 'home',
  Originals = 'originals',
  Portraits = 'portraits',
  // Students = 'students',
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
      name: '777red',
      path: `${this.IMAGE_FOLDER_PATH}/home/777red.jpeg`,
      category: PROJECT_CATEGORIES.Home,
    },
    {
      name: 'lightsblue',
      path: `${this.IMAGE_FOLDER_PATH}/home/lightsblue.jpeg`,
      category: PROJECT_CATEGORIES.Home,
    },
    {
      name: 'lightshow',
      path: `${this.IMAGE_FOLDER_PATH}/home/lightshow.jpeg`,
      category: PROJECT_CATEGORIES.Home,
    },
    {
      name: 'Blue',
      path: `${this.IMAGE_FOLDER_PATH}/originals/blue.jpg`,
      category: PROJECT_CATEGORIES.Originals,
      caption: 'A test caption',
    },
    {
      name: 'Gone Swimming',
      path: `${this.IMAGE_FOLDER_PATH}/originals/gone_swimming.jpg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Ojima Morishita',
      path: `${this.IMAGE_FOLDER_PATH}/originals/ojima-morishita.jpg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Untitled',
      path: `${this.IMAGE_FOLDER_PATH}/originals/IMG_0396.jpeg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Produce',
      path: `${this.IMAGE_FOLDER_PATH}/originals/produce.jpeg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Rebirth',
      path: `${this.IMAGE_FOLDER_PATH}/originals/rebirth.jpg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Sky',
      path: `${this.IMAGE_FOLDER_PATH}/originals/sky.jpeg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Untitled',
      path: `${this.IMAGE_FOLDER_PATH}/originals/untitled-5-6-22.jpeg`,
      category: PROJECT_CATEGORIES.Originals,
      caption: 'A test caption',
      date: '5/6/2022',
    },
    {
      name: 'Viceroy',
      path: `${this.IMAGE_FOLDER_PATH}/originals/viceroy.jpeg`,
      category: PROJECT_CATEGORIES.Originals,
    },
    {
      name: 'Aloy',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/aloy.jpeg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Bolaji',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/bolaji.jpg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Bolder',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/bolder.jpg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Dion',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/dion.jpeg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Earl',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/earl.jpeg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Handle With Care',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/handle-with-care.jpeg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Kid Cudi',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/kid-cudi.jpg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Kid Cudi II',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/ii.jpg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Muse in Blue',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/muse-in-blue.jpg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
    {
      name: 'Sade (2)',
      path: `${this.IMAGE_FOLDER_PATH}/portraits/sade-2.jpeg`,
      category: PROJECT_CATEGORIES.Portraits,
    },
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
