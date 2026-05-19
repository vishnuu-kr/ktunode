# Requirements Document

## Introduction

This feature replaces the existing light-mode "What You Get" bento-grid section with a premium, dark-mode bento-grid inspired by the Wetracked.io aesthetic. The new section uses a deep dark background with glassmorphism, ambient glows, floating elements, and Framer Motion micro-interactions to create a high-end "Apple-style" visual experience on the KTU educational site.

## Glossary

- **Bento_Grid**: A CSS Grid layout where cards span different column and row sizes to create an asymmetric, visually engaging grid
- **Glassmorphism**: A design style using semi-transparent backgrounds with backdrop blur to create a frosted-glass effect
- **Ambient_Glow**: Absolutely positioned div elements with large blur radius and low opacity used to create soft colored light effects behind elements
- **Micro_Interaction**: A small, subtle animation triggered by user action (hover, scroll into view) that provides visual feedback
- **Float_Effect**: A visual technique where UI elements appear to hover above the background using lighter backgrounds, subtle borders, and deep soft drop shadows
- **Gradient_Clip_Text**: CSS technique using background-clip: text to fill text with a gradient color
- **Bento_Card**: An individual card within the Bento_Grid that contains feature content and animations
- **Section_Component**: The React component that renders the entire "What You Get" bento-grid section
- **Entrance_Animation**: A Framer Motion animation that plays when a Bento_Card scrolls into the viewport for the first time

## Requirements

### Requirement 1: Section Layout and Dark Theme

**User Story:** As a site visitor, I want the "What You Get" section to have a premium dark aesthetic with a bento-grid layout, so that the site feels modern and high-end.

#### Acceptance Criteria

1. THE Section_Component SHALL render a full-width section with a bg-zinc-950 background color, max-w-7xl centered container, horizontal padding of px-6, and vertical padding of py-24
2. THE Section_Component SHALL use CSS Grid with 12 columns and a gap of 24px (gap-6) on screens at or above the lg breakpoint (1024px)
3. WHILE the viewport width is below the lg breakpoint (1024px), THE Section_Component SHALL stack all Bento_Cards in a single column layout
4. THE Section_Component SHALL display a section header containing a "What you get" badge styled per the section-badge pattern and a heading using Gradient_Clip_Text with a from-blue-400 to-indigo-400 gradient, with a bottom margin of 80px (mb-20) between the header and the grid content
5. THE Section_Component SHALL include at least two Ambient_Glow elements positioned absolutely within the section, each using blur-3xl and an opacity no greater than 20%, with pointer-events-none to prevent interaction blocking
6. THE Section_Component SHALL apply a 1px border using border-white/10 and a border-radius of 24px on all Bento_Cards

### Requirement 2: Exam Coverage Card (Box 1)

**User Story:** As a student, I want to see a prominent exam coverage metric, so that I immediately understand the comprehensiveness of the content.

#### Acceptance Criteria

1. WHILE the viewport width is greater than 1024px, THE Bento_Card SHALL span 4 columns and 2 rows in the Bento_Grid (row-span-2, col-span-4)
2. WHILE the viewport width is 1024px or less, THE Bento_Card SHALL span the full available grid width as a single full-width card
3. THE Bento_Card SHALL display "98%" as the primary metric using Gradient_Clip_Text at a font size of text-7xl (72px) on viewports above 1024px and text-5xl (48px) on viewports of 1024px or below
4. THE Bento_Card SHALL display progress bars for exactly three branches labeled "CS" at 98%, "EC" at 96%, and "ME" at 95%, each rendered as a horizontal bar showing filled width proportional to its percentage value
5. WHEN at least 50% of the Bento_Card's bounding box enters the viewport (Intersection Observer threshold of 0.5), THE progress bars SHALL animate from 0% width to their target percentage over a duration between 600ms and 1000ms using an ease-out easing curve
6. THE Bento_Card SHALL include an Ambient_Glow element positioned behind the progress bars, rendered as a blur effect (blur-[80px] or equivalent) with blue-500 at 10% opacity
7. THE Bento_Card SHALL have a Glassmorphism background with backdrop-blur-2xl and a background color of rgba(255, 255, 255, 0.04) with a 1px border of rgba(255, 255, 255, 0.06)
8. THE progress bars SHALL animate only once per page load; subsequent scrolls past the Bento_Card SHALL NOT re-trigger the animation

### Requirement 3: Chapter-wise Notes Card (Box 2)

**User Story:** As a student, I want to see a visual representation of chapter-wise notes, so that I understand the modular organization of content.

