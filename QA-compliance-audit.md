# QA & Compliance Audit Report

**Application:** Queensway Chemist React + Tailwind web application  
**Audit scope:** Legal pages, customer lifecycle flows, UX states and fallbacks  
**Audit date:** 25 September 2026  
**Audit method:** Static route/source inspection, TypeScript validation, production build validation, and runtime browser checks against the active dev preview.

## Executive Summary

The application is a polished public-facing community-pharmacy website and its primary visitor journeys are functional. The homepage, NHS Pharmacy First guide, booking modal, contact form, searchable Help Center, legal directory, service pages, nomination guide, and custom 404 route are implemented and render successfully.

The application is **not a customer-account, subscription, commerce, or payment application**. Its source explicitly states that there are no patient accounts, no login, no online payments, no patient health-data intake, and no payment gateway. Consequently, the requested authentication, onboarding, billing, subscription, and payment lifecycle pages are absent by design rather than accidentally hidden.

The audit identified several production gaps that should be resolved before treating the application as fully compliant with the supplied checklist:

1. **High:** The Cookie Preferences route exists but is not interactive; it only displays explanatory text. Interactive controls exist only in the transient cookie banner.
2. **High:** An unknown legal document route, such as `/legal/refund-policy`, silently renders the Privacy Policy instead of a 404 or an explicit unavailable-document state. This can mislead users and is unsafe for compliance documents.
3. **High:** 403, 500, maintenance, offline, and session-expired states are not implemented.
4. **Medium:** Refund Policy and Return / Exchange Policy are absent. Support & Enquiries is also absent, although Help Center exists.
5. **Medium:** FAQ and mobile navigation controls lack `aria-expanded` / `aria-controls`; the custom booking modal has no visible focus trap, Escape-key handling, or `aria-describedby` relationship.
6. **Medium:** The Cal.com iframe was present but blank in the sandbox preview, so the external scheduling dependency was not fully verified in this environment.

The project passed `pnpm check` during the audit. The previously run production build also passed successfully with only a non-blocking bundle-size warning.

## 1. Legal Pages

| Requested page | Route / implementation | Result | Findings |
|---|---|---:|---|
| Privacy Policy | `/legal/privacy-policy` via `LegalPage.tsx` | **Pass — partial depth** | Route renders. Includes controller, UK GDPR/DPA references, zero-health-data statement, lawful basis, processor reference, and rights. Content is concise rather than a complete production privacy notice with full retention, recipients, DPO, complaint, and international-transfer detail. |
| Terms of Service | `/legal/terms-of-service` | **Pass — partial depth** | Route renders with website nature, medical-advice disclaimer, and governing law. Content is minimal for a production legal terms document. |
| Cookie Policy | `/legal/cookie-policy` | **Partial** | Route renders, but only two short paragraphs are provided. The supplied requirements called for a PECR cookie inventory table containing name, category, purpose, duration, and provider. |
| Cookie Preferences | `/legal/cookie-preferences` | **Fail — functional gap** | Route renders a “Cookie Consent Preferences Center,” but has no checkboxes, save action, or preference state. The interactive controls are implemented only in `CookieConsentBanner.tsx`. |
| Refund Policy | No route or document | **Fail — missing** | No refund policy exists. This may be intentionally inapplicable because the site states that it takes no online payments, but the checklist explicitly requested it. |
| Cancellation Policy | `/legal/cancellation-policy` | **Pass — partial depth** | Route renders zero-fee cancellation and 24-hour courtesy guidance. |
| Shipping / Prescription Delivery Policy | `/legal/shipping-policy` | **Pass — partial depth** | Route renders delivery zones, cold-chain, and doorstep handover guidance. |
| Return / Exchange Policy | No route or document | **Fail — missing / likely N/A** | No return or exchange policy exists. If the pharmacy remains non-commerce, add an explicit “Not applicable — no goods are sold online” policy page rather than leaving the requirement ambiguous. |
| Disclaimer | `/legal/disclaimer` | **Pass — partial depth** | Includes emergency routing, NHS 111, POM, and clinical-information limitations. |
| Accessibility Statement | `/legal/accessibility` | **Pass — partial depth** | Route renders WCAG 2.2 AA commitment and keyboard/contrast language. It should be expanded with a contact process, known limitations, test date, and assistive technology coverage. |
| Data Processing Agreement | `/legal/data-processing-agreement` | **Pass — minimal** | Route renders a short processor-safeguard statement. It is not a complete DPA with required parties, subject matter, duration, data categories, subprocessors, breach support, and audit terms. |
| Acceptable Use Policy | `/legal/acceptable-use-policy` | **Pass — minimal** | Route renders scraping/spam/misuse prohibitions. |
| Security Policy | `/legal/security-policy` | **Pass — minimal** | Route renders TLS and zero-data-at-rest claims. It should include ownership, incident response, reporting channel, dependency management, and disclosure timelines. |
| Responsible Disclosure | `/legal/responsible-disclosure` | **Pass — minimal** | Route renders safe-harbor language but lacks a real reporting address, scope, encryption/contact details, and response SLA. |
| Community Guidelines | `/legal/community-guidelines` | **Pass — minimal** | Route renders respectful-engagement and misinformation language but lacks moderation process and escalation detail. |

