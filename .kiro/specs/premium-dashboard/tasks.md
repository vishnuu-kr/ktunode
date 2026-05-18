# Implementation Plan: Premium Dashboard

## Overview

Replace the existing tabbed dashboard at `src/app/dashboard/page.tsx` with a premium bento-grid layout featuring a master progress hero, continue-reading action block, interactive subject stack with 3-level drilldown, and floating global controls dock. Built with Next.js 16, Tailwind CSS v4, and Framer Motion 12, using localStorage for progress persistence and next-themes for dark/light mode.

## Tasks

- [x] 1. Set up project structure, interfaces, and utility functions
  - [x] 1.1 Create TypeScript interfaces and data types
    - Create `src/types/dashboard.ts` with `Subject`, `Module`, `Topic`, `ReadingHistory`, `ProgressState`, and `DashboardState` interfaces
    - Create subject data file `src/data/subjects.ts` with semester subject/module/topic data structured per the new interfaces
    - _Requirements: 3.1, 3.2, 3.3, 3.5_

  - [x] 1.2 Implement utility functions
    - Create `src/lib/dashboard-utils.ts` with `truncate`, `calcPercentage`, `calcStrokeDasharray`, `loadProgress`, `saveProgress` functions
    - `truncate(str, maxLength)` returns string within limit, appending ellipsis if exceeded
    - `calcPercentage(checked, total)` returns `Math.round((checked/total)*100)` clamped 0–100
    - `calcStrokeDasharray(percentage, circumference)` computes SVG arc values
    - `loadProgress()` validates and parses localStorage JSON, returns null on failure
    - `saveProgress(state)` serializes and writes to localStorage, returns success boolean
    - _Requirements: 1.2, 1.4, 1.8, 2.2, 7.1, 7.2, 7.3_

  - [ ]* 1.3 Write property test: Truncation preserves content within limit
    - **Property 1: Truncation preserves content within limit**
    - Use fast-check to verify: for any string and positive maxLength, output length ≤ maxLength (excluding ellipsis), identity when input ≤ limit, ellipsis appended when input > limit
    - **Validates: Requirements 1.2, 2.2**

  - [ ]* 1.4 Write property test: Progress percentage calculation correctness
    - **Property 2: Progress percentage calculation correctness**
    - Use fast-check to verify: for any non-negative checked ≤ positive total, result is integer 0–100, equals Math.round((checked/total)*100), and stroke-dasharray equals (percentage/100)*circumference
    - **Validates: Requirements 1.4, 1.8, 3.7, 3.8**

- [x] 2. Implement Master Progress Hero and Progress Ring
  - [x] 2.1 Create ProgressRing component
    - Create `src/components/dashboard/ProgressRing.tsx`
    - Render SVG circular arc with stroke-dasharray proportional to percentage
    - Animate arc changes using Framer Motion spring (stiffness 60–120, damping 12–20)
    - Render empty ring when percentage is 0%
    - _Requirements: 1.4, 1.6, 1.8, 6.3_

  - [x] 2.2 Create MasterProgressHero component
    - Create `src/components/dashboard/MasterProgressHero.tsx`
    - Display personalized greeting with student name truncated to 20 chars, fallback to "Welcome back" if empty
    - Render ProgressRing with semester completion percentage
    - Apply glassmorphism styling: backdrop-blur-2xl, dark mesh gradient background
    - Span full width of bento grid on all viewports
    - _Requirements: 1.1, 1.2, 1.3, 1.5, 1.7, 8.4_

- [x] 3. Implement Continue Reading Block
  - [x] 3.1 Create ContinueReadingBlock component
    - Create `src/components/dashboard/ContinueReadingBlock.tsx`
    - Display subject code + topic name (truncated at 60 chars with ellipsis)
    - Render "Jump Back In" button navigating to reading view
    - Show empty-state prompt if no reading history or topic unavailable
    - Display skeleton placeholder while loading (up to 3s timeout)
    - Apply high-contrast styling for visual distinction
    - Span at least 50% grid width on desktop
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

