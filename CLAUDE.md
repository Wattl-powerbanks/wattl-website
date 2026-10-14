# CLAUDE.md

Wattl marketing site (wattl.io) — Next.js 16 App Router, React 19, Tailwind v4, Framer Motion, TypeScript strict. Pure static marketing site: no backend, no DB, no CMS.

## Deploy
- Vercel GitHub integration (project lives in Hadi's Vercel account, `hadim-7s-projects`).
- Every PR gets a **Preview** deployment URL — check it before merging.
- **Merge to `main` = live in production.** There's no staging branch and no branch protection, so `main` is never pushed to directly: branch → PR → merge.

## Commands
```bash
npm run dev        # localhost:3000
npm run lint       # eslint — must be 0 errors
npm run build      # next build — also the typecheck
npm run test:e2e   # Playwright (5 browser projects; chromium-only: --project=chromium)
```
Verify gate before any PR: `npm run lint` + `npm run build`.
Playwright e2e is **stale** — 7/23 chromium tests fail on `main` (home page has no `<h1>`, no "Find a Station" button any more). Don't treat those failures as regressions; don't gate on e2e until it's fixed.

## Layout
- `src/app/` — routes: `/`, `/locations`, `/partner-with-us`, `/contact-us`, `/legal`, `/delete-account`, plus `sitemap.ts`, `robots.ts`, `manifest.ts`.
- `src/components/` — `sections/` (page sections), `layout/` (navbar, footer), `forms/`, `ui/`.
- `src/lib/web3forms.ts` — form submissions via Web3Forms; needs `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (set in Vercel; not in this working copy, so forms won't submit locally).
- `content/*.md` — source copy per page + `brand-guidelines.md` (colours, type, tone). Copy in `src/` is hardcoded from these; when changing copy, edit the component.
- `.claude/*.md` — historical build notes (phases, audits). Background only; may be out of date.

## Conventions
- Brand tokens come from `content/brand-guidelines.md`, mapped in `src/app/globals.css`. Use the tokens, not raw hex.
- Copy tone: plain, friendly Aussie English.
