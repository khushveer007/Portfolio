# Story 1.3: Animation System Foundation

Status: ready-for-dev

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

- [ ] Implement Motion Variants (AC: 3-7, 12)
  - [ ] Create `src/lib/motion.ts`
  - [ ] Implement and export `fadeInUp` variant
  - [ ] Implement and export `staggerContainer` variant
  - [ ] Implement and export `scaleOnHover` variant
  - [ ] Implement and export `fadeIn` variant
- [ ] Implement Reduced Motion Hook (AC: 8-10)
  - [ ] Create `src/hooks/useReducedMotion.ts`
  - [ ] Implement detection logic using `window.matchMedia`
  - [ ] Add event listener for preference changes
- [ ] Create Unit Tests (AC: 8)
  - [ ] Create `src/hooks/useReducedMotion.test.ts` to verify hook logic
- [ ] Verify System (AC: 1, 11)
  - [ ] Ensure `framer-motion` is installed (check package.json)
  - [ ] Verify type safety for exported variants

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

- [ ] Motion library implemented
- [ ] Hook implemented
- [ ] Tests passed

### File List

- src/lib/motion.ts
- src/hooks/useReducedMotion.ts
- src/hooks/useReducedMotion.test.ts
