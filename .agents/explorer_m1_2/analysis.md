# UI Specification: Interactive Onboarding Modal

This specification details the design guidelines, animation logic, component styling, layout boundaries, and accessibility guidelines for the Interactive Onboarding Modal at KTUNODE.

---

## 1. Visual Design & Theme Adaptation

KTUNODE adapts the dark-themed **FolioSync Design System** into a clean, premium light theme while retaining accent highlights and proper contrast. 

### A. Color Palette (OKLch Space)
*   **Light Mode (Default):**
    *   `--color-bg`: `oklch(98% 0.004 240)` — A soft, cool white for the page background.
    *   `--color-surface`: `oklch(100% 0 0)` — Pure white card surfaces.
    *   `--color-fg`: `oklch(20% 0.02 240)` — High-contrast dark charcoal text.
    *   `--color-muted`: `oklch(50% 0.018 240)` — Balanced neutral gray for descriptions.
    *   `--color-border`: `oklch(90% 0.006 240)` — Extremely light divider border.
    *   `--color-accent`: `oklch(56% 0.18 255)` — Premium System Blue (adapted from FolioSync).
    *   `--color-accent-light`: `oklch(56% 0.18 255 / 8%)`
    *   `--color-accent-mid`: `oklch(56% 0.18 255 / 15%)`
*   **Dark Mode (Inherited):**
    *   `--color-bg`: `oklch(14% 0.015 250)` — Deep premium midnight backdrop.
    *   `--color-surface`: `oklch(17% 0.016 250)` — Elevated card surfaces.
    *   `--color-fg`: `oklch(96% 0.006 250)` — Off-white primary text.
    *   `--color-muted`: `oklch(74% 0.01 250)` — Secondary muted gray.
    *   `--color-border`: `oklch(24% 0.012 250)` — Subtle dark borders.
    *   `--color-accent`: `oklch(68% 0.2 250)` — Glowing neon blue accent.
    *   `--color-accent-light`: `oklch(68% 0.2 250 / 12%)`
    *   `--color-accent-mid`: `oklch(68% 0.2 250 / 22%)`

### B. Typography Scale & Hierarchy
*   **Headings (`--font-display`):** Priority given to `Plus Jakarta Sans` for soft, approachable feel.
    *   *Modal Title:* `text-base` to `text-lg` (15px to 18px), `font-extrabold`, tracking `tight` (`tracking-[-0.02em]`).
*   **Body & Descriptions (`--font-body`):** High readability `Inter` or system sans-serif.
    *   *Step Description:* `text-[12px]` to `text-[13px]`, `font-semibold`, leading `relaxed` (`leading-relaxed`), text color using `var(--color-muted)`.
*   **Micro Text:**
    *   *Step Counter Badge:* `text-[10px]`, `font-black`, uppercase, letter spacing `0.14em`.
    *   *Inline Help Badges:* `text-[10px]`, `font-black`, uppercase, tracking `wider`.

### C. Layout Posture, Shadows & Radii
*   **Card Outer Radius:** `rounded-[28px]` (28px) for comfortable, approachable corners.
*   **Interactive Element Radii:** `rounded-xl` (12px) to `rounded-2xl` (16px) for badges and buttons.
*   **Borders:** Hairline separators using `1px solid var(--color-border)` or opacity-mixed variants.
*   **Card Backdrop Blur:** `backdrop-blur-xl` combined with transparent alpha bg `rgba(255,255,255,0.95)` (Light) or `rgba(15,23,42,0.95)` (Dark).
*   **Elevated Shadows:**
    *   *Modal Card Shadow:* `0 20px 50px rgba(0,0,0,0.1)` (Light) and `0 20px 50px rgba(0,0,0,0.3)` (Dark).
    *   *Accent Primary Button Shadow:* `0 3px 12px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.35)`.

---

## 2. Animations & Step Transitions (Framer Motion Specs)

All animation curves prioritize smooth, spring-like, or exponential curves for a native-app feel.

