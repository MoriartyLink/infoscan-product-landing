# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check + build to dist/
npm run preview   # Preview the production build locally
```

No test suite is configured.

## Architecture

Single-page React app (Vite + TypeScript + Tailwind v4) with one route: `/` → `LandingPage`.

**Key files:**
- `src/pages/LandingPage.tsx` — the entire page UI and all state. All copy lives in a `content` object keyed by `'EN' | 'MY'`, accessed via `const t = content[lang]`. Adding new text means editing both language keys.
- `src/index.css` — Tailwind v4 config via `@theme {}`. Brand tokens are defined here: `brand-primary` (#f97316 orange), `brand-dark`, `brand-bg`, `brand-text`. Font stack: JetBrains Mono (body) + BICUBIK/Arial Black (headings via `font-serif`).
- `src/components/ui/` — small reusable primitives: `Button`, `Modal`, `Badge`, `Spinner`.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

**Path alias:** `@/` maps to `src/` (configured in `vite.config.ts`).

**Bilingual content pattern:** All user-visible strings live in the `content` object in `LandingPage.tsx`. Never hardcode English or Burmese strings outside this object — always add to both `EN` and `MY` keys.

**Demo videos** are served from `public/demo-videos/` as `.mov` files. The workflow section shows `manager-demo.mov` and `owner-demo.mov` for the Manager and Owner tabs; the Customer tab shows a placeholder state.

**Deployment:** Project is linked to Vercel (`.vercel/project.json` present). Deploy with `npm run build` or via the Vercel CLI/dashboard.
