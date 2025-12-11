# System-Level Test Design

**Date:** 2025-12-11
**Author:** Opsa (TEA Agent)
**Status:** Draft
**Project:** Portfolio - Developer Portfolio Website

---

## Executive Summary

This document provides a **system-level testability review** for the Portfolio project before implementation begins. The architecture has been evaluated for controllability, observability, and reliability from a testing perspective. This assessment informs the implementation-readiness gate check and identifies any testability concerns that should be addressed during Sprint 0.

**Key Findings:**
- ✅ Architecture is highly testable due to static content nature
- ✅ Simple component structure enables isolated testing
- ✅ Clear separation of concerns (ui/sections/layout)
- ⚠️ Animation testing requires specific approach (Framer Motion + reduced motion)
- ⚠️ Contact form API is the only stateful component requiring integration testing

---

## Testability Assessment

### Controllability
**Status: ✅ PASS**

Can we control system state for testing?

| Aspect                        | Assessment       | Details                                                                            |
| ----------------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| **Data Seeding**              | ✅ N/A            | Static content portfolio - no database, project data is hardcoded in `lib/data.ts` |
| **External Dependencies**     | ✅ Mockable       | Only external dependency is Resend API (contact form), easily mockable in tests    |
| **Error Condition Testing**   | ✅ Feasible       | API route errors can be triggered via mocked responses                             |
| **State Reset**               | ✅ Simple         | No persistent state - each page load is clean slate                                |
| **Environment Configuration** | ✅ Single env var | Only `RESEND_API_KEY` required                                                     |

**Controllability Strengths:**
- Pure static site with SSG - no database to manage
- Contact form is only stateful interaction
- Rate limiting uses in-memory Map (resets on deployment)
- Component isolation enabled by hybrid architecture pattern

**Controllability Gaps:** None identified

---

### Observability
**Status: ✅ PASS**

Can we inspect system state and validate results?

| Aspect                       | Assessment          | Details                                                 |
| ---------------------------- | ------------------- | ------------------------------------------------------- |
| **Test Results Determinism** | ✅ High              | Static content means consistent test results            |
| **Animation Validation**     | ⚠️ Requires approach | Framer Motion animations need specific testing strategy |
| **Performance Metrics**      | ✅ Measurable        | Lighthouse CI can validate Core Web Vitals              |
| **API Response Validation**  | ✅ Standard JSON     | Contact API returns `{ success, message/error }` format |
| **Visual Regression**        | ✅ Feasible          | Static pages ideal for screenshot comparison            |
| **Accessibility Validation** | ✅ Automatable       | axe-core integration straightforward                    |

**Observability Strengths:**
- Consistent API response format defined in architecture
- CSS custom properties enable systematic style validation
- Semantic HTML structure enables reliable selector strategies
- Defined design tokens (colors, spacing, typography) allow systematic verification

**Animation Testing Approach:**
```typescript
// Reduced motion preference can be tested
test('respects prefers-reduced-motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  // Verify animations are disabled or instant
});

// Animation completion can be verified
test('hero animations complete', async ({ page }) => {
  await page.goto('/');
  // Wait for animation to complete (0.8s max per spec)
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
```

---

### Reliability
**Status: ✅ PASS**

Are tests isolated, reproducible, and deterministic?

| Aspect                      | Assessment  | Details                                           |
| --------------------------- | ----------- | ------------------------------------------------- |
| **Test Isolation**          | ✅ Excellent | No shared state between page loads                |
| **Parallel Safety**         | ✅ Safe      | Static content, no database conflicts             |
| **Failure Reproducibility** | ✅ High      | Deterministic rendering from static data          |
| **Loose Coupling**          | ✅ Achieved  | Component boundaries well-defined in architecture |
| **Cleanup Requirements**    | ✅ None      | No persistent data to clean up                    |

**Reliability Strengths:**
- SSG means pages are pre-rendered and consistent
- No authentication flows reduce test complexity
- Single-page structure simplifies navigation testing
- Component architecture enables unit + integration testing without full E2E

