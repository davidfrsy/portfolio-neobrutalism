# DESIGN.md

## Identity

**Product:** Personal portfolio website for a software developer.
**Personality:** Bold, playful, unapologetic. Every decision is a statement, not a safe choice.
**Aesthetic:** Neo Brutalism — raw, unpolished edges, high-contrast borders, deliberate imperfection. The UI does not pretend to be invisible; it has presence.

---

## Palette

The user supplied a full color set. These are structured into roles:

| Role | Hex | Name |
|------|-----|------|
| **Base / Background** | `#F6E1C6` | Cream |
| **Ink / Text / Border** | `#111111` | Near-black |
| **Accent A (Primary CTA, Hero)** | `#F36B21` | Orange |
| **Accent B (Projects section)** | `#FF93AD` | Pink |
| **Accent C (About section)** | `#65A998` | Teal |
| **Accent D (FAQ section)** | `#FFC64A` | Yellow |
| **Accent E (Contact section)** | `#95B5E8` | Blue |
| **Accent F (hover / extra pop)** | `#43B7BC` | Cyan |

**Usage contract:**
- Each section owns one accent. Accents do not bleed between sections.
- Borders are `#111111`, 2-3px solid, no radius on structural blocks.
- Text on colored backgrounds must meet WCAG AA (4.5:1 for normal, 3:1 for large). Dark ink (`#111111`) on all light accents passes.
- Never use gradients as primary treatment.

---

## Typography

- **Display / Headlines:** Space Grotesk — reason: geometric personality matches neo brutalism's constructed aesthetic. Weight 700/800 for impact.
- **Body / UI:** DM Mono — reason: monospace grounds the developer identity without looking like a fake terminal. Weight 400/500.
- **Sizing scale:** Hero H1 clamp(3rem, 8vw, 7rem). Section H2 clamp(2rem, 5vw, 3.5rem). Body 1rem/1.5rem.

---

## Layout

- **Structure:** Single-page, section-based. Sections scroll vertically. Navigation is fixed, links scroll to anchors.
- **Grid:** Asymmetric where the content warrants it. Sections alternate between full-bleed accent backgrounds and cream base.
- **Borders:** Structural blocks use `3px solid #111111` with `box-shadow: 4px 4px 0 #111111` (the neo brutalist offset shadow, no blur).
- **Spacing:** Generous section padding (6-8rem vertical). Inner elements tighter (1.5-2rem).
- **Buttons:** Square-cornered (border-radius: 0), thick border, offset shadow, hover shifts the offset.

---

## Motion

**ENERGY 2 / RHYTHM 3 / MOTION 2**

- Hover on interactive elements: shadow offset animates from 4px 4px to 2px 2px (shift effect).
- Section entry: single translateY(24px) opacity 0 to 1 on scroll, 400ms ease-out. One direction only.
- No endless loops. No floating elements.
- prefers-reduced-motion: reduce collapses all transitions to instant.

---

## Sections (narrative order)

1. **Home (Hero)** — Accent Orange. Identity statement, name, role, two real CTAs.
2. **Projects** — Accent Pink. Real projects only, no fabricated case studies.
3. **About** — Accent Teal. Brief, direct. Skills as a factual list, not a buzzword parade.
4. **FAQ** — Accent Yellow. Questions a developer hiring you would actually ask.
5. **Contact** — Accent Blue. A real form with real feedback states.

---

## What is deliberately excluded

- No glassmorphism.
- No gradient backgrounds.
- No rounded pill buttons.
- No decorative dots, sparkle icons, or AI capsule badges.
- No fake testimonials, stats, or social proof.
- No emoji in UI text.
- No "Trusted By" section.
