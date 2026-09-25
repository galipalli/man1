# Queensway Chemist

A production-oriented React and Tailwind CSS website for Queensway Chemist, an independent community pharmacy and travel clinic serving Chorlton and South Manchester.

The application is a **public information, clinical-service discovery, appointment-booking, contact, and policy website**. It is intentionally not a patient portal, online pharmacy, subscription service, or payment-processing application.

## Contents

- [What the website provides](#what-the-website-provides)
- [Patient and visitor user guide](#patient-and-visitor-user-guide)
- [Site map](#site-map)
- [Booking a consultation](#booking-a-consultation)
- [NHS Pharmacy First](#nhs-pharmacy-first)
- [Travel clinic and private services](#travel-clinic-and-private-services)
- [Prescription nomination and delivery](#prescription-nomination-and-delivery)
- [Contact and enquiry form](#contact-and-enquiry-form)
- [Help Center](#help-center)
- [Legal and compliance hub](#legal-and-compliance-hub)
- [Cookies and privacy](#cookies-and-privacy)
- [Accessibility and safe use](#accessibility-and-safe-use)
- [Important product limitations](#important-product-limitations)
- [Developer guide](#developer-guide)
- [Validation and QA](#validation-and-qa)
- [Project structure](#project-structure)
- [Deployment notes](#deployment-notes)

## What the website provides

Queensway Chemist presents the pharmacy's clinical services, opening hours, contact details, team information, NHS Pharmacy First guidance, travel-health services, ear-wax microsuction, blood-pressure checks, prescription delivery information, a searchable knowledge base, appointment-booking entry points, and regulatory policies.

The site is designed around a soft monochrome visual system with warm off-white surfaces, editorial serif headings, readable sans-serif body text, accessible focus styles, responsive layouts, and clear clinical escalation guidance.

### Core service areas

- **NHS Pharmacy First:** guidance for seven common conditions, including uncomplicated UTIs, severe sore throat, acute sinusitis, acute otitis media, impetigo, shingles, and infected insect bites.
- **Travel Clinic:** travel-risk guidance, vaccination services, destination-led information, and in-clinic pricing.
- **Ear Wax Microsuction:** preparation guidance, video otoscopy information, and consultation booking entry points.
- **Blood Pressure:** NHS blood-pressure and ambulatory blood-pressure monitoring information.
- **Prescription nomination and delivery:** step-by-step NHS nomination guidance and delivery-postcode information.
- **General support:** phone contact, email contact, a non-clinical enquiry form, and a searchable Help Center.

## Patient and visitor user guide

### Opening the website

The homepage is available at `/`. The header provides links to the main clinical areas, the Help Center, contact information, and the consultation-booking action. The header also shows the current dispensary opening status based on local time.

The footer provides the pharmacy address, telephone number, email address, opening hours, service links, regulatory links, and emergency guidance.

### Finding a clinical service

Use the header's **Services** menu or the homepage service cards to select a service. Each service page explains who the service is for, what to expect, relevant preparation or eligibility information, and how to arrange an appointment or contact the dispensary.

Do not use the general contact form to submit medical histories, symptoms, confidential prescription requests, or other special-category health data. The website directs clinical or urgent queries to the dispensary telephone line or an in-person conversation.

### Calling the dispensary

The primary telephone number is **0161 946 0834**. Telephone links use the `tel:` protocol on supported devices.

For urgent medical queries outside dispensary hours, the site directs visitors to **NHS 111**. For life-threatening emergencies, dial **999**.

## Site map

| Route | Purpose |
|---|---|
| `/` | Homepage, opening status, service overview, team preview, FAQs, and primary calls to action |
| `/pharmacy-first` | Full NHS Pharmacy First condition guide and red-flag escalation guidance |
| `/travel-clinic` | Travel clinic overview, destination guidance, vaccine information, and booking entry points |
| `/vaccine-prices` | Vaccine price schedule and travel-clinic pricing information |
| `/nominate` | NHS prescription nomination and delivery setup guide |
| `/contact` | Location, opening hours, contact details, map link, and non-clinical enquiry form |
| `/help-center` | Searchable patient knowledge base and FAQ accordions |
| `/services` | Services overview |
| `/ear-wax-removal` | Ear wax microsuction service information |
| `/blood-pressure` | NHS blood-pressure and ABPM information |
| `/about` | Team and pharmacy information |
| `/legal` | Legal and regulatory document index |
| `/legal/:docId` | Individual legal and policy document route |
| Any unknown path | Custom 404 page with homepage and telephone escape routes |

## Booking a consultation

Booking can be started from the header, homepage, service cards, Help Center, and relevant clinical pages.

1. Select **Book Consultation** or **Book a Consultation**.
2. In the booking modal, choose the service from the clinical-service selector.
3. Use the **Online Scheduler (Cal.com)** tab to access the external scheduling experience.
4. If online scheduling is unavailable or unsuitable, select **Telephone / Walk-in Guidance**.
5. Use the telephone link or the displayed walk-in hours to contact the dispensary.

The booking modal explains that no online payment is requested or collected by this website. Appointment scheduling is handled through the configured external scheduler or directly by telephone.

### Booking fallback

The telephone fallback includes:

- Dispensary phone number
- Standard opening hours
- Walk-in address
- Guidance for urgent or uncertain requests

Because the online scheduler is an external embedded service, production deployment should verify the Cal.com embed URL, CSP, third-party cookie behavior, loading performance, and failure fallback in the target environment.

## NHS Pharmacy First

The Pharmacy First page provides condition cards with age ranges, symptom summaries, treatment information, common symptoms, and red-flag guidance.

The site covers:

- Uncomplicated UTIs
- Severe sore throat
- Acute sinusitis
- Acute otitis media / earache
- Impetigo
- Shingles
- Infected insect bites

The page also provides an urgent red-flag section. Visitors should seek emergency help immediately for symptoms such as difficulty breathing, chest tightness, severe neck stiffness, sudden weakness, or a spreading rash with high fever.

The content is educational and does not replace a clinical assessment. Eligibility, diagnosis, treatment, and referral decisions remain with a registered healthcare professional.

## Travel clinic and private services

The travel clinic page provides destination and vaccine guidance, a travel consultation flow, and in-clinic price information. The service content explains that private fees are settled in person and that the website does not collect online payment details.

The vaccine price route is available at `/vaccine-prices`. Visitors should confirm current prices, stock, vaccine availability, destination requirements, and appointment details with the pharmacy before relying on the information for travel planning.

## Prescription nomination and delivery

The nomination guide explains how a patient can nominate Queensway Chemist through the NHS App or through their GP surgery.

The guide includes:

- NHS App nomination steps
- GP-surgery alternative
- Pharmacy identifiers and dispensing details
- Delivery area information
- Supported local delivery postcodes: **M21, M20, M16, and M32**

Delivery is described as a community service. Visitors should confirm eligibility, delivery timing, address details, cold-chain requirements, and identity or handover requirements with the dispensary.

## Contact and enquiry form

The contact page is available at `/contact` and includes:

- Pharmacy address: **14 Manchester Road, Chorlton-cum-Hardy, Manchester M21 9PN**
- Telephone: **0161 946 0834**
- Email: **care@queenswaychemist.co.uk**
- Opening hours
- Map link
- Non-clinical enquiry form

### Contact form rules

The form is for administrative and general community enquiries, including:

- Opening-hours questions
- Delivery-area checks
- Travel-clinic schedule questions
- Ear-wax consultation questions
- Accessibility and chaperone requests

Do not submit:

- Medical histories
- Symptoms
- Prescription requests
- Medication lists
- Patient-identifying clinical details
- Other confidential health information

The form includes required name, email, and message fields, an optional telephone field, client-side validation, a loading state, an error state for incomplete submissions, a success confirmation, and a honeypot anti-spam field.

The current implementation simulates submission in the client. A production deployment must connect the form to an approved secure service, configure rate limiting and abuse monitoring, and confirm the privacy notice and retention policy for submitted administrative correspondence.

## Help Center

The Help Center is available at `/help-center`.

### Searching

Enter a keyword such as `nomination`, `ear wax`, `UTI`, or `delivery`. Results filter immediately across the available questions.

### FAQ interaction

Select a question to expand its answer. The Help Center includes guidance about Pharmacy First, prescription nomination, medical-data handling, clinical escalation, delivery, chaperone-supported rooms, ear wax, blood pressure, emergency supplies, oral contraception, and travel-vaccine deposits.

### No-results state

If no article matches the search term, the page displays a clear no-results message, a **Clear Search** action, and the dispensary telephone fallback.

## Legal and compliance hub

The legal directory is available at `/legal` and currently provides routes for:

- Privacy Policy
- Terms of Service
- Clinical Disclaimer
- Accessibility Statement
- Complaints & Chaperone Policy
- Prescription Delivery Area Policy
- Cancellation & Rescheduling Policy
- Cookie Policy
- Cookie Preferences
- Security Policy
- Responsible Disclosure
- Data Processing Agreement
- Acceptable Use Policy
- Community Guidelines

### Legal-document status

The current application does not include dedicated Refund Policy or Return / Exchange Policy documents because the website does not offer online commerce or online payments. This should be made explicit in production through either dedicated “not applicable” pages or a formally approved scope statement.

Unknown legal document IDs must not be allowed to silently display another document. Before production release, the legal route resolver should return a proper unavailable-document or 404 state for unrecognised IDs.

Legal content in the current frontend is concise summary content. It should be reviewed and expanded by an appropriately qualified UK privacy, pharmacy, and regulatory professional before publication as a final legal notice.

## Cookies and privacy

The cookie consent banner appears after a short delay when no consent choice has been stored locally. It supports:

- Accept all
- Necessary only
- Custom preferences
- Strictly necessary cookies
- Functional cookies
- Anonymous analytics cookies

Choices are stored in browser local storage under the application consent key and are intended to last up to 12 months.

The current `/legal/cookie-preferences` route explains the preference model but does not itself expose the interactive controls. The interactive controls are available through the cookie banner. A production implementation should make the dedicated page fully interactive and share one consent-management implementation with the banner.

The website states that it does not collect, process, or store confidential patient medical records, clinical notes, or prescription histories. This does not remove the need for a complete privacy notice covering administrative contact submissions, appointment scheduling, analytics, hosting, logs, and third-party processors.

## Accessibility and safe use

The interface includes responsive layouts, visible focus styling, semantic form labels, keyboard-reachable native controls, accessible close-button labels, and readable contrast-focused theme tokens.

Production accessibility review should additionally verify:

- Keyboard focus trap and focus restoration in the booking modal
- Escape-key modal dismissal
- `aria-expanded` and `aria-controls` on accordion and disclosure controls
- Mobile navigation announcement and state semantics
- Screen-reader announcements for cookie consent, loading, error, and success states
- Cal.com embed loading and failure behavior
- WCAG 2.2 AA behavior at desktop, tablet, and mobile breakpoints

This website is not an emergency service and does not replace a GP, pharmacist, NHS 111, or emergency services. For life-threatening emergencies, dial **999**.

## Important product limitations

The following capabilities are **not implemented** because the product is a public informational pharmacy website rather than a patient portal or commerce platform:

- Login
- Registration
- Email verification
- Forgot-password and reset-password flows
- Patient onboarding
- Account settings
- Billing
- Upgrade or downgrade plans
- Subscription cancellation
- Payment success, failed, or pending states
- Session-expired handling
- Online pharmacy checkout
- Online payment collection
- Patient medical-record storage

The application also currently lacks dedicated 403, 500, maintenance-mode, and offline pages. `ErrorBoundary.tsx` provides a generic client-side runtime error surface, and the custom 404 route handles unknown client-side routes.

## Developer guide

### Technology stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Wouter client-side routing
- Lucide React icons
- Radix UI and shadcn-style primitives
- Framer Motion-compatible animation utilities from the template
- Express static-production wrapper
- pnpm

### Prerequisites

- Node.js 22 or compatible current Node.js runtime
- pnpm 10 or compatible pnpm runtime

### Installation

```bash
pnpm install
```

### Local development

```bash
pnpm dev
```

The Vite development server binds to the host interface according to the project configuration. Open the local URL printed in the terminal.

### Type checking

```bash
pnpm check
```

### Production build

```bash
pnpm build
```

The build runs the Vite production build and bundles the Express static wrapper into `dist`.

### Previewing a production build

```bash
pnpm preview
```

### Formatting

```bash
pnpm format
```

## Project structure

```text
client/
  index.html
  public/                 # Small static configuration files only
  src/
    App.tsx               # Top-level routing and shared providers
    index.css             # Design tokens, theme, global styles
    main.tsx              # React entry point
    components/           # Shared site components and UI primitives
    contexts/             # Theme context
    hooks/                # Shared React hooks
    lib/                  # Utility functions
    pages/                # Route-level page implementations
server/
  index.ts                # Static production wrapper; do not add application data here
shared/
  const.ts                # Shared compatibility constants
QA-compliance-audit.md    # Latest QA and compliance audit report
```

### Design tokens

Global design tokens live in `client/src/index.css`. The current visual system uses:

- Surface: `#FDFBFA`
- Elevated surface: `#FAF8F5`
- Card surface: `#F3F0EC`
- Primary dark action: `#001970`
- Body text: near-black with muted text around `#6B6B6B`
- Editorial serif display type paired with a modern sans-serif body type
- 8px button radius and 16px card radius
- Soft shadows and restrained motion

When adding a component, use the shared tokens and existing primitives rather than introducing unrelated colors, radii, or typography.

### Adding a route

1. Create a page component in `client/src/pages/`.
2. Add its route in `client/src/App.tsx` before the final fallback route.
3. Add a navigation link where the information hierarchy requires it.
4. Provide a visible escape route such as a header, footer, breadcrumb, or back link.
5. Verify direct navigation, refresh behavior, keyboard access, and the mobile layout.

### Adding legal documents

Legal content is currently defined in `client/src/pages/LegalPage.tsx`, while the document index is maintained in `client/src/const.ts`. Add the document ID, title, navigation metadata, content, and explicit unavailable-document behavior together. Do not use a generic fallback to Privacy Policy for unknown IDs.

## Validation and QA

The latest audit is available in [QA-compliance-audit.md](./QA-compliance-audit.md).

The audit verified:

- Homepage rendering
- Booking modal opening
- Telephone booking fallback
- Contact form valid submission and success state
- Help Center search and no-results state
- Custom 404 route
- Cookie Preferences route presence
- Invalid legal-route behavior
- TypeScript validation
- Production-build validation

Before deployment, also run a browser-based accessibility review, verify the Cal.com production embed, test the target hosting environment's client-side fallback routing, and validate all legal content with qualified reviewers.

## Deployment notes

- Keep large media outside `client/public/` and `client/src/assets/`; use the project's approved asset-upload workflow for hosted media.
- Configure the production host to serve `index.html` for client-side routes.
- Configure a secure approved endpoint for contact submissions before enabling real-world use.
- Review Content Security Policy and iframe permissions for Cal.com and mapping links.
- Confirm analytics and cookie behavior against the final privacy notice.
- Do not introduce patient health-data collection without a new privacy, security, clinical-governance, and data-retention review.
- Do not add payment, account, or subscription functionality without expanding the product scope, security model, backend, and compliance assessment.

## Support and contact details

**Queensway Chemist**  
14 Manchester Road  
Chorlton-cum-Hardy  
Manchester M21 9PN

**Telephone:** 0161 946 0834  
**Email:** care@queenswaychemist.co.uk  
**GPhC premises registration:** 9014227  
**NHS ODS dispensing code:** FFM98

For urgent medical questions outside dispensary hours, call **NHS 111**. For life-threatening emergencies, dial **999**.

## License and content ownership

This repository contains the Queensway Chemist application and its project-specific content. Confirm the organisation's preferred licensing, content-ownership, third-party dependency, and regulatory-publication terms before making the repository public or redistributing its content.