#### Acceptance Criteria

1. THE Bento_Card SHALL span 4 columns on large screens (lg: 1024px and above) using col-span-4, and fall back to full-width (col-span-full) on screens below the lg breakpoint
2. THE Bento_Card SHALL display 3 stacked card elements labeled "Module 1", "Module 2", and "Module 3", offset vertically by 8px each and horizontally by 4px each to create a visible layered stack effect
3. WHEN the user hovers over the Bento_Card, THE stacked module cards SHALL fan out by rotating between -6 degrees and +6 degrees with a vertical spread of 12px between cards, using a spring animation with stiffness 200 and damping 20 (framer-motion spring), revealing individual module labels
4. WHEN the user stops hovering over the Bento_Card, THE stacked module cards SHALL return to their original stacked position using the same spring animation parameters
5. THE Bento_Card SHALL have a Glassmorphism background with backdrop-blur of 16px and a background color of rgba(255, 255, 255, 0.04), with a 1px border of rgba(255, 255, 255, 0.06) and border-radius of 24px
6. THE Bento_Card SHALL include a BookOpen icon from lucide-react rendered at 24x24px (w-6 h-6) with a drop shadow of 0 4px 6px rgba(0, 0, 0, 0.3)

### Requirement 4: Previous Year Questions Card (Box 3)

**User Story:** As a student, I want to see the PYQ collection highlighted with visual flair, so that I understand the depth of past exam resources available.

#### Acceptance Criteria

1. WHILE the viewport width is greater than 1024px, THE Bento_Card SHALL span 4 columns in the Bento_Grid (col-span-4)
2. WHILE the viewport width is 1024px or less, THE Bento_Card SHALL span the full available grid width
3. THE Bento_Card SHALL display a PDF icon surrounded by an Ambient_Glow effect rendered as a radial blur of at least 40px in the card's accent color at 10-20% opacity
4. THE Bento_Card SHALL display "6 Years of PYQs" as text with a minimum font size of 20px and font-weight semibold
5. THE Bento_Card SHALL include a dot-grid background pattern using a radial-gradient of 1px dots at 6% white opacity with 24px spacing
6. THE Bento_Card SHALL apply a backdrop-blur of at least 24px (backdrop-blur-2xl) and a background color of no more than 60% opacity over the card surface
7. WHEN the Bento_Card scrolls into the viewport, THE PDF icon SHALL animate in from initial opacity 0 and scale 0.85 to final opacity 1 and scale 1, over a duration between 400ms and 600ms using an easing of cubic-bezier(0.25, 1, 0.5, 1)
8. IF the user has enabled a reduced-motion preference, THEN THE Bento_Card SHALL skip the entrance animation and render the PDF icon immediately at full opacity and scale

### Requirement 5: Syllabus Tracker Card (Box 4)

**User Story:** As a student, I want to see an interactive preview of the syllabus tracker, so that I understand how progress tracking works.

#### Acceptance Criteria

