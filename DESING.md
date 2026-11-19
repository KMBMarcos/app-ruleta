# Design System & UI Specification
## Atelier North — Independent Brand & Digital Design Studio

**Document type:** Design Specification  
**Project:** Atelier North  
**Design direction:** Editorial / Minimalist / Swiss-inspired  
**Primary objective:** Create a complete, responsive landing page that communicates editorial confidence, visual sophistication, and a strong creative identity.

---

# 1. Project Overview

Build a complete landing page for **Atelier North**, an independent brand and digital design studio operating between Copenhagen and New York.

The experience must communicate confidence through typography, whitespace, visual composition, and carefully structured content.

The design should feel like a printed annual or an independent design publication rather than a conventional website template.

### Core Design Principles

- Editorial confidence.
- Oversized grotesk typography.
- Generous whitespace.
- Strict 12-column grid system.
- Minimalist visual language.
- Strong hierarchy and alignment.
- Project-focused storytelling.
- Subtle and intentional animations.
- One restrained orange accent.

### Implementation Priority

1. Visual fidelity.
2. Responsive behavior.
3. Accessibility.
4. Animation quality.
5. Maintainable implementation.

### Technical Requirements

- First, inspect the existing project structure.
- Follow the existing framework, conventions, components, and design tokens.
- Reuse existing dependencies when appropriate.
- Do not introduce unnecessary dependencies.
- If no existing stack is available, implement the page as a single HTML file with inline CSS and minimal JavaScript.
- The fallback implementation must have zero external dependencies.

---

# 2. Design Tokens

All visual elements must follow the following design tokens.

## 2.1 Color Palette

| Token | Value | Usage |
|---|---|---|
| Bone | `#F2F0EB` | Primary background |
| Ink | `#111110` | Primary text |
| Muted | `#6B6A65` | Secondary text |
| Line | `rgba(17, 17, 16, 0.14)` | Dividers and borders |
| Orange | `#FF4F00` | Accent color |

### Color Restrictions

Orange must only appear in:

- The final period of the hero heading.
- Hover underlines.
- Keyboard focus indicators.
- Small decorative marks inside project artwork.

Do not introduce additional accent colors outside the artwork specifications.

## 2.2 Typography

**Primary font stack:**

`"Helvetica Neue", Helvetica, Arial, sans-serif`

Typography rules:

- Display weight: 500.
- Body weight: 400.
- Use only the specified weights.
- All numerical content must use tabular numerals.
- Avoid unnecessary font variations.

## 2.3 Layout System

| Property | Specification |
|---|---|
| Maximum width | 1440px |
| Alignment | Centered container |
| Horizontal padding | `clamp(20px, 3vw, 40px)` |
| Grid columns | 12 |
| Desktop gutter | 24px |
| Mobile gutter | 16px |
| Mobile breakpoint | 760px |

The 12-column grid must be the foundation of the entire layout.

Avoid centered content compositions. Content should follow the grid and maintain deliberate left alignment.

## 2.4 Global Link Behavior

Default:

- Text color: Ink.
- No visible underline.
- No decorative icons.

Hover:

- An orange 1px underline grows from left to right.
- Use a background-image linear gradient.
- Transition duration: 300ms.
- Easing: ease.

Focus:

- 2px orange outline.
- 4px outline offset.

---

# 3. Page Architecture

The landing page consists of seven main sections:

1. Header
2. Hero
3. Selected Work
4. Clients
5. Studio Numbers
6. Contact
7. Footer

Each section must preserve the same grid, typography, spacing, and alignment principles.

---

# 4. Header

**Vertical padding:** 24px 0.

The header uses three content groups distributed across the 12-column grid.

### Layout

| Grid columns | Content |
|---|---|
| 1–4 | Atelier North |
| 5–8 | Copenhagen / New York |
| 9–12 | Navigation and live clock |

### Brand

Text: `Atelier North`

- Font size: 15px.
- Weight: 500.

### Location

Text: `Copenhagen / New York`

- Font size: 15px.
- Color: Muted.

### Navigation

Links:

- Work
- Studio
- Contact

Specifications:

- Font size: 15px.
- Gap: 24px.
- Right aligned.

The live clock must appear 24px after the navigation.

### Live Clock

Display format:

`CPH 18:42`

Implementation:

- Use JavaScript `Intl.DateTimeFormat`.
- Locale: `en-GB`.
- Time zone: `Europe/Copenhagen`.
- Format: 24-hour time with hours and minutes.
- Update on page load and every 15 seconds.
- Use `textContent` to update the element.
- Hide the clock if Intl or the requested time zone is unavailable.

Accessibility:

- `aria-label="Current time in Copenhagen"`.
- `aria-live="off"`.

### Responsive Behavior

Below 760px:

- Show only the brand name and navigation links.
- Hide the location.
- Hide the clock.

---

# 5. Hero Section

**Vertical spacing:** `14vh 0 72px`.

## 5.1 Main Heading

Text:

"We design brands"  
"that age well."

The heading must be the strongest visual element on the page.

Specifications:

- One semantic `h1`.
- Font size: `clamp(56px, 11vw, 176px)`.
- Weight: 500.
- Line height: 0.92.
- Letter spacing: -0.055em.
- Color: Ink.

Each line must be wrapped in an individual span.

The wrappers must use:

- `overflow: hidden`.
- `padding-bottom: 0.2em`.
- `margin-bottom: -0.2em`.

The final period must use Orange.

## 5.2 Hero Information Grid

Spacing below the heading: 64px.

### Studio — Columns 1–4

Label:

`STUDIO`

- Font size: 13px.
- Uppercase.
- Letter spacing: 0.12em.
- Color: Muted.

Description:

"Independent brand and digital studio. Fourteen people, two cities, one standard."

- Margin top: 12px.
- Font size: 18px.
- Line height: 1.45.

### Services — Columns 7–12

Label:

`SERVICES`

Use the same label styling.

Description:

"Identity, Digital products, Packaging, Motion, Editorial"

- Margin top: 12px.
- Font size: 18px.
- Line height: 1.45.

### Responsive Behavior

Below 760px:

- Both blocks span all 12 columns.
- Vertical separation: 32px.

---

# 6. Selected Work

**Section padding top:** 48px.

This section showcases four projects and must prioritize visual storytelling over decorative UI.

## 6.1 Section Header

Left:

`Selected work`

- Font size: 15px.
- Weight: 500.

Right:

`2023 to 2026`

- Font size: 15px.
- Color: Muted.

Below the header:

- 1px horizontal divider.
- 16px spacing after the divider.
- 32px spacing before the project grid.

Semantic heading: `h2`.

## 6.2 Project Grid

Four projects distributed across the 12-column grid.

| Project | Columns | Aspect ratio |
|---|---|---|
| A — Halden Coffee | 1–7 | 4:3 |
| B — Mercer Bank | 8–12 | 4:5 |
| C — Ostra Ceramics | 1–5 | 4:5 |
| D — Field Studies | 6–12 | 4:3 |

Vertical row gap: 64px.

### Responsive Behavior

Below 760px:

- Every project spans all 12 columns.
- All artwork uses a 4:3 aspect ratio.

## 6.3 Project Tile Structure

Each tile must be a single clickable link.

Structure:

- Artwork container.
- Decorative inner artwork layer.
- Caption row.

The artwork container must use `overflow: hidden`.

Hover animation:

- Inner artwork scales to 1.03.
- Duration: 700ms.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`.

### Caption

Spacing below artwork: 14px.

Left:

- Project name.
- Font size: 16px.
- Weight: 500.

Right:

- Discipline.
- Year.
- External-link arrow `↗`.

Specifications:

- Font size: 15px.
- Color: Muted.
- Arrow initially hidden or visually subdued.
- On hover, arrow fades in and shifts 3px up-right.

Project names must be semantic `h3` elements inside their respective links.

## 6.4 Project Artwork Specifications

All artwork must be created using CSS only.

No external images, stock photography, mockups, or gradients.

### Project A — Halden Coffee

<escape>Identity · 2026</escape>

Artwork:

- Background: `#2B1D14`.
- Main circle: 62% width.
- Main circle color: `#EDE3D2`.
- Position: 64% horizontal, 46% vertical.
- Secondary circle: 9% width.
- Secondary color: `#FF4F00`.
- Position: 30% horizontal, 70% vertical.

