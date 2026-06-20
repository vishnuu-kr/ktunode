# Codebase Layout & Integration Hooks Analysis

## 1. Codebase Layout & Architecture Overview

The entry-level views and layout components are structured as follows:

- **Root Layout (`src/app/layout.tsx`)**:
  - Sets up global HTML shell, viewport, metadata, and Tailwind font variables (`Plus_Jakarta_Sans`, `Outfit`, `Poppins`).
  - Manages global wrapper/context providers: `ThemeProvider` (next-themes), `CSPostHogProvider` (analytics), `LockdownGate` (passcode access control), and `DismissibleBanner`.
  - Serves as the global backdrop and structure but does not directly handle landing page navigation flows.
- **Landing Page (`src/app/page.tsx`)**:
  - The main gateway. Dynamically loads below-the-fold components to optimize LCP and bundle size: `KtuCompareSection`, `HowItWorksSection`, `FoundreeHero`, `Features`, `TestimonialsSection`, `FaqSection`, `CtaBanner`, and `CinematicFooter`.
  - Displays a premium selection card utilizing `PremiumSelect` components for choosing branch and semester.
  - Features the main Call to Action (CTA) button ("Open Dashboard") and conditionally displays the `ContinueSessionButton` if a valid session is already saved.
- **Navbar (`src/components/Navbar.tsx`)**:
  - Rendered in a fixed top position on the landing page.
  - Dynamically displays options like the `ThemeToggle` and a dashboard shortcut button.
  - Syncs authentication states using `localStorage` listener and dispatches custom events (`ktunode-open-auth`, `ktunode-open-profile`).

---

## 2. Existing Hooks & Storage Helpers

### LocalStorage Keys & Management
1. **`ktunode-session` (defined as `STORAGE_KEY` in `src/types/session.ts`)**:
   - Stores user's selected branch and semester: `{ branch: string, semester: number }`.
   - Managed via the custom hook `useSessionPersistence` in `src/hooks/useSessionPersistence.ts`.
2. **`ktunode_progress`**:
   - Stores completed topic IDs as a JSON array of strings: `string[]`.
   - Managed via the custom hook `useProgress` in `src/hooks/useProgress.ts`.
3. **`ktunode_onboarding_completed`**:
   - Stores boolean-equivalent string `"true"` or `"false"`.
   - Missing or `"false"` triggers the guided tour `OnboardingTour` overlay inside `src/app/dashboard/page.tsx`.
4. **`ktunode_checklist_subject_viewed`**, **`ktunode_checklist_topic_completed`**, **`ktunode_checklist_tools_opened`**:
   - Tracks individual checklist tasks for the quick start mission.
   - Updated using `triggerChecklistTask` in `src/lib/checklist.ts` which fires custom window events `"ktunode-checklist-sync"`.
5. **`ktunode_first_time_checklist_completed`**:
   - Set to `"true"` once the user clears the 3-step checklist tasks.

### Routing
- Navigation uses Next.js Client-Side Routing: `useRouter` from `next/navigation`.
- Routes are of the format: `/[branch]/sem-[semester]` (e.g., `/cs/sem-3`).
- **Returning User Auto-Redirect**: If a session exists in `ktunode-session` and the query parameter `?landing=true` is *not* present, the landing page automatically redirects to `/${session.branch}/sem-${session.semester}` on mount.

---

## 3. CTA Onboarding Modal Integration Strategy

Currently, when the CTA button ("Open Dashboard") is clicked on the landing page:
1. It calls `handleLaunch(event)`.
2. Validates that `selectedBranch` and `selectedSemester` are selected; if not, triggers haptic warning feedback.
3. If valid, saves the session using `saveSession(branch, semester)`.
4. Navigates directly via `router.push('/[branch]/sem-[semester]')`.

### Precise Integration Point for the Fullscreen Overlay Modal
To introduce a new **fullscreen interactive onboarding overlay modal** on the landing page before redirection:

1. **Modal Placement**:
   - Add the modal to the bottom of the return tree in `src/app/page.tsx` within `<AnimatePresence>` for smooth entry/exit animations (similar to the dimming mask SVG + tooltip card pattern in `OnboardingTour.tsx`).
   - Use dynamic importing (`next/dynamic` with `ssr: false`) to load the overlay modal component lazily, preventing impact on first-load bundle sizes.

2. **Trigger Logic Hook**:
   - Modify the `handleLaunch` function in `src/app/page.tsx` to intercept navigation:
     ```typescript
     const handleLaunch = (event?: React.MouseEvent | React.PointerEvent) => {
       if (!selectedBranch || !selectedSemester) {
         setErrorState(true);
         setTimeout(() => setErrorState(false), 500);
         triggerHaptic("warning", event);
         return;
       }

       triggerHaptic("success", event);

       // Intercept to check if onboarding needs to be shown
       const onboarded = localStorage.getItem("ktunode_onboarding_completed") === "true";
       if (!onboarded) {
         setShowOnboardingModal(true); // Open the fullscreen overlay modal
         return;
       }

       setIsLaunching(true);
       saveSession(selectedBranch, selectedSemester as number);
       router.push(`/${selectedBranch}/sem-${selectedSemester}`);
     };
     ```
   - When the user completes the onboarding modal flow, set `localStorage.setItem("ktunode_onboarding_completed", "true")`, call `saveSession`, and trigger the redirection.

---

## 4. GitNexus Blast Radius & Impact Analysis

Following GitNexus guidelines, we analyzed the upstream blast radius for key components on the homepage:

- **Landing Component `Home` in `src/app/page.tsx`**:
  - Direct Caller Count: **0** (Page entry point)
  - Processes Affected: **0**
  - Upstream Impact: **LOW** (Safe to add internal states like `showOnboardingModal` and conditional rendering overlays).
- **Session Persistence Hook `useSessionPersistence` in `src/hooks/useSessionPersistence.ts`**:
  - Direct Callers: `src/app/page.tsx`
  - Upstream Impact: **LOW** (Modifying session storage methods does not affect central page routing or system-wide configuration directly, though it impacts session restoration on the landing page).
- **Progress Hook `useProgress` in `src/hooks/useProgress.ts`**:
  - Direct Callers: Note viewer pages and checklists.
  - Upstream Impact: **MEDIUM** (Ensure that onboarding states do not overwrite study progress).
- **Onboarding/Checklist Event Sync `triggerChecklistTask` in `src/lib/checklist.ts`**:
  - Direct Callers: `toggleTopic`, `DashboardContent`, `goSubject`, `goTopic`.
  - Upstream Impact: **HIGH** (If modified, can break checklist tracking on the dashboard).