### A. Easing & Transition Config
*   **Primary Expo Easing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)` (Tailwind `ease-expo`) for spotlight shifts and tooltip moves.
    *   `duration`: `0.6s`
    *   `transition`: `{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }`
*   **Dynamic Card Spring Transition:** Used for checklists and sudden viewport entries.
    *   `type`: `"spring"`
    *   `stiffness`: `240`
    *   `damping`: `22`

### B. Tooltip Card Transitions
To avoid jarring jumps, card dimensions and coordinates tween smoothly using Framer Motion.
*   **Content Swapping:** Use `AnimatePresence` with `mode="wait"`.
    *   *Exit Animation:* `opacity: 0, y: -4` with `duration: 0.15s` (`easeOut`).
    *   *Entry Animation:* `opacity: 1, y: 0` with `duration: 0.15s` (`easeOut`).
    *   *Initial State:* `opacity: 0, y: 4`.

### C. Spotlight Ring Mechanics
*   **Target Padding:** A safety padding `PAD = 8px` is added to all measured targets.
*   **SVG Mask Hole Tweening:**
    ```javascript
    <motion.rect
      animate={{
        x: coords.left - PAD,
        y: coords.top - PAD,
        width: coords.width + PAD * 2,
        height: coords.height + PAD * 2,
        rx: spotlightRadius,
        ry: spotlightRadius
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    />
    ```
*   **Pulsing Halo Ring:** An auxiliary indicator scales `1` to `1.05` and fades opacity `0.15` to `0.45` iteratively (`repeat: Infinity`, `duration: 2s`) matching the target position.
*   **Spotlight Ring Glow Shadows:**
    *   `0 0 0 1px color-mix(in srgb, var(--color-accent) 25%, transparent)`
    *   `0 0 28px 6px color-mix(in srgb, var(--color-accent) 30%, transparent)`
    *   `inset 0 0 12px 2px color-mix(in srgb, var(--color-accent) 10%, transparent)`

---

## 3. Component Styling Layout & Responsiveness

The modal structure shifts dynamically between desktop viewports and ultra-compact mobile layouts.

### A. Viewport Layout Switch
*   **Desktop Layout (>= 768px):**
    *   *Tooltip placement:* Positional tooltips (`left`, `right`, `top`, `bottom`) located relative to the targeted telemetry elements.
    *   *Tooltip Width:* Fixed at `CARD_W = 316px` to prevent text-width reflows.
*   **Mobile Layout (< 768px):**
    *   *Tooltip Placement:* Lock tooltips to bottom sheet style (`bottom-0 w-full`) or center-floating cards depending on screen space.
    *   *Dynamic Width:* Set tooltip width (`cw`) to `window.innerWidth - 28px` to ensure a consistent `14px` side margin.

### B. Mobile Scaling down to 320px (Tested & Scoped)
At the lowest boundary of `320px` width:
1.  **Padding Reductions:** Tooltip outer container padding must decrease from `p-6` (24px) to `p-4` (16px) to maximize content area.
2.  **Width Limits:** Tooltip width `cw` drops to `292px` (`320px - 28px`).
3.  **Flex Button Adjustments:**
    *   Inline control buttons (like "Skip Tour" and "Next") must utilize `flex-wrap` or flex columns if content strings overflow.
    *   Touch targets must remain at least `44px` tall (`min-h-[44px]`) to maintain tap accuracy.
4.  **Hardware Overlays (SafeArea):** Appends `ios-safe-bottom` using `env(safe-area-inset-bottom, 16px)` to avoid overlapping system home indicator bars on iOS devices.

---

## 4. Accessibility Guidelines (Keyboard & Screen Reader)

The onboarding flow must be fully usable by assistive technologies and keyboard-only users.

### A. Focus Management (Keyboard Navigation)
*   **Focus Trapping:** When the onboarding modal is active, keyboard focus must be trapped within the active tooltip card.
    *   Use a Focus Trap library or a React `keydown` event listener to loop focus between the "Skip" and "Next/Start" buttons.
*   **Focus-Visible States:** Focus indicators must match KTUNODE's high-contrast global styling:
    *   `outline: 2px solid var(--color-accent) !important`
    *   `outline-offset: 2px !important`
    *   `border-radius: 6px`
*   **Keyboard Shortcuts:**
    *   `Escape`: Immediately exits/dismisses the tour.
    *   `Space / Enter`: Activates the currently focused button.
    *   `ArrowRight / Tab`: Move forward to next step.
    *   `ArrowLeft`: Move back to previous step (if applicable).

### B. Screen Reader (Semantic Markup & ARIA Roles)
*   **Semantic Container:**
    *   Use `role="dialog"` or `role="alertdialog"` on the outer overlay container.
    *   Set `aria-modal="true"`.
    *   Link headings and descriptions: `aria-labelledby="tour-title"` and `aria-describedby="tour-desc"`.
*   **Dynamic Step Announcements:**
    *   Provide an element with `aria-live="polite"` to announce the step changes, e.g., *"Step 2 of 8: Explore Syllabus. First, let's open a subject syllabus."*
    *   Provide visually hidden step descriptions (`sr-only` class) detailing the current highlighted target area and its purpose.
*   **Interactive Control Labels:**
    *   All buttons must have explicit, screen-readable text. Skip/Close icon buttons must have `aria-label="Skip onboarding"` or `aria-label="Close onboarding modal"`.

### C. Reduced Motion Handling
For users with vestibular disorders or animation preferences:
*   **Tailwind Media Query:** Respect `@media (prefers-reduced-motion: reduce)`.
*   **Framer Motion Config:**
    *   Disable spring and layout animations.
    *   Set `duration` to `0.01ms` or convert all transitions to standard immediate swaps (`type: "tween"`, `duration: 0`).
