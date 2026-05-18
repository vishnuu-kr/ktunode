# Implementation Plan: Continue with Session

## Overview

This plan implements a persistent "Continue with S{semester} {branch}" button on the landing page hero section. The implementation is broken into four phases: types and validation logic, the custom persistence hook, the animated button component, and integration into the landing page. Property-based tests validate correctness properties from the design document.

## Tasks

- [x] 1. Create types, constants, and validation logic
  - [x] 1.1 Create `src/types/session.ts` with `SavedSession` interface, `VALID_BRANCHES` constant array, `STORAGE_KEY` constant, and `validateSession` type guard function
    - Define `SavedSession` interface with `branch: string` and `semester: number`
    - Define `VALID_BRANCHES = ["cs", "ec", "me", "ce", "ee"] as const`
    - Define `STORAGE_KEY = "ktunode-session"`
    - Implement `validateSession(data: unknown): data is SavedSession` — returns true only for objects with valid branch and integer semester 1-8
    - Implement `getBranchShortLabel(branchId: string): string` — returns uppercase label, fallback to `branchId.toUpperCase()`
    - _Requirements: 3.1, 3.2, 3.5, 3.6, 4.2_

  - [ ]* 1.2 Write property test: Validation rejects invalid data (Property 2)
    - **Property 2: Validation rejects invalid data**
    - Generate arbitrary data where branch ∉ VALID_BRANCHES or semester ∉ [1..8] or data is not a well-formed object
    - Assert `validateSession(data)` returns `false` for all generated inputs
    - **Validates: Requirements 3.1, 3.2, 3.5**

  - [ ]* 1.3 Write property test: Round-trip persistence (Property 1)
    - **Property 1: Round-trip persistence**
    - Generate valid branch ∈ VALID_BRANCHES and semester ∈ [1..8]
    - Call `saveSession(branch, semester)` then `initializeSession()` and assert returned values match
    - Use mocked localStorage for isolation
    - **Validates: Requirements 1.1, 1.2, 2.1, 2.2**

  - [ ]* 1.4 Write property test: Invalid inputs are not persisted (Property 6)
    - **Property 6: Invalid inputs are not persisted**
    - Generate invalid branch or semester values
    - Call `saveSession` and assert localStorage was NOT written to
    - **Validates: Requirements 1.3**

- [x] 2. Implement `useSessionPersistence` custom hook
  - [x] 2.1 Create `src/hooks/useSessionPersistence.ts` implementing the custom hook
    - Import types and validation from `src/types/session.ts`
    - Use `useState<SavedSession | null>` initialized to `null`
    - Use `useEffect` to read from localStorage on mount (SSR guard with `typeof window`)
    - If stored data is invalid JSON or fails validation, remove it from localStorage and return null
    - Implement `saveSession(branch, semester)` — validate before writing, wrap in try/catch
    - Implement `clearSession()` — remove from localStorage, set state to null, wrap in try/catch
    - Export the hook as default
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 8.1, 8.2, 8.3, 8.4_

  - [ ]* 2.2 Write property test: Invalid storage is self-healing (Property 3)
    - **Property 3: Invalid storage is self-healing**
    - Generate random strings (invalid JSON or valid JSON that fails validation)
    - Set them in mocked localStorage under STORAGE_KEY
    - Call `initializeSession()` and assert it returns null and removes the entry
    - **Validates: Requirements 3.3, 3.4**

  - [ ]* 2.3 Write unit tests for `useSessionPersistence` hook
    - Test SSR returns null (no window)
    - Test reading valid session from localStorage
    - Test reading invalid/corrupted data clears storage
    - Test `saveSession` writes valid data
    - Test `saveSession` rejects invalid data
    - Test `clearSession` removes data and updates state
    - Test graceful handling when localStorage throws
    - _Requirements: 1.1, 1.4, 2.1, 2.3, 2.4, 8.1, 8.2, 8.3, 8.4_

