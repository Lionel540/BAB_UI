# BAB_UI Design System

## Intent

BAB_UI is designed to feel engineered rather than decorative. The system draws from performance sports, machined carbon surfaces, and cockpit-like interfaces while staying controlled and minimal.

## Visual Principles

- Dark-first surfaces dominate the experience.
- Orange appears only where attention or interaction is required.
- Borders, spacing, and geometry do most of the compositional work.
- Motion is restrained and should support clarity, not spectacle.

## Core Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `bab-bg` | `#0F1115` | App background |
| `bab-surface` | `#1A1D22` | Cards, nav, panels |
| `bab-primary` | `#FF6A00` | Hover, active, controls |
| `bab-text` | `#E5E7EB` | Main text |
| `bab-muted` | `#9CA3AF` | Secondary text |
| `bab-line` | `rgba(229, 231, 235, 0.12)` | Borders and separators |

## Component Guidance

### Buttons

- Default button treatment is outline-first.
- Hover states add a contained orange glow rather than large area fills.
- Use solid orange only for deliberate primary actions.

### Cards

- Cards remain matte and dark at rest.
- Hover states lift slightly and introduce a precise edge highlight.
- Information density should stay balanced with generous spacing.

### Navigation

- Navigation is compact, low-noise, and horizontal by default.
- Active state is indicated by a line or edge treatment, not large filled pills.

### Hex Grid

- Hex cells are interactive data or control surfaces.
- The active state should feel alive but not animated for attention.
- Clusters should preserve breathing room around the grid.
