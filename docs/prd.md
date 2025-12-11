---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - docs/analysis/product-brief-Portfolio-2025-12-10.md
  - docs/analysis/research/technical-portfolio-animations-research-2025-12-10.md
documentCounts:
  briefs: 1
  research: 1
  brainstorming: 0
  projectDocs: 0
workflowType: 'prd'
lastStep: 11
project_name: 'Portfolio'
user_name: 'Opsa'
date: '2025-12-10'
---

# Product Requirements Document - Portfolio

**Author:** Opsa
**Date:** 2025-12-10

---

## Executive Summary

Portfolio is a minimalistic, animation-rich personal portfolio website designed to help a full-stack web developer win freelance work on platforms like Upwork. The site serves as a trust-building tool that demonstrates technical excellence through its own design and showcases completed projects (LinkLost and QuizMaster) with live demos and source code access.

The portfolio addresses two critical challenges faced by freelance developers:

1. **Credibility Gap** — Clients request portfolio links to evaluate skills, but many developers lack a polished, professional portfolio to share
2. **Differentiation Challenge** — Without a compelling online presence, talented developers become commoditized and compete on price rather than skill

By leveraging modern web technologies (Next.js + Framer Motion) to create a visually stunning, performant experience, the portfolio itself becomes the first proof of skill—convincing potential clients before they even review individual projects.

**Target Outcome:** After viewing the portfolio, clients transition from "Can you do this?" to "Here's what I need done."

### What Makes This Special

| Differentiator          | Description                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Design as Proof**     | The portfolio's visual excellence immediately demonstrates development capability—the site IS the portfolio piece    |
| **Animation Quality**   | Smooth, purposeful animations using Framer Motion create memorable first impressions and signal attention to detail  |
| **Modern Tech Stack**   | Next.js App Router + Framer Motion + TypeScript signals up-to-date skills to technical evaluators                    |
| **Minimalist Focus**    | Clean design with strategic whitespace puts focus on work quality rather than visual clutter                         |
| **Full-Stack Showcase** | Projects demonstrate both frontend polish (animations, responsive design) and backend capabilities (APIs, databases) |

The key success moment: Clients see the portfolio's design quality and working project demos, think "This is exactly the quality I want for my project," and move forward with hiring.

## Project Classification

**Technical Type:** web_app
**Domain:** general
**Complexity:** low
**Project Context:** Greenfield - new project

This is a single-page or multi-page web application built with Next.js (App Router) and deployed on Vercel. The domain is general (personal portfolio/showcase) with standard requirements around performance, responsive design, and user experience. The complexity is low as it focuses on content presentation with animations rather than complex business logic, data processing, or regulatory compliance.

**Tech Stack (from Research):**
- **Framework:** Next.js 14+ (App Router)
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Styling:** CSS/Tailwind
- **Deployment:** Vercel
- **Email:** Resend (contact form)

---

## Success Criteria

### User Success

What makes clients say "this was worth viewing":

| Success Moment          | How You'll Know                                                                  |
| ----------------------- | -------------------------------------------------------------------------------- |
| **Immediate Trust**     | Clients skip "prove yourself" questions and move directly to "here's my project" |
| **Quality Recognition** | Clients mention the portfolio positively in Upwork messages                      |
| **Confidence to Hire**  | Clients initiate scope/payment discussions without asking for additional samples |

**The Key Moment:** A client views for 30-60 seconds, browses a project demo, and returns to Upwork ready to hire.

### Business Success

What makes YOU say "this is working":

| Metric                | Target                                    | Timeframe      |
| --------------------- | ----------------------------------------- | -------------- |
| **Clients Landed**    | 2-3 clients hired after viewing portfolio | First 3 months |
| **Proposal Response** | Noticeable improvement in reply rate      | Ongoing        |
| **Standard Practice** | Portfolio link included in every proposal | Immediate      |
| **Contact Form**      | At least 1-2 direct inquiries             | First 3 months |

### Technical Success

What makes the site *feel* premium:

| Metric          | Target                          |
| --------------- | ------------------------------- |
| **Performance** | Lighthouse score 90+            |
| **Animations**  | 60fps, no jank or stutter       |
| **Mobile**      | Fully responsive on all devices |
| **Load Time**   | LCP < 2.5 seconds               |
| **Stability**   | CLS < 0.1 (no layout shifts)    |

