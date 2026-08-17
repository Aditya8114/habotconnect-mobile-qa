# Mobile QA Test Strategy

## 1. Scope
The primary business journey is Parent booking an LSA.

## 2. Test Pyramid
### Unit
Fast validation of business rules such as booking validation and price calculation.

### Integration
Validate interactions between authentication, LSA search/profile data and booking logic.

### End-to-End
Validate the complete user journey from parent login through booking confirmation on a real mobile build.

## 3. Test Selection
- Every code change: lint + unit tests.
- Pull request: integration tests + quality checks.
- Release candidate: E2E smoke suite + accessibility audit + performance checks.
- Production release: approved quality gates and release checklist.

## 4. Failure Handling
A failed quality gate blocks release until the failure is investigated, fixed or formally reviewed.

## 5. Test Data
Use dedicated non-production parent and LSA accounts. Do not store real personal data, passwords or tokens in the repository.

## 6. Automation Principles
- Prefer deterministic tests.
- Use stable accessibility labels/test IDs rather than fragile coordinate selectors.
- Keep E2E flows focused on business-critical journeys.
- Keep test data isolated and repeatable.
