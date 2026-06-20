# Project Plan: Interactive Onboarding Flow for KTUNode

## Architecture & Design
- **Interactive Fullscreen Overlay Modal**: Triggered from the homepage, fully modal, disabling background interaction. Responsive and animated using Framer Motion.
- **Progress Indicator**: A progress bar showing steps (Branch Selection -> Semester Selection -> Subject Config -> Finish).
- **Branch Grid**: Main branches (Computer Science, Electronics, Mechanical, Civil, Electrical) shown as distinct grid elements with relevant icons. A secondary searchable/dropdown select for other branches.
- **Semester Cards**: Grid/list of interactive card selectors for semesters 1 through 8.
- **Subject Configuration List**: Dynamically loads the subjects list via `/api/subjects?branch=[branch]&sem=[semester]`. Allows checkboxes or toggle controls to select/deselect optional or elective subjects.
- **Persistence**: Updates the following `localStorage` keys on completion:
  - `ktunode_branch` (string, selected branch ID)
  - `ktunode_semester` (number, selected semester)
  - `ktunode_onboarding_completed` ("true")
  - `ktunode_hidden_subjects_[branch]_[sem]` (JSON array string containing IDs of all *deselected* subjects)
  - `ktunode-session` (using the same session format as `useSessionPersistence` helper: `{ branch, semester }`)
- **Dashboard Sync**: The dashboard automatically filters out subjects whose IDs are in `ktunode_hidden_subjects_[branch]_[sem]`.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Exploration & Specs | Audit codebase, identify exact integration hooks, verify styling & Framer Motion setup | None | DONE |
| 2 | Onboarding Modal | Implement `OnboardingModal.tsx` wizard component with Steps 1-3 (Branch, Semester, Subjects Config) | M1 | DONE |
| 3 | Homepage Integration & Sync | Integrate modal on homepage primary CTA, handle Step 4 (Save & Redirect), enable back button, close modal option | M2 | DONE |
| 4 | E2E Validation & Hardening | Add E2E tests, verify layout down to 320px, check keyboard focus & screen reader accessibility, run Forensic Audit | M3 | IN_PROGRESS |

## Interface Contracts
### `OnboardingModal` Props
- `isOpen: boolean`
- `onClose: () => void`

### Subject Fetching API
- Input: GET `/api/subjects?branch=[branchId]&sem=[semesterNumber]`
- Output: JSON array of subjects:
  ```json
  [
    { "id": "subject-id", "name": "Subject Name", "code": "CSTXXX", "modules": [...] }
  ]
  ```

### LocalStorage Contracts
- `ktunode_branch`: string
- `ktunode_semester`: string ("1" to "8")
- `ktunode_onboarding_completed`: "true" | "false"
- `ktunode_hidden_subjects_[branch]_[sem]`: stringified array of deselected subject IDs (e.g. `["subj-1", "subj-3"]`)
- `ktunode-session`: `{ "branch": string, "semester": number }`

## Code Layout
- `src/components/features/OnboardingModal.tsx` (new component)
- `src/app/page.tsx` (modified to trigger onboarding modal)
- `src/components/dashboard/OnboardingTour.tsx` (existing, logic kept intact)
- `src/app/dashboard/page.tsx` (existing, logic kept intact)
