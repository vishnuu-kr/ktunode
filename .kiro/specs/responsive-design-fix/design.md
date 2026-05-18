# Responsive Design Fix — Bugfix Design

## Overview

The KTU NODE site (Next.js 16 + Tailwind CSS v4 + Framer Motion) exhibits 12 responsive design defects that cause layout overflow, sizing jumps, missing mobile affordances, and z-index conflicts across viewports from 320px to ultra-wide. The fix strategy is to apply targeted CSS/Tailwind changes (fluid sizing via `clamp()`, responsive breakpoints, overflow guards, safe-area insets) while preserving all existing desktop layouts, animations, and visual effects. No structural component refactors are needed — the changes are purely presentational and additive.

## Glossary

- **Bug_Condition (C)**: A viewport width or device characteristic that triggers one or more of the 12 responsive defects (e.g., viewport < 360px, notched phone, tablet breakpoint gap)
- **Property (P)**: The desired responsive behavior — elements fit within the viewport, scale fluidly, and provide appropriate mobile interaction affordances
- **Preservation**: All existing desktop layouts (≥ 768px or ≥ 1024px), Framer Motion animations, cursor glow effects, floating cards, and scroll-progress bar on desktop must remain visually identical
- **FoundreeHero**: The philosophy section component in `src/components/features/FoundreeHero.tsx` with animated word cycling
- **Compare widget**: The before/after image comparison in `src/components/features/ktu-compare-section.tsx`
- **TestimonialsSection**: The infinite-scroll testimonial carousel in `src/components/features/TestimonialsSection.tsx`
- **Navbar drawer**: The mobile slide-out navigation panel in `src/components/Navbar.tsx`
- **Dashboard tab bar**: The tab navigation in `src/app/dashboard/page.tsx`
- **Syllabus sidebar**: The subject selector sidebar in the Dashboard's SyllabusTab component
- **globals.css**: The global stylesheet at `src/app/globals.css` containing scroll-progress, cursor-glow, and animation definitions
- **safe-area-inset**: CSS `env(safe-area-inset-*)` values for notched/rounded-corner devices
- **clamp()**: CSS function `clamp(min, preferred, max)` for fluid responsive values

## Bug Details

### Bug Condition

The bugs manifest when the viewport width falls below specific breakpoints, when the viewport is between breakpoints with no intermediate sizing, or when the device has physical characteristics (notch, home indicator) that the CSS does not account for. The defects span 6 component files and 1 global stylesheet.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type { viewportWidth: number, hasNotch: boolean, page: string, breakpointTransition: boolean }
  OUTPUT: boolean
  
  RETURN (input.viewportWidth < 360 AND componentHasFixedMinWidth("FoundreeHero"))
         OR (input.viewportWidth >= 640 AND input.viewportWidth < 768 AND componentHasNoIntermediateBreakpoint("Compare"))
         OR (input.viewportWidth < 340 AND componentHasFixedWidth("TestimonialCard", 340))
         OR (input.viewportWidth < 768 AND componentHasNoSwipeIndicator("TestimonialsSection"))
         OR (input.viewportWidth <= 320 AND drawerWidth("Navbar") >= 320)
         OR (input.viewportWidth < 640 AND heroHeadlineSize("page.tsx") == "text-5xl")
         OR (input.viewportWidth < 360 AND tabBarOverflows("Dashboard"))
         OR (input.viewportWidth < 768 AND sidebarPushesContent("SyllabusTab"))
         OR (input.page != "/" AND noGlobalOverflowXHidden())
         OR (input.breakpointTransition AND typographyJumpsAbruptly())
         OR (input.hasNotch AND noSafeAreaInsetHandling())
         OR (input.viewportWidth < 768 AND scrollProgressZIndex() >= 9999)