Typography:

- Text: `Halden`.
- Font: Georgia.
- Style: Italic.
- Color: `#EDE3D2`.
- Font size: `clamp(36px, 5vw, 72px)`.
- Position: Bottom-left, 6% horizontal and 8% vertical.

### Project B — Mercer Bank

<escape>Digital product · 2025</escape>

Artwork:

- Background: `#D9DEE3`.
- Three overlapping rounded rectangles representing wallet cards.
- Card height: 26%.
- Border radius: 18px.

Back card:

- Color: `#18243A`.
- Top: 24%.
- Left: 19%.
- Width: 62%.

Middle card:

- Color: `#2E3F5E`.
- Top: 31%.
- Left: 17%.
- Width: 66%.

Front card:

- Background: `#FFFFFF`.
- Top: 38%.
- Left: 15%.
- Width: 70%.
- Border: `1px solid rgba(24, 36, 58, 0.12)`.

Front card details:

- Two horizontal bars.
- Height: 8px.
- Border radius: 4px.
- Left position: 8%.

First bar:

- Width: 40%.
- Top: 26%.
- Color: `#18243A`.

Second bar:

- Width: 22%.
- Top: 46%.
- Color: `#C7CED6`.

### Project C — Ostra Ceramics

<escape>Packaging · 2025</escape>

Artwork:

- Background: `#C9B8A4`.
- Three arches aligned along the bottom.
- Border radius: `999px 999px 0 0`.
- Width: 26% each.
- Horizontal spacing: 6%.
- Center the group horizontally.

Arch specifications:

| Arch | Height | Color |
|---|---|---|
| Left | 58% | `#A0522D` |
| Center | 74% | `#F2F0EB` |
| Right | 46% | `#6B7A4A` |

### Project D — Field Studies

<escape>Editorial · 2024</escape>

Artwork:

- Background: `#111110`.
- Use CSS container queries.
- Container type: `inline-size`.

Typography:

- Text: `F/S`.
- Color: `#F2F0EB`.
- Weight: 500.
- Font size: `34cqw`.
- Letter spacing: -0.06em.
- Line height: 0.8.
- Position: Bottom-left, 5% horizontal and 4% vertical.

Decorative element:

- Horizontal orange line.
- Height: 2px.
- Width: 30%.
- Position: Top 10%, left 5%.

All decorative artwork layers must use `aria-hidden="true"`.

---

# 7. Clients Marquee

**Section padding top:** 120px.

## 7.1 Section Heading

Text:

`CLIENTS INCLUDE`

Specifications:

- Semantic `h2`.
- Font size: 13px.
- Uppercase.
- Letter spacing: 0.12em.
- Color: Muted.

Spacing below heading: 24px.

## 7.2 Marquee

The marquee consists of a single horizontal row with duplicated content.

Client names:

- Halden
- Mercer
- Ostra
- Northwind
- Lumen
- Kite
- Parallel
- Oxide

### Visual Specifications

- Overflow hidden.
- 1px border above.
- 1px border below.
- Vertical padding: 28px.

Typography:

- Font size: `clamp(28px, 4vw, 48px)`.
- Weight: 500.
- Letter spacing: -0.03em.
- Color: Ink.

Each client name must be followed by a muted `/` separator with 32px spacing on each side.

### Animation

Create a continuous horizontal animation:

- Initial position: `translateX(0)`.
- Final position: `translateX(-50%)`.
- Duration: 40 seconds.
- Timing: linear.
- Infinite iteration.

Render the list twice.

The second copy must have `aria-hidden="true"`.

### Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Disable marquee animation.
- Display only the first copy.
- Allow client names to wrap into multiple lines.
- Hide the duplicated copy.

---

# 8. Studio Numbers

**Section padding top:** 120px.

## 8.1 Section Heading

Text:

`THE STUDIO IN NUMBERS`

Specifications:

- Semantic `h2`.
- Font size: 13px.
- Uppercase.
- Letter spacing: 0.12em.
- Color: Muted.