### Measurable Outcomes

| Outcome             | Measurement                                               | Success Threshold        |
| ------------------- | --------------------------------------------------------- | ------------------------ |
| First client landed | Client hires after viewing portfolio                      | 1 client within 3 months |
| Trust signal        | Client moves to project discussion without proof requests | Qualitative tracking     |
| Portfolio mentions  | Positive feedback about portfolio quality                 | Any positive mention     |
| Contact submissions | Form submissions from visitors                            | 1-2 inquiries            |

---

## Product Scope

### MVP - Minimum Viable Product

What must ship for this to be useful:

| Feature                   | Priority  | Description                                                                       |
| ------------------------- | --------- | --------------------------------------------------------------------------------- |
| **Animated Hero Section** | Must Have | Name, title, brief intro with smooth Framer Motion animations                     |
| **Projects Section**      | Must Have | LinkLost & QuizMaster with live demo links, source code access, tech stack badges |
| **About Section**         | Must Have | Brief bio, skills overview, professional context                                  |
| **Contact Section**       | Must Have | Contact form + email link for client outreach                                     |
| **GitHub Link**           | Must Have | Prominent link for technical evaluators to review code                            |
| **Responsive Design**     | Must Have | Mobile-first responsive layout that works on all devices                          |
| **Page Animations**       | Must Have | Scroll-triggered reveals, hover effects, page transitions                         |

### Growth Features (Post-MVP)

What makes it competitive after launch:

| Feature             | Description                                     |
| ------------------- | ----------------------------------------------- |
| **Dark/Light Mode** | Theme toggle for user preference                |
| **More Projects**   | Additional project showcases as portfolio grows |
| **Blog Section**    | MDX-powered blog for content marketing          |
| **GitHub Stats**    | Dynamic GitHub contribution graph               |

### Vision (Future)

The dream version:

| Feature                  | Description                                         |
| ------------------------ | --------------------------------------------------- |
| **Testimonials**         | Client testimonials section (after landing clients) |
| **Case Studies**         | Detailed project case study pages                   |
| **CMS Integration**      | Sanity or similar for easy content updates          |
| **Analytics**            | Visitor tracking dashboard                          |
| **Internationalization** | Multi-language support                              |

---

## User Journeys

### Journey 1: Sarah Chen - The Decisive Startup Founder

Sarah is a non-technical startup founder building an MVP for her meal-prep subscription service. She's posted a job on Upwork for a full-stack developer to build her web app and has received 47 proposals in the first 24 hours. Overwhelmed, she's scanning proposals at 11 PM, trying to find someone who actually knows what they're doing.

Most proposals blur together—generic introductions, lists of technologies she doesn't understand, and promises that sound too good to be true. Then she clicks on Opsa's proposal and sees something different: a clean portfolio link. Curious, she clicks.

**The moment the portfolio loads, Sarah notices the difference.** The page doesn't just appear—it *arrives*. A subtle animation draws her eye to the hero section. The design is clean, modern, exactly the aesthetic she wants for her own product. "This is what I want my app to feel like," she thinks.

She scrolls down to the projects section. LinkLost catches her attention—she clicks the live demo link and it actually works. No broken links, no "coming soon" placeholders. She watches QuizMaster load smoothly, tries clicking around, impressed by how polished everything feels.

The breakthrough comes when Sarah realizes: **the portfolio itself is the proof**. She doesn't need to imagine whether this developer can build something beautiful—she's experiencing it right now. The smooth scroll animations, the responsive layout when she checks on her phone, the attention to detail in every hover effect.

Three minutes after landing on the portfolio, Sarah is back on Upwork, typing her reply: "Hi Opsa, I love your work. When can we discuss my project?"

**Journey reveals requirements for:**
- Instant visual impact (hero animations, professional typography)
- Working project demos (LinkLost, QuizMaster with live links)
- Mobile responsiveness (clients check on phones)
- Smooth interactions (scroll reveals, hover effects)
- Clear contact path (back to Upwork or direct contact)

---

### Journey 2: Marcus Rodriguez - The Skeptical CTO

Marcus is the CTO of a growing SaaS company looking to hire a contractor for a complex dashboard rebuild. He's been burned before by developers with impressive-looking portfolios but terrible code underneath. His team lead forwarded him Opsa's proposal with a note: "This one looks promising."

