# FolioSync — Complete Design System Reference

> [!NOTE]
> Extracted from the **live codebase** on 2026-05-14. Every value is the exact token used in production.

---

## 1. Fonts

| Role | Family | Variable | Weights | Source |
|------|--------|----------|---------|--------|
| **Sans (primary)** | Inter | `--font-sans` | 400, 500, 600, 700, 800, 900 | `next/font/google` |
| **Mono** | JetBrains Mono | `--font-mono` | default | `next/font/google` |

**CSS stack:** `var(--font-sans), 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`

**Rendering:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`

---

## 2. Typography Scale

### Headings (all: `text-white`, `tracking-[-0.04em]`, `font-semibold`)

| Element | Mobile | Desktop | Weight | Tracking | Leading | Used In |
|---------|--------|---------|--------|----------|---------|---------|
| Hero H1 | `text-4xl` (36px) | `text-[88px]` | semibold | `-0.04em` | `1.05–1.1` | Hero |
| Section H2 | `text-4xl` (36px) | `text-5xl` (48px) | semibold | `tight` | `tight` | Features, HowItWorks, Showcase, Integrations, Pricing |
| CTA H2 | `text-4xl` (36px) | `text-[64px]` | semibold | `-0.03em` | `1.05` | CTA |
| FAQ H2 | `text-3xl` (30px) | `text-[40px]` | semibold | `tight` | — | FAQ |
| Testimonials H2 | `text-3xl` (30px) | `text-5xl` (48px) | semibold | `tight` | — | Testimonials |
| Card H3 | `text-[20px]` | `text-[20px]` | semibold | `tight` | — | Features, HowItWorks |
| Pricing H3 | `text-[22px]` | `text-[22px]` | semibold | `tight` | — | Pricing |
| Integration H3 | `text-[18px]` | `text-[18px]` | semibold | `tight` | — | Integrations |

### Body Text

| Variant | Size | Color | Weight | Leading | Used In |
|---------|------|-------|--------|---------|---------|
| Hero subtitle | `text-[17px]` → `text-[19px]` | `#A1A1AA` | regular | `relaxed` | Hero |
| Section description | `text-lg` (18px) | `zinc-400` | medium | `relaxed` | Features, HowItWorks, Showcase, Integrations |
| CTA description | `text-[18px]` | `zinc-400` | medium | `relaxed` | CTA |
| Pricing description | `text-[15px]` | `zinc-400` | medium | — | Pricing |
| Card body | `text-[15px]` | `zinc-400` | regular/medium | `relaxed` | Features, HowItWorks, FAQ, Integrations |
| Testimonial body | `text-[17px]` | `#A1A1AA` | medium | `relaxed` | Testimonials |
| Footer body | `text-[14px]` | `zinc-400` | medium | `relaxed` | Footer |

### Micro Text

| Variant | Size | Color | Weight | Tracking | Used In |
|---------|------|-------|--------|----------|---------|
| Nav links | `text-[13px]` | `zinc-400` | medium | — | Navbar |
| Section badge | `text-[13px]` | `#A1A1AA` | medium | `-0.01em` | All sections |
| Logo cloud label | `text-[13px]` | `zinc-500` | medium | `widest` + `uppercase` | LogoCloud |
| Footer category | `text-[13px]` | `white` | semibold | `tight` | Footer |
| Footer links | `text-[14px]` | `zinc-500` | regular | — | Footer |
| Pricing badge | `text-[12px]` | `white` | bold | `widest` + `uppercase` | Pricing |
| Stat label | `text-[13px]` | `zinc-500` | medium | `wide` | CTA |
| Stat value | `text-[32px]` | `white` | semibold | `-0.03em` | CTA |
| Price | `text-[48px]` | `white` | bold | `-0.04em` | Pricing |

---

## 3. Color Palette

### Backgrounds

| Token | Hex | Used In |
|-------|-----|---------|
| Page background | `#000000` | All sections |
| Card background | `#121212` | ios-card, FAQ, Integrations, Testimonials |
| Card hover | `#18181B` | ios-card:hover |
| Elevated card | `#18181A` | ios-card-elevated |
| Footer background | `#0A0A0A` | Footer, LogoCloud |
| Navbar (scrolled) | `#0A0A0A/95` | Navbar |
| Input/segmented bg | `#121212` | ios-segmented |
| Segmented active | `#27272A` | ios-segmented button.active |

