# Implementation Plan

## Overview

This task list implements the bugfix for 12 responsive design defects in the KTU NODE site. The workflow follows the bug condition methodology: first write exploration tests to confirm bugs exist, then write preservation tests to capture desktop baseline behavior, then implement the fix, and finally verify both test suites pass.

## Tasks

- [ ] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Responsive Layout Overflow and Sizing Defects
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bugs exist
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the 12 responsive defects exist
  - **Scoped PBT Approach**: Scope the property to concrete failing viewport/page combinations that trigger overflow, sizing jumps, and missing affordances
  - **Test Setup**: Create a Playwright test file `tests/responsive-bug-condition.spec.ts` with viewport-parameterized tests
  - Test 1: Set viewport to 320px, render FoundreeHero, assert `document.documentElement.scrollWidth <= document.documentElement.clientWidth` (will fail — minWidth 220px causes overflow)
  - Test 2: Set viewport to 700px, render ktu-compare-section, assert Compare widget width >= 400px (will fail — currently 280px with no sm: breakpoint)
  - Test 3: Set viewport to 320px, render TestimonialsSection, assert no card element exceeds viewport width (will fail — cards are 340px fixed)
  - Test 4: Set viewport to 320px, open Navbar mobile drawer, assert drawer width < viewport width (will fail — drawer is w-80 = 320px = full screen)
  - Test 5: Set viewport to 360px, measure hero h1 computed font-size, assert it is ≤ 36px (will fail — currently text-5xl = 48px)
  - Test 6: Set viewport to 320px, render Dashboard page, assert tab bar container scrollWidth <= clientWidth (will fail — w-fit overflows)
  - Test 7: Navigate to `/dashboard`, assert `document.documentElement.scrollWidth <= document.documentElement.clientWidth` (will fail — no global overflow-x hidden)
  - Test 8: Set viewport to 375px, assert scroll-progress element computed z-index ≤ 50 (will fail — currently 9999)
  - Property: FOR ALL viewport IN [320, 340, 360, 375, 414, 640, 700] AND page IN ["/", "/dashboard", "/notes", "/pyqs", "/syllabus"]: no horizontal overflow occurs
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Tests FAIL (this is correct - it proves the bugs exist)
  - Document counterexamples found (e.g., "scrollWidth 342 > clientWidth 320 on / at 320px viewport")
  - Mark task complete when tests are written, run, and failures are documented
  - _Requirements: 1.1, 1.2, 1.3, 1.5, 1.6, 1.7, 1.9, 1.12_

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Desktop Layout and Animation Unchanged
  - **IMPORTANT**: Follow observation-first methodology
  - **Test Setup**: Create a Playwright test file `tests/responsive-preservation.spec.ts` with desktop viewport tests
  - Observe: FoundreeHero animated word displays at full 220px minWidth on 1024px+ viewport
  - Observe: Compare widget renders at 760px width × 520px height on 768px+ viewport
  - Observe: Testimonial cards render at 340px width with infinite scroll animation on 768px+ viewport
  - Observe: Navbar shows desktop CTA button, hamburger is hidden on 768px+ viewport
  - Observe: Hero headline renders at md:text-7xl / lg:text-[82px] computed sizes on desktop
  - Observe: Dashboard tab bar displays inline (no overflow scroll) on 768px+ viewport
  - Observe: Syllabus sidebar renders in 4-column grid layout on 768px+ viewport
  - Observe: Scroll-progress bar is visible with z-index 9999 on desktop
  - Write property-based test: FOR ALL viewport IN [768, 1024, 1280, 1440, 1920] AND page IN ["/", "/dashboard", "/notes", "/pyqs", "/syllabus"]: desktop layout matches baseline measurements
  - Test 1: At 1024px viewport, verify FoundreeHero animated word container has minWidth of 220px
  - Test 2: At 768px viewport, verify Compare widget has width ~760px and height ~520px
  - Test 3: At 768px viewport, verify testimonial cards have width of 340px
  - Test 4: At 768px viewport, verify Navbar desktop CTA is visible and hamburger is hidden
  - Test 5: At 1024px viewport, verify hero headline computed font-size matches text-7xl or text-[82px]
  - Test 6: At 768px viewport, verify Dashboard tab bar has no overflow-x scroll behavior
  - Test 7: At 768px viewport, verify Syllabus sidebar renders in grid layout
  - Test 8: At 1024px viewport, verify scroll-progress bar z-index is 9999
  - Test 9: At 1024px viewport, verify cursor-glow element is present and visible
  - Test 10: At 1024px viewport, verify Framer Motion animation attributes are present on animated elements
  - Verify all tests PASS on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline desktop behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10_

