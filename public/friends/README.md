# Source images — drop your pictures here

This folder holds the **full-size originals**. The app never loads these
directly — it loads web-sized copies from [`../img/`](../img) that are generated
from whatever is in here.

## Workflow

1. Drop image files into this folder. Recognised names (any extension —
   `.jpg`, `.png`, `.webp`, …):

   | file | used for |
   | --- | --- |
   | `Michael` `Dylan` `Jason` `Zanen` `Koopie` | the five friends' faces |
   | `Nice` | the city photo panel on the right |
   | `Tesla` | the car photo card on the road |

2. Regenerate the web-sized copies:

   ```bash
   npm run optimize
   ```

   This writes `../img/michael.jpg`, `../img/nice.jpg`, etc. (downscaled and
   compressed — a 12 MB photo becomes ~280 KB).

3. If you add a friend photo under a **new** name, also update
   [`../../src/config.js`](../../src/config.js): set that friend's `photo` to
   `/img/<name>.jpg`, their `alt` to the person's name, and add a recipe line in
   [`../../scripts/optimize-images.mjs`](../../scripts/optimize-images.mjs).

## Framing a face

Each friend has a `focus` value in `config.js` (a CSS `object-position`). The
photos are circular crops, so if someone's face is cut off, nudge their `focus`
percentage — smaller shows more of the top, larger shows more of the bottom.

## Notes on the current images

- `Dylan` and `Koopie` are currently the **same photo** — replace `Koopie`
  with a real one.
- The drawn plane is still an SVG. To use a picture instead, drop a
  **watermark-free** (ideally transparent-background) plane PNG in here, add an
  optimize recipe for it, and set `PLANE_IMAGE` in `config.js`.
