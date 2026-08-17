# HabotConnect Mobile QA Automation Project

**Position:** Junior Mobile App Quality Assurance Specialist  
**Project:** HabotConnect Parent-LSA mobile application (mock/staging scenario)

> **Important:** This repository is a proposed/mock QA implementation based on the Hiring Project Form. No HabotConnect application source code or staging build was supplied with the assessment. Test scripts and results in this repository therefore demonstrate the intended automation architecture rather than claiming execution against a real HabotConnect build.

## Candidate Contact
- **Full Legal Name:** YOUR FULL NAME
- **Email:** YOUR EMAIL ADDRESS
- **Phone:** YOUR PHONE NUMBER

## Objective
Design a scalable mobile-first quality strategy for the Parent → Learning Support Assistant (LSA) booking journey, covering:
- Unit testing
- Integration testing
- End-to-End (E2E) testing
- Accessibility compliance checks
- Performance profiling approach
- Continuous Integration / Continuous Delivery (CI/CD)
- Git governance and pre-commit quality gates

## Proposed Tooling
| Area | Tool | Reason |
|---|---|---|
| Unit / integration | Jest | Fast feedback and simple JavaScript/TypeScript test execution |
| E2E | Maestro | Human-readable mobile flows and low-maintenance smoke journeys |
| Accessibility | Accessibility Scanner, Stark, TalkBack/VoiceOver | Automated checks plus manual assistive-technology validation |
| Linting | ESLint | Static quality checks |
| Formatting | Prettier | Consistent source formatting |
| Pre-commit | Husky | Prevent low-quality commits |
| CI/CD | GitHub Actions | Pull-request and main-branch quality gates |
| Performance | Node mock profiling script + planned device profiling | Demonstrates measurement methodology without claiming real app measurements |

## Core User Journey
1. Parent launches the app.
2. Parent logs in.
3. Parent searches for an LSA.
4. Parent opens an LSA profile.
5. Parent selects a date and time.
6. Parent confirms the booking.
7. App displays booking confirmation.

## Repository Map
```text
src/
  booking.js

tests/
  unit/booking.test.js
  integration/booking.integration.test.js
  e2e/parent-booking.yaml

accessibility/
  accessibility-audit.md

performance/
  performance-test.js

.github/workflows/
  mobile-qa.yml

.husky/
  pre-commit

docs/
  test-strategy.md
```

## Local Commands
```bash
npm install
npm test
npm run lint
npm run format:check
npm run performance
```

The Maestro flow is a **mock/example flow** and requires a real mobile build with matching accessibility labels/test IDs before it can be executed.

## Quality Gates
A pull request should be blocked when linting, unit tests, integration tests, or build validation fails. E2E and device-level accessibility/performance checks can be added as release gates once the real application build and test environment are available.