END FUNCTION
```

### Examples

- **Bug 1**: On a 320px iPhone SE, the FoundreeHero animated word "precision" with `minWidth: "220px"` causes 220px + surrounding text to exceed viewport, creating horizontal scroll
- **Bug 2**: On a 700px tablet, the Compare widget shows at `w-[280px]` (mobile default) because `md:` (768px) hasn't kicked in — the widget appears undersized with large empty margins
- **Bug 3**: On a 320px viewport, testimonial cards at `w-[340px]` overflow by 20px, causing horizontal scroll on the entire section
- **Bug 4**: On mobile, the testimonial carousel has no visual cue that horizontal scrolling is possible — users don't discover the content
- **Bug 5**: On a 320px viewport, the Navbar drawer at `w-80` (320px) fills the entire screen, making the backdrop tap-to-close area invisible (0px remaining)
- **Bug 6**: On a 360px phone, the hero headline at `text-5xl` (48px) with tight leading creates cramped, hard-to-read text
- **Bug 7**: On a 320px viewport, the Dashboard tab bar with 4 tabs at `w-fit` can exceed viewport width with no scroll affordance
- **Bug 8**: On mobile, the Syllabus sidebar renders all subjects vertically, pushing the module content far below the fold
- **Bug 9**: On `/dashboard`, `/notes`, `/pyqs`, `/syllabus` pages, animated elements or absolutely-positioned blobs can cause horizontal overflow since only the home page has `overflow-x-hidden`
- **Bug 10**: Between `sm` and `md` breakpoints, heading sizes jump from `text-4xl` directly to `text-6xl` with no fluid transition
- **Bug 11**: On iPhone X+, the Navbar and footer content sits behind the notch/home indicator bar
- **Bug 12**: On mobile Safari, the scroll-progress bar at `z-index: 9999` overlaps the browser's address bar area and interferes with pull-to-refresh gestures

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- Desktop layouts (≥ 1024px) for FoundreeHero, Compare widget, TestimonialsSection, and hero headline remain pixel-identical
- Desktop layouts (≥ 768px) for Navbar, Dashboard tab bar, and Syllabus sidebar remain unchanged
- All Framer Motion animations (easing curves, delays, hover effects, floating cards) continue working identically
- The cursor-glow mouse-follow effect on desktop remains at its current size and opacity
- The scroll-progress bar continues to display on desktop viewports with its gradient animation
- The infinite-scroll animation on testimonial cards continues at the same speed and direction
- The Compare widget hover/autoplay behavior remains unchanged
- All existing color schemes, typography weights, and border styles are preserved

**Scope:**
All inputs where the viewport is at or above the desktop breakpoint (768px or 1024px depending on component) and the device has no notch should be completely unaffected by this fix. This includes:
- Desktop mouse interactions (hover effects, cursor glow, magnetic buttons)
- Desktop layout grid structures
- Desktop typography sizes at their current fixed values
- All page routing and navigation logic

## Hypothesized Root Cause

Based on the bug descriptions and source code analysis, the root causes are:

1. **Hardcoded pixel values without responsive alternatives**: The FoundreeHero uses `minWidth: "220px"` inline style, testimonial cards use `w-[340px]`, and the Navbar drawer uses `w-80` — all without viewport-relative fallbacks for small screens.

2. **Missing intermediate breakpoints**: The Compare widget jumps from `w-[280px]` (default) directly to `md:w-[760px]` (768px+) with no `sm:` (640px) breakpoint, creating a dead zone at tablet widths.

3. **No overflow containment strategy**: The `overflow-x: hidden` is only applied via the home page's inline class (`overflow-x-hidden` on the wrapper div in `page.tsx`), not globally in `globals.css`. Other pages lack this protection.

4. **Fixed typography sizes without fluid scaling**: Headings use discrete Tailwind size classes (`text-5xl`, `text-6xl`, `text-7xl`) that jump abruptly between breakpoints instead of using `clamp()` for smooth transitions.

5. **No mobile-specific UI affordances**: The testimonial carousel lacks swipe indicators, and the Dashboard tab bar lacks scroll affordance — both assume desktop interaction patterns.

6. **No device-specific CSS**: The site has no `env(safe-area-inset-*)` declarations for notched phones, and the scroll-progress bar uses an excessively high z-index without mobile-specific overrides.

7. **Sidebar layout not adapted for mobile**: The Syllabus sidebar uses a `grid md:grid-cols-4` layout where the sidebar column renders as a full-width vertical list on mobile, pushing content below the fold.

## Correctness Properties

Property 1: Bug Condition - No Horizontal Overflow on Small Viewports

_For any_ viewport width between 320px and 768px on any page, the fixed layout SHALL ensure that no element causes horizontal overflow beyond the viewport boundary (i.e., `document.documentElement.scrollWidth <= document.documentElement.clientWidth`).

**Validates: Requirements 2.1, 2.3, 2.5, 2.7, 2.9**

Property 2: Bug Condition - Fluid Typography Scaling

_For any_ viewport width between 320px and 1024px, the fixed typography SHALL scale fluidly using `clamp()` values such that font sizes transition smoothly without abrupt jumps between breakpoints.

**Validates: Requirements 2.6, 2.10**

Property 3: Bug Condition - Mobile Interaction Affordances Present

_For any_ viewport width below 768px, the fixed UI SHALL display appropriate mobile interaction affordances: swipe indicators on the testimonial carousel, scrollable tab bar with hidden scrollbar on the Dashboard, and a horizontal pill bar or dropdown for the Syllabus subject selector.

**Validates: Requirements 2.4, 2.7, 2.8**

Property 4: Bug Condition - Safe Area and Z-Index Compliance

_For any_ device with a notch (iPhone X+), the fixed layout SHALL apply `env(safe-area-inset-*)` padding to fixed/sticky elements. For viewports below 768px, the scroll-progress bar SHALL use a z-index of 50 or be hidden to avoid interfering with browser chrome.

**Validates: Requirements 2.11, 2.12**

Property 5: Bug Condition - Intermediate Breakpoint for Compare Widget

_For any_ viewport width between 640px and 768px, the fixed Compare widget SHALL display at an intermediate size (approximately `sm:w-[480px] sm:h-[400px]`) rather than the mobile-only `w-[280px]`.

**Validates: Requirements 2.2**

Property 6: Preservation - Desktop Layout Unchanged

_For any_ viewport width at or above 1024px (or 768px for components with `md:` breakpoints), the fixed code SHALL produce the same visual layout as the original code, preserving all existing sizes, positions, animations, and interactive effects.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `src/components/features/FoundreeHero.tsx`

**Function**: Animated word `<motion.span>` inline style

**Specific Changes**:
1. **Replace hardcoded minWidth**: Change `minWidth: "220px"` to `minWidth: "clamp(140px, 50vw, 220px)"` so the animated word container scales down on small viewports

---

**File**: `src/components/features/ktu-compare-section.tsx`

**Component**: Compare widget wrapper

**Specific Changes**:
2. **Add intermediate breakpoint**: Change `className="h-[320px] w-[280px] md:h-[520px] md:w-[760px] rounded-[20px]"` to include `sm:w-[480px] sm:h-[400px]` for smooth tablet transition

---

**File**: `src/components/features/TestimonialsSection.tsx`

**Component**: Testimonial card and carousel wrapper

**Specific Changes**:
3. **Responsive card width**: Change `w-[340px]` to `w-[min(340px,85vw)]` or use `max-w-[85vw]` alongside the fixed width
4. **Add swipe indicators**: Add a mobile-only swipe hint element (e.g., "← Swipe →" text or animated dots) below the carousel track, visible only on `md:hidden`

---

**File**: `src/components/Navbar.tsx`

**Component**: Mobile drawer panel

**Specific Changes**:
5. **Narrower drawer width**: Change `w-80` to `w-[min(320px,85vw)]` or `max-w-[280px]` so a visible backdrop tap area remains on 320px screens
6. **Safe-area padding**: Add `pb-[env(safe-area-inset-bottom)]` and `pt-[env(safe-area-inset-top)]` to the drawer container

---

**File**: `src/app/page.tsx`

**Component**: Hero headline `<motion.h1>`

**Specific Changes**:
7. **Fluid hero headline**: Replace `text-5xl sm:text-6xl md:text-7xl lg:text-[82px]` with a fluid approach using a custom class or inline `clamp()` style: `clamp(2rem, 8vw, 3rem)` for mobile, keeping `md:text-7xl lg:text-[82px]` for desktop
8. **Relaxed line-height on mobile**: Add responsive leading, e.g., `leading-[1.15] md:leading-[1.03]`

---

**File**: `src/app/dashboard/page.tsx`

**Component**: Tab bar and SyllabusTab

**Specific Changes**:
9. **Scrollable tab bar**: Add `overflow-x-auto scrollbar-hide` (or custom CSS to hide scrollbar) to the tab bar container, and change `w-fit` to allow horizontal scroll on small screens
10. **Mobile syllabus selector**: On mobile (`md:` breakpoint), render the subject list as a horizontal scrollable pill bar or a `<select>` dropdown instead of the vertical sidebar

---

**File**: `src/app/globals.css`

**Specific Changes**:
11. **Global overflow-x hidden**: Add `overflow-x: hidden` to the `html, body` rule in the base layer
12. **Fluid typography utilities**: Add custom CSS classes using `clamp()` for key heading sizes (e.g., `.text-fluid-4xl { font-size: clamp(1.875rem, 5vw, 2.25rem); }`)
13. **Safe-area-inset support**: Add `padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)` to fixed/sticky element rules, and set `viewport-fit=cover` meta tag
14. **Scroll-progress mobile override**: Add a media query `@media (max-width: 767px) { .scroll-progress { z-index: 50; } }` or hide it entirely on mobile
15. **Scrollbar-hide utility**: Add `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`

---

**File**: `src/app/layout.tsx`

**Specific Changes**:
16. **Viewport meta with viewport-fit**: Ensure the viewport meta tag includes `viewport-fit=cover` for safe-area-inset support (Next.js handles this via metadata export)

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bugs on unfixed code, then verify the fix works correctly and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bugs BEFORE implementing the fix. Confirm or refute the root cause analysis. If we refute, we will need to re-hypothesize.

**Test Plan**: Use browser DevTools responsive mode or automated viewport testing (e.g., Playwright with viewport configuration) to render each affected component at the buggy viewport widths and measure overflow, element sizes, and visual appearance. Run these tests on the UNFIXED code to observe failures.

**Test Cases**:
1. **FoundreeHero Overflow Test**: Set viewport to 320px, render FoundreeHero, assert `scrollWidth <= clientWidth` (will fail on unfixed code)
2. **Compare Widget Tablet Test**: Set viewport to 700px, render KtuCompareSection, assert widget width is between 400px and 500px (will fail — currently shows 280px)
3. **Testimonial Card Overflow Test**: Set viewport to 320px, render TestimonialsSection, assert no card exceeds viewport width (will fail — cards are 340px)
4. **Navbar Drawer Width Test**: Set viewport to 320px, open mobile drawer, assert drawer width < viewport width (will fail — drawer is 320px = full screen)
5. **Hero Headline Size Test**: Set viewport to 360px, measure hero h1 font-size, assert it's ≤ 36px (will fail — currently 48px)
6. **Dashboard Tab Bar Overflow Test**: Set viewport to 320px, render Dashboard, assert tab bar doesn't overflow (will fail on unfixed code)
7. **Global Overflow Test**: Navigate to `/dashboard`, assert `document.documentElement.scrollWidth <= document.documentElement.clientWidth` (may fail on unfixed code)
8. **Scroll Progress Z-Index Test**: Set viewport to 375px, assert scroll-progress z-index ≤ 50 (will fail — currently 9999)

**Expected Counterexamples**:
- `document.documentElement.scrollWidth > document.documentElement.clientWidth` on multiple pages at 320px
- Compare widget renders at 280px width on 700px viewport (no intermediate size)
- Navbar drawer occupies 100% of 320px viewport with no backdrop visible
- Possible causes: hardcoded pixel values, missing breakpoints, no global overflow guard

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds, the fixed components produce the expected responsive behavior.

**Pseudocode:**
```
FOR ALL viewport IN [320, 340, 360, 375, 414, 640, 700, 768] DO
  FOR ALL page IN ["/", "/dashboard", "/notes", "/pyqs", "/syllabus"] DO
    result := renderPage(page, viewport)
    ASSERT result.scrollWidth <= result.clientWidth
    ASSERT result.noElementExceedsViewport
    IF viewport < 768 THEN
      ASSERT result.scrollProgressZIndex <= 50
      ASSERT result.testimonialSwipeIndicatorVisible
    END IF
    IF viewport >= 640 AND viewport < 768 THEN
      ASSERT result.compareWidgetWidth >= 400
    END IF
  END FOR
