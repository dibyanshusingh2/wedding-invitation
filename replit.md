# Beach Wedding Invitation

A cinematic, single-page beach wedding invitation website for "Mira & Noah" (placeholder couple) — envelope-opening reveal, animated hero, love story, countdown, event timeline, photo gallery, venue section, and thank-you footer, with a floating ambient music player.

## Run & Operate

- `pnpm --filter @workspace/wedding-invitation run dev` — run the wedding invitation site
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion, wouter
- No backend, no database — fully static, client-only content

## Where things live

- `artifacts/wedding-invitation/src/data/weddingContent.ts` — all editable copy: couple names, wedding date, story beats, timeline/schedule, venue info, gallery captions
- `artifacts/wedding-invitation/src/index.css` — color palette as CSS custom properties (luxurious beach theme: warm sand, deep ocean teal/navy, coral/gold accents) and Google Fonts imports
- `attached_assets/wedding/` — placeholder images (beach/ceremony/venue photos) and `attached_assets/wedding/audio/` (ocean ambience loop + romantic piano track), referenced via `@assets/...` imports
- `artifacts/wedding-invitation/src/components/` — `LoadingScreen`, `EnvelopeReveal`, `Hero`, `Story`, `Countdown`, `Timeline`, `Gallery`, `Venue`, `Footer`, `AudioPlayer`

## Architecture decisions

- Presentation-first build: no OpenAPI spec, no codegen, no DB — content is hardcoded in a single data file rather than fetched.
- Envelope-open interaction gates audio playback start, respecting browser autoplay restrictions.
- Hero background uses a static image with CSS Ken Burns pan/zoom instead of video, to keep the "looping background" lightweight.

## Product

Single-page wedding invitation meant to be sent to family/friends. Visitor sees a loading screen, then clicks a wax seal to open an animated envelope revealing the full site: hero with couple names/date, love story, countdown timer, event schedule, photo gallery, venue details, and a footer, with a persistent floating music control throughout.

## User preferences

- All photos and audio are royalty-free placeholders sourced from the web (Pexels/Unsplash images, archive.org audio) — expected to be swapped for the real couple's photos/music/date later. Code is structured so each swap is a one-line change (data file for text, `attached_assets/wedding/` for media).

## Gotchas

- None yet.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See the `artifacts` skill for how this site is registered/routed (`previewPath: "/"`)
