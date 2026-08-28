// Downscale + recompress the big originals in public/friends/ into web-sized
// copies in public/img/. Run after adding or replacing any source image:
//
//   npm run optimize
//
// The app only ever references public/img/. Originals are kept as the source
// of truth and are not served.
import { mkdirSync, existsSync, statSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'public/friends'
const OUT = 'public/img'
mkdirSync(OUT, { recursive: true })

// name (without extension, case-insensitive) -> output settings
const RECIPES = {
  nice: { out: 'nice.jpg', width: 1800, format: 'jpeg', quality: 74 },
  tesla: { out: 'tesla.jpg', width: 1000, format: 'jpeg', quality: 82 },
  michael: { out: 'michael.jpg', width: 640, format: 'jpeg', quality: 80 },
  dylan: { out: 'dylan.jpg', width: 640, format: 'jpeg', quality: 80 },
  jason: { out: 'jason.jpg', width: 640, format: 'jpeg', quality: 80 },
  zanen: { out: 'zanen.jpg', width: 640, format: 'jpeg', quality: 80 },
  koopie: { out: 'koopie.jpg', width: 640, format: 'jpeg', quality: 80 },
}

const kb = (p) => (existsSync(p) ? Math.round(statSync(p).size / 1024) : 0)

const files = await readdir(SRC)
let done = 0

for (const file of files) {
  const stem = path.parse(file).name.toLowerCase()
  const recipe = RECIPES[stem]
  if (!recipe) continue

  const from = path.join(SRC, file)
  const to = path.join(OUT, recipe.out)

  let pipe = sharp(from).rotate().resize({
    width: recipe.width,
    withoutEnlargement: true,
  })
  pipe =
    recipe.format === 'jpeg'
      ? pipe.jpeg({ quality: recipe.quality, mozjpeg: true })
      : pipe.png({ compressionLevel: 9 })

  await pipe.toFile(to)
  done++
  console.log(`${file}  ${kb(from)} KB  ->  img/${recipe.out}  ${kb(to)} KB`)
}

if (!done) {
  console.log('No matching source images found in ' + SRC)
} else {
  console.log(`\nOptimised ${done} image(s) into ${OUT}/`)
}