Spacing before columns: 32px.

## 8.2 Statistics Grid

Three equal columns.

Each column spans four grid columns.

### Column Structure

- Top border: 1px solid Line.
- Top padding: 20px.
- Number typography:
  - Font size: `clamp(56px, 7vw, 96px)`.
  - Weight: 500.
  - Letter spacing: -0.05em.
  - Line height: 1.
- Label:
  - Margin top: 10px.
  - Font size: 15px.
  - Color: Muted.

### Content

| Number | Label |
|---|---|
| 14 | years independent |
| 120+ | brands launched |
| 9 | design awards |

### Responsive Behavior

Below 760px:

- Each column spans all 12 columns.
- Vertical gap: 32px.

---

# 9. Contact Section

**Section padding top:** 140px.

## 9.1 Section Label

Text:

`NEW BUSINESS`

Specifications:

- Font size: 13px.
- Uppercase.
- Letter spacing: 0.12em.
- Color: Muted.

## 9.2 Main CTA

Spacing below label: 20px.

Text:

`Start a project →`

Specifications:

- Font size: `clamp(48px, 9vw, 140px)`.
- Weight: 500.
- Letter spacing: -0.05em.
- Line height: 0.95.
- Color: Ink.

Hover behavior:

- Orange underline with 4px thickness.
- Arrow shifts 8px to the right.
- Transition duration: 300ms.

The CTA must be a functional link.

## 9.3 Contact Information Grid

Spacing below CTA: 56px.

### Email — Columns 1–4

`hello@ateliernorth.studio`

- Font size: 18px.
- Functional `mailto:` link.

### Copenhagen — Columns 7–9

Title: `Copenhagen`

Address:

`Bredgade 24, 1260 København K`

- Font size: 16px.
- Color: Muted.
- Two-line layout where necessary.

### New York — Columns 10–12

Title: `New York`

Address:

`61 Greene St, New York, NY 10012`

- Font size: 16px.
- Color: Muted.
- Two-line layout where necessary.

### Responsive Behavior

Below 760px:

- Every block spans all 12 columns.
- Vertical separation: 24px.

---

# 10. Footer

**Section padding:** 120px 0 32px.

Visual structure:

- 1px top border.
- Top padding: 20px.
- Flex layout.
- `justify-content: space-between`.
- Allow wrapping.
- Font size: 14px.

### Content

Left:

`© 2026 Atelier North`

- Color: Muted.

Center:

- Instagram
- LinkedIn
- Are.na

Spacing: 24px.

Right:

`Back to top ↑`

Must link to the top of the page.

---

# 11. Motion & Interaction

Animations must feel deliberate, smooth, and restrained.

Avoid excessive motion or effects that compete with the content.

## 11.1 Hero Reveal

Each heading line animates independently.

Initial state:

`translateY(125%)`

Final state:

`translateY(0)`

Specifications:

- Duration: 900ms.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Second line delay: 120ms.

The animation must happen inside the overflow-hidden wrappers.

## 11.2 Hero Information Reveal

- Initial opacity: 0.
- Final opacity: 1.
- Delay: 500ms.
- Duration: 700ms.

## 11.3 Selected Work Reveal

Animate all project tiles as one group.

- Initial opacity: 0.
- Initial vertical offset: 24px.
- Final opacity: 1.
- Final vertical offset: 0.
- Delay: 700ms.

## 11.4 Project Hover

