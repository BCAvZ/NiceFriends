// ── Edit these to fit your trip ────────────────────────────────────────────────

// The day the "journey" starts (everyone is at the far edge on this date).
// Tip: set it to whenever you spun this site up.
export const START_DATE = '2026-08-01'

// The day you actually arrive in Nice (everyone reaches the city on this date).
export const VACATION_DATE = '2026-10-15'

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
  5: { alt: 'Koopie', photo: '/img/koopie.jpg', focus: 'center 45%' },
}

// Who rides where — friend ids from FRIENDS above.
export const CAR_CREW = [1, 2, 3] // Michael, Dylan, Jason in the Tesla
export const PLANE_CREW = [4, 5] // Zanen, Koopie in the plane, further back

// Scene artwork.
export const CITY_IMAGE = '/img/nice.jpg' // photo panel on the right
export const CAR_IMAGE = '/img/tesla.jpg' // shown as a photo card on the road
// Drop in a watermark-free (ideally transparent) plane PNG and set its path
// here to replace the drawn plane. Leave null to keep the SVG plane.
export const PLANE_IMAGE = null
