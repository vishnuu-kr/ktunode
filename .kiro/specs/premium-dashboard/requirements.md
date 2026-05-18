# Requirements Document

## Introduction

The Premium Dashboard is a redesigned, bento-grid-based dashboard experience for KTUNODE premium users. It replaces the existing tabbed dashboard at `src/app/dashboard/page.tsx` with a visually rich, interactive layout featuring a master progress hero, continue-reading action block, interactive subject stack with 3-level drilldown, and floating global controls. The dashboard is built with Next.js 16, Tailwind CSS v4, and Framer Motion, following a glassmorphism and dark mesh gradient aesthetic.

## Glossary

- **Dashboard**: The premium bento-grid layout page rendered at `/dashboard` for authenticated premium users
- **Master_Progress_Hero**: The top-spanning card displaying overall semester completion as an animated circular progress ring
- **Continue_Reading_Block**: A high-contrast action card showing the last-viewed topic and providing one-click navigation to the reading view
- **Subject_Stack**: The central vertical list of subject cards supporting a 3-level drilldown (subject → modules → topics)
- **Subject_Card**: An individual card within the Subject_Stack representing a single academic subject
- **Module_Pill**: A clickable element within an expanded Subject_Card representing one module of a subject
- **Topic_Checkbox**: A custom checkbox element within an expanded module representing a single syllabus topic
- **Floating_Dock**: A pill-shaped, frosted-glass control bar fixed at the bottom center of the viewport
- **Progress_Ring**: An Apple-Watch-style circular SVG indicator displaying percentage completion with spring-physics animation
- **Mini_Progress_Bar**: A horizontal progress indicator within each Subject_Card showing per-subject completion percentage
- **Study_Button**: A dedicated button inside each Subject_Card that navigates to the split-screen study page (Page 2)
- **Bento_Grid**: A CSS grid layout arranging dashboard cards in varied sizes for visual hierarchy
- **Spring_Animation**: A Framer Motion animation using spring physics for natural, satisfying motion
- **Reading_View**: The premium content page (Page 2) displaying notes and contextual PYQs in a split-screen layout
- **Command_Palette**: A keyboard-triggered (⌘+K) quick-action overlay for navigation and search
- **Semester_Completion**: The percentage of all syllabus topics marked as complete across all subjects in the current semester

## Requirements

### Requirement 1: Master Progress Hero Card

**User Story:** As a premium student, I want to see my overall semester progress at a glance in a prominent hero card, so that I stay motivated and aware of how much I have completed.

#### Acceptance Criteria

1. THE Dashboard SHALL render the Master_Progress_Hero as the first card spanning the full width of the top row in the Bento_Grid
2. THE Master_Progress_Hero SHALL display a personalized greeting including the student's first name, truncated to 20 characters if the name exceeds that length
3. IF the student's first name is unavailable or empty, THEN THE Master_Progress_Hero SHALL display a generic greeting without a name (e.g., "Welcome back")
4. THE Master_Progress_Hero SHALL display a Progress_Ring showing the Semester_Completion as a whole-number percentage value between 0 and 100, calculated as (number of Topic_Checkboxes marked complete / total number of Topic_Checkboxes in the selected semester) × 100, rounded to the nearest integer
5. WHEN a student marks a Topic_Checkbox as complete, THE Progress_Ring SHALL animate from the previous percentage to the updated percentage using Spring_Animation, completing the visual transition within 300ms of the state change
6. IF the Semester_Completion is 0%, THEN THE Progress_Ring SHALL render as an empty ring with no filled arc
7. THE Master_Progress_Hero SHALL apply glassmorphism styling with backdrop-blur-2xl over a dark mesh gradient background
8. THE Progress_Ring SHALL render as an SVG circular arc with a stroke-dasharray proportional to the Semester_Completion value

### Requirement 2: Continue Reading Action Block

**User Story:** As a premium student, I want to quickly resume my last study session with one click, so that I minimize friction when returning to the platform.

#### Acceptance Criteria

