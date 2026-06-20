## 2026-06-20T08:52:22Z
Role: Onboarding Flow Implementer
Objective: Implement the full interactive onboarding modal component and integrate it onto the landing page `src/app/page.tsx`.
Working directory for coordination metadata: `c:\Users\Windows 10\Downloads\ktunode\.agents\worker_m2_1`

Task details:
1. Read the Explorer analysis reports:
   - Codebase Layout: `c:\Users\Windows 10\Downloads\ktunode\.agents\explorer_m1_1\analysis.md`
   - Design Specs: `c:\Users\Windows 10\Downloads\ktunode\.agents\explorer_m1_2\analysis.md`
   - Subject API & Persistence: `c:\Users\Windows 10\Downloads\ktunode\.agents\explorer_m1_3\analysis.md`
2. Create the onboarding modal component at `src/components/features/OnboardingModal.tsx` following the visual specs:
   - Progress bar at the top indicating current step.
   - Step transitions with smooth fade/slide Framer Motion animations.
   - Step 1: Branch Selection: Grid of CS, EC, ME, CE, EE with high-quality icons and hover/scaling states. Add a search bar or dropdown select to search and choose other branches (from the complete list of branches in `src/types/session.ts` / `src/app/page.tsx`'s `branchLabels`).
   - Step 2: Semester Selection: Distinct interactive cards for Semesters 1 to 8 with hover/active scaling states.
   - Step 3: Subject Configuration: Fetch subjects dynamically from `/api/subjects?branch=[branch]&sem=[semester]`. Render them in a clean checklist. Allow the user to check/uncheck to select/deselect them.
   - Step 4: Save & Navigate: Save selected branch/sem to `ktunode-session` key in localStorage, save `ktunode_branch`, `ktunode_semester`, `ktunode_onboarding_completed` ("true"), and save deselected subject IDs to `ktunode_hidden_subjects_[branch]_[sem]` as a stringified JSON array. Redirect to `/[branch]/sem-[semester]`.
   - Provide "Back" buttons for Steps 2 & 3.
   - Provide a prominent "Close" button to dismiss the modal and return to the landing page.
   - Ensure mobile-first responsiveness down to 320px with tap targets >= 48px, padding scaling, and iOS safe area padding.
   - Ensure full accessibility: focus trapping within modal, ESC key to dismiss, keyboard arrows/Tab navigation, ARIA labels, and prefers-reduced-motion queries.
3. Integrate the modal into `src/app/page.tsx`:
   - Intercept clicking on the "Open Dashboard" button (which is the primary CTA). If `ktunode_onboarding_completed` is not `"true"`, trigger the onboarding modal instead of navigating directly.
   - If they have selected branch/semester on the homepage, pre-select them in the modal wizard steps.
   - Render the modal lazily using next/dynamic with SSR disabled inside `<AnimatePresence>` to support exit animations.
4. Run Next.js build or typescript compile checks to verify there are no compilation errors.
5. Provide a detailed report of the changes, verification commands run, and build results in your handoff.