### Critical legal routing defect

`LegalPage.tsx` uses a fallback:

```tsx
const docData = LEGAL_CONTENT_MAP[activeDocId] || LEGAL_CONTENT_MAP['privacy-policy'];
```

Runtime verification of `/legal/refund-policy` confirmed that the page displays **“Privacy Policy (UK GDPR & DPA 2018)”** rather than returning 404 or showing an explicit unavailable-document state. This is a high-risk compliance defect because an invalid legal URL can appear valid while presenting the wrong document.

### Legal recommendations

- Add explicit Refund Policy and Return / Exchange Policy routes, or explicitly mark them “Not applicable — no online commerce or payments.”
- Make `/legal/cookie-preferences` a real preference-management page that shares state and save logic with the banner.
- Replace the unknown-document fallback with a 404 or a dedicated “Document unavailable” state.
- Expand all legal documents from summaries into reviewed, jurisdiction-specific documents before production publication.

## 2. Customer Lifecycle Pages & Flows

| Requested capability | Result | Evidence / interpretation |
|---|---:|---|
| Login | **Not implemented — intentional** | The site explicitly states that no patient accounts or logins exist. |
| Register | **Not implemented — intentional** | No account creation exists. |
| Email Verification | **Not implemented — N/A** | No account or email-authentication system exists. |
| Forgot Password | **Not implemented — N/A** | No password system exists. |
| Reset Password | **Not implemented — N/A** | No password system exists. |
| Onboarding | **Not implemented — N/A** | No account lifecycle exists. |
| Account Settings | **Not implemented — intentional** | No patient portal or “My Account” is present. |
| Billing | **Not implemented — intentional** | The website states that it processes no online payments or financial data. |
| Upgrade | **Not implemented — N/A** | No subscription/product plan exists. |
| Downgrade | **Not implemented — N/A** | No subscription/product plan exists. |
| Cancel Subscription | **Not implemented — N/A** | No subscription/product plan exists. |
| Payment Success | **Not implemented — intentional** | The project explicitly prohibits payment flows. |
| Payment Failed | **Not implemented — intentional** | The project explicitly prohibits payment flows. |
| Payment Pending | **Not implemented — intentional** | The project explicitly prohibits payment flows. |
| Support | **Partial / missing dedicated page** | Footer and Help Center offer direct phone/email support, but no dedicated `/support` route exists. |
| Help Center | **Pass** | `/help-center` is implemented with live keyword filtering, accordion answers, no-results state, and telephone/booking fallback. |

The missing customer-lifecycle pages are not defects if the product scope remains a public informational pharmacy site. They are defects only if this audit checklist is being treated as a mandatory product specification rather than a generic production-app checklist.

## 3. UX States & Fallbacks