- Scale artwork to 1.03.
- Duration: 700ms.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`.

## 11.5 Marquee

- Continuous horizontal movement.
- Duration: 40 seconds.
- Linear easing.
- Infinite iteration.

## 11.6 Global Reduced Motion

Respect:

`prefers-reduced-motion: reduce`

When enabled:

- Disable hero reveal animations.
- Disable project reveal animations.
- Disable marquee movement.
- Disable artwork scaling.
- Make hover underlines appear instantly.

All content must remain visible without animation.

---

# 12. Accessibility Requirements

Accessibility must be considered throughout the implementation.

### Semantic Structure

- Exactly one `h1`.
- `h2` elements for:
  - Selected work.
  - Clients include.
  - The studio in numbers.
  - New business.
- `h3` elements for project names.

### Decorative Elements

- Artwork layers must use `aria-hidden="true"`.
- Decorative shapes must not introduce unnecessary screen reader content.
- Project links must expose their project names through accessible text.

### Marquee

- First client list must be a real semantic list.
- Duplicated list must use `aria-hidden="true"`.

### Contrast

Muted text must maintain a minimum contrast ratio of 4.5:1 against the Bone background.

### Keyboard Navigation

- All links must be keyboard accessible.
- Visible focus states are mandatory.
- Focus indicators must use the specified orange outline.

### Motion Accessibility

All animations must respect the user's reduced-motion preference.

---

# 13. Strict Visual Restrictions

The following elements are explicitly prohibited.

- Stock photography.
- External project images.
- Device mockups.
- Gradients.
- Drop shadows.
- Rounded cards around project artwork.
- Centered content layouts.
- Hamburger navigation at desktop widths.
- Excessive font weights.
- Emoji.
- Decorative icons other than the two specified arrows.
- Lorem ipsum.
- Unnecessary visual decorations.
- Additional orange accents.
- Unrequested UI components.

The design must remain restrained and editorial.

---

# 14. Responsive Design Strategy

Desktop is the primary reference composition, but the implementation must work across desktop, tablet, and mobile.

### Desktop

- 12-column grid.
- 24px gutter.
- Full navigation.
- Three-column header composition.
- Original project grid proportions.

### Mobile

Breakpoint: 760px.

- 12-column grid.
- 16px gutter.
- Simplified header.
- Hero information stacked vertically.
- Projects stacked into one column.
- All artwork uses 4:3 aspect ratio.
- Statistics stacked vertically.
- Contact information stacked vertically.
- Marquee adapts to reduced motion preferences.

Do not simply shrink the desktop layout. Preserve its hierarchy and editorial character.

---

# 15. Implementation Guidelines

Before writing code:

1. Inspect the existing repository.
2. Identify the framework and current build configuration.
3. Review existing components and styling conventions.
4. Identify available fonts and design tokens.
5. Determine the best implementation strategy without introducing unnecessary dependencies.

During implementation:

- Use reusable components where appropriate.
- Keep styling organized and maintainable.
- Use CSS custom properties for design tokens.
- Use semantic HTML.
- Avoid unnecessary JavaScript.
- Implement animations primarily with CSS.
- Keep responsive behavior consistent.
- Ensure all links and navigation elements work.
- Use the existing project architecture.

If the project has no existing stack, use a single HTML file containing inline CSS and minimal JavaScript.

---

# 16. Final Quality Checklist

Before considering the implementation complete, verify the following:

## Design

- [ ] Bone background and Ink typography.
- [ ] Correct orange accent usage.
- [ ] Consistent 12-column grid.
- [ ] Correct typography scale.
- [ ] Generous whitespace.
- [ ] No unnecessary decorative elements.
- [ ] All seven sections implemented.

## Header & Hero

- [ ] Copenhagen live clock works.  
- [ ] Hero heading uses the specified reveal.
- [ ] Intro information follows the grid.

## Selected Work

- [ ] Four projects implemented.
- [ ] CSS-only artwork.
- [ ] Correct project proportions.
- [ ] Hover scaling works.
- [ ] Captions and arrows work.

## Contact & Footer

- [ ] CTA works.
- [ ] Email uses a mailto link.
- [ ] Social links are functional.
- [ ] Back to top works.

## Accessibility & Responsive

- [ ] Semantic heading hierarchy.
- [ ] Keyboard navigation.
- [ ] Visible focus indicators.
- [ ] Reduced-motion support.
- [ ] Muted text contrast verified.
- [ ] Mobile layout verified below 760px.

---

# 17. Definition of Done

The implementation is complete when the landing page faithfully reflects the Atelier North design direction and all specified sections, interactions, responsive behaviors, and accessibility requirements work correctly.

**The final result should feel like an independent design studio's printed annual translated into a digital experience: confident typography, intentional whitespace, strong project artwork, and nothing unnecessary.**