**Reliability Concerns:** None identified

---

## Architecturally Significant Requirements (ASRs)

Risk-scored quality requirements that drive architecture decisions:

| ASR ID | Requirement                         | Category | Probability | Impact | Score | Testability Impact                 |
| ------ | ----------------------------------- | -------- | ----------- | ------ | ----- | ---------------------------------- |
| ASR-1  | Lighthouse Performance 90+ (NFR8)   | PERF     | 2           | 3      | 6     | Requires Lighthouse CI integration |
| ASR-2  | 60fps animations (NFR3)             | PERF     | 2           | 2      | 4     | Requires Chrome DevTools profiling |
| ASR-3  | LCP < 2.5s (NFR1)                   | PERF     | 2           | 3      | 6     | Tested via Lighthouse CI           |
| ASR-4  | WCAG 2.1 AA compliance (NFR9)       | SEC      | 2           | 3      | 6     | Requires axe-core integration      |
| ASR-5  | Contact form XSS prevention (NFR18) | SEC      | 2           | 3      | 6     | Requires input sanitization tests  |
| ASR-6  | Rate limiting (NFR21)               | SEC      | 2           | 2      | 4     | Requires API load testing          |
| ASR-7  | Mobile responsiveness (NFR25)       | BUS      | 1           | 2      | 2     | E2E tests at multiple viewports    |
| ASR-8  | Cross-browser compatibility (NFR22) | BUS      | 1           | 2      | 2     | CI matrix for browser testing      |

### High-Priority ASRs (Score ≥6)

**ASR-1: Lighthouse Performance 90+**
- **Mitigation:** Lighthouse CI in GitHub Actions
- **Owner:** Dev (during story development)
- **Validation:** Automated performance budget checks

**ASR-3: LCP < 2.5s**
- **Mitigation:** SSG + font preloading + image optimization
- **Owner:** Dev
- **Validation:** Core Web Vitals in Lighthouse CI

**ASR-4: WCAG 2.1 AA Compliance**
- **Mitigation:** Semantic HTML + ARIA + focus management
- **Owner:** Dev + QA
- **Validation:** axe-core integration tests

**ASR-5: Contact Form XSS Prevention**
- **Mitigation:** Zod validation + server-side sanitization
- **Owner:** Dev
- **Validation:** Security E2E tests (input sanitization)

---

## Test Levels Strategy

Based on architecture analysis (portfolio website, static content, minimal API):

| Test Level      | Recommended % | Rationale                                                 |
| --------------- | ------------- | --------------------------------------------------------- |
| **Unit**        | 30%           | Animation variants, utility functions, validation schemas |
| **Component**   | 30%           | UI components (Button, Badge, Input, SectionWrapper)      |
| **Integration** | 20%           | Contact form API, form submission flow                    |
| **E2E**         | 20%           | Critical user journeys, cross-browser, visual regression  |

### Recommended Test Split (70/20/10 simplified)

```
70% Fast Feedback (Unit + Component)
├── Unit: lib/motion.ts variants, lib/utils.ts, validation schemas
├── Component: Button, Badge, Input, ProjectCard (props, states, interactions)
└── Hooks: useReducedMotion hook testing

20% Integration
├── Contact form submission → API response
├── Contact API → Resend integration (mocked)
└── Form validation flow

10% E2E (Critical Paths)
├── Hero entrance animation renders
├── Contact form happy path works
├── Navigation works (scroll + links)
├── Mobile responsiveness verified
└── Accessibility assertion pass
```

### Why This Split?

1. **Static Portfolio** - Most "testing" is visual verification, not business logic
2. **Limited State** - Only contact form has state (isSubmitting, isSent, hasError)
3. **Animation Focus** - Unit tests validate motion variants, E2E validates user experience
4. **Performance Focus** - Lighthouse CI covers most NFRs automatically
5. **Developer Experience** - Fast feedback loop with unit/component tests

