---
stepsCompleted: [1, 2, 3, 4]
status: complete
completedAt: '2025-12-11'
inputDocuments:
  - docs/prd.md
  - docs/architecture.md
  - docs/ux-design-specification.md
---

# Portfolio - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Portfolio, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**Hero & First Impression (FR1-FR3):**
- FR1: Visitors can view an animated hero section displaying name, title, and brief introduction
- FR2: Visitors can experience smooth entrance animations when the page loads
- FR3: Visitors can immediately perceive visual quality through typography and layout

**Project Showcase (FR4-FR9):**
- FR4: Visitors can view a list of portfolio projects with visual previews
- FR5: Visitors can see project titles, descriptions, and technology stack for each project
- FR6: Visitors can access live demo links for deployed projects (LinkLost, QuizMaster)
- FR7: Visitors can access source code links to GitHub repositories for each project
- FR8: Visitors can view technology badges indicating skills used in each project
- FR9: Visitors can experience hover effects and animations on project cards

**About Section (FR10-FR12):**
- FR10: Visitors can view a brief professional bio and background
- FR11: Visitors can see a skills overview with relevant technologies
- FR12: Visitors can understand professional context and experience level

**Contact & Conversion (FR13-FR16):**
- FR13: Visitors can submit a contact inquiry through a form (name, email, message)
- FR14: Portfolio owner (Opsa) receives email notifications when contact form is submitted
- FR15: Visitors can access a direct email link as alternative contact method
- FR16: Visitors can easily return to Upwork to continue hiring conversation

**External Links & Credibility (FR17-FR19):**
- FR17: Visitors can access GitHub profile link for code review and verification
- FR18: Visitors can view GitHub profile in new tab without leaving portfolio
- FR19: Technical evaluators can navigate from portfolio to specific project repositories

**Navigation & Structure (FR20-FR22):**
- FR20: Visitors can navigate between sections of the portfolio (hero, projects, about, contact)
- FR21: Visitors can scroll through the entire portfolio as a single-page experience
- FR22: Visitors can see smooth scroll-triggered reveal animations as they navigate

**Responsive Experience (FR23-FR26):**
- FR23: Visitors can view and interact with the portfolio on mobile devices (phones)
- FR24: Visitors can view and interact with the portfolio on tablet devices
- FR25: Visitors can view and interact with the portfolio on desktop devices
- FR26: Visitors experience consistent design and functionality across all device sizes

**Accessibility (FR27-FR30):**
- FR27: Visitors using keyboard can navigate all interactive elements
- FR28: Visitors using screen readers can understand content through semantic HTML and ARIA labels
- FR29: Visitors with motion sensitivity can experience reduced animations (prefers-reduced-motion)
- FR30: Visitors can perceive content with sufficient color contrast

**Animation & Interactions (FR31-FR34):**
- FR31: Visitors experience page transition animations when navigating (if multi-page)
- FR32: Visitors experience scroll-triggered fade-in and slide animations for sections
- FR33: Visitors experience hover state changes on interactive elements
- FR34: All animations run at 60fps without jank or stutter

### Non-Functional Requirements

**Performance (NFR1-NFR8):**
- NFR1: Initial page load completes within 2.5 seconds (LCP metric)
- NFR2: Time to interactive under 3.5 seconds on 3G connections (TTI metric)
- NFR3: All animations run at 60fps without dropped frames
- NFR4: Cumulative layout shift less than 0.1 (CLS metric)
- NFR5: First input delay under 100ms (FID/INP metric)
- NFR6: Initial JavaScript bundle under 200KB gzipped
- NFR7: Images optimized and lazy-loaded below the fold
- NFR8: Lighthouse Performance score of 90 or above

**Accessibility (NFR9-NFR16):**
- NFR9: WCAG 2.1 Level AA compliance
- NFR10: All interactive elements keyboard accessible
- NFR11: Color contrast ratio minimum 4.5:1 for normal text
- NFR12: Color contrast ratio minimum 3:1 for large text
- NFR13: All images have descriptive alt text
- NFR14: Focus indicators visible on all focusable elements
- NFR15: Animations respect prefers-reduced-motion preference
- NFR16: Screen reader can navigate and understand all content

**Security (NFR17-NFR21):**
- NFR17: All traffic served over HTTPS
- NFR18: Contact form inputs sanitized to prevent XSS
- NFR19: No sensitive data exposed in client-side code
- NFR20: API keys stored as environment variables, never in client bundle
- NFR21: Contact form rate-limited to prevent abuse

