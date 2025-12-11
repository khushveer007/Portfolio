# Story 1.1: Project Initialization

Status: Ready for Review

## Story

**As a** developer,
**I want** the project initialized with Next.js, TypeScript, Tailwind, and required dependencies,
**So that** I have a properly configured foundation to build the portfolio.

## Acceptance Criteria

1. **Given** the project directory is empty or contains only docs/planning files
2. **When** the initialization script is run
3. **Then** Next.js 15+ is installed with App Router and src/ directory structure
4. **And** TypeScript is configured in strict mode
5. **And** Tailwind CSS is configured with PostCSS
6. **And** ESLint is configured with Next.js rules
7. **And** Import alias `@/*` resolves to `src/*`
8. **And** Framer Motion, Resend, and @react-email/components are installed
9. **And** The dev server starts successfully with `npm run dev`
10. **And** The folder structure matches Architecture specification:
    - `src/app/` — Routes, API, layouts
    - `src/components/ui/` — Reusable atomic components
    - `src/components/sections/` — Page section components
    - `src/components/layout/` — Layout components
    - `src/lib/` — Utilities and shared logic
    - `src/hooks/` — Custom React hooks
    - `src/types/` — TypeScript type definitions
    - `src/emails/` — React Email templates
    - `public/images/` — Static images

## Tasks / Subtasks

- [/] Initialize Next.js Project (AC: 1-7)
  - [x] Run `npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"`
  - [x] Verify `next.config.ts`, `tsconfig.json`, `tailwind.config.ts` exist
  - [x] Verify `src/app` structure
- [x] Install Additional Dependencies (AC: 8)
  - [x] Run `npm install framer-motion resend @react-email/components`
  - [x] Verify dependencies in `package.json`
- [x] Configure Project Structure (AC: 10)
  - [x] Create `src/components/ui`
  - [x] Create `src/components/sections`
  - [x] Create `src/components/layout`
  - [x] Create `src/lib`
  - [x] Create `src/hooks`
  - [x] Create `src/types`
  - [x] Create `src/emails`
  - [x] Create `public/images`
  - [x] Create `public/images/projects`
  - [x] Create `public/images/profile`
- [x] Verify Setup (AC: 9)
  - [x] Run `npm run dev`
  - [x] Verify page loads at http://localhost:3000

## Dev Notes

### Architecture Compliance
- **Initialization Command**: Use the specific command defined in Architecture to ensure consistent configuration.
- **Strict Mode**: Ensure TypeScript strict mode is enabled (default in Next.js 15).
- **Import Alias**: Ensure `@/*` is configured in `tsconfig.json`.

### Project Structure Notes
- **Source Directory**: Use `src/` directory (required).
- **App Router**: Use App Router (required).
- **Component Organization**: Follow the hybrid structure (`ui`, `sections`, `layout`).

### References
- [Architecture: Starter Template Evaluation](docs/architecture.md#starter-template-evaluation)
- [Architecture: Complete Project Directory Structure](docs/architecture.md#complete-project-directory-structure)
- [Epic 1: Foundation & First Impression](docs/epics.md#epic-1-foundation--first-impression)

## Dev Agent Record

### Context Reference
- **Story Source**: [Epics File](docs/epics.md)
- **Architecture**: [Architecture File](docs/architecture.md)

### Agent Model Used
- Antigravity

### Debug Log References
- N/A

### Completion Notes List
- [x] Initialization complete
- [x] Structure verified
- [x] Dev server running

### File List
- package.json
- tsconfig.json
- next.config.ts
- postcss.config.mjs
- src/app/layout.tsx
- src/app/page.tsx
- src/app/globals.css
- .gitignore
- eslint.config.mjs
- next-env.d.ts
- README.md