### Text Colors

| Token | Hex / Class | Usage |
|-------|-------------|-------|
| Primary text | `white` / `#FFFFFF` | Headings, active states |
| Secondary text | `#A1A1AA` / `zinc-400` | Body text, descriptions |
| Muted text | `zinc-500` / `#71717A` | Labels, meta, inactive |
| Dimmed text | `zinc-600` | Copyright, fine print |
| Gradient text | `from-blue-400 to-indigo-400` | Hero headline accent |

### iOS System Colors (Accent Palette)

| Name | Hex | Usage |
|------|-----|-------|
| System Blue | `#0A84FF` / `#007AFF` | Primary CTA, badges, links |
| System Green | `#32D74B` | Success, Deploy step |
| System Purple | `#BF5AF2` | Creative, Generate step |
| System Orange | `#FF9F0A` | Warning, Creative theme |
| System Pink | `#FF375F` | Bold theme, project curation |
| System Red | `#FF453A` | Traffic light dot, privacy |
| System Teal | `#64D2FF` | SEO feature |
| System Indigo | `#5E5CE6` | Analytics feature |
| LinkedIn Blue | `#0A66C2` | LinkedIn integration |
| Dribbble Pink | `#EA4C89` | Dribbble integration |

### Borders

| Variant | Value |
|---------|-------|
| Default card | `rgba(255,255,255,0.04)` |
| Card hover | `rgba(255,255,255,0.08)` |
| Elevated card | `rgba(255,255,255,0.08)` |
| Nav pill group | `white/[0.05]` |
| Subtle divider | `white/[0.06]` |
| Icon border | `white/[0.05]` |

---

## 4. Buttons

### Primary (`.btn-primary`)

| Property | Value |
|----------|-------|
| Shape | `rounded-full` |
| Background | `linear-gradient(180deg, #2E95FF 0%, #007AFF 100%)` |
| Hover bg | `linear-gradient(180deg, #44A2FF 0%, #0A84FF 100%)` |
| Active bg | `#0066CC` |
| Shadow | `0 4px 14px 0 rgba(0,122,255,0.39), inset 0 1px 0 rgba(255,255,255,0.2)` |
| Hover shadow | `0 6px 20px rgba(0,122,255,0.4), inset 0 1px 0 rgba(255,255,255,0.3)` |
| Hover transform | `scale(0.98)` |
| Active transform | `scale(0.95)` |
| Tracking | `-0.01em` |
| Transition | `300ms cubic-bezier(0.25, 1, 0.5, 1)` |

**Size variants used in codebase:**

| Context | Padding | Font Size |
|---------|---------|-----------|
| Navbar CTA | `px-5 py-2` | `text-[14px]` |
| Hero CTA | `px-8 py-3.5` | `text-[16px]` |
| CTA section | `px-10 py-4` | `text-[16px]` |
| Pricing (popular) | `w-full py-3.5` | `text-[15px]` |
| Mobile menu | `w-full py-4` | `text-[15px]` |

### Secondary (`.btn-secondary`)

| Property | Value |
|----------|-------|
| Shape | `rounded-full` |
| Background | `transparent` |
| Border | `1px solid rgba(255,255,255,0.15)` |
| Text | `zinc-300` |
| Hover border | `rgba(255,255,255,0.3)` |
| Hover bg | `white/[0.03]` |
| Hover text | `white` |
| Transition | `300ms cubic-bezier(0.25, 1, 0.5, 1)` |

**Size variants:**

| Context | Padding | Font Size |
|---------|---------|-----------|
| Hero | `px-6 py-3.5` | `text-[16px]` |
| Pricing (hobby) | `w-full py-3.5` | `text-[15px]` |

---

## 5. Cards

### `.ios-card`

| Property | Value |
|----------|-------|
| Background | `#121212` |
| Border | `1px solid rgba(255,255,255,0.04)` |
| Radius | `24px` |
| Hover bg | `#18181B` |
| Hover border | `rgba(255,255,255,0.08)` |
| Transition | `400ms cubic-bezier(0.25, 1, 0.5, 1)` |
| Padding | `p-8 md:p-10` (Features, HowItWorks) / `p-10` (Testimonials) / `p-6 md:p-8` (FAQ) |

