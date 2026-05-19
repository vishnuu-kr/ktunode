# Technical Design: Premium Bento-Grid "What You Get" Section

## Overview

This design replaces the existing light-mode `<Features />` component (`src/components/ui/features-8.tsx`) with a premium dark-mode bento-grid section. The new component uses the same slot in `page.tsx` but delivers a Wetracked.io-inspired aesthetic with glassmorphism, ambient glows, and Framer Motion micro-interactions.

## Components and Interfaces

### Component Structure

```
src/components/features/PremiumBentoGrid/
├── index.tsx                    # Main section wrapper (Section_Component)
├── BentoCard.tsx                # Shared card wrapper with hover/entrance animations
├── ExamCoverageCard.tsx         # Box 1: 98% metric + animated progress bars
├── ChapterNotesCard.tsx         # Box 2: Stacked module cards with fan-out
├── PYQCard.tsx                  # Box 3: Glowing PDF icon + dot-grid
├── SyllabusTrackerCard.tsx      # Box 4: Animated checklist on hover
└── ZeroFrictionCard.tsx         # Box 5: Node pathway animation
```

### BentoCard Interface

```tsx
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;        // stagger delay in seconds (0, 0.1, 0.2, etc.)
  colSpan?: string;      // e.g. "lg:col-span-4"
  rowSpan?: string;      // e.g. "lg:row-span-2"
}
```

### PremiumBentoGrid (index.tsx)

```tsx
// No props — self-contained section component
export function PremiumBentoGrid(): JSX.Element
```

### Integration Point

In `src/app/page.tsx`, the existing `<Features />` import and usage will be replaced:

```tsx
// Before
import { Features } from "@/components/ui/features-8";
<section className="relative z-10 w-full bg-white border-y border-blue-50">
  <Features />
</section>

// After
import { PremiumBentoGrid } from "@/components/features/PremiumBentoGrid";
<PremiumBentoGrid />
```

### Card Component Interfaces

Each card component is a self-contained React FC with no external props:

```tsx
export function ExamCoverageCard(): JSX.Element
export function ChapterNotesCard(): JSX.Element
export function PYQCard(): JSX.Element
export function SyllabusTrackerCard(): JSX.Element
export function ZeroFrictionCard(): JSX.Element
```

## Data Models

### Static Data (no external API calls)

```tsx
// Progress bar data for ExamCoverageCard
const branches = [
  { label: "CS", pct: 98 },
  { label: "EC", pct: 96 },
  { label: "ME", pct: 95 },
];

// Checklist items for SyllabusTrackerCard
const modules = [
  { name: "Module 1 — Introduction", done: true },
  { name: "Module 2 — Core Concepts", done: true },
  { name: "Module 3 — Advanced Topics", done: false },
  { name: "Module 4 — Applications", done: false },
  { name: "Module 5 — Case Studies", done: false },
];

// Stagger delay configuration
const cardDelays = [0, 0.1, 0.2, 0.3, 0.4]; // seconds
```

No database, API, or external data sources are involved. All content is hardcoded for this marketing section.

## Architecture

### 1. PremiumBentoGrid (index.tsx) — Section_Component

**Responsibilities:**
- Renders full-width `<section>` with `bg-zinc-950` background
- Contains max-w-7xl centered container with px-6 and py-24
- Renders section header (badge + gradient heading)
- Renders CSS Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6`
- Places 2 Ambient_Glow elements (absolute, blur-3xl, opacity-15, pointer-events-none)
- Uses `useReducedMotion()` hook to conditionally disable animations

### 2. BentoCard — Shared Wrapper

**Shared Styles:**
```
backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-3xl p-7
```

**Hover Animation (Framer Motion):**
```tsx
whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.2)" }}
transition={{ type: "spring", stiffness: 80, damping: 15 }}
```

**Entrance Animation:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ delay, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
```

### 3. ExamCoverageCard (Box 1)

**Layout:** `lg:col-span-4 lg:row-span-2`

**Animation Logic:**
- Uses `useInView` with `{ once: true, amount: 0.5 }` to trigger bar animation
- Each bar animates width from `0%` to target over 800ms with staggered 100ms delays

### 4. ChapterNotesCard (Box 2)

**Layout:** `lg:col-span-4`

**Animation Logic:**
- On hover, cards fan out using `motion.div` with variants
- Spring config: `{ stiffness: 200, damping: 20 }`

### 5. PYQCard (Box 3)

**Layout:** `lg:col-span-4`

