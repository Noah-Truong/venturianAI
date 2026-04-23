# Meridian AI — Website Coordination Guide

This file is the single source of truth for all agents working on this project. Read it fully before making any edits. Never deviate from the decisions recorded here without updating this file.

---

## Company

- **Name**: Venturian AI
- **Tagline**: Earn weekly with the future of AI.
- **Mission**: Give students direct access to recurring weekly income from AI training pipelines
- **Product**: Students sign up with .edu email and Handshake (5 minutes), get verified (1–3 days), then receive $200–$500 weekly payouts with no ongoing work. Venturian manages the accounts and AI company relationships end-to-end.
- **Voice**: Direct, specific, no buzzwords. Speak to a skeptical student who wants to know exactly how it works.
- **Audience**: Students — .edu email required, Handshake integration, anyone who wants passive weekly income during school
- **NOT**: An enterprise B2B product. Not SaaS. Not developer tools. Not infrastructure for engineers.

See `backendtools.json` for full employee bios and company reviews.

---

## Tech Stack

| Layer | Choice | Source |
|---|---|---|
| Framework | Next.js 15 (App Router) | — |
| Language | TypeScript (strict) | — |
| Styling | Tailwind CSS v4 | frontendtools.json |
| Components | shadcn/ui on Radix UI | frontendtools.json |
| Animation | Motion (Framer) | frontendtools.json |
| Font | Geist Sans + Geist Mono | frontendtools.json |
| Icons | Lucide React | frontendtools.json |
| Forms | React Hook Form + Zod | frontendtools.json |
| Class utils | clsx + tailwind-merge | frontendtools.json |

---

## Design Tokens

All color, spacing, and type decisions are made here. Agents do not invent new tokens.

### Colors — dark-first, teal accent (defined in `app/globals.css`)

```css
--ink:       #FAFAFA   /* primary text */
--paper:     #09090B   /* page background */
--surface:   #18181B   /* card / panel background */
--overlay:   #27272A   /* elevated surfaces, modal backdrops */
--muted:     #A1A1AA   /* secondary text */
--dim:       #71717A   /* tertiary text */
--subdued:   #52525B   /* captions, metadata */
--accent:    #14B8A6   /* teal — primary interactive color */
--accent-hi: #2DD4BF   /* teal lighter — hover states */
--rule:      #3F3F46   /* borders, dividers */
--code-bg:   #161412   /* terminal / code block background */
--code-rule: #2A2520   /* terminal border */
```

**Rules:**
- Use CSS variables everywhere — never hardcode hex values
- Components with event handlers (onMouseEnter/Leave) MUST have `"use client"`
- Zero purple-to-blue gradients anywhere on the site
- Zero rgba box-shadow on cards — depth through layout and whitespace only
- Card background = `var(--surface)`, hover = `var(--overlay)`, page = `var(--paper)`

### Spacing Scale (8px base)

Use Tailwind's default spacing scale. Section gaps must fall within these three values only:
- **Section gap small**: `py-16` (64px)
- **Section gap medium**: `py-24` (96px)
- **Section gap large**: `py-32` (128px)

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / H1 | Geist Sans | 700 | clamp(48px, 6vw, 80px) |
| H2 | Geist Sans | 600 | 36–48px |
| H3 | Geist Sans | 600 | 24px |
| Body | Geist Sans | 400 | 16px, line-height 1.65 |
| Caption | Geist Sans | 400 | 13px, color: muted |
| Code / mono | Geist Mono | 400 | 14px |

**Rules:**
- Maximum 3 font weights in use: 400, 600, 700
- Body paragraphs: `max-w-[65ch]` at all times
- Headings: `text-wrap: balance` to prevent orphaned words
- Display font must not be Inter, Roboto, Arial, or system-ui — Geist satisfies this

---

## File Structure

```
/app
  layout.tsx          ← root layout, Geist font, metadata defaults
  page.tsx            ← homepage
  /about/page.tsx
  /careers/page.tsx
  /security/page.tsx
  /privacy/page.tsx
  globals.css         ← CSS custom properties, @theme tokens

/components
  /ui/                ← shadcn/ui primitives (button, card, dialog, etc.)
  /sections/          ← page sections (Hero, Features, Team, etc.)
  /layout/            ← Nav, Footer

/lib
  utils.ts            ← cn() helper (clsx + tailwind-merge)

/public
  /fonts/             ← self-hosted Geist WOFF2 files
  /images/            ← WebP/AVIF only, no PNG/JPEG
```

---

## Site Pages & Sections

### Homepage (`/`)

