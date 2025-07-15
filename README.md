# Condition7

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Adding a Page
1. Run `ng g @c7/schematics:new-page pageName` to create a page component in the `pages` directory.
2. Add a folder in `public/assets/images` and move the images you want to display on this page into it. Ensure all files end with `*.jpg` or `*.jpeg`. This is case-sensitive.
3. If you want the link to display in the navbar, open `src/app/components/navbar/navbar.component.ts`. You will see a list with the three existing navbar links starting around line 38 called `navItems`. Add another line with the following format:

`{ name: 'Any name you want here', url: '/name-that-matches-name-passed-in-generate-command' },`

Once you are done with the above steps, you can further edit the page from the `app/pages` folder. 
