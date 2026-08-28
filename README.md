# Op weg naar Nice

A silly little site that visualises the wait before a group holiday to **Nice**.

On the right sits the city. On the left, three friends drive a Tesla Model 3
towards it, with two more friends flying in behind them. Every calendar day both
the car and the plane take one small step closer. When the vacation date
arrives, everyone reaches Nice.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Build a static bundle with `npm run build` (output in `dist/`).

## Configure

Everything you'd want to change lives in [`src/config.js`](src/config.js):

| Setting | Meaning |
| --- | --- |
| `START_DATE` | The day the journey begins (everyone at the far edge). |
| `VACATION_DATE` | Arrival day in Nice (everyone reaches the city). |
| `FRIENDS` | The five friends. Each has a `photo`, `alt` text and a `focus` (crop position). |
| `CAR_CREW` / `PLANE_CREW` | Which friend ids ride in the car vs. the plane. |
| `CITY_IMAGE` / `CAR_IMAGE` | Scene photos (the Nice panel, the car card). |
| `PLANE_IMAGE` | Set to a PNG path to replace the drawn plane; `null` keeps the SVG. |

### Images

Full-size originals go in [`public/friends/`](public/friends); the app loads
downscaled copies from `public/img/`. After adding or replacing any original:

```bash
npm run optimize
```

See [`public/friends/README.md`](public/friends/README.md) for the naming rules
and how to reframe a face with `focus`.

## How it works

- [`src/useJourney.js`](src/useJourney.js) turns the two dates into a single
  `0 → 1` progress value that steps forward once per calendar day (and rolls over
  on its own if you leave the tab open past midnight).
- [`src/App.jsx`](src/App.jsx) maps that progress onto each vehicle's horizontal
  position. The plane's travel band is offset further left so it always reads as
  "further back".
- The city and car are photos; the friend faces are circular-cropped `<img>`
  bubbles above each vehicle; the plane is inline SVG until a clean image is
  supplied ([`src/components/`](src/components)).
- [`scripts/optimize-images.mjs`](scripts/optimize-images.mjs) (run via
  `npm run optimize`) resizes the originals into `public/img/`. No backend.

## Tech

Vite + React 18, plain CSS. Pinned to versions that run on Node 18.

## Attribution

**This project was coded by Claude** (Anthropic's *Claude Code*, model
`claude-sonnet-5`) in an interactive session with the repository owner, who
provided the concept and direction. Initial scaffold and implementation
generated on **2026-08-28**. Treat the commit history as AI-authored unless a
commit says otherwise.
