# Friend photos — drop your pictures here

This folder is the drop zone for the five friends' faces.

## How to add real photos

1. Drop image files into this folder (`public/friends/`).
   - Any web format works: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.svg`.
   - Roughly square crops look best (they're shown as circles).
2. Open [`../../src/config.js`](../../src/config.js) and point each friend's
   `photo` at your file. The path is relative to this `public/` folder and must
   start with `/friends/`:

   ```js
   export const FRIENDS = {
     1: { alt: 'Anna',  photo: '/friends/anna.jpg' },
     2: { alt: 'Bart',  photo: '/friends/bart.jpg' },
     3: { alt: 'Chris', photo: '/friends/chris.png' },
     4: { alt: 'Dani',  photo: '/friends/dani.webp' },
     5: { alt: 'Eef',   photo: '/friends/eef.jpg' },
   }
   ```

3. `alt` is the text shown if the image fails to load and read aloud by screen
   readers — set it to the person's name.

The shipped `1.svg` … `5.svg` are just numbered placeholders. You can overwrite
them (keep the names and you don't need to touch `config.js`) or add your own
files and repoint the paths.

Anything in `public/` is served from the site root as-is and is **not** bundled
or optimised by Vite.
