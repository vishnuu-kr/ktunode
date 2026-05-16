# Brand Specification - Adapted from FolioSync Design System

This design leverages the comprehensive **FolioSync Design System** as its foundation, adapting its robust structure to achieve a "Human / approachable" and "Modern minimal" visual tone for KTU students.

## Color Palette Adaptation (OKLch)

The original FolioSync system is dark-themed. To achieve a more approachable aesthetic, we are adapting it to a light theme while retaining its key accent colors and maintaining clear contrast.

- `--bg: oklch(98% 0.004 240);`  // Light background, subtly cool (adapted from white)
- `--surface: oklch(100% 0 0);`   // Pure white for card surfaces and main content areas
- `--fg: oklch(20% 0.02 240);`    // Dark foreground for primary text (adapted from FolioSync white text)
- `--muted: oklch(50% 0.018 240);` // Muted grey for secondary text and subtle elements
- `--border: oklch(90% 0.006 240);` // Light border color for subtle separation
- `--accent: oklch(56% 0.18 255);`  // Primary accent blue, derived from FolioSync's System Blue, for key interactive elements.

## Font Stacks

Based on FolioSync, with a slight emphasis on a more approachable display font.

- `--font-display: 'Plus Jakarta Sans', var(--font-sans), 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;` // Modern sans-serif, prioritizing Plus Jakarta Sans for a softer feel
- `--font-body: var(--font-sans), 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;`     // Clean and highly readable body text
- `--font-mono: var(--font-mono), 'JetBrains Mono', ui-monospace, Menlo, monospace;` // Monospace for code/data

## Layout Posture Rules (Adapted from FolioSync)

- **Radii:** Comfortable radii (12-18px, leveraging FolioSync's `rounded-xl` to `ios` values) for interactive elements and cards to enhance approachability.
- **Border Weight:** Subtle hairline borders (FolioSync's `rgba(255,255,255,0.04)` adapted for light theme) for separation, with a slightly stronger border for interactive focus states.
- **Accent Budget:** The accent color (FolioSync's System Blue) will be used judiciously for primary actions, key highlights, and important calls to action, at most twice per screen to maintain a minimal feel and prevent visual clutter.
- **Hierarchy:** Clear visual hierarchy with ample whitespace and distinct typography for headings and body content, utilizing FolioSync's typographic scale.
- **Shadows:** Subtle elevation shadows (adapted from FolioSync's `.shadow-ios` values) on interactive cards or modals to indicate depth, avoiding heavy or numerous shadows, especially for a light theme.
