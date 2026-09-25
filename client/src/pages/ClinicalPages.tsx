import React from 'react';
import { Award, ShieldCheck, Calendar, Phone, ArrowLeft, ArrowRight, HeartPulse, Ear, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { CORE_SERVICES, CLINICAL_TEAM, VACCINE_PRICES, PHARMACY_DETAILS } from '@/const';

// Complete Services Index
export const ServicesPage: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
    <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
      <Link href="/" className="hover:text-black flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>
      <span>/</span>
      <span className="text-black font-semibold">Clinical Services</span>
    </div>

    <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
        <Award className="w-3.5 h-3.5" />
        <span>Clinical Services Directory</span>
      </div>
      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
        Clinical & Community Pharmacy Services
      </h1>
      <p className="text-base sm:text-lg text-[#4A4A4A] max-w-3xl leading-relaxed">
        Explore our full scope of NHS-funded minor ailment consultations, private clinical screenings, ear care, contraception, and free South Manchester home deliveries.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CORE_SERVICES.map((s) => (
        <div key={s.id} id={s.id} className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between pplx-card-shadow">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#001970] bg-[#F3F0EC] px-2.5 py-1 rounded-md">{s.badge}</span>
            <h2 className="font-serif text-xl font-bold text-black">{s.title}</h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">{s.description}</p>
            <div className="text-xs font-semibold text-black bg-white p-2 rounded-lg border border-black/10">{s.priceTag}</div>
          </div>
          <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
            <button type="button" onClick={onOpenBooking} className="cdphe-primary-btn text-xs">
              Book Appointment
            </button>
            <span className="text-xs text-[#6B6B6B]">{s.duration}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Ear Wax Removal Page
export const EarWaxPage: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-10">
    <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
      <Link href="/" className="hover:text-black flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>
      <span>/</span>
      <span className="text-black font-semibold">Ear Wax Microsuction</span>
    </div>

    <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
        <Ear className="w-3.5 h-3.5" />
        <span>Certified Video Microsuction</span>
      </div>
      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
        Gentle Ear Wax Removal in Chorlton
      </h1>
      <p className="text-sm sm:text-base text-[#4A4A4A] max-w-2xl leading-relaxed">
        Safe, water-free microsuction under high-definition video otoscopy. Instant relief for blocked ears, muffled hearing, and wax impaction.
      </p>
      <div className="flex items-center gap-4 pt-2">
        <div className="text-sm font-semibold text-black bg-white px-3.5 py-1.5 rounded-lg border border-black/10">
          Fee: £50 One Ear · £70 Both Ears (Payable in Clinic)
        </div>
        <button type="button" onClick={onOpenBooking} className="cdphe-primary-btn text-xs">
          Schedule Ear Check
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-3">
        <h2 className="font-serif font-bold text-lg text-black">Pre-Appointment Preparation</h2>
        <p className="text-xs text-[#4A4A4A] leading-relaxed">
          Please apply medical-grade olive oil drops (e.g. Earol) 2–3 times daily for 3 consecutive days prior to your visit. This softens the wax and ensures comfortable removal.
        </p>
      </div>
      <div className="p-6 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-3">
        <h2 className="font-serif font-bold text-lg text-black">Why Microsuction?</h2>
        <p className="text-xs text-[#4A4A4A] leading-relaxed">
          Unlike traditional syringing, microsuction introduces no pressurized water into the ear canal, substantially reducing the risk of infection or eardrum perforation.
        </p>
      </div>
    </div>
  </div>
);

// Blood Pressure Screening Page
export const BloodPressurePage: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-10">
    <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
      <Link href="/" className="hover:text-black flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>
      <span>/</span>
      <span className="text-black font-semibold">NHS Blood Pressure Checks</span>
    </div>

    <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
        <HeartPulse className="w-3.5 h-3.5" />
        <span>NHS Hypertension Case-Finding</span>
      </div>
      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
        Free NHS Blood Pressure Checks & ABPM
      </h1>
      <p className="text-sm sm:text-base text-[#4A4A4A] max-w-2xl leading-relaxed">
        High blood pressure usually has no symptoms. Free for adults aged 40 and older. If your reading is elevated, we can immediately fit a 24-hour ambulatory monitor (ABPM).
      </p>
      <div className="pt-2">
        <button type="button" onClick={onOpenBooking} className="cdphe-primary-btn text-xs">
          Walk In or Book Ahead
        </button>
      </div>
    </div>
  </div>
);

// Vaccine Prices Page
export const VaccinePricesPage: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-10">
    <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
      <Link href="/" className="hover:text-black flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>
      <span>/</span>
      <span className="text-black font-semibold">Vaccine Price Schedule</span>
    </div>

    <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
        Private Vaccine Price Schedule
      </h1>
      <p className="text-sm sm:text-base text-[#4A4A4A] max-w-2xl leading-relaxed">
        Completely transparent in-clinic pricing. All consultation assessments and vaccine administration fees are included. Settled on-site during your visit.
      </p>
    </div>

    <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-8 pplx-card-shadow overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="bg-[#F3F0EC] text-black uppercase tracking-wider font-semibold">
          <tr>
            <th className="p-3">Vaccine</th>
            <th className="p-3">Dosing Schedule</th>
            <th className="p-3">Per Dose</th>
            <th className="p-3">Full Course</th>
            <th className="p-3">Destinations</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 text-[#27251E]">
          {VACCINE_PRICES.map((v, i) => (
            <tr key={i} className="hover:bg-white/60">
              <td className="p-3 font-semibold text-black">{v.vaccine}</td>
              <td className="p-3 text-[#6B6B6B]">{v.doses}</td>
              <td className="p-3 font-mono font-medium text-[#001970]">{v.pricePerDose}</td>
              <td className="p-3 font-mono text-black font-semibold">{v.fullCoursePrice}</td>
              <td className="p-3 text-[#4A4A4A]">{v.recommendation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// About Us Page
export const AboutPage: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-12">
    <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
      <Link href="/" className="hover:text-black flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>
      <span>/</span>
      <span className="text-black font-semibold">About Queensway Chemist</span>
    </div>

    <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
        <Award className="w-3.5 h-3.5" />
        <span>Chorlton Independent Pharmacy · Est. 1987</span>
      </div>
      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
        37 Years of Caring for South Manchester
      </h1>
      <p className="text-base sm:text-lg text-[#4A4A4A] max-w-3xl leading-relaxed">
        Founded in 1987 on Manchester Road, Queensway Chemist has evolved from a traditional neighbourhood apothecary into an advanced clinical hub. We combine old-fashioned kindness with modern clinical triage.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CLINICAL_TEAM.map((m) => (
        <div key={m.name} className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 space-y-3 pplx-card-shadow">
          <h2 className="font-serif font-bold text-lg text-black">{m.name}</h2>
          <p className="text-xs font-semibold text-[#001970]">{m.role}</p>
          <p className="text-[11px] text-[#6B6B6B]">{m.credentials}</p>
          <p className="text-xs text-[#4A4A4A] leading-relaxed pt-2">{m.bio}</p>
        </div>
      ))}
    </div>
  </div>
);