- [ ] 3. Fix responsive design defects across all affected components

  - [ ] 3.1 Fix FoundreeHero animated word overflow
    - In `src/components/features/FoundreeHero.tsx`, replace `minWidth: "220px"` with `minWidth: "clamp(140px, 50vw, 220px)"` on the animated word `<motion.span>` inline style
    - This ensures the word container scales down on viewports < 360px while preserving 220px on desktop
    - _Bug_Condition: isBugCondition(input) where input.viewportWidth < 360 AND componentHasFixedMinWidth("FoundreeHero")_
    - _Expected_Behavior: Animated word scales fluidly, no horizontal overflow on small viewports_
    - _Preservation: Desktop (≥ 1024px) FoundreeHero layout remains pixel-identical_
    - _Requirements: 2.1, 3.1_

  - [ ] 3.2 Add intermediate breakpoint to Compare widget
    - In `src/components/features/ktu-compare-section.tsx`, add `sm:w-[480px] sm:h-[400px]` to the Compare widget wrapper className
    - Change from `h-[320px] w-[280px] md:h-[520px] md:w-[760px]` to `h-[320px] w-[280px] sm:w-[480px] sm:h-[400px] md:h-[520px] md:w-[760px]`
    - _Bug_Condition: isBugCondition(input) where input.viewportWidth >= 640 AND input.viewportWidth < 768 AND componentHasNoIntermediateBreakpoint("Compare")_
    - _Expected_Behavior: Compare widget displays at ~480px width on tablet viewports (640px–768px)_
    - _Preservation: Desktop (≥ 768px) Compare widget remains at md:w-[760px] md:h-[520px]_
    - _Requirements: 2.2, 3.2_

  - [ ] 3.3 Fix TestimonialsSection card overflow and add swipe indicators
    - In `src/components/features/TestimonialsSection.tsx`, change card width from `w-[340px]` to `w-[min(340px,85vw)]` or add `max-w-[85vw]` alongside the fixed width
    - Add a mobile-only swipe indicator element below the carousel track: a `<div className="md:hidden ...">` with "← Swipe →" text or animated fade edges
    - _Bug_Condition: isBugCondition(input) where (input.viewportWidth < 340 AND cardWidth = 340) OR (input.viewportWidth < 768 AND noSwipeIndicator)_
    - _Expected_Behavior: Cards fit within viewport on small screens; swipe hint visible on mobile_
    - _Preservation: Desktop (≥ 768px) testimonial cards remain at 340px with infinite scroll animation_
    - _Requirements: 2.3, 2.4, 3.3_

  - [ ] 3.4 Fix Navbar drawer width and add safe-area padding
    - In `src/components/Navbar.tsx`, change drawer width from `w-80` to `w-[min(320px,85vw)]` or `max-w-[280px]`
    - Add `pb-[env(safe-area-inset-bottom)]` and `pt-[env(safe-area-inset-top)]` to the drawer container
    - Ensure a visible backdrop tap area remains on 320px screens for closing the drawer
    - _Bug_Condition: isBugCondition(input) where (input.viewportWidth <= 320 AND drawerWidth >= 320) OR (input.hasNotch AND noSafeAreaInsetHandling)_
    - _Expected_Behavior: Drawer leaves visible backdrop; safe-area insets applied on notched devices_
    - _Preservation: Desktop (≥ 768px) Navbar with CTA button and hidden hamburger remains unchanged_
    - _Requirements: 2.5, 2.11, 3.4_

  - [ ] 3.5 Fix hero headline fluid typography
    - In `src/app/page.tsx`, replace `text-5xl sm:text-6xl md:text-7xl lg:text-[82px]` with fluid approach: use a custom class or inline style with `clamp(2rem, 8vw, 3rem)` for mobile, keeping `md:text-7xl lg:text-[82px]` for desktop
    - Add responsive line-height: `leading-[1.15] md:leading-[1.03]` for comfortable mobile reading
    - _Bug_Condition: isBugCondition(input) where input.viewportWidth < 640 AND heroHeadlineSize = "text-5xl"_
    - _Expected_Behavior: Hero headline scales fluidly on mobile with relaxed line-height_
    - _Preservation: Desktop (≥ 768px) hero headline remains at md:text-7xl / lg:text-[82px]_
    - _Requirements: 2.6, 2.10, 3.5_

  - [ ] 3.6 Fix Dashboard tab bar overflow and Syllabus sidebar mobile layout
    - In `src/app/dashboard/page.tsx`, add `overflow-x-auto scrollbar-hide` to the tab bar container and adjust `w-fit` to allow horizontal scroll on small screens
    - Convert the Syllabus subject selector to a horizontal scrollable pill bar or `<select>` dropdown on mobile (below `md:` breakpoint)
    - _Bug_Condition: isBugCondition(input) where (input.viewportWidth < 360 AND tabBarOverflows) OR (input.viewportWidth < 768 AND sidebarPushesContent)_
    - _Expected_Behavior: Tab bar scrolls horizontally on small screens; Syllabus subjects accessible without excessive vertical scrolling_
    - _Preservation: Desktop (≥ 768px) tab bar inline, Syllabus sidebar in 4-column grid_
    - _Requirements: 2.7, 2.8, 3.6_

  - [ ] 3.7 Add global overflow-x hidden, fluid typography utilities, safe-area support, and scroll-progress mobile override
    - In `src/app/globals.css`:
      - Add `overflow-x: hidden` to the `html, body` base rule
      - Add fluid typography utility classes: `.text-fluid-4xl { font-size: clamp(1.875rem, 5vw, 2.25rem); }` and similar
      - Add `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`
      - Add mobile override for scroll-progress: `@media (max-width: 767px) { .scroll-progress { z-index: 50; } }` or hide on mobile
      - Add safe-area-inset padding rules for fixed/sticky elements
    - _Bug_Condition: isBugCondition(input) where (input.page != "/" AND noGlobalOverflowXHidden) OR (input.breakpointTransition AND typographyJumpsAbruptly) OR (input.viewportWidth < 768 AND scrollProgressZIndex >= 9999)_
    - _Expected_Behavior: No horizontal overflow on any page; smooth typography scaling; scroll-progress doesn't interfere with mobile browser chrome_
    - _Preservation: Desktop scroll-progress bar visible with z-index 9999 and gradient animation_
    - _Requirements: 2.9, 2.10, 2.12, 3.7_

  - [ ] 3.8 Add viewport-fit=cover meta tag for safe-area-inset support
    - In `src/app/layout.tsx`, ensure the viewport metadata export includes `viewport-fit=cover` (Next.js metadata API)
    - This enables `env(safe-area-inset-*)` values to work on notched devices
    - _Bug_Condition: isBugCondition(input) where input.hasNotch AND noSafeAreaInsetHandling_
    - _Expected_Behavior: Safe-area insets are respected on iPhone X+ devices_
    - _Preservation: No visual change on non-notched devices or desktop_
    - _Requirements: 2.11_

  - [ ] 3.9 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Responsive Layout Overflow and Sizing Defects Resolved
    - **IMPORTANT**: Re-run the SAME test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected behavior (no overflow, correct sizing, proper z-index)
    - When this test passes, it confirms all 12 responsive defects are resolved
    - Run bug condition exploration test from step 1
    - **EXPECTED OUTCOME**: Test PASSES (confirms bugs are fixed)
    - _Requirements: 2.1, 2.2, 2.3, 2.5, 2.6, 2.7, 2.9, 2.12_

  - [ ] 3.10 Verify preservation tests still pass
    - **Property 2: Preservation** - Desktop Layout and Animation Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation property tests from step 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions on desktop layouts)
    - Confirm all desktop layout measurements, animation attributes, and interactive effects remain unchanged after fix
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10_

- [ ] 4. Checkpoint - Ensure all tests pass
  - Run the full test suite: `npx playwright test tests/responsive-bug-condition.spec.ts tests/responsive-preservation.spec.ts`
  - Verify all bug condition tests pass (no horizontal overflow, correct sizing, proper z-index on mobile)
  - Verify all preservation tests pass (desktop layouts unchanged)
  - Manually verify on 320px, 375px, 768px, and 1024px viewports in browser DevTools
  - Ensure all tests pass, ask the user if questions arise.

## Task Dependency Graph

```json
{
  "waves": [
    ["1", "2"],
    ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8"],
    ["3.9", "3.10"],
    ["4"]
  ]
}
```

## Notes

- Tests use Playwright for viewport-parameterized browser testing
- The exploration test (task 1) is expected to FAIL on unfixed code — this confirms the bugs exist
- The preservation test (task 2) is expected to PASS on unfixed code — this captures the desktop baseline
- After implementation (tasks 3.1–3.8), both test suites should PASS
- All CSS changes are purely presentational and additive — no structural component refactors needed
- Read Next.js docs in `node_modules/next/dist/docs/` before modifying layout.tsx metadata export