Marcus clicks the portfolio link with his usual skepticism. He's not looking at the pretty animations—he's mentally cataloging the technology decisions. "Next.js, TypeScript, Framer Motion," he notes. "At least they're using modern tooling."

He opens Chrome DevTools while browsing. No console errors. Lighthouse scores look solid. He inspects the network tab—reasonable bundle sizes, proper code splitting. "Okay, they know what they're doing," he admits.

Then he clicks the GitHub link—the real test. He navigates to the portfolio's source code, scans the file structure. Clean organization. Proper TypeScript types, not just `any` everywhere. Component architecture that makes sense. He checks a few commit messages—descriptive, professional.

The turning point comes when Marcus checks the QuizMaster repository. He sees proper error handling, environment variable management, and actual tests. This isn't a developer who just makes things look nice—this is someone who writes production-ready code.

Marcus closes his laptop and sends a Slack message to his team lead: "Set up an interview with this developer. Their code quality checks out."

**Journey reveals requirements for:**
- Visible tech stack (Next.js, TypeScript, Framer Motion badges)
- Performance metrics (fast loading, good Lighthouse scores)
- Clean code (no console errors, proper implementation)
- Prominent GitHub link (easy access for code review)
- Professional project organization (clean repos, good commits)

---

### Journey 3: Sarah Chen Returns - The Mobile Check

After her initial excitement, Sarah wants to show the portfolio to her co-founder during their morning coffee meeting. She pulls up the site on her iPhone while explaining why she likes this developer.

She's relieved when the portfolio loads beautifully on mobile—no awkward horizontal scrolling, no tiny text, no broken layouts. The navigation is easy to use with her thumb. The project cards stack nicely. She can tap on the live demos and they work just as well as on desktop.

Her co-founder is impressed. "Okay, if their portfolio looks this good on mobile, they probably know how to build our app for mobile users too."

Sarah shoots off a follow-up message on Upwork, this time with more urgency: "We'd like to move quickly. Are you available to start next week?"

**Journey reveals requirements for:**
- Mobile-first responsive design
- Touch-friendly navigation
- Properly stacked mobile layouts
- Fast loading on cellular networks
- Cross-device consistency

---

### Journey Requirements Summary

| Capability Area           | Requirements Revealed                                         |
| ------------------------- | ------------------------------------------------------------- |
| **First Impression**      | Animated hero, professional typography, instant visual impact |
| **Project Showcase**      | Live demo links, source code access, tech stack badges        |
| **Performance**           | Fast loading, 60fps animations, good Lighthouse scores        |
| **Mobile Experience**     | Responsive design, touch-friendly, cross-device consistency   |
| **Technical Credibility** | GitHub link, clean code, modern tech stack visibility         |
| **Contact Conversion**    | Clear pathways back to Upwork or direct contact form          |

---

## Web App Specific Requirements

### Project-Type Overview

Portfolio is a modern web application built with Next.js (App Router) that leverages static site generation for performance while incorporating rich client-side animations through Framer Motion. The architecture prioritizes fast initial load times, excellent Core Web Vitals, and smooth user interactions.

### Browser Support Matrix

| Browser           | Minimum Version   | Priority |
| ----------------- | ----------------- | -------- |
| **Chrome**        | Latest 2 versions | Primary  |
| **Firefox**       | Latest 2 versions | Primary  |
| **Safari**        | Latest 2 versions | Primary  |
| **Edge**          | Latest 2 versions | Primary  |
| **Mobile Safari** | iOS 14+           | Primary  |
| **Chrome Mobile** | Latest            | Primary  |

**Not Supported:** Internet Explorer (all versions)

### Responsive Design Requirements

| Breakpoint        | Width           | Target Devices              |
| ----------------- | --------------- | --------------------------- |
| **Mobile**        | 320px - 767px   | Phones (portrait)           |
| **Tablet**        | 768px - 1023px  | Tablets, phones (landscape) |
| **Desktop**       | 1024px - 1439px | Laptops, small monitors     |
| **Large Desktop** | 1440px+         | Large monitors              |

**Design Approach:**
- Mobile-first CSS architecture
- Fluid typography scaling
- Responsive images with `srcset`
- Touch-friendly tap targets (min 44x44px)

### Performance Targets

