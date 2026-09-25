import React from 'react';
import { Link } from 'wouter';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { PHARMACY_DETAILS, LEGAL_DOCUMENTS } from '@/const';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-black/[0.08] text-[#27251E] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top brand + regulatory banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-black/[0.08]">
          {/* Brand & NHS context */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#001970] flex items-center justify-center text-white">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-x-1 inset-y-0 bg-[#FDFBFA] rounded-sm" />
                  <div className="absolute inset-y-1 inset-x-0 bg-[#FDFBFA] rounded-sm" />
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-black">Queensway Chemist</span>
                <p className="text-xs text-[#6B6B6B]">Independent Community Pharmacy · Est. 1987</p>
              </div>
            </div>

            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-lg">
              Serving the Chorlton, Didsbury, Whalley Range, and South Manchester communities with NHS electronic prescription dispensing, private travel immunisations, minor ailment clinical care, and dedicated free doorstep deliveries.
            </p>

            <div className="inline-flex items-center gap-2 p-3 bg-[#F3F0EC] rounded-xl border border-black/[0.06] text-xs text-[#27251E]">
              <ShieldCheck className="w-5 h-5 text-[#001970] shrink-0" />
              <div>
                <span className="font-semibold text-black">GPhC Registered Pharmacy Premises: </span>
                <span className="font-mono text-[#001970] font-semibold">{PHARMACY_DETAILS.gphcNumber}</span>
                <span className="mx-2">•</span>
                <span>NHS ODS Code: <strong className="font-mono">{PHARMACY_DETAILS.odsCode}</strong></span>
              </div>
            </div>
          </div>

          {/* Contact & Dispensary Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-black">Pharmacy Location</h3>
            <div className="space-y-2 text-sm text-[#4A4A4A]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#001970] shrink-0 mt-0.5" />
                <span>{PHARMACY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#001970] shrink-0" />
                <a href={`tel:${PHARMACY_DETAILS.phoneIntl}`} className="hover:text-[#001970] font-medium text-black">
                  {PHARMACY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#001970] shrink-0" />
                <a href={`mailto:${PHARMACY_DETAILS.email}`} className="hover:text-[#001970]">
                  {PHARMACY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs text-[#6B6B6B]">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-black" />
                <span>Mon–Fri 09:00–18:30 · Sat 09:00–17:00 · Sun 10:00–14:00</span>
              </div>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-black">Quick Clinical Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/pharmacy-first" className="text-[#4A4A4A] hover:text-[#001970] flex items-center justify-between">
                  <span>NHS Pharmacy First</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/travel-clinic" className="text-[#4A4A4A] hover:text-[#001970] flex items-center justify-between">
                  <span>Travel Health & Vaccines</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/vaccine-prices" className="text-[#4A4A4A] hover:text-[#001970] flex items-center justify-between">
                  <span>Vaccine Price Schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/ear-wax-removal" className="text-[#4A4A4A] hover:text-[#001970] flex items-center justify-between">
                  <span>Ear Wax Microsuction</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/nominate" className="text-[#4A4A4A] hover:text-[#001970] flex items-center justify-between">
                  <span>Prescription Delivery Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-[#4A4A4A] hover:text-[#001970] flex items-center justify-between">
                  <span>Patient Knowledge Base</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Safety Notice */}
        <div className="py-6 border-b border-black/[0.08] text-xs text-[#6B6B6B] leading-relaxed">
          <p>
            <strong>Important Clinical & Regulatory Notice:</strong> This website is an informational service and patient guidance hub provided by Queensway Chemist Ltd. 
            In adherence to strict UK data protection principles and clinical confidentiality, this website does not capture, store, or process confidential patient medical records or personal health histories. 
            All clinical bookings are arranged via Cal.com or direct telephone. For life-threatening emergencies, dial <strong>999</strong> immediately. For urgent medical queries outside dispensary hours, call NHS <strong>111</strong>.
          </p>
        </div>

        {/* Legal Directory Grid */}
        <div className="py-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-black">
              Regulatory, Compliance & Policy Hub (14 Documents)
            </h4>
            <Link href="/legal" className="text-xs text-[#001970] hover:underline font-medium">
              View Legal Directory Overview →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 text-xs">
            {LEGAL_DOCUMENTS.map((doc) => (
              <Link
                key={doc.path}
                href={doc.path}
                className="p-2 rounded-lg bg-[#F3F0EC] hover:bg-[#EBE6DF] text-[#27251E] font-medium transition-colors truncate"
                title={doc.desc}
              >
                {doc.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <p>© {new Date().getFullYear()} Queensway Chemist Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy-policy" className="hover:text-black">Privacy Policy</Link>
            <span>•</span>
            <Link href="/legal/terms-of-service" className="hover:text-black">Terms of Service</Link>
            <span>•</span>
            <Link href="/legal/accessibility" className="hover:text-black">Accessibility (WCAG 2.2 AA)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
