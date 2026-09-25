import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { Link, useRoute } from 'wouter';
import { LEGAL_DOCUMENTS, PHARMACY_DETAILS } from '@/const';

const LEGAL_CONTENT_MAP: Record<string, { title: string; content: string[] }> = {
  'privacy-policy': {
    title: 'Privacy Policy (UK GDPR & DPA 2018)',
    content: [
      'Data Controller: Queensway Chemist Ltd, 14 Manchester Road, Chorlton-cum-Hardy, Manchester M21 9PN.',
      'Strict Zero Patient Health Data Retention: This website is informational only. It does not collect, process, or store confidential patient medical records, clinical notes, or prescription histories. No patient accounts or logins exist.',
      'Lawful Basis: General inquiries via the contact form are processed under Legitimate Interests (Art. 6(1)(f)) solely to reply to administrative queries.',
      'Appointment Scheduling: Cal.com is utilized as a data processor for booking calendar time slots. No payment details or medical symptoms are stored on our web server.',
      'Your Rights: Under UK GDPR, you have the right to request access, rectification, or erasure of any non-medical correspondence held. You may contact the UK Information Commissioner’s Office (ICO) at ico.org.uk.',
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    content: [
      'Website Nature: This platform provides community health information, opening hours, and appointment scheduling for Queensway Chemist.',
      'Not Medical Advice: Information on this site is not a substitute for individual clinical assessment by a registered doctor or pharmacist.',
      'Governing Law: These terms are governed by the laws of England and Wales. GPhC Premises Registration No. 9014227.',
    ],
  },
  'disclaimer': {
    title: 'Clinical Disclaimer & Emergency Routing',
    content: [
      'Emergency Situations: In case of acute chest pain, severe shortness of breath, loss of consciousness, or major trauma, dial 999 immediately or proceed to the nearest emergency department.',
      'Out of Hours: For urgent non-life-threatening advice when the pharmacy is closed, call NHS 111.',
      'Prescription Only Medicines: Medications supplied under NHS Pharmacy First or Patient Group Directions (PGD) are subject to clinical triage by our registered pharmacists.',
    ],
  },
  'accessibility': {
    title: 'Accessibility Statement (WCAG 2.2 AA)',
    content: [
      'Conformance Target: We strive to ensure full conformance with Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.',
      'Features: High-contrast monochrome palettes, visible focus indicators for keyboard navigation, semantic HTML landmarks, and mobile touch targets of at least 44x44px.',
      'Feedback: If you experience difficulty accessing any component, please call our dispensary on 0161 946 0834.',
    ],
  },
  'complaints': {
    title: 'Complaints Procedure & Clinical Chaperone Policy',
    content: [
      'NHS Complaints Procedure: We operate an NHS-compliant complaints procedure. Stage 1 is local resolution with Superintendent Pharmacist Meera Patel.',
      'Escalation: If unresolved, you may contact NHS Greater Manchester Integrated Care Board (ICB) or the Parliamentary and Health Service Ombudsman (PHSO).',
      'Chaperone Policy: You have the right to a trained chaperone present during private examinations or video otoscopy in our consultation suite.',
    ],
  },
  'shipping-policy': {
    title: 'Prescription Delivery Area & Cold-Chain Policy',
    content: [
      'Free Delivery Zones: We deliver free of charge across South Manchester postcodes: M21, M20, M16, and M32.',
      'Cold-Chain Integrity: Temperature-sensitive items (insulin, biologics) are transported in validated insulated containers with real-time temperature tracking.',
      'Doorstep Handover: Prescription items require signature or verbal recipient verification; medicines are never left unattended on doorsteps.',
    ],
  },
  'cancellation-policy': {
    title: 'Cancellation & Rescheduling Policy (Zero Fee)',
    content: [
      'Zero Fees: Because our website processes no online payments, there are no cancellation penalties or financial forfeits.',
      'Courtesy Notice: We kindly ask for 24 hours notice if you need to reschedule a consultation so the appointment slot can be offered to another patient.',
      'How to Reschedule: Use the link inside your Cal.com booking confirmation email, or telephone the pharmacy on 0161 946 0834.',
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy (PECR Compliant)',
    content: [
      'Cookie Inventory: We use strictly necessary cookies for session routing and security.',
      'Consent: Non-essential functional and privacy-preserving analytics cookies are gated by our consent manager and can be updated anytime.',
    ],
  },
  'cookie-preferences': {
    title: 'Cookie Consent Preferences Center',
    content: [
      'Granular Consent: Manage your preferences for Strictly Necessary, Functional, and Anonymous Analytics cookies.',
      'Local Storage: Consent choices are stored locally on your device for up to 12 months.',
    ],
  },
  'security-policy': {
    title: 'Security & Encryption Policy',
    content: [
      'HTTPS & TLS 1.3: All data in transit is encrypted with industry-standard TLS protocols.',
      'Zero Data-at-Rest: No patient health records are hosted on this web server.',
    ],
  },
  'responsible-disclosure': {
    title: 'Responsible Security Disclosure',
    content: [
      'Security Researchers: We welcome responsible vulnerability disclosures.',
      'Safe Harbor: Good-faith research following standard disclosure timelines will not face legal action.',
    ],
  },
  'data-processing-agreement': {
    title: 'Data Processing Governance',
    content: [
      'Processor Safeguards: Explains our integration boundaries with Cal.com and zero-special-category data exposure.',
    ],
  },
  'acceptable-use-policy': {
    title: 'Acceptable Use Policy',
    content: [
      'Prohibitions: Automated scraping, denial of service, spam submissions, or abusive use of scheduling tools is strictly prohibited.',
    ],
  },
  'community-guidelines': {
    title: 'Community Guidelines',
    content: [
      'Respectful Engagement: Prohibits medical misinformation and encourages respectful dialogue.',
    ],
  },
};

export const LegalPage: React.FC = () => {
  const [match, params] = useRoute('/legal/:docId');
  const activeDocId = params?.docId || 'privacy-policy';
  const docData = LEGAL_CONTENT_MAP[activeDocId] || LEGAL_CONTENT_MAP['privacy-policy'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
        <Link href="/" className="hover:text-black flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span>/</span>
        <span className="text-black font-semibold">Legal & Regulatory Hub</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Document Navigation Sidebar */}
        <div className="lg:col-span-4 bg-[#FAF8F5] border border-black/10 rounded-2xl p-4 space-y-1.5">
          <div className="p-2 text-xs uppercase tracking-wider font-bold text-[#6B6B6B]">
            Regulatory & Policy Index (14)
          </div>
          {LEGAL_DOCUMENTS.map((doc) => {
            const docKey = doc.path.replace('/legal/', '').replace('/legal', 'privacy-policy');
            const isActive = docKey === activeDocId;
            return (
              <Link
                key={doc.path}
                href={doc.path}
                className={`block p-3 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#001970] text-white font-semibold'
                    : 'text-[#27251E] hover:bg-[#F3F0EC]'
                }`}
              >
                <div>{doc.title}</div>
              </Link>
            );
          })}
        </div>

        {/* Document Content View */}
        <div className="lg:col-span-8 bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-6">
          <div className="pb-4 border-b border-black/10 space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#001970]">
              Official Compliance Document
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-black">
              {docData.title}
            </h1>
            <p className="text-xs text-[#6B6B6B]">
              Last updated: September 2026 · Queensway Chemist Ltd (GPhC: {PHARMACY_DETAILS.gphcNumber})
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#333333] leading-relaxed">
            {docData.content.map((paragraph, idx) => (
              <div key={idx} className="p-4 bg-white border border-black/10 rounded-xl space-y-1">
                <p>{paragraph}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-[#6B6B6B]">
            <span>Need a paper copy? Request at our dispensary.</span>
            <Link href="/contact" className="text-[#001970] font-semibold hover:underline">
              Contact Privacy Officer →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LegalPage;