| Metric                             | Target          | Measurement       |
| ---------------------------------- | --------------- | ----------------- |
| **Lighthouse Performance**         | 90+             | Google Lighthouse |
| **LCP (Largest Contentful Paint)** | < 2.5s          | Core Web Vitals   |
| **FID (First Input Delay)**        | < 100ms         | Core Web Vitals   |
| **CLS (Cumulative Layout Shift)**  | < 0.1           | Core Web Vitals   |
| **Animation Frame Rate**           | 60fps           | Chrome DevTools   |
| **Bundle Size (initial)**          | < 200KB gzipped | Webpack analysis  |

**Optimization Strategies:**
- Code splitting per route
- Lazy loading below-fold content
- Image optimization via `next/image`
- Font preloading with `font-display: swap`
- Animation libraries loaded on demand

### SEO Strategy

| Requirement         | Implementation                                    |
| ------------------- | ------------------------------------------------- |
| **Meta Tags**       | Title, description, Open Graph for social sharing |
| **Semantic HTML**   | Proper heading hierarchy, landmarks               |
| **Structured Data** | JSON-LD for Person schema                         |
| **Sitemap**         | Auto-generated via Next.js                        |
| **Robots.txt**      | Allow all pages                                   |

**Priority:** Low — Primary traffic comes from direct Upwork links, not organic search. Basic SEO is implemented for professionalism when clients search your name.

### Accessibility Level

**Target:** WCAG 2.1 Level AA

| Requirement               | Implementation                                    |
| ------------------------- | ------------------------------------------------- |
| **Keyboard Navigation**   | All interactive elements focusable and operable   |
| **Color Contrast**        | Minimum 4.5:1 for normal text, 3:1 for large text |
| **Focus Indicators**      | Visible focus states for all interactive elements |
| **Screen Reader Support** | ARIA labels where needed, semantic HTML           |
| **Motion Sensitivity**    | Respect `prefers-reduced-motion` for animations   |
| **Alt Text**              | Descriptive alt text for all images               |

### Technical Architecture Considerations

| Aspect                 | Decision                                   |
| ---------------------- | ------------------------------------------ |
| **Rendering Strategy** | Static Site Generation (SSG) for all pages |
| **Animation Library**  | Framer Motion (client-side)                |
| **Styling**            | CSS Modules or Tailwind CSS                |
| **State Management**   | Not needed (no complex state)              |
| **API Routes**         | Contact form handler only                  |
| **Deployment**         | Vercel with automatic preview deployments  |

### Implementation Considerations

| Consideration               | Approach                                        |
| --------------------------- | ----------------------------------------------- |
| **Development Environment** | Node.js 18+, npm/pnpm                           |
| **TypeScript**              | Strict mode enabled                             |
| **Linting**                 | ESLint + Prettier                               |
| **Testing**                 | Lighthouse CI for performance regression        |
| **Environment Variables**   | `.env.local` for secrets (never client-exposed) |

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP
> Deliver the key user experience with minimal but polished functionality. The portfolio's quality IS the proof of skill—less about feature quantity, more about execution excellence.

**Resource Requirements:**
- **Team Size:** Solo developer (Opsa)
- **Skills Needed:** Next.js, Framer Motion, TypeScript, responsive design
- **Estimated Timeline:** 1-2 weeks for MVP

**Why Experience MVP:**
- The differentiator is the experience itself (design quality, animations)
- Portfolio must demonstrate skill through its own existence
- Ship fast, iterate based on real client feedback
- Every feature must be polished, not just functional

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. ✅ Sarah Chen (startup founder) - Trust-building through visual excellence
2. ✅ Marcus Rodriguez (CTO) - Technical credibility verification
3. ✅ Mobile check journey - Cross-device consistency

**Must-Have Capabilities:**

| Feature                   | User Value                   | Technical Notes                    |
| ------------------------- | ---------------------------- | ---------------------------------- |
| **Animated Hero Section** | Immediate quality impression | Framer Motion entrance animations  |
| **Projects Section**      | Core portfolio showcase      | LinkLost & QuizMaster with details |
| **Live Demo Links**       | Proof projects work          | External links to deployed apps    |
| **Source Code Links**     | Technical evaluation         | GitHub repository links            |
| **Tech Stack Badges**     | Skill visibility             | Visual technology indicators       |
| **About Section**         | Personal context             | Brief bio and skills               |
| **Contact Section**       | Conversion path              | Form + email link                  |
| **GitHub Profile Link**   | Code review access           | Prominent placement                |
| **Responsive Design**     | Mobile/tablet support        | Mobile-first approach              |
| **Scroll Animations**     | Engagement & polish          | whileInView reveals                |
| **Hover Effects**         | Interactive feedback         | Project card interactions          |
| **Page Transitions**      | Premium feel                 | AnimatePresence between routes     |