### `.ios-card-elevated`

| Property | Value |
|----------|-------|
| Background | `#18181A` |
| Border | `1px solid rgba(255,255,255,0.08)` |
| Radius | `28px` |
| Shadow | `0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)` |
| Hover transform | `translateY(-2px)` |
| Hover shadow | `0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)` |

### Browser Mockup (Hero + Showcase)

| Property | Value |
|----------|-------|
| Outer radius | `32px` |
| Border | `1px solid rgba(255,255,255,0.08)` |
| Background | `#0A0A0A` |
| Chrome bar bg | `#121212` |
| Chrome bar border | `rgba(255,255,255,0.04)` |
| Traffic dots | `#FF453A`, `#FF9F0A`, `#32D74B` (3×3px circles) |
| URL bar bg | `#18181A` |
| URL bar text | `text-[13px] text-zinc-400 font-medium` |
| Top highlight | `1px gradient via-white/[0.15]` |

---

## 6. Spacing & Layout

| Token | Value |
|-------|-------|
| Max container | `max-w-7xl` (1280px) |
| Narrow container | `max-w-5xl` (1024px) — Hero mockup, Showcase, Testimonials |
| FAQ container | `max-w-3xl` (768px) |
| Pricing container | `max-w-4xl` (896px) |
| Horizontal padding | `px-6` (all sections) |
| Section vertical | `py-24` (96px) standard / `py-32` (128px) Hero & CTA |
| Section header → content gap | `mb-20` (80px) standard / `mb-16` (64px) Showcase |
| Card grid gap | `gap-6` (24px) standard / `gap-4` (16px) Integrations, LogoCloud |
| Navbar float | `top-4` from viewport edge |
| Navbar scrolled | `max-w-4xl`, `rounded-full`, `py-3` |
| Navbar unscrolled | `max-w-7xl`, `bg-transparent`, `py-4` |

---

## 7. Border Radii

| Token | Value | Used In |
|-------|-------|---------|
| `rounded-full` | 9999px | Buttons, badges, nav pills, segmented |
| `rounded-[32px]` | 32px | Browser mockups, mobile menu |
| `ios-lg` / `28px` | 28px | Elevated cards |
| `ios` / `24px` | 24px | Standard cards |
| `rounded-[20px]` | 20px | LogoCloud pills, bold theme cards |
| `rounded-[18px]` | 18px | Icon containers |
| `rounded-2xl` | 16px | Developer theme code block |
| `rounded-xl` | 12px | Feature icon containers |
| `rounded-lg` | 8px | Logo icon container |
| `rounded-[10px]` | 10px | URL bar |

---

## 8. Shadows

| Token | Value |
|-------|-------|
| `.shadow-ios` | `0 4px 20px rgba(0,0,0,0.4)` |
| `.shadow-ios-lg` | `0 12px 40px rgba(0,0,0,0.5)` |
| Button primary | `0 4px 14px rgba(0,122,255,0.39), inset 0 1px 0 rgba(255,255,255,0.2)` |
| Popular badge | `0 4px 14px rgba(10,132,255,0.4)` |
| Avatar glow | `shadow-lg shadow-blue-500/20` |
| Status dot glow | `0 0 8px rgba(10,132,255,0.8)` |

---

## 9. Animations & Easing

### Easing Curves

| Name | Value | Usage |
|------|-------|-------|
| iOS Spring | `cubic-bezier(0.25, 1, 0.5, 1)` | **Primary — used everywhere** |
| iOS Spring (TW) | `cubic-bezier(0.32, 0.72, 0, 1)` | Tailwind `ease-ios` |
| iOS Bounce (TW) | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Tailwind `ease-ios-spring` |

### Framer Motion Patterns