- [x] 4. Implement Subject Stack with 3-Level Drilldown
  - [x] 4.1 Create SubjectCard component with expand/collapse
    - Create `src/components/dashboard/SubjectCard.tsx`
    - Display subject name, code, and MiniProgressBar
    - Implement expand/collapse on background click (not navigation)
    - Apply styling: border-radius 24px, bg #121212, 1px border white/10, hover border white/15 transition 400ms
    - Include StudyButton navigating to reading view
    - _Requirements: 3.2, 3.3, 3.4, 3.9, 3.10, 3.11, 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 4.2 Create ModulePill and TopicCheckbox components
    - Create `src/components/dashboard/ModulePill.tsx` — clickable pill revealing topics on click, collapsing on re-click
    - Create `src/components/dashboard/TopicCheckbox.tsx` — custom styled checkbox updating progress state
    - Cap displayed modules at 8, topics at 15
    - _Requirements: 3.5, 3.6, 3.7, 3.8_

  - [x] 4.3 Create SubjectStack component with layout animations
    - Create `src/components/dashboard/SubjectStack.tsx`
    - Render vertical list of SubjectCards with 16px gap
    - Use Framer Motion layout animations (200–400ms, cubic-bezier(0.25,1,0.5,1))
    - Allow independent card expansion (no accordion behavior)
    - Animate adjacent card displacement smoothly
    - Handle animation interruption gracefully
    - _Requirements: 3.1, 3.12, 3.13, 4.3, 6.1, 6.2, 6.4, 6.5_

  - [ ]* 4.4 Write property test: Drilldown list capping
    - **Property 3: Drilldown list capping**
    - Use fast-check to verify: for any subject with N modules (N>0), displayed count = min(N,8); for any module with M topics (M>0), displayed count = min(M,15)
    - **Validates: Requirements 3.3, 3.5**

  - [ ]* 4.5 Write property test: Expand/collapse toggle involution
    - **Property 4: Expand/collapse toggle is an involution**
    - Use fast-check to verify: expand then collapse returns card to original collapsed state; select then deselect module hides all topic checkboxes
    - **Validates: Requirements 3.4, 3.6**

  - [ ]* 4.6 Write property test: Independent card expansion
    - **Property 5: Independent card expansion (no accordion)**
    - Use fast-check to verify: expanding/collapsing any single card does not change expanded/collapsed state of any other card
    - **Validates: Requirements 3.13**

- [x] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement Floating Dock and Command Palette
  - [x] 6.1 Create FloatingDock component
    - Create `src/components/dashboard/FloatingDock.tsx`
    - Render pill-shaped element fixed at bottom center, min 16px from viewport bottom
    - Apply frosted-glass styling: backdrop-blur-2xl, semi-transparent bg, border-white/10
    - Include Home icon, Command Palette trigger (⌘+K hint), and ThemeToggle
    - Maintain 24px min margin from nearest scrollable interactive element
    - Remain fixed, visible, and interactive during scroll
    - Stay horizontally centered and within viewport on all widths 320–2560px
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.7, 5.8, 8.5_

  - [x] 6.2 Create ThemeToggle component
    - Create `src/components/dashboard/ThemeToggle.tsx`
    - Use `next-themes` to switch between dark/light modes
    - Persist selected theme across page reloads
    - _Requirements: 5.6_

  - [x] 6.3 Create CommandPalette component
    - Create `src/components/dashboard/CommandPalette.tsx`
    - Open on ⌘+K (Ctrl+K on non-Mac) or dock trigger click
    - Render modal overlay for search/navigation
    - Manage focus on open/close
    - _Requirements: 5.5_

- [x] 7. Implement Progress Persistence and State Management
  - [x] 7.1 Implement dashboard state management with localStorage
    - Wire `loadProgress` and `saveProgress` into the dashboard page state
    - Restore saved Topic_Checkbox states on page load within 2 seconds
    - Persist state changes within 1 second of checkbox toggle
    - Handle corrupted state: reset to unchecked, show non-blocking toast
    - Handle write failures: show error toast, retain previous persisted state
    - Handle localStorage unavailable: in-memory fallback with warning toast
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]* 7.2 Write property test: Progress persistence round-trip
    - **Property 6: Progress persistence round-trip**
    - Use fast-check to verify: for any valid ProgressState, saveProgress then loadProgress produces deeply equal object; derived percentages match
    - **Validates: Requirements 7.1, 7.2**

- [x] 8. Assemble Dashboard Page with Bento Grid Layout
  - [x] 8.1 Create the premium dashboard page
    - Replace `src/app/dashboard/page.tsx` with new premium bento-grid layout
    - Compose MasterProgressHero, ContinueReadingBlock, SubjectStack, FloatingDock, CommandPalette
    - Implement 12-column grid (>1024px), 2-column (768–1024px), single-column (<768px)
    - Ensure no horizontal scrollbars on viewports 320–2560px
    - Ensure minimum 44×44px tap targets on mobile (<768px)
    - Wire all state: progress, reading history, expanded cards, selected modules
    - Compute derived state: semesterCompletion, per-subject percentages
    - _Requirements: 1.1, 2.1, 3.1, 5.1, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

  - [x] 8.2 Create toast notification component
    - Create `src/components/dashboard/Toast.tsx` for non-blocking error/info notifications
    - Position top-right, auto-dismiss after 5 seconds
    - Ensure no overlap with FloatingDock
    - _Requirements: 7.3, 7.4_

- [x] 9. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The implementation uses TypeScript throughout, matching the existing codebase
- All components use Framer Motion for animations and Tailwind CSS v4 for styling
- Progress persistence uses localStorage with schema validation
- The existing dashboard page will be fully replaced in task 8.1

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["1.3", "1.4", "2.1", "3.1"] },
    { "id": 2, "tasks": ["2.2", "4.1", "4.2", "6.2"] },
    { "id": 3, "tasks": ["4.3", "4.4", "4.5", "4.6", "6.1", "6.3"] },
    { "id": 4, "tasks": ["7.1", "7.2", "8.2"] },
    { "id": 5, "tasks": ["8.1"] }
  ]
}
```
