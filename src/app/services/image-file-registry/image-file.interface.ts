export interface ImageFile {
    /** The name of the image. This will be displayed in the UI as a title */
    name: string;
    /** The file path to the image. */
    path: string;
    /** The category of the image. Used to place this image on a certain page. */
    category: string;
    /** The optional caption. Will be displayed in the UI when clicking on an image. */
    caption?: string;
    /** The optional date for the image. Will be displayed with the title if it is provided. */
    date?: string;
}