1. THE Dashboard SHALL render the Continue_Reading_Block as a high-contrast card positioned immediately below the Master_Progress_Hero in the Bento_Grid, spanning at least 50% of the grid width on desktop viewports
2. THE Continue_Reading_Block SHALL display the subject code and topic name of the last-viewed content (e.g., "MAT203: K-Map Simplification"), truncating the topic name with an ellipsis if it exceeds 60 characters
3. THE Continue_Reading_Block SHALL display a prominent "Jump Back In" button
4. WHEN the student clicks the "Jump Back In" button, THE Dashboard SHALL navigate the student directly to the Reading_View for the last-viewed topic within 1 second of the click
5. IF no reading history exists for the student, THEN THE Continue_Reading_Block SHALL display a prompt to start studying with a link to the first subject listed in the Subject_Stack
6. IF the last-viewed topic is no longer available in the Subject_Stack, THEN THE Continue_Reading_Block SHALL fall back to the empty-state prompt as defined in criterion 5
7. THE Continue_Reading_Block SHALL be the most visually distinct card on the Dashboard through elevated contrast, larger typography, or accent color treatment
8. WHILE the reading history is being loaded, THE Continue_Reading_Block SHALL display a skeleton placeholder matching the card dimensions until data is available or a 3-second timeout elapses

### Requirement 3: Interactive Subject Stack with 3-Level Drilldown

**User Story:** As a premium student, I want to browse my subjects, modules, and topics in a progressive drilldown, so that I can track granular progress and navigate to study materials efficiently.

#### Acceptance Criteria

1. THE Dashboard SHALL render the Subject_Stack as a vertical list of Subject_Cards forming the central spine of the Bento_Grid
2. EACH Subject_Card SHALL display the subject name, subject code, and a Mini_Progress_Bar showing per-subject completion percentage calculated as (checked topics / total topics for that subject) × 100, rounded to the nearest integer
3. WHEN the student clicks the background area of a collapsed Subject_Card, THE Subject_Card SHALL expand to reveal Module_Pills for all modules belonging to that subject (up to a maximum of 8 modules)
4. WHEN the student clicks the background area of an already-expanded Subject_Card, THE Subject_Card SHALL collapse back to its default state, hiding all Module_Pills and Topic_Checkboxes within it
5. WHEN the student clicks a Module_Pill that is not currently selected, THE Subject_Card SHALL expand further to reveal Topic_Checkboxes for each syllabus topic within that module (up to a maximum of 15 topics per module)
6. WHEN the student clicks a Module_Pill that is already selected, THE Subject_Card SHALL collapse the Topic_Checkboxes section for that module
7. WHEN the student checks a Topic_Checkbox, THE Mini_Progress_Bar on the parent Subject_Card SHALL update to reflect the new per-subject completion percentage
8. WHEN the student checks a Topic_Checkbox, THE Progress_Ring in the Master_Progress_Hero SHALL update to reflect the new Semester_Completion percentage
9. EACH Subject_Card SHALL contain a Study_Button that is visually distinct from the card background
10. WHEN the student clicks the Study_Button, THE Dashboard SHALL navigate the student to the Reading_View for that subject
11. WHEN the student clicks the background area of a Subject_Card, THE Dashboard SHALL NOT navigate away from the Dashboard
12. WHEN a Subject_Card expands or collapses, THE Subject_Stack SHALL animate the transition using layout animations with a duration between 200ms and 400ms, pushing adjacent cards smoothly without instant layout jumps
13. WHEN a Subject_Card is expanded, THE Dashboard SHALL allow other Subject_Cards to remain in their current expanded or collapsed state independently (no accordion behavior)

### Requirement 4: Subject Card Styling and Borders

**User Story:** As a premium student, I want the subject cards to have a refined, premium appearance, so that the interface feels polished and high-quality.

#### Acceptance Criteria

1. EACH Subject_Card SHALL render with a border-radius of 24px in both collapsed and expanded states
2. EACH Subject_Card SHALL display a 1px inner border with white at 10% opacity (rgba(255,255,255,0.10)) in both collapsed and expanded states
3. THE Subject_Stack SHALL apply a uniform vertical gap of 16px between adjacent Subject_Cards
4. EACH Subject_Card SHALL render with a background color of #121212
5. WHEN the student hovers over a Subject_Card, THE Subject_Card SHALL transition the border opacity from 10% to 15% within 400ms

### Requirement 5: Floating Global Controls Dock

**User Story:** As a premium student, I want persistent access to navigation, search, and theme controls without scrolling, so that I can quickly perform common actions from anywhere on the dashboard.

#### Acceptance Criteria