- [x] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Implement `ContinueSessionButton` component
  - [x] 4.1 Create `src/components/features/ContinueSessionButton.tsx`
    - Accept props: `session: SavedSession`, `onContinue: () => void`, `onDismiss: () => void`
    - Import `MagneticButton` from `@/components/ui/MagneticButton`
    - Import `AnimatePresence`, `motion` from `framer-motion`
    - Import `ArrowRight`, `X` from `lucide-react`
    - Import `getBranchShortLabel` from `@/types/session`
    - Render label: `"Continue with S${session.semester} ${getBranchShortLabel(session.branch)}"`
    - Wrap in `motion.div` with entrance animation: `initial={{ opacity: 0, y: 16, scale: 0.95 }}`, `animate={{ opacity: 1, y: 0, scale: 1 }}`, `exit={{ opacity: 0, y: -8, scale: 0.95 }}`, duration 0.4s, easing `[0.16, 1, 0.3, 1]`
    - Include ArrowRight icon for navigation affordance
    - Include X dismiss icon button with `onClick` that calls `event.stopPropagation()` then `onDismiss()`
    - Dismiss icon must have minimum 44x44px tap target and `aria-label="Dismiss session"`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.2, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 7.4_

  - [ ]* 4.2 Write property test: Button label format is deterministic (Property 4)
    - **Property 4: Button label format is deterministic**
    - Generate valid SavedSession objects
    - Assert rendered label equals `"Continue with S${session.semester} ${session.branch.toUpperCase()}"`
    - **Validates: Requirements 4.2**

  - [ ]* 4.3 Write property test: Navigation URL correctness (Property 5)
    - **Property 5: Navigation URL correctness**
    - Generate valid SavedSession with branch `b` and semester `s`
    - Assert that `onContinue` triggers navigation to `/dashboard?branch=${b}&sem=${s}`
    - **Validates: Requirements 5.1**

  - [ ]* 4.4 Write unit tests for ContinueSessionButton
    - Test renders correct label for each branch
    - Test dismiss click calls onDismiss and stops propagation
    - Test continue click calls onContinue
    - Test ArrowRight icon is present
    - Test dismiss button has accessible label
    - _Requirements: 4.2, 5.2, 6.1, 6.4_

- [x] 5. Integrate into Landing Page
  - [x] 5.1 Update `src/app/page.tsx` to wire up session persistence and continue button
    - Import `useSessionPersistence` from `@/hooks/useSessionPersistence`
    - Import `ContinueSessionButton` from `@/components/features/ContinueSessionButton`
    - Call `useSessionPersistence()` to get `savedSession`, `saveSession`, `clearSession`
    - Modify `handleLaunch` to call `saveSession(selectedBranch, selectedSemester)` before navigating (only when both are selected)
    - Add `handleContinue` function that navigates to `/dashboard?branch=${savedSession.branch}&sem=${savedSession.semester}`
    - Add `handleDismiss` function that calls `clearSession()`
    - Render `ContinueSessionButton` below the selector card, wrapped in `AnimatePresence`, conditionally shown when `savedSession` is not null
    - Ensure button does not cause layout shift during animation
    - _Requirements: 1.1, 1.3, 4.1, 4.3, 5.1, 5.3, 6.2, 6.3, 7.4_

  - [ ]* 5.2 Write integration tests for landing page session flow
    - Test: no continue button on first visit (empty localStorage)
    - Test: continue button appears when valid session exists in localStorage
    - Test: clicking continue navigates to correct URL
    - Test: clicking dismiss removes button and clears localStorage
    - Test: navigating to dashboard saves session to localStorage
    - _Requirements: 1.1, 2.1, 4.1, 4.3, 5.1, 6.2, 6.3_

- [x] 6. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The project uses `vitest` for testing and `fast-check` for property-based tests (both already in devDependencies)
- All code is TypeScript with React 19 and Next.js 16

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4", "2.1"] },
    { "id": 2, "tasks": ["2.2", "2.3", "4.1"] },
    { "id": 3, "tasks": ["4.2", "4.3", "4.4"] },
    { "id": 4, "tasks": ["5.1"] },
    { "id": 5, "tasks": ["5.2"] }
  ]
}
```
