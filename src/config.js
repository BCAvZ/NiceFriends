// ── Edit these to fit your trip ────────────────────────────────────────────────

// The day the "journey" starts (everyone is at the far edge on this date).
// Tip: set it to whenever you spun this site up.
export const START_DATE = '2026-08-01'

// The day you actually arrive in Nice (everyone reaches the city on this date).
export const VACATION_DATE = '2026-10-15'

// The five friends. `photo` is any image URL; drop real files into
// `public/friends/` (keep the names, or change the paths here).
// `alt` is the image's alt text — shown if the picture fails to load and
// read aloud by screen readers.
export const FRIENDS = {
  1: { alt: 'Vriend 1', photo: '/friends/1.svg' },
  2: { alt: 'Vriend 2', photo: '/friends/2.svg' },
  3: { alt: 'Vriend 3', photo: '/friends/3.svg' },
  4: { alt: 'Vriend 4', photo: '/friends/4.svg' },
  5: { alt: 'Vriend 5', photo: '/friends/5.svg' },
}

// Who rides where — friend ids from FRIENDS above.
export const CAR_CREW = [1, 2, 3] // 3 in the Tesla
export const PLANE_CREW = [4, 5] // 2 in the plane, further back