**Compatibility (NFR22-NFR25):**
- NFR22: Functions correctly on Chrome, Firefox, Safari, Edge (latest 2 versions)
- NFR23: Functions correctly on iOS Safari 14+
- NFR24: Functions correctly on Android Chrome
- NFR25: Responsive layout works from 320px to 2560px viewport widths

### Additional Requirements

**From Architecture - Starter Template (CRITICAL for Epic 1):**
- Project initialization using `npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"`
- Post-initialization dependencies: `npm install framer-motion resend @react-email/components`
- App Router structure with src/ directory organization

**From Architecture - Implementation Patterns:**
- Centralized animation variants in `lib/motion.ts` (all animations must use shared variants)
- Hybrid component architecture: ui/, sections/, layout/ folders
- Absolute imports with `@/` alias (no relative paths)
- Co-located test files with source
- PascalCase for component files, camelCase for utilities
- API response format: `{ success: boolean, message?: string, error?: string }`
- Loading state naming: `is[Action]ing` pattern (e.g., `isSubmitting`)

**From Architecture - API & Infrastructure:**
- Contact form with inline validation + success state replacement
- Rate limiting: 5 requests/minute/IP (in-memory for serverless)
- Single `.env.local` for RESEND_API_KEY
- Error monitoring deferred to post-MVP

**From Architecture - Project Structure:**
- `src/app/` — Routes, API, layouts
- `src/components/ui/` — Button, Badge, Input, SectionWrapper
- `src/components/sections/` — Hero, Projects, ProjectCard, About, Contact
- `src/components/layout/` — Header, Footer, Navigation
- `src/lib/` — motion.ts, utils.ts, data.ts
- `src/hooks/` — useReducedMotion.ts
- `src/types/` — index.ts (shared types)
- `src/emails/` — ContactEmail.tsx (React Email template)
- `public/images/projects/` — linklost.webp, quizmaster.webp

