# Handoff Report - Design System & Styling Specs Explorer

## 1. Observation
The following source and design system files were examined:
*   `brand-spec.md` (Lines 9-14): Color palette OKLch values:
    ```css
    - `--bg: oklch(98% 0.004 240);`  // Light background, subtly cool (adapted from white)
    - `--surface: oklch(100% 0 0);`   // Pure white for card surfaces and main content areas
    - `--fg: oklch(20% 0.02 240);`    // Dark foreground for primary text (adapted from FolioSync white text)
    - `--muted: oklch(50% 0.018 240);` // Muted grey for secondary text and subtle elements
    - `--border: oklch(90% 0.006 240);` // Light border color for subtle separation
    - `--accent: oklch(56% 0.18 255);`  // Primary accent blue, derived from FolioSync's System Blue
    ```
*   `foliosync_design_system.md` (Lines 260-263): Easing configurations:
    ```
    iOS Spring: cubic-bezier(0.25, 1, 0.5, 1)
    iOS Spring (TW): cubic-bezier(0.32, 0.72, 0, 1) -> Tailwind ease-ios
    iOS Bounce (TW): cubic-bezier(0.34, 1.56, 0.64, 1) -> Tailwind ease-ios-spring
    ```
*   `src/app/globals.css` (Lines 43-46, 72-77): Tailwind v4 theme settings showing:
    ```css
    --ease-ios: cubic-bezier(0.25, 1, 0.5, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
    ```
    And dark theme OKLch overrides:
    ```css
    --color-bg: oklch(14% 0.015 250);
    --color-surface: oklch(17% 0.016 250);
    --color-fg: oklch(96% 0.006 250);
    --color-muted: oklch(74% 0.01 250);
    --color-border: oklch(24% 0.012 250);
    --color-accent: oklch(68% 0.2 250);
    ```
*   `src/components/dashboard/OnboardingTour.tsx` (Lines 80, 316-320, 329-330): Spotlight padding and sizing logic:
    ```typescript
    const T = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };
    ...
    const mob      = window.innerWidth < 768;
    const cw       = mob ? window.innerWidth - 28 : CARD_W;
    ...
    const ring = coords
      ? { x: coords.left - PAD, y: coords.top - PAD, w: coords.width + PAD * 2, h: coords.height + PAD * 2, o: 1 }
      : { x: vw / 2, y: vh / 2, w: 0, h: 0, o: 0 };
    ```
*   `src/lib/haptic.ts` (Lines 117-141): Custom synthesized Web Audio tones and device vibrations mapping to `light`, `medium`, `heavy`, `success`, and `warning` types.

## 2. Logic Chain
1.  **Light/Dark Color Adaptation**: Since the onboarding modal must look high-fidelity and fit premium guidelines, we read `brand-spec.md` and `globals.css` to locate light and dark theme OKLch variables.
2.  **Typography & Radii Rules**: Under `foliosync_design_system.md` and `brand-spec.md`, the display typography prioritizes `Plus Jakarta Sans` for titles, with `Inter` for body text. Spacing and card structure follow the standard `rounded-[28px]` radius.
3.  **Spotlight Animation Math**: Based on `OnboardingTour.tsx`, the spotlight relies on an SVG mask hole calculating size from DOM coordinates with a safety padding (`PAD = 8`). Tweens use Tailwind's `ease-expo` transition over `0.6s`.
4.  **Mobile Scaling down to 320px**: At `320px` width, standard padding must be reduced from `p-6` to `p-4`, resulting in a card width of `292px` (`320px - 28px`), with safety layouts for the bottom-bar system indicator (`env(safe-area-inset-bottom)`).
5.  **Accessibility**: Fully keyboard-accessible modals require trapping focus inside control buttons, listening for standard keystrokes (`Escape` / `Enter` / `Arrow` keys), exposing ARIA roles/live regions, and eliminating animations under `prefers-reduced-motion` media queries.

## 3. Caveats
No caveats.

## 4. Conclusion
We compiled a comprehensive visual design, animation, component layout, and keyboard/screen reader accessibility guide for the interactive onboarding modal. The details are successfully written in `analysis.md`.

## 5. Verification Method
Verify that the output file `analysis.md` exists and contains the requested layout specifications by executing:
```powershell
Get-Content -Path "c:\Users\Windows 10\Downloads\ktunode\.agents\explorer_m1_2\analysis.md"
```
Or use the `view_file` tool to inspect the content. Run `npm run lint` inside the workspace directory to ensure there are no compilation errors in the codebase:
```powershell
npm run lint
```
