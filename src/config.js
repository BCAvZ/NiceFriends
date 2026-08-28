// ── Edit these to fit your trip ────────────────────────────────────────────────

// The day the "journey" starts (everyone is at the far left on this date).
export const START_DATE = '2026-08-28'

// Arrival days in Nice — the car and the plane each land on their own date.
export const CAR_ARRIVAL_DATE = '2026-09-20'
export const PLANE_ARRIVAL_DATE = '2026-09-24'

// The five friends.
//   photo — image URL. Web-sized copies live in /img (run `npm run optimize`
//           after changing the originals in public/friends/).
//   alt   — shown if the image fails to load, and read aloud by screen readers.
//   focus — CSS object-position for the circular crop. Tune the % so the face
//           is centred: smaller = show higher up, larger = show lower down.
export const FRIENDS = {
  1: { alt: 'Michael', photo: '/img/michael.jpg', focus: 'center 80%' },
  2: { alt: 'Dylan', photo: '/img/dylan.jpg', focus: 'center 45%' },
  3: { alt: 'Jason', photo: '/img/jason.jpg', focus: 'center 33%' },
  4: { alt: 'Zanen', photo: '/img/zanen.jpg', focus: 'center 40%' },
  5: { alt: 'Koopie', photo: '/img/koopie.jpg', focus: 'center 35%' },
}

// Who rides where — friend ids from FRIENDS above.
export const CAR_CREW = [1, 2, 3] // Michael, Dylan, Jason in the Tesla
export const PLANE_CREW = [4, 5] // Zanen, Koopie in the plane, further back

// Scene artwork. Each defaults to a drawn SVG. Point one at an image
// (ideally a flat, transparent-background sticker — e.g. a Midjourney export
// dropped in public/friends/ and run through `npm run optimize`) to swap it in.
export const CITY_IMAGE = null // e.g. '/img/nice.jpg'
export const CAR_IMAGE = null // e.g. '/img/tesla.jpg'
export const PLANE_IMAGE = null // e.g. '/img/plane.png'
