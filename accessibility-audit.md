# Accessibility Audit Plan — WCAG 2.1/2.2 AA

## Scope
Audit the Parent-LSA journey: Login → LSA search → LSA profile → date/time selection → booking confirmation.

## Step 1 — Automated checks
- Run Android Accessibility Scanner on every core screen.
- Review missing labels, touch target warnings, duplicate descriptions and contrast warnings.
- Record every finding with screen, element, WCAG criterion, severity, evidence and owner.

## Step 2 — Visual contrast review
- Use Stark or an equivalent contrast checker during design review.
- Verify text and important UI information meet the applicable WCAG AA contrast requirements.
- Check normal, disabled, error and focused states.

## Step 3 — Assistive technology testing
### Android
- Test with TalkBack.
- Confirm logical focus order.
- Confirm controls expose meaningful names and roles.
- Confirm errors and booking status changes are announced.

### iOS
- Test with VoiceOver when an iOS build is available.
- Confirm the same journey is navigable without visual interaction.

## Step 4 — Interaction checks
- Verify controls have usable touch targets.
- Verify focus is not trapped.
- Verify forms expose labels and validation messages.
- Verify dynamic content can be understood by assistive technology.

## Step 5 — Defect workflow
For each issue capture:
1. Screen and element
2. Steps to reproduce
3. Actual result
4. Expected result
5. WCAG criterion
6. Severity and user impact
7. Screenshot/video evidence
8. Fix owner
9. Re-test result

## Release gate
No known critical accessibility blocker should be released. High-impact accessibility defects should require explicit review before release.

> This is an audit plan for the assessment scenario. No real HabotConnect accessibility scan has been claimed because no application build was supplied.
