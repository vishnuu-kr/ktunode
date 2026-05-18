# Bugfix Requirements Document

## Introduction

The KTU NODE site (Next.js 16 + Tailwind CSS v4 + Framer Motion) has multiple responsive design defects that cause layout overflow, awkward sizing jumps, and missing mobile interaction affordances across viewports from 320px phones to ultra-wide monitors. These issues degrade the user experience on small devices (< 360px), tablets (640px–768px), and notched phones (iPhone X+). This bugfix addresses all 12 identified responsiveness failures to ensure a seamless experience across every device class.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN viewport width is less than 360px THEN the FoundreeHero animated word with hardcoded `minWidth: "220px"` causes horizontal overflow on the section

1.2 WHEN viewport width is between 640px and 768px (tablet) THEN the ktu-compare-section Compare widget jumps from `w-[280px]` directly to `md:w-[760px]` with no intermediate breakpoint, creating an awkward undersized or oversized appearance

1.3 WHEN viewport width is less than 340px THEN the TestimonialsSection cards with fixed `w-[340px]` overflow the screen horizontally

1.4 WHEN viewport width is less than 340px THEN the TestimonialsSection provides no touch/swipe indicators or feedback for mobile horizontal scrolling

1.5 WHEN viewport width is exactly 320px THEN the Navbar mobile drawer at `w-80` (320px) fills the entire screen leaving no visible backdrop tap area to close the drawer

1.6 WHEN viewport width is less than 640px THEN the page.tsx hero headline at `text-5xl` (48px) with `leading-[1.03]` is too large and tight for comfortable mobile reading

1.7 WHEN viewport width is less than 360px THEN the Dashboard tab bar with `w-fit` can overflow horizontally with no scroll affordance

1.8 WHEN viewport width is less than 768px THEN the Dashboard Syllabus sidebar renders as a long vertical list with no horizontal scroll alternative, pushing content far down the page

1.9 WHEN the site is viewed on any page other than the home page THEN there is no global `overflow-x: hidden` applied, allowing potential horizontal scroll from animated or absolutely-positioned elements

1.10 WHEN viewport width changes between breakpoints THEN typography sizes jump abruptly between fixed values rather than scaling fluidly with `clamp()`

1.11 WHEN the site is viewed on a notched phone (iPhone X+) THEN there is no `safe-area-inset` handling, causing content to be obscured by the device notch or home indicator

1.12 WHEN viewport width is less than 768px THEN the scroll-progress bar at `z-index: 9999` can interfere with mobile browser chrome elements (address bar, pull-to-refresh)

### Expected Behavior (Correct)

2.1 WHEN viewport width is less than 360px THEN the system SHALL use a responsive `minWidth` (e.g., `clamp(140px, 50vw, 220px)`) on the FoundreeHero animated word so it scales down without causing overflow

2.2 WHEN viewport width is between 640px and 768px (tablet) THEN the system SHALL apply an intermediate `sm:` breakpoint size (e.g., `sm:w-[480px] sm:h-[400px]`) to the Compare widget for a smooth visual transition

2.3 WHEN viewport width is less than 340px THEN the system SHALL use a responsive width (e.g., `w-[min(340px,85vw)]` or `max-w-[85vw]`) on testimonial cards so they fit within the viewport

2.4 WHEN viewport width is less than 768px THEN the system SHALL display swipe/scroll indicators (e.g., fade edges, a "swipe" hint, or touch-friendly grab cursor) on the TestimonialsSection carousel

2.5 WHEN viewport width is 320px or less THEN the system SHALL use a narrower mobile drawer width (e.g., `w-[85vw]` or `max-w-[280px]`) so a visible backdrop tap area remains for closing

2.6 WHEN viewport width is less than 640px THEN the system SHALL use fluid typography with `clamp()` for the hero headline (e.g., `clamp(2rem, 8vw, 3rem)`) and relaxed line-height for comfortable mobile reading

2.7 WHEN viewport width is less than 360px THEN the system SHALL make the Dashboard tab bar horizontally scrollable with `overflow-x-auto` and hide the scrollbar visually

2.8 WHEN viewport width is less than 768px THEN the system SHALL render the Dashboard Syllabus subject selector as a horizontal scrollable pill bar or dropdown instead of a long vertical sidebar

2.9 WHEN the site is viewed on any page THEN the system SHALL apply `overflow-x: hidden` globally (on `html` or `body` in globals.css) to prevent horizontal scroll from any element

2.10 WHEN viewport width changes between breakpoints THEN the system SHALL use `clamp()` for key typography sizes (headings, body text) across all major sections to provide smooth fluid scaling

2.11 WHEN the site is viewed on a notched phone (iPhone X+) THEN the system SHALL apply `env(safe-area-inset-*)` padding to the Navbar, mobile drawer, footer, and any fixed/sticky elements

2.12 WHEN viewport width is less than 768px THEN the system SHALL reduce the scroll-progress bar z-index (e.g., `z-index: 50`) or hide it on mobile to avoid interfering with browser chrome

### Unchanged Behavior (Regression Prevention)

3.1 WHEN viewport width is 1024px or greater (desktop) THEN the system SHALL CONTINUE TO display the FoundreeHero animated word at its current size and styling without visual change

3.2 WHEN viewport width is 768px or greater (desktop) THEN the system SHALL CONTINUE TO display the Compare widget at `md:w-[760px] md:h-[520px]` with the same visual appearance

3.3 WHEN viewport width is 768px or greater (desktop) THEN the system SHALL CONTINUE TO display testimonial cards at their current `w-[340px]` size with the infinite scroll animation

3.4 WHEN viewport width is 768px or greater (desktop) THEN the system SHALL CONTINUE TO show the Navbar desktop CTA button and hide the mobile hamburger menu

3.5 WHEN viewport width is 768px or greater (desktop) THEN the system SHALL CONTINUE TO display the hero headline at its current large sizes (`md:text-7xl lg:text-[82px]`) with the existing line-height

3.6 WHEN viewport width is 768px or greater (desktop) THEN the system SHALL CONTINUE TO display the Dashboard tab bar inline without scrolling, and the Syllabus sidebar as a vertical list in a 4-column grid

3.7 WHEN the home page is viewed THEN the system SHALL CONTINUE TO display the scroll-progress bar on desktop viewports with its gradient animation

3.8 WHEN any Framer Motion animation is triggered THEN the system SHALL CONTINUE TO animate with the same easing curves, delays, and visual effects as currently implemented

3.9 WHEN the cursor glow effect is active on desktop THEN the system SHALL CONTINUE TO display the mouse-follow radial gradient at its current size and opacity

3.10 WHEN the floating info cards are displayed on desktop THEN the system SHALL CONTINUE TO show them with the same positioning, rotation, and hover effects