**Visual Elements:**
- Dot-grid background: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)` with `background-size: 24px 24px`
- Entrance: scale 0.85→1, opacity 0→1, 500ms

### 6. SyllabusTrackerCard (Box 4)

**Layout:** `lg:col-span-4`

**Hover Sequence (1500ms total):**
1. Cursor appears and moves toward 3rd item (300ms)
2. Circle fills with #32D74B (200ms)
3. Text gets line-through (150ms)
4. Progress bar increments (200ms)
5. On hover end: reset in 300ms

### 7. ZeroFrictionCard (Box 5)

**Layout:** `lg:col-span-4`

**Animation:** SVG strokeDashoffset from full length to 0 on scroll (1000ms)

## Styling Strategy

### Dark Theme Tokens (Tailwind classes)
| Element | Class |
|---------|-------|
| Section bg | `bg-zinc-950` |
| Card bg | `bg-white/[0.04]` |
| Card border | `border-white/10` |
| Card border hover | `border-white/20` |
| Card radius | `rounded-3xl` (24px) |
| Card blur | `backdrop-blur-2xl` |
| Primary text | `text-white` |
| Secondary text | `text-zinc-400` |
| Accent gradient | `from-blue-400 to-cyan-400` |
| Glow elements | `blur-3xl opacity-15 pointer-events-none` |

## Error Handling

- **Framer Motion load failure:** All content renders in static final state (opacity 1, no transforms). The `initial` prop values are overridden by CSS defaults ensuring visibility.
- **useInView unavailable:** Falls back to rendering content immediately visible (no entrance animation).
- **Reduced motion:** All animations disabled via `useReducedMotion` hook check at component level.
- **Touch devices:** Hover animations gracefully degrade — tap triggers the same animation via `onTap` handler.

## Correctness Properties

### Property 1: Progress Bar Bounds
Progress bars never exceed 100% width. The animated width value is clamped to the data-defined percentage (98%, 96%, 95%).
**Validates: Requirements 2.4, 2.5**

### Property 2: One-Shot Entrance Animations
Entrance animations fire exactly once per page load. The `useInView` hook is configured with `once: true`, preventing re-triggering on subsequent scrolls.
**Validates: Requirements 2.8, 7.3**

### Property 3: Reversible Hover State
Hover animations are fully reversible — leaving hover always returns elements to their initial state. No permanent state mutation occurs from hover interactions.
**Validates: Requirements 3.4, 5.4, 7.1**

### Property 4: No Layout Shift
All animated elements have fixed dimensions before animation starts. Animations use only `transform` and `opacity`, which do not trigger layout recalculation.
**Validates: Requirements 9.5**

### Property 5: Deterministic Stagger Order
Stagger delays are deterministic and ordered (0, 0.1, 0.2, 0.3, 0.4 seconds). Cards always animate in top-to-bottom, left-to-right order.
**Validates: Requirements 7.4**

## Testing Strategy

- **Visual verification:** Run `npm run dev` and manually inspect each card's appearance, hover states, and scroll-triggered animations
- **Responsive testing:** Resize viewport to verify breakpoint behavior at 320px, 768px, 1024px, and 1440px
- **Reduced motion:** Enable `prefers-reduced-motion: reduce` in browser DevTools and verify no animations play
- **Build verification:** Run `npm run build` to confirm no TypeScript errors or build failures
- **Accessibility audit:** Use browser DevTools accessibility inspector to verify heading hierarchy, aria-hidden on decorative elements, and contrast ratios

## Responsive Breakpoints

| Breakpoint | Grid | Card Behavior |
|-----------|------|---------------|
| < 768px | 1 column | Full width, no row-span |
| 768px–1023px | 2 columns | Cards span 1 col each |
| ≥ 1024px | 12 columns | Cards use col-span-4, Box 1 uses row-span-2 |

## Performance Considerations

- All animations use `transform` and `opacity` only (GPU-composited, no layout thrash)
- `useInView` with `once: true` prevents continuous observation
- Ambient glow divs use `will-change: transform` for paint optimization
- No external assets required (all visuals are CSS/SVG)
- Component is client-side (`"use client"`) due to Framer Motion dependency

## Dependencies

All dependencies are already in `package.json` — no new installs required:
- `framer-motion` ^12.38.0 — animations
- `lucide-react` ^1.14.0 — icons
- `tailwindcss` ^4.3.0 — styling

## File Changes Summary

| Action | File |
|--------|------|
| Create | `src/components/features/PremiumBentoGrid/index.tsx` |
| Create | `src/components/features/PremiumBentoGrid/BentoCard.tsx` |
| Create | `src/components/features/PremiumBentoGrid/ExamCoverageCard.tsx` |
| Create | `src/components/features/PremiumBentoGrid/ChapterNotesCard.tsx` |
| Create | `src/components/features/PremiumBentoGrid/PYQCard.tsx` |
| Create | `src/components/features/PremiumBentoGrid/SyllabusTrackerCard.tsx` |
| Create | `src/components/features/PremiumBentoGrid/ZeroFrictionCard.tsx` |
| Modify | `src/app/page.tsx` (swap Features import) |
