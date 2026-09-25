import React, { useState } from 'react';
import { Stethoscope, ShieldAlert, CheckCircle2, Calendar, Phone, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { PHARMACY_FIRST_CONDITIONS, PHARMACY_DETAILS } from '@/const';

interface PharmacyFirstPageProps {
  onOpenBooking: () => void;
}

export const PharmacyFirstPage: React.FC<PharmacyFirstPageProps> = ({ onOpenBooking }) => {
  const [selectedCondition, setSelectedCondition] = useState<string>(PHARMACY_FIRST_CONDITIONS[0].id);

  const current = PHARMACY_FIRST_CONDITIONS.find((c) => c.id === selectedCondition) || PHARMACY_FIRST_CONDITIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
        <Link href="/" className="hover:text-black flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span>/</span>
        <span className="text-black font-semibold">NHS Pharmacy First</span>
      </div>

      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>NHS Community Pharmacy Service</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
          NHS Pharmacy First Consultations
        </h1>
        <p className="text-base sm:text-lg text-[#4A4A4A] max-w-3xl leading-relaxed">
          Skip the 8am GP phone queue. Under official NHS clinical guidelines, our accredited prescribing pharmacists evaluate symptoms and dispense prescription treatments on the spot for 7 common conditions.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="cdphe-primary-btn text-sm font-semibold inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Clinical Consultation</span>
          </button>
          <a
            href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
            className="cdphe-action-btn text-sm font-medium inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#001970]" />
            <span>Call Dispensary: {PHARMACY_DETAILS.phone}</span>
          </a>
        </div>
      </div>

      {/* Interactive Condition Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Condition Selector Tabs */}
        <div className="lg:col-span-4 bg-[#FAF8F5] border border-black/10 rounded-2xl p-4 space-y-1.5">
          <div className="p-2 text-xs uppercase tracking-wider font-bold text-[#6B6B6B]">
            7 Eligible NHS Conditions
          </div>
          {PHARMACY_FIRST_CONDITIONS.map((cond) => {
            const isSelected = cond.id === current.id;
            return (
              <button
                key={cond.id}
                type="button"
                onClick={() => setSelectedCondition(cond.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#001970] text-white font-semibold shadow-xs'
                    : 'text-[#27251E] hover:bg-[#F3F0EC]'
                }`}
              >
                <div>
                  <div className="text-sm">{cond.name}</div>
                  <div className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-[#6B6B6B]'}`}>
                    {cond.ageRange}
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSelected ? '-rotate-90' : 'opacity-40'}`} />
              </button>
            );
          })}
        </div>

        {/* Detailed Condition Dossier */}
        <div className="lg:col-span-8 bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-10 pplx-card-shadow space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/10">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#001970]">
                {current.ageRange}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black mt-1">
                {current.name}
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              NHS Funded · Free
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#27251E] leading-relaxed">
            {current.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Symptoms */}
            <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2.5">
              <h3 className="font-serif font-bold text-base text-black flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#001970]" />
                <span>Diagnostic Indications</span>
              </h3>
              <ul className="text-xs sm:text-sm text-[#4A4A4A] space-y-1.5">
                {current.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#001970] font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2.5">
              <h3 className="font-serif font-bold text-base text-black flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#001970]" />
                <span>Clinical Management</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                {current.treatment}
              </p>
              <div className="pt-2 text-[11px] text-[#6B6B6B]">
                Prescription medications dispensed immediately from our on-site dispensary if criteria met.
              </div>
            </div>
          </div>

          {/* Red Flag Warning Box */}
          <div className="p-5 rounded-xl bg-red-50 border border-red-200 space-y-2">
            <h3 className="font-serif font-bold text-sm text-red-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-700" />
              <span>Clinical Red Flags (Immediate Referral Required)</span>
            </h3>
            <ul className="text-xs text-red-800 space-y-1">
              {current.redFlags.map((rf, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span>⚠️</span>
                  <span>{rf}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={onOpenBooking}
              className="cdphe-primary-btn text-sm font-semibold"
            >
              Book Consultation for {current.name}
            </button>
            <span className="text-xs text-[#6B6B6B]">Private, soundproof consultation room</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PharmacyFirstPage;