### Post-MVP Features

**Phase 2 (After Landing First Clients):**

| Feature                 | Trigger to Add                            | Effort |
| ----------------------- | ----------------------------------------- | ------ |
| **Dark/Light Mode**     | User requests or personal preference      | Medium |
| **Additional Projects** | Complete new client work worth showcasing | Low    |
| **Blog Section**        | Want to drive organic traffic             | High   |
| **GitHub Stats Widget** | Want more "wow" factor                    | Medium |
| **Improved Animations** | Feedback suggests opportunities           | Low    |

**Phase 3 (Expansion):**

| Feature                  | Trigger to Add                      | Effort |
| ------------------------ | ----------------------------------- | ------ |
| **Testimonials Section** | Collect 2-3 client testimonials     | Low    |
| **Case Study Pages**     | Complete projects worth deep-diving | High   |
| **CMS Integration**      | Frequent content updates needed     | High   |
| **Analytics Dashboard**  | Want data-driven optimization       | Medium |
| **Internationalization** | Target non-English markets          | High   |

### Risk Mitigation Strategy

**Technical Risks:**

| Risk                         | Likelihood | Mitigation                                                  |
| ---------------------------- | ---------- | ----------------------------------------------------------- |
| Animation performance issues | Low        | Follow Framer Motion best practices, test on slower devices |
| Mobile responsiveness gaps   | Medium     | Test early and often on real devices                        |
| Contact form failures        | Low        | Use reliable service (Resend), add error handling           |

**Market Risks:**

| Risk                                        | Likelihood | Mitigation                                                       |
| ------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| Portfolio doesn't convert to clients        | Medium     | Iterate design based on feedback, A/B test messaging             |
| Projects don't resonate with target clients | Low        | Showcase variety (LinkLost + QuizMaster cover different domains) |

**Resource Risks:**

| Risk                          | Likelihood | Mitigation                                  |
| ----------------------------- | ---------- | ------------------------------------------- |
| Time constraints delay launch | Medium     | Prioritize ruthlessly, ship MVP first       |
| Scope creep extends timeline  | Medium     | Stick to defined MVP, defer "nice to haves" |

### Scope Boundaries

**In Scope for MVP:**
- Single-page or minimal multi-page architecture
- Static content (no CMS)
- Contact form with email delivery
- Two project showcases
- Core animations and transitions

**Explicitly Out of Scope:**
- Blog functionality
- Dynamic content management
- User authentication
- Database integration
- Third-party API integrations (beyond contact form)
- Analytics (can add Vercel Analytics post-launch)

---

## Functional Requirements

### Hero & First Impression

- **FR1:** Visitors can view an animated hero section displaying name, title, and brief introduction
- **FR2:** Visitors can experience smooth entrance animations when the page loads
- **FR3:** Visitors can immediately perceive visual quality through typography and layout

### Project Showcase

- **FR4:** Visitors can view a list of portfolio projects with visual previews
- **FR5:** Visitors can see project titles, descriptions, and technology stack for each project
- **FR6:** Visitors can access live demo links for deployed projects (LinkLost, QuizMaster)
- **FR7:** Visitors can access source code links to GitHub repositories for each project
- **FR8:** Visitors can view technology badges indicating skills used in each project
- **FR9:** Visitors can experience hover effects and animations on project cards

### About Section

- **FR10:** Visitors can view a brief professional bio and background
- **FR11:** Visitors can see a skills overview with relevant technologies
- **FR12:** Visitors can understand professional context and experience level

### Contact & Conversion

- **FR13:** Visitors can submit a contact inquiry through a form (name, email, message)
- **FR14:** Portfolio owner (Opsa) receives email notifications when contact form is submitted
- **FR15:** Visitors can access a direct email link as alternative contact method
- **FR16:** Visitors can easily return to Upwork to continue hiring conversation

### External Links & Credibility

