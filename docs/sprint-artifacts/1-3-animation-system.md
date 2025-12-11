# Story 1.3: Animation System Foundation

Status: Done

## Story

**As a** visitor,
**I want** smooth, consistent animations throughout the portfolio,
**So that** I experience a polished, premium feel.

## Acceptance Criteria

1. **Given** Framer Motion is installed
2. **When** I interact with the portfolio
3. **Then** Centralized motion variants exist in `src/lib/motion.ts`
4. **And** `fadeInUp` variant animates opacity 0→1 and y 20→0 with 0.5s ease-out
5. **And** `staggerContainer` variant staggers children by 0.1s
6. **And** `scaleOnHover` variant scales to 1.02 on hover with 0.2s duration
7. **And** `fadeIn` variant animates opacity only for subtle effects (opacity 0→1)
8. **And** A `useReducedMotion` hook exists in `src/hooks/useReducedMotion.ts`
9. **And** The hook returns true when `prefers-reduced-motion: reduce` is set
10. **And** When reduced motion is preferred, animations complete instantly or are disabled (logic handled in hook or component usage)
11. **And** All animations run at 60fps without jank (verified in Chrome DevTools)
12. **And** TypeScript types are exported for all variants (`Variants` from framer-motion)

## Tasks / Subtasks

- [x] Implement Motion Variants (AC: 3-7, 12)
  - [x] Create `src/lib/motion.ts`
  - [x] Implement and export `fadeInUp` variant
  - [x] Implement and export `staggerContainer` variant
  - [x] Implement and export `scaleOnHover` variant
  - [x] Implement and export `fadeIn` variant
- [x] Implement Reduced Motion Hook (AC: 8-10)
  - [x] Create `src/hooks/useReducedMotion.ts`
  - [x] Implement detection logic using `window.matchMedia`
  - [x] Add event listener for preference changes
- [x] Create Unit Tests (AC: 8)
  - [x] Create `src/hooks/useReducedMotion.test.ts` to verify hook logic
- [x] Verify System (AC: 1, 11)
  - [x] Ensure `framer-motion` is installed (check package.json)
  - [x] Verify type safety for exported variants

- [ ] Review Follow-ups (AI)
  - [x] [AI-Review][High] Lint Error: `react-hooks/set-state-in-effect` in `useReducedMotion.ts` [src/hooks/useReducedMotion.ts:12]
  - [x] [AI-Review][Medium] Missing Tests: `src/lib/motion.ts` variants are not unit tested [src/lib/motion.ts]
  - [x] [AI-Review][Medium] Magic Numbers: Animation durations in `motion.ts` are hardcoded [src/lib/motion.ts]
  - [x] [AI-Review][Low] Documentation: No usage examples or guide for animation system

- [ ] Review Follow-ups (AI) - Round 2
  - [x] [AI-Review][Medium] Test Quality: Refactor `motion.test.ts` to test behavior/properties instead of snapshots [src/lib/motion.test.ts]
  - [x] [AI-Review][Medium] Missing Tests: Add tests for `ANIMATION` constants [src/lib/motion.ts]
  - [x] [AI-Review][Medium] Architecture Deviation: Add `ease: 'easeOut'` to `fadeIn` variant [src/lib/motion.ts]
  - [x] [AI-Review][Medium] Incomplete Testing: Verify `removeEventListener` cleanup in `useReducedMotion.test.ts` [src/hooks/useReducedMotion.test.ts]
  - [x] [AI-Review][Low] Documentation: Add usage examples for `whileInView` [src/lib/motion.ts]


## Dev Notes

### Architecture Compliance

- **Library**: Use `framer-motion` for all client-side animations.
- **Client Components**: Any component using `motion.*` or `AnimatePresence` MUST have `'use client'` directive at the top.
- **Organization**:
  - Store ALL shared variants in `src/lib/motion.ts`. Do not define inline variants for reusable patterns.
  - Import using absolute path: `import { fadeInUp } from '@/lib/motion';`.
- **Naming**: Use `camelCase` for utilities (`motion.ts`) and hooks (`useReducedMotion.ts`).
- **Tests**: Co-located test files (`useReducedMotion.test.ts` next to the hook).

### Technical Guardrails

- **Latest Tech**: Next.js 15 App Router requires strict separation of Server and Client components.
  - Animations are inherently client-side. Isolate animated components (e.g., `SectionWrapper`, `Hero`) as Client Components to keep parent pages as Server Components where possible.
- **Performance**:
  - Use `transform` and `opacity` properties for animations to ensure GPU acceleration (compositor-only properties).
  - Avoid animating `width`, `height`, `top`, `left` which trigger layout recalculations.
- **Accessibility**:
  - Respect `prefers-reduced-motion`. The `useReducedMotion` hook should be used to conditionally disable or simplify animations.

### References

- [Architecture: Animation Architecture](docs/architecture.md#frontend-architecture) ("Centralized variants in lib/motion.ts")
- [UX Design Spec: Animation Patterns](docs/ux-design-specification.md#animation-patterns)
- [Next.js App Router + Framer Motion Guide](https://www.framer.com/motion/nextjs/)

## Dev Agent Record

### Context Reference

- **Story Source**: [Epics File](docs/epics.md#story-13-animation-system)
- **Architecture**: [Architecture File](docs/architecture.md)
- **UX Spec**: [UX Design Spec](docs/ux-design-specification.md)

### Agent Model Used

- Antigravity

### Debug Log References

- N/A

### Completion Notes List

- [x] Motion library implemented
- [x] Hook implemented
- [x] Tests passed
- [x] Installed `vitest` and `@testing-library/react` for unit testing.
- [x] Resolved review finding [High]: Lint Error: react-hooks/set-state-in-effect in useReducedMotion.ts
- [x] Resolved tests for motion variants.
- [x] Refactored magic numbers in motion.ts.
- [x] Added JSDoc documentation with examples to motion.ts.
- [x] Resolved all Round 2 review findings:
  - [x] Refactored `motion.test.ts` to be property-based.
  - [x] Added tests for `ANIMATION` constants.
  - [x] Fixed `fadeIn` variant easing.
  - [x] Added cleanup test for `useReducedMotion`.
  - [x] Enhanced `whileInView` documentation.
  - [x] Resolved Round 3 findings:
    - [x] Improved type safety in `src/lib/motion.test.ts`.
    - [x] Fixed global `window` hygiene in `src/hooks/useReducedMotion.test.ts`.

### File List

- src/lib/motion.ts
- src/hooks/useReducedMotion.ts
- src/hooks/useReducedMotion.test.ts
- src/lib/motion.test.ts
- vitest.config.ts
- package.json
