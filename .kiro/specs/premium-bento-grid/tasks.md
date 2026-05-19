# Implementation Plan: Premium Bento-Grid "What You Get" Section

## Overview

Replace the existing light-mode Features section with a premium dark-mode bento-grid inspired by Wetracked.io. The implementation creates a modular component structure with shared animation patterns, glassmorphism styling, and Framer Motion micro-interactions.

## Tasks

- [x] 1. Create BentoCard shared wrapper component with glassmorphism styling (backdrop-blur-2xl, bg-white/[0.04], border-white/10, rounded-3xl), entrance animation using useInView with once:true and amount:0.5, hover micro-interaction (translate-y -4px, border-white/20), stagger delay prop, and useReducedMotion integration to skip animations when prefers-reduced-motion is enabled
- [x] 2. Create ExamCoverageCard (Box 1) with "98%" gradient clip text (blue-400 to cyan-400) at text-7xl, 3 animated progress bars (CS 98%, EC 96%, ME 95%) that animate from 0% to target width on scroll into view (800ms, ease-out, staggered 100ms), ambient glow div (bg-blue-500/10 blur-[80px]) behind bars, and once-only animation trigger
- [x] 3. Create ChapterNotesCard (Box 2) with BookOpen icon with drop shadow, 3 stacked glassmorphic mini-cards (Module 1, 2, 3) with offset positioning, fan-out hover animation (rotate -6°/0°/+6° with 12px vertical spread), Framer Motion spring (stiffness 200, damping 20), and return-to-stack on hover end
- [x] 4. Create PYQCard (Box 3) with dot-grid background pattern (radial-gradient, 1px dots, 6% white opacity, 24px spacing), glowing PDF icon (FileText) with ambient glow, "6 Years of PYQs" prominent text, entrance animation (scale 0.85→1, opacity 0→1, 500ms), and reduced-motion skip
- [x] 5. Create SyllabusTrackerCard (Box 4) with miniature checklist UI (4-5 module items with circle indicators), hover animation sequence (cursor appears → moves to item → circle fills #32D74B → text strikes through → progress bar increments, total 1500ms), reset on hover end (300ms), and spring physics (stiffness 60-120, damping 12-20)
- [x] 6. Create ZeroFrictionCard (Box 5) with Unlock icon connected to KTU node via SVG pathway, animated strokeDashoffset on scroll into view (1000ms), glow effect on pathway, and crossed-out Paywall/Login elements with red treatment (text-red-400, line-through, opacity-50)
- [x] 7. Create PremiumBentoGrid section wrapper (index.tsx) with bg-zinc-950 section, max-w-7xl container (px-6, py-24), section header with badge and gradient heading, CSS Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6), 2 ambient glow elements, and all 5 cards with correct spans and stagger delays
- [x] 8. Integrate PremiumBentoGrid into page.tsx by replacing the existing Features section import and wrapper, removing the bg-white border-y wrapper, and verifying correct placement in page flow
- [x] 9. Implement responsive behavior: single-column below 768px, 2-column 768-1024px, 12-column above 1024px, ExamCoverageCard loses row-span-2 below lg, min 14px text and 12px padding on mobile, tap interaction support for hover animations on touch devices
- [x] 10. Verify accessibility and performance: aria-hidden on decorative elements, h2 heading hierarchy, prefers-reduced-motion disables all animations, WCAG AA contrast (4.5:1), transform/opacity-only animations for GPU compositing, and successful next build with no errors

## Task Dependency Graph

```json
{
  "waves": [
    {"tasks": [1]},
    {"tasks": [2, 3, 4, 5, 6]},
    {"tasks": [7]},
    {"tasks": [8]},
    {"tasks": [9]},
    {"tasks": [10]}
  ]
}
```

## Notes

- All dependencies (framer-motion, lucide-react, tailwindcss) are already installed
- The old `features-8.tsx` file is preserved but unused after integration
- The `useReducedMotion` hook already exists at `src/hooks/useReducedMotion.ts`
- All animations use transform/opacity only for GPU compositing (no layout thrash)
- No new npm packages required