1. THE Dashboard SHALL render the Floating_Dock as a pill-shaped element fixed at the bottom center of the viewport with a minimum clearance of 16px from the viewport bottom edge
2. THE Floating_Dock SHALL apply frosted-glass styling using backdrop-blur-2xl over a semi-transparent background with a 1px border of border-white/10
3. THE Floating_Dock SHALL contain a Home/Dashboard navigation icon that, WHEN clicked, navigates the student to the Dashboard page
4. THE Floating_Dock SHALL contain a Command_Palette trigger displaying the keyboard shortcut hint "⌘+K"
5. WHEN the student clicks the Command_Palette trigger or presses ⌘+K (Ctrl+K on non-Mac), THE Dashboard SHALL open the Command_Palette overlay
6. THE Floating_Dock SHALL contain a theme toggle control that, WHEN clicked, switches the Dashboard between dark and light modes with the selected theme persisted across page reloads
7. WHILE the student scrolls the Dashboard content, THE Floating_Dock SHALL remain fixed in position, visible, and interactive above all other content
8. THE Floating_Dock SHALL maintain a minimum margin of 24px between its top edge and the nearest scrollable interactive element to prevent overlap

### Requirement 6: Layout Animations and Transitions

**User Story:** As a premium student, I want smooth, fluid animations throughout the dashboard, so that interactions feel responsive and premium.

#### Acceptance Criteria

1. WHEN a Subject_Card expands or collapses, THE Subject_Stack SHALL animate the height change using Framer Motion layout animations with a duration between 200ms and 400ms and an easing curve of cubic-bezier(0.25, 1, 0.5, 1)
2. WHEN adjacent Subject_Cards are displaced by an expanding card, THE Subject_Stack SHALL animate their position change over a duration between 200ms and 400ms using the same easing curve as the expanding card, with no frame where elements jump more than 1px without interpolation
3. WHEN the Progress_Ring value changes, THE Master_Progress_Hero SHALL animate the arc transition using a Framer Motion spring with stiffness between 60 and 120 and damping between 12 and 20, completing the transition within 800ms
4. THE Dashboard SHALL avoid layout shifts (Cumulative Layout Shift score below 0.1) during all animated transitions
5. IF a user triggers an expand or collapse action while a Subject_Card animation is already in progress, THEN THE Subject_Stack SHALL interrupt the current animation and transition to the new target state from the current interpolated position without restarting from the beginning

### Requirement 7: Progress State Persistence

**User Story:** As a premium student, I want my topic completion progress to be saved, so that I do not lose my tracking data between sessions.

#### Acceptance Criteria

1. WHEN the student marks or unmarks a Topic_Checkbox, THE Dashboard SHALL persist the updated completion state within 1 second such that it is retained across page reloads within the same browser
2. WHEN the Dashboard loads, THE Dashboard SHALL restore all previously saved Topic_Checkbox states within 2 seconds of page load and compute the correct Semester_Completion and per-subject completion percentages before displaying them
3. IF the persisted state cannot be loaded or is corrupted (unparseable or schema-invalid), THEN THE Dashboard SHALL display all Topic_Checkboxes as unchecked, set Semester_Completion to 0%, and display a non-blocking notification indicating that progress data could not be restored
4. IF persistence of a Topic_Checkbox state change fails, THEN THE Dashboard SHALL display a non-blocking error indication to the student and retain the checkbox's previous persisted state

### Requirement 8: Responsive Bento Grid Layout

**User Story:** As a premium student, I want the dashboard to adapt gracefully to different screen sizes, so that I have a usable experience on both desktop and mobile devices.

#### Acceptance Criteria

1. WHILE the viewport width is greater than 1024px, THE Bento_Grid SHALL render as a 12-column CSS grid layout with dashboard cards spanning varying column counts to create visual hierarchy
2. WHILE the viewport width is between 768px and 1024px inclusive, THE Bento_Grid SHALL render as a 2-column grid layout with cards stacking into fewer columns while preserving card readability
3. WHILE the viewport width is less than 768px, THE Bento_Grid SHALL collapse to a single-column stacked layout where each card occupies the full available width
4. THE Master_Progress_Hero SHALL span the full width of the Bento_Grid on all viewport sizes from 320px to 2560px
5. THE Floating_Dock SHALL remain horizontally centered and fully within the visible viewport (no clipping or overflow) on all viewport widths from 320px to 2560px
6. THE Bento_Grid SHALL not produce horizontal scrollbars on any viewport width between 320px and 2560px
7. WHILE the viewport width is less than 768px, THE Floating_Dock and all interactive elements within the Bento_Grid SHALL maintain a minimum tap target size of 44×44 CSS pixels
