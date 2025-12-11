# Story 1.2: Design System & Typography

Status: Done

## Story

**As a** visitor,
**I want** the portfolio to have consistent, professional typography and colors,
**So that** I perceive quality and attention to detail.

## Acceptance Criteria

1. **Given** the project is initialized
2. **When** I view the portfolio
3. **Then** Inter font is loaded from Next.js Google Fonts for body/heading text
4. **And** JetBrains Mono is loaded for code/badge elements
5. **And** CSS variables define the color palette in `globals.css`:
   - `--color-background: #FAFAFA`
   - `--color-surface: #FFFFFF`
   - `--color-text-primary: #1A1A1A`
   - `--color-text-secondary: #6B7280`
   - `--color-accent: #3B82F6`
   - `--color-border: #E5E7EB`
   - `--color-hover: #2563EB`
6. **And** CSS variables define the spacing scale (4px base: `--spacing-1` through `--spacing-24`)
7. **And** CSS variables define global design tokens:
   - Radius: `--radius-sm`, `--radius-md`, `--radius-lg`
   - Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
   - Transitions: `--transition-fast`, `--transition-normal`
8. **And** Font variables follow semantic naming:
   - `--font-body` / `--font-heading` (Inter)
   - `--font-mono` (JetBrains Mono)
9. **And** Font sizes follow the 1.25 type scale (12px to 48px)
10. **And** Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
11. **And** Maximum content width is 1200px, centered
12. **And** Tailwind is configured via CSS variables in `globals.css` (Tailwind v4 @theme usage)
13. **And** `globals.css` contains all CSS custom properties

## Tasks / Subtasks

- [x] Configure Fonts (AC: 3-4, 8)
  - [x] Import `Inter` and `JetBrains_Mono` from `next/font/google` in `src/app/layout.tsx`
  - [x] Configure font variables: `--font-body`, `--font-heading`, `--font-mono` and apply to `<body>`
- [x] Implement Design Tokens (AC: 5-7, 13)
  - [x] Define CSS variables in `src/app/globals.css` for Colors, Formatting, Spacing, Radius, Shadows, and Transitions
  - [x] Implement Typographic scale variables
- [x] Configure Tailwind v4 (AC: 12)
  - [x] Use `@theme` block in `globals.css` to map CSS variables to Tailwind utilities
  - [x] Ensure `colors`, `fontFamily`, and `spacing` are correctly mapped
- [x] Verify Implementation (AC: 10)
  - [x] Check contrast ratios for text colors
    - [x] Verify font loading in browser devtools

### Review Follow-ups (AI)
- [x] [AI-Review][HIGH] Fix incomplete Tailwind parameter mapping (missing shadows, radius-lg, spacing-2 etc) in `src/app/globals.css`
- [x] [AI-Review][HIGH] Implement max-width 1200px constraint per AC 11 in `src/app/layout.tsx` or `src/app/globals.css`
- [x] [AI-Review][MEDIUM] Remove duplicate `${inter.variable}` injection in `src/app/layout.tsx:31`
- [x] [AI-Review][MEDIUM] Fix typography scale: `--text-sm` (16px) is identical to base, should be smaller (12.8px or 14px) in `src/app/globals.css`
- [x] [AI-Review][LOW] Convert `scripts/verify-fonts.js` to ES Modules to match project standards

### Review Follow-ups Round 2 (AI) - 2025-12-11
- [x] [AI-Review][CRITICAL] Verify WCAG AA contrast ratios for color palette - AC10 marked done but no verification performed [`globals.css`]
- [x] [AI-Review][HIGH] Fix `--font-heading` implementation - remove inline style hack, define properly via next/font or CSS [`layout.tsx:32`]
- [x] [AI-Review][HIGH] Add missing typography scale sizes `--text-4xl` (36px) and `--text-5xl` (48px) per UX spec [`globals.css`]
- [x] [AI-Review][MEDIUM] Fix Tailwind v4 @theme block - replace self-referential `var()` with actual values or proper mapping [`globals.css:57-97`]
- [x] [AI-Review][MEDIUM] Add `--transition-fast` and `--transition-normal` to @theme block for Tailwind utility access [`globals.css`]
- [x] [AI-Review][MEDIUM] Add `docs/sprint-artifacts/sprint-status.yaml` to File List - file was modified but not documented
- [x] [AI-Review][LOW] Update metadata from "Create Next App" defaults to portfolio-specific values [`layout.tsx:17-20`]
- [x] [AI-Review][LOW] Consider aligning variable naming: `--text-*` vs spec's `--font-size-*` convention [`globals.css`]

## Dev Notes

### Architecture Compliance
- **Styling**: Use Tailwind v4 CSS configuration via `@theme` in `globals.css`.
- **Fonts**: Use `next/font` for optimal performance (no CLS).
- **Naming**: Use kebab-case for CSS variables as defined in Architecture.

### UX Specifications
- **Colors**:
  - Accent: `#3B82F6` (Blue-500 equivalent)
  - Background: `#FAFAFA` (Neutral-50)
- **Typography Matrix**:
  - H1: 48px (`--font-size-5xl`) - Weight 700
  - H2: 30px (`--font-size-3xl`) - Weight 700
  - Body: 16px (`--font-size-base`) - Weight 400
- **Spacing**: Base unit 4px. Section padding 96px (`--spacing-24`).

### Previous Story Insights (Story 1.1)
- Project is initialized with Tailwind v4. Configuration should be done in CSS, not `tailwind.config.ts`.
- `globals.css` already exists; clean up default Next.js styles before adding new tokens.

### References
- [UX Design Specification: Design System Foundation](docs/ux-design-specification.md#design-system-foundation)
- [Architecture: Frontend Architecture](docs/architecture.md#frontend-architecture)
- [Epics: Story 1.2](docs/epics.md#story-12-design-system--typography)

## Dev Agent Record

### Context Reference
- **Story Source**: [Epics File](docs/epics.md)
- **Architecture**: [Architecture File](docs/architecture.md)
- **UX Spec**: [UX Design Spec](docs/ux-design-specification.md)

### Agent Model Used
- Antigravity

### Debug Log References
- N/A

### Completion Notes List
- [x] Fonts configured
- [x] CSS variables defined
- [x] Tailwind v4 @theme configured
- [x] Contrast verified via verify-contrast.mjs
- [x] Review items addressed (Round 2)

### File List
- src/app/layout.tsx
- src/app/globals.css
- scripts/verify-fonts.mjs
- scripts/verify-contrast.mjs
- docs/sprint-artifacts/sprint-status.yaml

### Change Log
- Configured Inter and JetBrains Mono fonts in `layout.tsx`
- Replaced default CSS with Design System tokens in `globals.css`
- Configured Tailwind v4 `@theme`
- Added verification script
- Addressed review findings: Fixed Tailwind mappings, max-width, typography scale, and converted script to ESM
- **2025-12-11 Code Review Round 2**: Found 8 issues (1 CRITICAL, 2 HIGH, 3 MEDIUM, 2 LOW) - added as action items
- **Resolution of Round 2**: Fixed all issues including contrast verification, metadata updates, and theme configuration.