1. WHILE the viewport width is greater than 1024px, THE Bento_Card SHALL span 4 columns in the Bento_Grid (col-span-4)
2. THE Bento_Card SHALL display a non-interactive checklist UI scaled to fit within the card dimensions, containing between 4 and 6 module items each represented by a circle indicator and a text label
3. WHEN the user hovers over the Bento_Card, THE checklist SHALL animate a cursor icon clicking one module item, filling its circle indicator with System Green (#32D74B), applying a strikethrough style to the item text, and incrementing the progress bar value, with the full animation sequence completing within 1500ms of hover start
4. WHEN the user moves the cursor away from the Bento_Card before the animation completes, THE checklist SHALL reset all animated elements to their initial pre-hover state within 300ms
5. THE Bento_Card SHALL apply a Glassmorphism background with backdrop-blur-xl (equivalent to backdrop-filter: blur(24px)) and a background color of rgba(255, 255, 255, 0.05) with a 1px border of rgba(255, 255, 255, 0.08)
6. THE Bento_Card SHALL display a horizontal progress bar that transitions from 0% to a target fill width representing the checked item's contribution to completion during the hover animation
7. THE checklist animation SHALL use Framer Motion spring physics with stiffness between 60 and 120 and damping between 12 and 20 for the circle fill and strikethrough transitions

### Requirement 6: Zero Friction Card (Box 5)

**User Story:** As a student, I want to see that the platform is completely free with no barriers, so that I feel confident there are no hidden costs or requirements.

#### Acceptance Criteria

1. THE Bento_Card SHALL span 4 columns on large screens (col-span-4)
2. THE Bento_Card SHALL display an "Unlock" icon connected to a "KTU" node with a glowing animated pathway between them
3. THE Bento_Card SHALL display crossed-out "Paywall" and "Login" elements with a red visual treatment
4. WHEN the Bento_Card scrolls into view, THE glowing pathway animation SHALL play from the Unlock icon to the KTU node
5. THE Bento_Card SHALL have a Glassmorphism background with backdrop-blur and semi-transparent background color

### Requirement 7: Micro-Interactions and Hover Effects

**User Story:** As a site visitor, I want every card to respond to my interactions with subtle animations, so that the interface feels alive and premium.

#### Acceptance Criteria

1. WHEN the user hovers over any Bento_Card, THE Bento_Card SHALL translate upward by 4px with a transition duration between 200ms and 300ms using an ease-out timing function
2. WHEN the user hovers over any Bento_Card, THE Bento_Card border color SHALL transition from border-white/10 to border-white/20 over the same transition duration as the hover translation
3. WHEN any Bento_Card scrolls into the viewport for the first time, THE Bento_Card SHALL play an Entrance_Animation transitioning opacity from 0 to 1 and translating upward from 20px to 0px, completing within 400ms to 600ms
4. THE Entrance_Animations SHALL be staggered across cards with each successive card delayed by 100ms to 150ms after the previous card begins its animation
5. ALL Framer Motion animations SHALL use spring physics with stiffness between 60 and 120 and damping between 12 and 20, or a cubic-bezier easing curve, and SHALL NOT use linear timing
6. IF the user has enabled the prefers-reduced-motion accessibility setting, THEN THE system SHALL disable all hover translations, border transitions, and Entrance_Animations, rendering cards in their final state immediately

### Requirement 8: Responsive Behavior

**User Story:** As a mobile user, I want the bento-grid to adapt gracefully to smaller screens, so that I can still read and interact with all content.

#### Acceptance Criteria

1. WHILE the viewport width is below 1024px and at or above 768px, THE Bento_Grid SHALL display cards in a 2-column grid layout preserving card readability, and WHILE the viewport width is below 768px, THE Bento_Grid SHALL collapse to a single-column stack where each card occupies the full available width, on all viewport widths down to 320px
2. WHILE the viewport width is below 1024px, THE Exam Coverage Bento_Card SHALL render without row-span-2, occupying a single grid row with its height determined by content rather than a fixed multi-row span
3. WHILE the viewport width is below 768px, THE Bento_Grid SHALL render all text at a minimum font size of 14px and apply a minimum padding of 12px on all card edges, ensuring no text is clipped or requires horizontal scrolling to read
4. WHILE the viewport width is below 1024px, THE hover-triggered animations (fan-out, cursor click) SHALL activate on tap interaction such that a single tap produces the same visual animation that a hover triggers on desktop viewports
5. WHILE the viewport width is below 768px, THE Bento_Grid and all interactive elements within it SHALL maintain a minimum tap target size of 44x44 CSS pixels

### Requirement 9: Performance and Accessibility

**User Story:** As a user with accessibility needs or a slower device, I want the section to be performant and accessible, so that I can consume the content regardless of my setup.

#### Acceptance Criteria

1. WHILE the user has prefers-reduced-motion enabled, THE Section_Component SHALL render all content in its final visual state immediately without playing Micro_Interactions, Entrance_Animations, or Spring_Animations, and no element shall transition opacity, transform, or position over time
2. THE Section_Component SHALL use semantic HTML elements (section, heading hierarchy starting at h2 with no skipped levels, and unordered lists for grouped items) so that screen readers can identify content structure and navigate by landmark and heading
3. THE Section_Component SHALL ensure all text content meets a minimum WCAG AA contrast ratio of 4.5:1 for normal text (below 18px) and 3:1 for large text (18px and above) against the card background color (#121212) and any gradient or mesh background behind it
4. THE Ambient_Glow elements and all purely decorative animations (elements conveying no informational content) SHALL be marked with aria-hidden="true" and excluded from the accessibility tree
5. IF Framer Motion fails to load or throws a runtime error during animation initialization, THEN THE Section_Component SHALL render all content in a static layout where every element is visible at full opacity in its final position with no overlapping or clipped content
6. THE Section_Component SHALL ensure all interactive elements are reachable via sequential keyboard Tab navigation in a logical reading order and operable with Enter or Space keys
7. WHEN an interactive element within the Section_Component receives keyboard focus, THE Section_Component SHALL display a visible focus indicator with a minimum 2px outline offset that meets a 3:1 contrast ratio against adjacent colors