**From UX Design - Visual Foundation:**
- Color palette: neutral-first with single accent (#3B82F6)
- Typography: Inter/Outfit primary, JetBrains Mono for code
- Type scale: 1.25 ratio from 12px to 48px
- Spacing: 4px base unit, 96px section padding
- Max content width: 1200px

**From UX Design - Animation Specifications:**
- Hero entrance: staggered fade-in (0.5s with 0.1s delays)
- Scroll reveals: opacity 0→1, y 20→0, 0.5s ease-out
- Hover effects: scale(1.02), 0.2s ease
- Page transitions: fade, 0.3s (if multi-route)

**From UX Design - Component Requirements:**
- Hero: name (h1), title, intro, optional CTA, staggered entrance
- ProjectCard: image, title, description, tech badges, demo + code links, hover overlay
- Section wrapper with whileInView scroll reveal
- Button variants: primary (filled), secondary (outlined), link (text-only)
- Badge: monospace font, subtle background
- Form: inline errors, success state replaces form

**From UX Design - Accessibility Patterns:**
- Skip links as first focusable element
- 44x44px minimum touch targets
- 2px visible focus ring on interactive elements
- aria-label on icon-only buttons
- Semantic HTML5 landmarks

### FR Coverage Map

| FR   | Epic   | Description                                                |
| ---- | ------ | ---------------------------------------------------------- |
| FR1  | Epic 1 | Animated hero section with name, title, intro              |
| FR2  | Epic 1 | Smooth entrance animations on page load                    |
| FR3  | Epic 1 | Visual quality through typography and layout               |
| FR4  | Epic 2 | List of portfolio projects with visual previews            |
| FR5  | Epic 2 | Project titles, descriptions, technology stack             |
| FR6  | Epic 2 | Live demo links (LinkLost, QuizMaster)                     |
| FR7  | Epic 2 | Source code links to GitHub repositories                   |
| FR8  | Epic 2 | Technology badges indicating skills                        |
| FR9  | Epic 2 | Hover effects and animations on project cards              |
| FR10 | Epic 3 | Brief professional bio and background                      |
| FR11 | Epic 3 | Skills overview with relevant technologies                 |
| FR12 | Epic 3 | Professional context and experience level                  |
| FR13 | Epic 4 | Contact inquiry form (name, email, message)                |
| FR14 | Epic 4 | Email notifications when form submitted                    |
| FR15 | Epic 4 | Direct email link as alternative                           |
| FR16 | Epic 4 | Easy return to Upwork for hiring conversation              |
| FR17 | Epic 3 | GitHub profile link for code review                        |
| FR18 | Epic 3 | GitHub opens in new tab                                    |
| FR19 | Epic 3 | Navigate to specific project repositories                  |
| FR20 | Epic 1 | Navigate between sections (hero, projects, about, contact) |
| FR21 | Epic 1 | Single-page scroll experience                              |
| FR22 | Epic 1 | Smooth scroll-triggered reveal animations                  |
| FR23 | Epic 1 | Mobile device support                                      |
| FR24 | Epic 1 | Tablet device support                                      |
| FR25 | Epic 1 | Desktop device support                                     |
| FR26 | Epic 1 | Consistent cross-device experience                         |
| FR27 | Epic 1 | Keyboard navigation for all interactive elements           |
| FR28 | Epic 1 | Screen reader support with semantic HTML/ARIA              |
| FR29 | Epic 1 | Reduced animations (prefers-reduced-motion)                |
| FR30 | Epic 1 | Sufficient color contrast                                  |
| FR31 | Epic 1 | Page transition animations                                 |
| FR32 | Epic 1 | Scroll-triggered fade-in and slide animations              |
| FR33 | Epic 1 | Hover state changes on interactive elements                |
| FR34 | Epic 1 | All animations at 60fps                                    |

## Epic List

### Epic 1: Foundation & First Impression

**Goal:** Visitors can land on a polished, professional portfolio with a working hero section that immediately communicates quality through smooth animations, professional typography, and responsive design.

**FRs Covered:** FR1, FR2, FR3, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR28, FR29, FR30, FR31, FR32, FR33, FR34

**Delivers:**
- Project initialization with Next.js + TypeScript + Tailwind (from Architecture starter template)
- Design system (colors, typography, spacing, CSS variables)
- Animation variants library (`lib/motion.ts`)
- Root layout with fonts, metadata, providers
- Animated hero section (name, title, intro with staggered entrance)
- Single-page layout structure with navigation
- Header and footer components
- Responsive design (mobile-first, all breakpoints)
- Accessibility foundations (keyboard nav, skip links, reduced motion, contrast)
- SectionWrapper component with scroll-triggered reveals

**NFRs Addressed:** NFR1-8 (Performance), NFR9-16 (Accessibility), NFR22-25 (Compatibility)

---

### Epic 2: Project Showcase

**Goal:** Visitors can explore portfolio projects, view live demos, and access source code to verify work quality through polished project cards with hover effects.

**FRs Covered:** FR4, FR5, FR6, FR7, FR8, FR9

**Delivers:**
- Projects section with responsive grid (2-column desktop, 1-column mobile)
- ProjectCard component with hover scale + shadow effects
- Project preview images (linklost.webp, quizmaster.webp)
- Live demo links opening in new tabs
- GitHub repository links for each project
- Technology stack badges (Badge component)
- Static project data (`lib/data.ts`)
- Scroll-triggered reveal for projects section

**NFRs Addressed:** NFR7 (lazy-loaded images), NFR3 (60fps hover animations)

---

### Epic 3: About & Credibility

**Goal:** Visitors can learn about the developer, verify skills, and access GitHub for code review—providing technical evaluators everything needed to assess credibility.

**FRs Covered:** FR10, FR11, FR12, FR17, FR18, FR19

**Delivers:**
- About section with professional bio
- Skills overview with technology icons/badges
- GitHub profile link (prominent placement in header/about)
- External links opening in new tabs
- Professional context and experience presentation
- Scroll-triggered reveal for about section

**NFRs Addressed:** NFR13 (images with alt text), cross-cutting accessibility

---

### Epic 4: Contact & Conversion

**Goal:** Visitors can contact the portfolio owner directly through a form or email link, converting interest into hiring conversations.

**FRs Covered:** FR13, FR14, FR15, FR16

**Delivers:**
- Contact section with form (name, email, message)
- Form validation (Zod schema, inline errors)
- Loading and success states (form replaced by thank you message)
- Contact API route (`/api/contact`)
- Resend integration for email notifications
- React Email template for contact emails
- Rate limiting (5 req/min/IP)
- Direct email link as alternative
- Footer with social links (GitHub, LinkedIn, Upwork)

**NFRs Addressed:** NFR17-21 (Security - HTTPS, XSS prevention, rate limiting, env vars)

---

## Epic 1: Foundation & First Impression

**Goal:** Visitors can land on a polished, professional portfolio with a working hero section that immediately communicates quality through smooth animations, professional typography, and responsive design.

### Story 1.1: Project Initialization

**As a** developer,
**I want** the project initialized with Next.js, TypeScript, Tailwind, and required dependencies,
**So that** I have a properly configured foundation to build the portfolio.

**Acceptance Criteria:**

**Given** the project directory is empty or contains only docs/planning files
**When** the initialization script is run
**Then** Next.js 15+ is installed with App Router and src/ directory structure
**And** TypeScript is configured in strict mode
**And** Tailwind CSS is configured with PostCSS
**And** ESLint is configured with Next.js rules
**And** Import alias `@/*` resolves to `src/*`
**And** Framer Motion, Resend, and @react-email/components are installed
**And** The dev server starts successfully with `npm run dev`
**And** The folder structure matches Architecture specification:
  - `src/app/` — Routes, API, layouts
  - `src/components/ui/` — Reusable atomic components
  - `src/components/sections/` — Page section components
  - `src/components/layout/` — Layout components
  - `src/lib/` — Utilities and shared logic
  - `src/hooks/` — Custom React hooks
  - `src/types/` — TypeScript type definitions
  - `src/emails/` — React Email templates
  - `public/images/` — Static images

---

### Story 1.2: Design System & Typography

**As a** visitor,
**I want** the portfolio to have consistent, professional typography and colors,
**So that** I perceive quality and attention to detail.

**Acceptance Criteria:**

**Given** the project is initialized
**When** I view the portfolio
**Then** Inter font is loaded from Google Fonts for body text
**And** JetBrains Mono is loaded for code/badge elements
**And** CSS variables define the color palette:
  - `--color-background: #FAFAFA`
  - `--color-surface: #FFFFFF`
  - `--color-text-primary: #1A1A1A`
  - `--color-text-secondary: #6B7280`
  - `--color-accent: #3B82F6`
  - `--color-border: #E5E7EB`
**And** CSS variables define the spacing scale (4px base: --spacing-1 through --spacing-24)
**And** Font sizes follow the 1.25 type scale (12px to 48px)
**And** Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
**And** Maximum content width is 1200px, centered
**And** Tailwind config extends with custom design tokens
**And** globals.css contains all CSS custom properties

---

### Story 1.3: Animation System

**As a** visitor,
**I want** smooth, consistent animations throughout the portfolio,
**So that** I experience a polished, premium feel.

**Acceptance Criteria:**

**Given** Framer Motion is installed
**When** I interact with the portfolio
**Then** Centralized motion variants exist in `src/lib/motion.ts`
**And** `fadeInUp` variant animates opacity 0→1 and y 20→0 with 0.5s ease-out
**And** `staggerContainer` variant staggers children by 0.1s
**And** `scaleOnHover` variant scales to 1.02 on hover with 0.2s duration
**And** `fadeIn` variant animates opacity only for subtle effects
**And** A `useReducedMotion` hook exists in `src/hooks/useReducedMotion.ts`
**And** The hook returns true when `prefers-reduced-motion: reduce` is set
**And** When reduced motion is preferred, animations complete instantly or are disabled
**And** All animations run at 60fps without jank (verified in Chrome DevTools)
**And** TypeScript types are exported for all variants

---

### Story 1.4: Hero Section

**As a** visitor,
**I want** to see an animated hero section with the developer's name, title, and introduction,
**So that** I immediately perceive professionalism and quality.

**Acceptance Criteria:**

**Given** I land on the portfolio
**When** the page loads
**Then** I see the developer's name "Opsa" as an h1 heading (48px+ on desktop, scaled for mobile)
**And** I see a professional title (e.g., "Full-Stack Web Developer") below the name
**And** I see a brief introduction (1-2 sentences about expertise and focus)
**And** The hero content animates in with staggered fade-up effect:
  - Name appears first (0s delay)
  - Title appears second (0.1s delay)
  - Intro appears third (0.2s delay)
**And** Animation completes within 0.8 seconds total
**And** Hero section is centered with max-width 1200px
**And** Hero has generous vertical padding (96px desktop, 64px mobile)
**And** Hero is fully responsive (typography scales with viewport)
**And** Reduced motion preference disables staggered animations (content appears immediately)
**And** Hero uses semantic HTML with proper heading hierarchy
**And** Hero component is located at `src/components/sections/Hero.tsx`
**And** Hero imports motion variants from `@/lib/motion`

---

### Story 1.5: Layout & Navigation

**As a** visitor,
**I want** to navigate between portfolio sections easily,
**So that** I can explore hero, projects, about, and contact sections smoothly.

**Acceptance Criteria:**

**Given** I am viewing the portfolio
**When** I scroll or click navigation links
**Then** A header component exists at `src/components/layout/Header.tsx`
**And** Header contains navigation links: Projects, About, Contact
**And** Header becomes sticky after scrolling past the hero section
**And** Clicking a nav link smooth-scrolls to that section
**And** Scroll offset accounts for sticky header height (scroll-margin-top)
**And** Skip link is the first focusable element ("Skip to main content")
**And** Skip link targets the main content area
**And** Footer component exists at `src/components/layout/Footer.tsx`
**And** Footer displays copyright and year
**And** Navigation is keyboard accessible (Tab navigates all links, Enter activates)
**And** Focus indicators are visible (2px ring) on all interactive elements
**And** Mobile navigation uses a simplified layout or hamburger menu
**And** SectionWrapper component exists at `src/components/ui/SectionWrapper.tsx`
**And** SectionWrapper applies consistent padding (96px desktop, 64px mobile)
**And** SectionWrapper uses whileInView for scroll-triggered fade-up animation
**And** Root layout (`src/app/layout.tsx`) includes Header, main content area, and Footer
**And** Page (`src/app/page.tsx`) assembles Hero section with placeholder sections for Projects, About, Contact

---

## Epic 2: Project Showcase

**Goal:** Visitors can explore portfolio projects, view live demos, and access source code to verify work quality through polished project cards with hover effects.

### Story 2.1: Project Data & Badge Component

**As a** visitor,
**I want** to see technology badges indicating skills used in projects,
**So that** I can quickly verify the developer's technical expertise.

**Acceptance Criteria:**

**Given** I am viewing a project card
**When** the projects section loads
**Then** Static project data exists in `src/lib/data.ts` with:
  - Project title
  - Project description
  - Technology stack array
  - Live demo URL
  - GitHub repository URL
  - Preview image path
**And** Data for LinkLost project is defined:
  - Title: "LinkLost"
  - Description: Brief description of the bookmark/link management app
  - Tech stack: [Next.js, TypeScript, etc.]
  - Demo URL: actual deployed URL
  - GitHub URL: repository URL
  - Image: `/images/projects/linklost.webp`
**And** Data for QuizMaster project is defined with similar structure
**And** `Project` type interface exists in `src/types/index.ts`
**And** Badge component exists at `src/components/ui/Badge.tsx`
**And** Badge displays text in JetBrains Mono font
**And** Badge has subtle background color (#F3F4F6) and rounded corners (4px)
**And** Badge text uses small font size (12-14px)
**And** Badge is responsive and wraps appropriately on small screens

---

### Story 2.2: ProjectCard Component

**As a** visitor,
**I want** to see project cards with images, descriptions, and links,
**So that** I can explore projects and verify they work.

**Acceptance Criteria:**

**Given** I view the projects section
**When** a project card is displayed
**Then** ProjectCard component exists at `src/components/sections/ProjectCard.tsx`
**And** Card accepts `Project` type as props
**And** Card displays project preview image using `next/image`:
  - Image is optimized and lazy-loaded
  - Image has appropriate alt text
  - Image has aspect ratio maintained (16:9 or similar)
**And** Card displays project title as h3 heading
**And** Card displays project description (2-3 sentences)
**And** Card displays technology badges using Badge component (mapped from tech stack array)
**And** Card displays "View Demo" button:
  - Links to live demo URL
  - Opens in new tab (target="_blank", rel="noopener noreferrer")
  - Uses primary Button variant
**And** Card displays "View Code" button:
  - Links to GitHub repository
  - Opens in new tab
  - Uses secondary Button variant
**And** Card has hover effect using `scaleOnHover` variant from `@/lib/motion`:
  - Scale to 1.02 on hover
  - Subtle shadow lift
  - Duration 0.2s ease
**And** Card has proper focus states for keyboard navigation
**And** Buttons have accessible aria-labels (e.g., "View LinkLost live demo")
**And** Button component exists at `src/components/ui/Button.tsx` with primary/secondary/link variants

---

### Story 2.3: Projects Section

**As a** visitor,
**I want** to browse all portfolio projects in an organized grid,
**So that** I can evaluate the developer's work quality.

**Acceptance Criteria:**

**Given** I scroll to the projects section
**When** the section enters the viewport
**Then** Projects section component exists at `src/components/sections/Projects.tsx`
**And** Section has `id="projects"` for navigation anchor linking
**And** Section uses SectionWrapper for:
  - Consistent padding (96px desktop, 64px mobile)
  - Scroll-triggered fade-up animation (whileInView)
**And** Section displays a heading "Featured Work" or "Projects" as h2
**And** Project cards are displayed in a responsive CSS Grid:
  - Desktop (≥768px): 2 columns
  - Mobile (<768px): 1 column (stacked)
  - Grid gap: 32px
**And** LinkLost and QuizMaster projects are rendered using ProjectCard
**And** Project cards animate in with staggered timing (0.1s delay between cards)
**And** Project images exist at:
  - `public/images/projects/linklost.webp`
  - `public/images/projects/quizmaster.webp`
**And** Page (`src/app/page.tsx`) includes Projects section after Hero
**And** Clicking "Projects" nav link scrolls to this section

---

## Epic 3: About & Credibility

**Goal:** Visitors can learn about the developer, verify skills, and access GitHub for code review—providing technical evaluators everything needed to assess credibility.

### Story 3.1: About Section

**As a** visitor,
**I want** to learn about the developer's background and skills,
**So that** I can understand their experience and expertise.

**Acceptance Criteria:**

**Given** I scroll to the about section
**When** the section enters the viewport
**Then** About section component exists at `src/components/sections/About.tsx`
**And** Section has `id="about"` for navigation anchor linking
**And** Section uses SectionWrapper for consistent padding and scroll reveal
**And** Section displays a heading "About" or "About Me" as h2
**And** Section contains a professional bio (3-4 sentences):
  - Who the developer is (Opsa)
  - Their focus area (full-stack web development)
  - Their approach or values (quality, attention to detail)
  - What they're looking for (freelance opportunities)
**And** Section displays a skills overview with technology badges:
  - Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
  - Backend: Node.js, Express, APIs, Databases
  - Tools: Git, GitHub, VS Code
**And** Skills are displayed using Badge component
**And** Skills are organized in a visually appealing layout (grid or flex wrap)
**And** Section is responsive (stacks appropriately on mobile)
**And** Section animates in with fade-up when scrolling into view
**And** Page (`src/app/page.tsx`) includes About section after Projects
**And** Clicking "About" nav link scrolls to this section

---

### Story 3.2: GitHub & External Links

**As a** technical evaluator,
**I want** to access the developer's GitHub profile and project repositories,
**So that** I can review their code quality and development practices.

**Acceptance Criteria:**

**Given** I am viewing the portfolio
**When** I look for GitHub access
**Then** GitHub profile link is prominently displayed in:
  - Header navigation (GitHub icon or text link)
  - About section (as part of bio or as CTA)
  - Footer (in social links row)
**And** All external links (GitHub, LinkedIn, project demos) open in new tab:
  - `target="_blank"` attribute set
  - `rel="noopener noreferrer"` for security
**And** From project cards, "View Code" opens the specific project repository in new tab
**And** All external links have appropriate aria-labels:
  - Example: `aria-label="Visit GitHub profile (opens in new tab)"`
**And** External links are visually indicated (optional: external link icon)
**And** Links are keyboard accessible with visible focus states (2px ring)
**And** GitHub profile URL is configured (easily editable in a constants file or data.ts)
**And** LinkedIn profile URL is included in footer social links
**And** All external URLs are verified working (no broken links)

---

## Epic 4: Contact & Conversion

**Goal:** Visitors can contact the portfolio owner directly through a form or email link, converting interest into hiring conversations.

### Story 4.1: Contact Form UI

**As a** visitor,
**I want** to fill out a contact form to reach the developer,
**So that** I can inquire about hiring them for my project.

**Acceptance Criteria:**

**Given** I am viewing the contact section
**When** I interact with the contact form
**Then** Input component exists at `src/components/ui/Input.tsx`
**And** Input component supports text, email, and textarea types
**And** Input has label always visible above the field
**And** Input has focus state with visible border color change (accent color)
**And** Input has error state showing red border and error message
**And** Form has three fields:
  - Name (required, text input)
  - Email (required, email input)
  - Message (required, textarea)
**And** Client-side validation runs on blur and submit:
  - Name: minimum 2 characters
  - Email: valid email format
  - Message: minimum 10 characters
**And** Validation errors display inline below each field (red text, small font)
**And** Submit button displays "Send Message" text
**And** Submit button uses primary Button variant
**And** Submit button shows loading state when submitting:
  - Text changes to "Sending..." or spinner displays
  - Button is disabled during submission
**And** Success state replaces entire form with:
  - "Thank you! I'll be in touch soon." message
  - Green success styling
**And** Error state shows below form:
  - "Something went wrong. Please try again or email me directly."
  - Link to direct email
**And** Form state uses `isSubmitting`, `isSent`, `hasError` naming pattern

---

### Story 4.2: Contact API & Email

**As a** portfolio owner (Opsa),
**I want** to receive email notifications when someone submits the contact form,
**So that** I can respond to potential client inquiries.

**Acceptance Criteria:**

**Given** a visitor submits the contact form
**When** the form data is sent to the API
**Then** API route exists at `src/app/api/contact/route.ts`
**And** API accepts POST requests with JSON body: `{ name, email, message }`
**And** API validates input server-side:
  - Name: required, min 2 characters
  - Email: required, valid format
  - Message: required, min 10 characters
**And** Invalid input returns 400 status with field-specific errors
**And** API uses Resend SDK (`resend.emails.send()`) to send email
**And** Email template exists at `src/emails/ContactEmail.tsx` using @react-email/components
**And** Email template displays:
  - Subject: "Portfolio Contact: [sender name]"
  - Sender name and email
  - Message content
  - Timestamp
**And** Email is sent to portfolio owner's configured email address
**And** API returns success: `{ success: true, message: "Thank you! I'll be in touch soon." }`
**And** API returns error: `{ success: false, error: "Please try again later." }`
**And** Rate limiting is implemented:
  - 5 requests per minute per IP address
  - Uses in-memory Map (suitable for serverless)
  - Rate limit exceeded returns 429 status
**And** `RESEND_API_KEY` is read from `process.env.RESEND_API_KEY`
**And** `.env.example` file documents: `RESEND_API_KEY=your_resend_api_key_here`
**And** No API keys are exposed in client-side code (server-side only)
**And** ContactFormValues type exists in `src/types/index.ts`
**And** ApiResponse type exists in `src/types/index.ts`

---

### Story 4.3: Contact Section & Footer

**As a** visitor,
**I want** multiple ways to contact the developer,
**So that** I can choose my preferred method of communication.

**Acceptance Criteria:**

**Given** I scroll to the contact section
**When** I want to reach out
**Then** Contact section component exists at `src/components/sections/Contact.tsx`
**And** Section has `id="contact"` for navigation anchor linking
**And** Section uses SectionWrapper for consistent padding and scroll reveal
**And** Section displays a heading "Get In Touch" or "Contact" as h2
**And** Section includes a brief intro paragraph:
  - Encouraging message about project inquiries
  - Sets expectation for response time
**And** Section displays the contact form (from Story 4.1)
**And** Section displays direct email alternative:
  - Text: "Or email me directly at"
  - Email link using `mailto:` protocol
  - Opens default email client
**And** Footer component is enhanced with social links:
  - GitHub (icon link to profile)
  - LinkedIn (icon link to profile)
  - Email (icon link with mailto:)
**And** Social links use icon-only buttons with aria-labels:
  - Example: `aria-label="GitHub profile (opens in new tab)"`
**And** All footer social links open in new tab (except email)
**And** Footer displays copyright: "© 2024 Opsa. All rights reserved." (or similar)
**And** Footer is responsive and centered on mobile
**And** Page (`src/app/page.tsx`) includes Contact section as final section before footer
**And** Clicking "Contact" nav link scrolls to this section
**And** The complete portfolio is now functional end-to-end:
  - Hero → Projects → About → Contact → Footer
  - All navigation works
  - All external links verified
  - Contact form submits successfully
