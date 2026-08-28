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
| `FRIENDS` | The five friends. Each has a `photo` (image URL) and `alt` text. |
| `CAR_CREW` / `PLANE_CREW` | Which friend ids ride in the car vs. the plane. |

### Friend photos

The five faces are `<image>` elements. Placeholder pictures live in
[`public/friends/`](public/friends) as `1.svg` … `5.svg`, each with an `alt`
label from `config.js`. Drop real photos into that folder (keep the filenames,
or point `photo` at any other URL). The `alt` text is shown if an image fails to
load and is read aloud by screen readers.

## How it works

- [`src/useJourney.js`](src/useJourney.js) turns the two dates into a single
  `0 → 1` progress value that steps forward once per calendar day (and rolls over
  on its own if you leave the tab open past midnight).
- [`src/App.jsx`](src/App.jsx) maps that progress onto each vehicle's horizontal
  position. The plane's travel band is offset further left so it always reads as
  "further back".
- The city, car, plane and friend avatars are hand-drawn inline SVG
  ([`src/components/`](src/components)). No image assets, no backend.

## Tech

Vite + React 18, plain CSS. Pinned to versions that run on Node 18.

## Attribution

**This project was coded by Claude** (Anthropic's *Claude Code*, model
`claude-sonnet-5`) in an interactive session with the repository owner, who
provided the concept and direction. Initial scaffold and implementation
generated on **2026-08-28**. Treat the commit history as AI-authored unless a
commit says otherwise.
