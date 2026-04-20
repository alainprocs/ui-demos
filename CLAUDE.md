# UI Demos — Agent Standards

Every demo built in this repo must be **world-class**. Think Vercel, Linear, Stripe Docs — but darker, flashier, more opinionated. If it doesn't look like it belongs on awwwards.com, rebuild it.

---

## Visual Bar

The reference standard is **Orbita** (`demos/orbita/`). Every new demo must meet or exceed it. Look at Orbita before starting.

Non-negotiable visual elements:

- **Animated hero** — something must be moving: rotating rings, pulsing glows, drifting grid, orbiting elements, particle fields, morphing blobs, live data tickers, wave forms, etc.
- **Gradient mesh backgrounds** — layered radial gradients with the accent color bleeding through at 10–30% opacity, never flat black
- **Glowing CTAs** — primary buttons with `box-shadow: 0 0 40px ${accent}88`, hover lifts with scale + glow intensification
- **Animated borders** — gradient borders, glowing outlines, shimmer effects on cards
- **Depth** — use layered z-index, blur, and translucency to create foreground/midground/background separation
- **Section transitions** — each section should feel distinct but connected; use subtle background shifts, diagonal dividers, or overlapping elements
- **Typography contrast** — giant hero headline (clamp 3.5rem → 7rem), tight letter-spacing (-0.04em), mixed weights, gradient text on key words
- **Social proof that looks real** — testimonials with avatars (initials), company logos (SVG wordmarks or styled text), usage stats with animated count-up (CSS counter trick)
- **Micro-details** — dotted grid overlays, noise textures via SVG filter, subtle scanline effects, corner decorations, faint circuit traces

---

## Animation Rules (CSS only — no framer-motion, no "use client")

All animation must be pure CSS keyframes or transitions. Examples:

```css
/* Pulsing glow */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px ${accent}44; }
  50% { box-shadow: 0 0 60px ${accent}99, 0 0 100px ${accent}33; }
}

/* Floating */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Shimmer sweep */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Rotating ring */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Gradient shift */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

Inject keyframes into a `<style>` tag inside the component. Every hero must use at least 3 animation types simultaneously.

---

## Copywriting Standard

Copy must feel like it was written by a world-class B2B SaaS copywriter, not a template. Rules:

- **Hero headline**: Concrete + bold. Not "The Platform for X" — instead: "Ship 10× faster. Break nothing." or "Your data. Every second. No excuses."
- **Subheadline**: One punchy sentence that explains the product's core promise with specificity
- **Feature headlines**: Action-oriented, present tense. "Catches regressions before you do." not "Regression Detection"
- **Testimonials**: Sound like real engineers or operators. Include titles and companies. Quote specific numbers or outcomes.
- **CTA copy**: Specific action. "Start monitoring free" not "Get started". "See your first insight in 4 minutes" not "Learn more"
- **Stats**: Always include 3 impressive stats in the hero or just below (e.g., "99.97% uptime · 2.3ms avg latency · 14,000 teams")

---

## Technical Constraints (Non-negotiable)

This repo uses Next.js 14 with `output: "export"` (static). Breaking these crashes the build:

1. **NO `"use client"`** — pure server components only
2. **NO `framer-motion`** — CSS animations only
3. **NO `next/link`** — use plain `<a>` tags
4. **NO `useSearchParams`, `useRouter`, or any React hooks**
5. Inline styles preferred; Tailwind only for layout utilities that are already in the config
6. `lucide-react` is available for icons
7. Images: no `next/image` unless `unoptimized` is already set (it is) — but prefer CSS gradients and SVG over raster images

---

## Structure

Each demo lives at:
- `demos/{slug}/page.tsx` — imports Nav, Hero, Features, Pricing (optional), Testimonials (optional), CTA, Footer
- `demos/{slug}/components/{nav,hero,features,pricing,testimonials,cta,footer}.tsx`
- `app/{slug}/page.tsx` — Next.js route with metadata

After building, add to `public/demos.json` (append, don't replace). Also update `/Users/al/Developer/portfolio/lib/demos-data.json` with the same entry.

Always run `npm run build` and fix all errors before committing.

---

## Self-Check Before Committing

Ask yourself:
- Does the hero have something animated and visually impressive?
- Does it look better than Orbita?
- Would a designer pause scrolling to look at it?
- Is the copy specific and compelling, not generic?
- Does `npm run build` pass clean?

If the answer to any of these is no, keep working.