- **FR17:** Visitors can access GitHub profile link for code review and verification
- **FR18:** Visitors can view GitHub profile in new tab without leaving portfolio
- **FR19:** Technical evaluators can navigate from portfolio to specific project repositories

### Navigation & Structure

- **FR20:** Visitors can navigate between sections of the portfolio (hero, projects, about, contact)
- **FR21:** Visitors can scroll through the entire portfolio as a single-page experience
- **FR22:** Visitors can see smooth scroll-triggered reveal animations as they navigate

### Responsive Experience

- **FR23:** Visitors can view and interact with the portfolio on mobile devices (phones)
- **FR24:** Visitors can view and interact with the portfolio on tablet devices
- **FR25:** Visitors can view and interact with the portfolio on desktop devices
- **FR26:** Visitors experience consistent design and functionality across all device sizes

### Accessibility

- **FR27:** Visitors using keyboard can navigate all interactive elements
- **FR28:** Visitors using screen readers can understand content through semantic HTML and ARIA labels
- **FR29:** Visitors with motion sensitivity can experience reduced animations (prefers-reduced-motion)
- **FR30:** Visitors can perceive content with sufficient color contrast

### Animation & Interactions

- **FR31:** Visitors experience page transition animations when navigating (if multi-page)
- **FR32:** Visitors experience scroll-triggered fade-in and slide animations for sections
- **FR33:** Visitors experience hover state changes on interactive elements
- **FR34:** All animations run at 60fps without jank or stutter

---

## Non-Functional Requirements

### Performance

| NFR      | Requirement                                             | Measurement                       |
| -------- | ------------------------------------------------------- | --------------------------------- |
| **NFR1** | Initial page load completes within 2.5 seconds          | LCP metric                        |
| **NFR2** | Time to interactive under 3.5 seconds on 3G connections | TTI metric                        |
| **NFR3** | All animations run at 60fps without dropped frames      | Chrome DevTools Performance panel |
| **NFR4** | Cumulative layout shift less than 0.1                   | CLS metric                        |
| **NFR5** | First input delay under 100ms                           | FID/INP metric                    |
| **NFR6** | Initial JavaScript bundle under 200KB gzipped           | Webpack bundle analysis           |
| **NFR7** | Images optimized and lazy-loaded below the fold         | Network analysis                  |
| **NFR8** | Lighthouse Performance score of 90 or above             | Google Lighthouse                 |

### Accessibility

| NFR       | Requirement                                           | Measurement                |
| --------- | ----------------------------------------------------- | -------------------------- |
| **NFR9**  | WCAG 2.1 Level AA compliance                          | Accessibility audit        |
| **NFR10** | All interactive elements keyboard accessible          | Manual keyboard testing    |
| **NFR11** | Color contrast ratio minimum 4.5:1 for normal text    | Contrast checker tools     |
| **NFR12** | Color contrast ratio minimum 3:1 for large text       | Contrast checker tools     |
| **NFR13** | All images have descriptive alt text                  | HTML inspection            |
| **NFR14** | Focus indicators visible on all focusable elements    | Visual inspection          |
| **NFR15** | Animations respect prefers-reduced-motion preference  | Browser preference testing |
| **NFR16** | Screen reader can navigate and understand all content | VoiceOver/NVDA testing     |

### Security

| NFR       | Requirement                                                      | Measurement            |
| --------- | ---------------------------------------------------------------- | ---------------------- |
| **NFR17** | All traffic served over HTTPS                                    | Certificate validation |
| **NFR18** | Contact form inputs sanitized to prevent XSS                     | Security testing       |
| **NFR19** | No sensitive data exposed in client-side code                    | Code review            |
| **NFR20** | API keys stored as environment variables, never in client bundle | Build inspection       |
| **NFR21** | Contact form rate-limited to prevent abuse                       | Load testing           |

### Compatibility

| NFR       | Requirement                                                              | Measurement           |
| --------- | ------------------------------------------------------------------------ | --------------------- |
| **NFR22** | Functions correctly on Chrome, Firefox, Safari, Edge (latest 2 versions) | Cross-browser testing |
| **NFR23** | Functions correctly on iOS Safari 14+                                    | Device testing        |
| **NFR24** | Functions correctly on Android Chrome                                    | Device testing        |
| **NFR25** | Responsive layout works from 320px to 2560px viewport widths             | Responsive testing    |