END FOR
```

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold, the fixed code produces the same result as the original code.

**Pseudocode:**
```
FOR ALL viewport IN [768, 1024, 1280, 1440, 1920] DO
  FOR ALL page IN ["/", "/dashboard", "/notes", "/pyqs", "/syllabus"] DO
    ASSERT renderPage_original(page, viewport).layout = renderPage_fixed(page, viewport).layout
    ASSERT renderPage_fixed(page, viewport).scrollProgressVisible = true
    ASSERT renderPage_fixed(page, viewport).scrollProgressZIndex = 9999
    ASSERT renderPage_fixed(page, viewport).cursorGlowVisible = true
    ASSERT renderPage_fixed(page, viewport).floatingCardsVisible = true
  END FOR
END FOR
```

**Testing Approach**: Visual regression testing is recommended for preservation checking because:
- It captures pixel-level differences that unit tests might miss
- It verifies that animations and hover effects remain unchanged
- It provides strong guarantees that desktop layouts are preserved
- Tools like Playwright's screenshot comparison or Percy can automate this

**Test Plan**: Capture baseline screenshots of all pages at desktop viewports (1024px, 1440px) on UNFIXED code, then run the same captures after the fix and assert visual equivalence.

**Test Cases**:
1. **Desktop FoundreeHero Preservation**: Verify animated word displays at full 220px minWidth on 1024px+ viewport
2. **Desktop Compare Widget Preservation**: Verify widget renders at `md:w-[760px] md:h-[520px]` on 768px+ viewport
3. **Desktop Testimonial Preservation**: Verify cards render at `w-[340px]` with infinite scroll animation on 768px+ viewport
4. **Desktop Navbar Preservation**: Verify desktop CTA button visible, hamburger hidden on 768px+ viewport
5. **Desktop Hero Headline Preservation**: Verify headline renders at `md:text-7xl` / `lg:text-[82px]` on desktop
6. **Desktop Dashboard Preservation**: Verify tab bar inline (no scroll), syllabus sidebar in 4-column grid on 768px+
7. **Scroll Progress Desktop Preservation**: Verify scroll-progress bar visible with z-index 9999 on desktop
8. **Animation Preservation**: Verify Framer Motion animations fire with same easing/delay on desktop

### Unit Tests

- Test that `clamp()` values produce correct computed sizes at boundary viewports (320px, 640px, 768px, 1024px)
- Test that the Navbar drawer width is less than viewport width at 320px
- Test that testimonial card width does not exceed 85vw on viewports < 340px
- Test that the Dashboard tab bar container has `overflow-x: auto` on mobile
- Test that `overflow-x: hidden` is applied to `html`/`body` globally
- Test that scroll-progress z-index is 50 on mobile and 9999 on desktop

### Property-Based Tests

- Generate random viewport widths between 320px and 767px and verify no horizontal overflow occurs on any page
- Generate random viewport widths between 768px and 1920px and verify all desktop layouts match baseline measurements
- Generate random combinations of page + viewport + device (notch/no-notch) and verify safe-area padding is applied when needed
- Generate random breakpoint transitions and verify typography scales smoothly (no jumps > 8px between adjacent viewport widths)

### Integration Tests

- Test full page load at 320px viewport on all routes — no horizontal scrollbar appears
- Test Navbar drawer open/close cycle at 320px — backdrop is visible and tappable
- Test testimonial carousel swipe gesture on mobile viewport — swipe indicator visible, cards scroll
- Test Dashboard tab switching at 360px — all tabs accessible via horizontal scroll
- Test Syllabus subject selection on mobile — subjects accessible without excessive vertical scrolling
- Test on simulated notched device — no content hidden behind notch or home indicator