| State | Result | Evidence / findings |
|---|---:|---|
| 404 Not Found | **Pass** | Unknown route `/does-not-exist` rendered the custom 404 card with return-home and telephone actions. |
| 403 Forbidden | **Fail — missing** | No route or component exists. |
| 500 Server Error | **Fail — missing as designed state** | `ErrorBoundary.tsx` provides a generic React error surface, but no dedicated 500 page/reference ID/retry flow exists. |
| Maintenance mode | **Fail — missing** | No maintenance route, feature flag, or maintenance component exists. |
| Offline handling | **Fail — missing** | No `navigator.onLine` listener, service worker registration, offline fallback, or offline banner was found. |
| Empty states | **Partial** | Help Center has a strong empty/no-results state. No broader reusable empty-state pattern is used across the app. |
| No search results | **Pass** | Search for `zzzz-no-match-qa` produced “No articles found matching…” and a Clear Search action. |
| Loading states | **Pass — limited scope** | Contact form uses an 800ms simulated loading state and changes the button label to “Sending Inquiry…”. Booking depends on external Cal.com and has no explicit iframe loading/error state. |
| Error states | **Partial** | Contact form has a client-side error alert for missing required fields; ErrorBoundary has generic runtime handling. No network/iframe/error-retry pattern is implemented. |
| Success states | **Pass** | Contact form success state was verified in-browser; it shows a green confirmation alert and resets form values. |
| Session expired | **Fail — N/A for current product** | No authentication or session layer exists. |

## 4. Accessibility and Interaction Findings

### Confirmed strengths

- Semantic `header`, `nav`, `main`, `footer`, headings, labels, links, and form controls are present.
- Contact form inputs have visible labels and required attributes.
- Booking modal has `role="dialog"`, `aria-modal="true"`, and an accessible close-button label.
- Icon-only controls such as the modal close button have accessible labels.
- General focus ring styling is present through the global CSS theme.
- Runtime browser inspection confirmed keyboard-reachable native buttons, links, form inputs, and selects.

### Gaps

- FAQ accordion buttons do not expose `aria-expanded` or `aria-controls`.
- The desktop Services dropdown and mobile menu button do not expose `aria-expanded` state or a controlled-region relationship.
- The custom booking modal does not implement an explicit focus trap, Escape-key close, return-focus behavior, or `aria-describedby`.
- The cookie banner is visually prominent but does not use a dialog/live-region pattern to announce consent state changes.
- The Cal.com iframe is embedded without an explicit loading state, load failure state, or user-facing external-service fallback. In sandbox runtime verification, its frame was blank while the surrounding modal rendered.
- Legal-document content is presented as small summary blocks rather than robust, reviewable legal documents.

## 5. Runtime Verification Performed

The following flows were directly verified in the browser against the active app preview:

- Homepage route rendered with live header, service cards, FAQ section, legal links, and booking CTAs.
- Booking modal opened from the homepage.
- Booking modal telephone fallback tab rendered the phone number, opening hours, and walk-in guidance.
- Contact form accepted valid non-clinical values and displayed the green success feedback state.
- Help Center accepted a search term and produced the no-results state with a Clear Search action.
- Unknown route rendered the custom 404 page.
- `/legal/cookie-preferences` rendered, confirming the route exists but also confirming the absence of interactive controls.
- `/legal/refund-policy` rendered the Privacy Policy fallback, confirming the misleading legal-route defect.

## 6. Release Recommendation

**Recommendation: Do not certify as fully compliant with the supplied checklist yet.**

The app is suitable for continued development as a public-facing pharmacy information and appointment-booking site. Before production certification, resolve the legal fallback defect and Cookie Preferences interactivity as highest priority. Then decide explicitly whether the generic account/payment lifecycle checklist is out of scope. If those capabilities are genuinely out of scope, document that product decision in the project requirements and add explicit N/A pages or routing behavior for the requested refund/return and account/payment URLs rather than allowing ambiguous missing routes.

### Suggested remediation order

1. Fix unknown legal route fallback and add explicit Refund / Return-Exchange policy handling.
2. Implement a dedicated interactive Cookie Preferences page sharing the banner’s consent state.
3. Add offline handling and explicit 403/500/maintenance states if production resilience is required.
4. Add explicit Support page or formally document Help Center + phone/email as the support surface.
5. Add ARIA state attributes and robust modal keyboard behavior.
6. Add Cal.com iframe loading, error, and external-booking fallback states.
7. Expand legal documents with formal jurisdiction-specific content and compliance review.
8. Add automated route, accessibility, and interaction tests for regression protection.