| Pattern | initial | animate | Duration | Delay |
|---------|---------|---------|----------|-------|
| Fade up (sections) | `{ opacity: 0, y: 15 }` | `{ opacity: 1, y: 0 }` | `0.5s` | stagger `i * 0.05–0.1` |
| Fade up (hero) | `{ opacity: 0, y: 15 }` | `{ opacity: 1, y: 0 }` | `0.8s` | `0.1–0.3s` |
| Hero mockup | `{ opacity: 0, y: 40 }` | `{ opacity: 1, y: 0 }` | `1.2s` | `0.4s` |
| Scale in (badge) | `{ opacity: 0, scale: 0.95 }` | `{ opacity: 1, scale: 1 }` | `0.6s` | — |
| Slide right (cards) | `{ opacity: 0, x: 20 }` | `{ opacity: 1, x: 0 }` | `0.6s` | `1.0 + i*0.1` |
| Theme swap | `blur(4px)` + `scale(0.98)` | `blur(0)` + `scale(1)` | `0.4s` | — |
| FAQ expand | `height: 0` → `auto` | — | `0.3s` | — |

### CSS Animations

| Name | Definition | Duration |
|------|------------|----------|
| Marquee | `translateX(0)` → `translateX(-50%)` | `40s linear infinite` |

### Transition Durations

| Duration | Usage |
|----------|-------|
| `300ms` | Buttons, icons, nav links |
| `400ms` | Cards, pills, segmented control |
| `500ms` | Navbar scroll state, glows |
| `700ms` | Background number scale (HowItWorks) |

---

## 10. Icon System

| Library | Package | Sizes Used |
|---------|---------|------------|
| **Lucide React** | `lucide-react` | `w-4 h-4`, `w-5 h-5`, `w-6 h-6` |

### Icon Containers

| Variant | Size | Radius | Background | Border |
|---------|------|--------|------------|--------|
| `.ios-icon` | `w-10 h-10` / `w-12 h-12` | `18px` | `#18181B` | `white/[0.05]` |
| Feature icon | `w-12 h-12` | `12px (xl)` | colored `/10` | colored `/20` |
| HowItWorks icon | `w-14 h-14` | `16px (2xl)` | colored `/10` | `white/[0.05]` |
| Logo container | `w-8 h-8` | `8px (lg)` | `#18181B` | `white/[0.08]` |

---

## 11. Glow & Background Effects

| Effect | Implementation |
|--------|---------------|
| Hero blue glow | `w-[500px] h-[500px] bg-blue-500/10 blur-[120px]` |
| Hero indigo glow | `w-[400px] h-[400px] bg-indigo-500/10 blur-[100px]` |
| Mockup underglow | `bg-blue-500/10 blur-[80px]` |
| Pricing popular glow | `bg-[#0A84FF]/[0.05] blur-[40px]` |
| Dot grid | `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)` at `24px 24px` |
| Radial mask | `ellipse 80% 60% at 50% 50%` |
| Edge fade (marquee) | `w-32 md:w-64` gradient `from-[#0A0A0A] to-transparent` |
| Top highlight line | `1px gradient from-transparent via-white/[0.15] to-transparent` |
| Bottom fade (mockup) | `h-[100px] gradient from-[#0A0A0A] to-transparent` |

---

## 12. Section Badge (`.section-badge`)

```css
display: inline-flex;
gap: 8px;
padding: 4px 12px;
border-radius: 9999px;
font-size: 13px;
font-weight: 500;
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(255, 255, 255, 0.06);
color: #A1A1AA;
letter-spacing: -0.01em;
```

---

## 13. Foundree Pill (Footer Attribution)

```css
padding: 6px 14px;
background: rgba(255, 255, 255, 0.03);
border-radius: 999px;
border: 1px solid rgba(255, 255, 255, 0.08);
font-size: 13px;
font-weight: 500;
color: #A1A1AA;
/* Hover: bg 0.08, border 0.15, translateY(-1px), color white */
```

---

## 14. Responsive Breakpoints

| Breakpoint | Tailwind | Key Changes |
|------------|----------|-------------|
| Mobile | `< 640px` | Single column, full-width buttons, `text-4xl` headings |
| `sm` | `640px` | Side-by-side buttons, `br` shown |
| `md` | `768px` | Grid layouts activate, navbar desktop mode, larger headings |
| `lg` | `1024px` | 3-col Integrations grid, `text-[88px]` hero |

---

## 15. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS + `@tailwindcss/typography` |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts via `next/font` |
| Rendering | `"use client"` on all interactive components |
