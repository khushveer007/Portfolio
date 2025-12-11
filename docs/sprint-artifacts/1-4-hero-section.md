# Story 1.4: Hero Section

Status: ready-for-dev

## Story

**As a** visitor,
**I want** to see an animated hero section with the developer's name, title, and introduction,
**So that** I immediately perceive professionalism and quality.

## Acceptance Criteria

1. **Given** I land on the portfolio
2. **When** the page loads
3. **Then** I see the developer's name "Khushveer Singh" as an h1 heading (48px+ on desktop, scaled for mobile)
4. **And** I see a professional title text "Full-Stack Web Developer" below the name
5. **And** I see the introduction text: "I build accessible, pixel-perfect, and performant web experiences."
6. **And** The hero content animates in with staggered fade-up effect:
    - Name appears first (0s delay)
    - Title appears second (0.1s delay)
    - Intro appears third (0.2s delay)
7. **And** Animation completes within 0.8 seconds total
8. **And** Hero section is centered with max-width 1200px
9. **And** Hero has generous vertical padding (96px desktop, 64px mobile)
10. **And** Hero is fully responsive (typography scales with viewport)
11. **And** Reduced motion preference disables staggered animations (content appears immediately)
12. **And** Hero uses semantic HTML with proper heading hierarchy
13. **And** Hero component is located at `src/components/sections/Hero.tsx`
14. **And** Hero imports motion variants from `@/lib/motion`

## Tasks / Subtasks

- [ ] Implement Hero Component Structure (AC: 1, 3, 4, 5, 8, 9, 12, 13)
    - [ ] Create `src/components/sections/Hero.tsx`
    - [ ] Implement semantic HTML structure (`<section>`, `<h1>`, etc.)
    - [ ] Apply responsive layout and typography using Tailwind
- [ ] Implement Hero Animations (AC: 6, 7, 14)
    - [ ] Convert component to Client Component (`'use client'`)
    - [ ] Import `fadeInUp` and `staggerContainer` from `@/lib/motion`
    - [ ] Apply `motion` components with `initial`, `animate`, `variants`
- [ ] Implement Reduced Motion Support (AC: 11)
    - [ ] Use `useReducedMotion` hook from `src/hooks/useReducedMotion`
    - [ ] Conditionally disable animations or use static states if reduced motion is preferred
- [ ] Verify Responsiveness and Accessibility (AC: 10, 12)
    - [ ] Verify h1 scaling on mobile/tablet/desktop
    - [ ] Verify color contrast and accessibility
- [ ] Create Unit Tests
    - [ ] Create `src/components/sections/Hero.test.tsx`
    - [ ] Test component rendering and accessibility (headings present)

## Dev Notes

### Architecture Compliance

- **Component Location**: `src/components/sections/Hero.tsx`.
- **Client Component**: Must add `'use client'` at the top of the file since it uses Framer Motion (`motion.div`, `motion.h1`).
- **Imports**: Use absolute imports: `import { fadeInUp, staggerContainer } from '@/lib/motion';`.
- **Styling**: Use Tailwind CSS for layout, spacing (`py-24` desktop, `py-16` mobile), and typography.
- **Testing**: Co-locate tests in `src/components/sections/Hero.test.tsx`.

### Animation Guidelines

- **Variants**: Use `staggerContainer` for the wrapper and `fadeInUp` for the children (heading, title, intro).
- **Reduced Motion**: Use the `useReducedMotion` hook.
    ```typescript
    const shouldReduceMotion = useReducedMotion();
    // If reduced motion is preferred, ensure content is visible immediately without animation delays.
    // Example: animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "animate"}
    ```

### Typography & Layout

- **Font Sizes**: Use Tailwind text utilities.
    - H1: Use `text-5xl` (48px) for desktop, `text-4xl` for mobile.
    - Title: `text-2xl` / `text-xl`.
    - Spacing: Consistently use `gap-4` or `gap-6`.
- **Centering**: `max-w-[1200px] mx-auto px-4` (or similar container pattern).

### References

- [Epics: Story 1.4](docs/epics.md#story-14-hero-section)
- [UX Design: Hero Section](docs/ux-design-specification.md#hero-section)
- [Architecture: Component Architecture](docs/architecture.md#frontend-architecture)

## Dev Agent Record

### Context Reference

- **Story Source**: [Epics File](docs/epics.md#story-14-hero-section)
- **Architecture**: [Architecture File](docs/architecture.md)
- **UX Spec**: [UX Design Spec](docs/ux-design-specification.md)

### Agent Model Used

- Antigravity

### Completion Notes List

- [x] Ultimate context engine analysis completed - comprehensive developer guide created

### File List

- src/components/sections/Hero.tsx
- src/components/sections/Hero.test.tsx