---

## NFR Testing Approach

### Security (NFR17-21)

| NFR                       | Testing Approach                | Tool               |
| ------------------------- | ------------------------------- | ------------------ |
| NFR17: HTTPS              | Infrastructure (Vercel default) | N/A                |
| NFR18: XSS Prevention     | E2E security tests              | Playwright         |
| NFR19: No secrets exposed | Build inspection                | ESLint rules       |
| NFR20: Env vars secure    | Build inspection                | CI check           |
| NFR21: Rate limiting      | API integration test            | Playwright request |

**Security Test Examples:**
```typescript
// tests/e2e/security/xss-prevention.spec.ts
test('contact form sanitizes XSS input', async ({ page }) => {
  await page.goto('/#contact');
  await page.getByLabel('Message').fill('<script>alert("XSS")</script>');
  // Form should accept but sanitize on server
});

// tests/integration/rate-limiting.spec.ts
test('rate limits after 5 requests', async ({ request }) => {
  for (let i = 0; i < 6; i++) {
    const response = await request.post('/api/contact', { data: validData });
    if (i < 5) expect(response.status()).toBe(200);
    else expect(response.status()).toBe(429);
  }
});
```

### Performance (NFR1-8)

| NFR                      | Testing Approach  | Tool                          |
| ------------------------ | ----------------- | ----------------------------- |
| NFR1: LCP < 2.5s         | Lighthouse CI     | lhci                          |
| NFR2: TTI < 3.5s         | Lighthouse CI     | lhci                          |
| NFR3: 60fps animations   | Manual + DevTools | Chrome Performance            |
| NFR4: CLS < 0.1          | Lighthouse CI     | lhci                          |
| NFR5: FID < 100ms        | Lighthouse CI     | lhci                          |
| NFR6: Bundle < 200KB     | Build analysis    | Next.js bundle analyzer       |
| NFR7: Lazy-loaded images | E2E test          | Playwright network inspection |
| NFR8: Lighthouse 90+     | Lighthouse CI     | lhci (automated)              |

**Performance Test Example:**
```yaml
# .github/workflows/lighthouse-ci.yml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v11
  with:
    urls: |
      http://localhost:3000/
    budgetPath: ./lighthouse-budget.json
    uploadArtifacts: true
```

**Lighthouse Budget:**
```json
{
  "performance": 90,
  "accessibility": 95,
  "best-practices": 90,
  "seo": 80
}
```

### Reliability (Contact Form Error Handling)

| Scenario          | Testing Approach  | Tool                          |
| ----------------- | ----------------- | ----------------------------- |
| API 500 error     | Mock API response | Playwright route              |
| Network offline   | Simulate offline  | Playwright context.setOffline |
| Validation errors | E2E form test     | Playwright                    |
| Success state     | E2E form test     | Playwright                    |

**Reliability Test Example:**
```typescript
// tests/e2e/reliability/contact-error-handling.spec.ts
test('shows error message when API fails', async ({ page, context }) => {
  await context.route('**/api/contact', (route) => {
    route.fulfill({ status: 500, body: JSON.stringify({ error: 'Server error' }) });
  });

  await page.goto('/#contact');
  await page.getByLabel('Name').fill('Test User');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Message').fill('Hello, this is a test message.');
  await page.getByRole('button', { name: 'Send Message' }).click();

  await expect(page.getByText('Something went wrong')).toBeVisible();
});
```

### Maintainability (Code Quality)

| Aspect        | Testing Approach   | Tool             |
| ------------- | ------------------ | ---------------- |
| Test coverage | CI coverage report | Jest/Vitest      |
| Type safety   | TypeScript strict  | tsc --noEmit     |
| Linting       | ESLint             | eslint           |
| Format        | Prettier           | prettier --check |