Order of sections:
1. **Nav** — sticky, minimal, logo + links + "Request access" CTA
2. **Hero** — asymmetric layout (NOT centered headline + subtext). One sentence that says exactly what Meridian does.
3. **Social proof bar** — 4+ named customer logos (real companies, linked to case studies)
4. **Features** — 3 features, each leading with an outcome, not a feature name
5. **How it works** — technical diagram or step sequence
6. **Team** — pulled from `backendtools.json` employees array
7. **Reviews / Testimonials** — pulled from `backendtools.json` reviews array, full attribution
8. **CTA section** — specific action, not "Get started"
9. **Footer** — links, legal, responsible disclosure

### `/about`
Company story, mission, full team. Bio and LinkedIn required per employee.

### `/careers`
Culture section (pulled from reviews), open roles, application CTA.

### `/security`
SOC 2 mention, encryption standards, responsible disclosure policy link.

### `/privacy`
Full GDPR/CCPA-compliant policy, plain language, dated.

---

## Copy Rules

These are enforced across all pages. No exceptions.

**Banned words/phrases:**
- next-generation, cutting-edge, harness, revolutionise, empower, unlock, leverage (as a verb), seamless, game-changing, powerful, innovative, state-of-the-art

**Banned CTA copy:**
- "Get started", "Learn more", "Click here", "Submit", "Sign up"

**Required:**
- Hero: one sentence, cold reader understands what Meridian does in 5 seconds
- Feature cards: first sentence is a user outcome, not a feature name
- Every CTA describes the next step ("Request early access", "Read the architecture docs", "Talk to an engineer")

---

## Interaction & Animation Rules

- All animations use Motion (Framer) — no CSS keyframe animations for complex sequences
- Page load: staggered entrance within a 600ms window from first paint
- `prefers-reduced-motion: reduce` disables all transform/opacity transitions — implement via `useReducedMotion()` hook
- No floating particles, auto-playing abstract animations, or decorative-only motion
- Hover states required on every interactive element
- Scroll: CSS `scroll-behavior: smooth` only — no JS scroll libraries
- Anchor links use `#section-id` pattern

---

## Accessibility Requirements

- WCAG 2.1 AA throughout — 4.5:1 body text, 3:1 large text and UI
- No `outline: none` without a `:focus-visible` replacement (3:1 contrast)
- Single H1 per page, no skipped heading levels
- `<main>`, `<nav>`, `<footer>` landmark elements required
- Decorative images: `alt=""` + `role="presentation"`
- All interactive elements keyboard-reachable in logical tab order

---

## Performance Targets

- LCP ≤ 2.5s (mobile, simulated 4G)
- CLS ≤ 0.1
- Total page weight ≤ 1MB (uncompressed, empty cache)
- Zero render-blocking resources
- Images: WebP/AVIF only, `<picture>` with `srcset`
- Fonts: self-hosted WOFF2, subset to Latin range, `font-display: swap`

---

## SEO Requirements

- Unique `<title>` 50–60 chars on every page, includes brand name
- Unique `<meta name="description">` 120–160 chars on every page
- OG tags: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `twitter:card`
- JSON-LD Organisation schema on homepage
- Self-referencing `<link rel="canonical">` on all pages
- `/sitemap.xml` present and valid

---

## Quality Gate

All work is checked against `reference.json`. Every item in that file starts `"status": "pending"`. Before marking a section complete, verify the relevant checks pass their `acceptance_criteria`. Do not ship a section with failing checks.

---

## Agent Coordination Notes

- Each agent owns specific sections/pages — do not duplicate work
- If you discover a conflict with another agent's output, update this file and resolve before merging
- All data for employees, reviews, and company info comes from `backendtools.json` via `lib/data.ts` — never hardcode this data elsewhere
- Component variants are defined in shadcn/ui — do not create parallel component systems
- If you need a design decision not covered here, add it to this file before implementing
- The `meridian/` subdirectory is a separate scaffold from a previous agent — do not import from it or modify it; it is excluded from the root tsconfig
- **Do not create a new Next.js app inside the project directory.** The root IS the Next.js app.
- All interactive components (event handlers, hooks) MUST have `"use client"` at the top of the file

## Current Build Status

Renamed from Meridian AI → Venturian AI on 2026-04-23. Updated with student-focused copy, Handshake/.edu integration, $200–$500 earnings, and 4-step how-it-works from venturian.way-marketing.com.

All pages verified 200 and type-clean as of 2026-04-23:
- `/` — homepage (Nav → Hero → SocialProof → Features → HowItWorks → Team → Reviews → Security → CTA → Footer)
- `/about` — company story, full team, values
- `/careers` — culture reviews, open roles, application form
- `/security` — certifications, encryption, access control, disclosure
- `/privacy` — full GDPR/CCPA policy with sticky TOC