**Maintainability CI Example:**
```yaml
# .github/workflows/ci.yml
- name: Type Check
  run: npm run type-check

- name: Lint
  run: npm run lint

- name: Test with Coverage
  run: npm run test:coverage
  
- name: Upload Coverage
  uses: codecov/codecov-action@v3
```

---

## Test Environment Requirements

| Environment             | Purpose                    | Configuration                 |
| ----------------------- | -------------------------- | ----------------------------- |
| **Local**               | Development + unit tests   | `npm run dev`, `npm run test` |
| **CI (GitHub Actions)** | All test levels            | Node 18+, headless browsers   |
| **Preview (Vercel)**    | E2E against preview deploy | Vercel preview URL            |
| **Production**          | Post-deploy smoke tests    | Production URL                |

**Required CI Matrix:**
- Node.js: 18.x, 20.x
- Browsers: Chromium, Firefox, WebKit (Playwright)
- Viewports: Desktop (1280x720), Tablet (768x1024), Mobile (375x667)

---

## Testability Concerns (If Any)

### No Critical Blockers ✅

The architecture is highly testable. No concerns that would block implementation.

### Minor Recommendations

| Concern           | Impact | Recommendation                                                  |
| ----------------- | ------ | --------------------------------------------------------------- |
| Animation timing  | Low    | Use `page.waitForTimeout(1000)` for animation completion in E2E |
| Framer Motion SSR | Low    | Mark animated components with `'use client'`                    |
| Font loading      | Low    | Preload fonts to prevent layout shift during tests              |

---

## Recommendations for Sprint 0

### Test Framework Setup (`testarch-framework` workflow)

1. **Install Playwright** for E2E testing
   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```

2. **Install Vitest** for unit/component testing
   ```bash
   npm install -D vitest @testing-library/react
   ```

3. **Install axe-core** for accessibility testing
   ```bash
   npm install -D @axe-core/playwright
   ```

4. **Configure Lighthouse CI**
   ```bash
   npm install -D @lhci/cli
   ```

### CI Pipeline Setup (`testarch-ci` workflow)

1. **GitHub Actions workflow** for test automation
2. **Lighthouse CI** for performance regression
3. **Playwright shards** for parallel E2E (optional for small project)
4. **Coverage reporting** via Codecov or similar

### Test Data Strategy

- **No database** - Static project data in `lib/data.ts`
- **Contact form** - Use faker for form data in E2E tests
- **No authentication** - No auth fixtures needed

---

## Quality Gate Criteria

### Pre-Release Checklist

- [ ] All P0 tests pass (100%)
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] No high-risk (score ≥6) items unmitigated
- [ ] Contact form works end-to-end
- [ ] Mobile responsiveness verified (375px - 2560px)
- [ ] Reduced motion preference respected
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)

### Coverage Targets

| Category                   | Target               |
| -------------------------- | -------------------- |
| Unit test coverage         | 70% (lib/, hooks/)   |
| Component test coverage    | 80% (components/ui/) |
| E2E critical path coverage | 100%                 |
| Accessibility automation   | 100% of pages        |

---

## Appendix: Knowledge Base References

- `nfr-criteria.md` - NFR validation approaches (security, performance, reliability, maintainability)
- `test-levels-framework.md` - Test level selection guidance
- `risk-governance.md` - Risk classification and scoring
- `test-quality.md` - Test quality Definition of Done

---

## Next Steps

1. ✅ **Complete Implementation Readiness Check** - Run `/bmad-bmm-workflows-check-implementation-readiness`
2. ⏭️ **Sprint Planning** - Run `/bmad-bmm-workflows-sprint-planning`
3. ⏭️ **Test Framework Setup** - Run `/bmad-bmm-workflows-testarch-framework` during Sprint 0
4. ⏭️ **CI Pipeline Setup** - Run `/bmad-bmm-workflows-testarch-ci` during Sprint 0

---

**Generated by**: BMad TEA Agent - Test Architect Module
**Workflow**: `.bmad/bmm/testarch/test-design` (System-Level Mode)
**Version**: 4.0 (BMad v6)
