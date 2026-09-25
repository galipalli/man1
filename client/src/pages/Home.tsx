import React, { useState } from 'react';
import { Link } from 'wouter';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Truck,
  HeartPulse,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Star,
  MapPin,
  ExternalLink,
  Info,
  HelpCircle,
  Stethoscope,
  Microscope,
  Award
} from 'lucide-react';
import {
  PHARMACY_DETAILS,
  PHARMACY_FIRST_CONDITIONS,
  CORE_SERVICES,
  CLINICAL_TEAM,
  PATIENT_REVIEWS,
  FAQ_ITEMS,
} from '@/const';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTeamStory, setActiveTeamStory] = useState<number | null>(null);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION (Perplexity monochrome soft vibe + high-authority NHS typography) */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto bg-[#F3F0EC] border border-black/[0.06] rounded-[24px] pplx-card-shadow p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          {/* Subtle textured overlay background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F5]/80 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/[0.02] rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#001970] border border-black/[0.08] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#001970]" />
              <span>Independent Community Pharmacy in Chorlton · Since 1987</span>
            </div>

            {/* Display Headline: pplxSerif 700 scale 56px */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-bold text-black tracking-tight leading-[1.12]">
              Clinical care for Chorlton, without the GP wait.
            </h1>

            {/* Subheading: pplxSans 16px 400, 1.55 line-height */}
            <p className="text-base sm:text-lg text-[#27251E] max-w-2xl leading-[1.55]">
              Walk in today for accredited NHS Pharmacy First consultations across 7 common conditions, comprehensive travel immunisations, and free prescription delivery directly to your doorstep.
            </p>

            {/* Action Bar (CDPHE white button + primary navy action button) */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="cdphe-primary-btn text-base px-6 py-3.5 inline-flex items-center gap-2.5 font-medium shadow-md"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Consultation</span>
              </button>

              <Link
                href="/nominate"
                className="cdphe-action-btn text-base px-6 py-3.5 inline-flex items-center gap-2 bg-white text-black font-medium"
              >
                <span>How to Nominate Us</span>
                <ArrowRight className="w-4 h-4 text-[#001970]" />
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="pt-8 border-t border-black/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#6B6B6B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#001970]" />
                <span>No GP referral needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#001970]" />
                <span>Private consultation suite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#001970]" />
                <span>Free delivery (M21, M20, M16, M32)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NHS PHARMACY FIRST SPOTLIGHT (7 NHS CONDITIONS) */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-10" id="pharmacy-first">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-black/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970] border border-black/5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>NHS-Funded Treatment Service</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-black tracking-tight">
              NHS Pharmacy First: 7 Conditions Treated On The Spot
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B]">
              Under official NHS clinical protocols, our prescribing pharmacists can assess your symptoms in a soundproof room and supply prescription-only medications when indicated.
            </p>
          </div>

          <Link
            href="/pharmacy-first"
            className="cdphe-action-btn text-sm inline-flex items-center gap-1.5 self-start md:self-auto font-medium"
          >
            <span>View Full Clinical Guidelines</span>
            <ChevronRight className="w-4 h-4 text-[#001970]" />
          </Link>
        </div>

        {/* 7 Condition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHARMACY_FIRST_CONDITIONS.map((cond) => (
            <div
              key={cond.id}
              className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#F3F0EC] transition-all pplx-card-shadow group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#001970] bg-white px-2.5 py-1 rounded-md border border-black/[0.06]">
                    {cond.ageRange}
                  </span>
                  <span className="text-xs text-[#6B6B6B]">NHS Protocol</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-black group-hover:text-[#001970] transition-colors">
                  {cond.name}
                </h3>

                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {cond.summary}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold text-black uppercase tracking-wider">Common Symptoms:</span>
                  <ul className="text-xs text-[#6B6B6B] space-y-1">
                    {cond.symptoms.slice(0, 3).map((symp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#001970] font-bold">•</span>
                        <span>{symp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Free NHS Care
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-[#001970] hover:underline inline-flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Info Tile */}
          <div className="bg-[#001970] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/10 text-white border border-white/20">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Urgent Red-Flag Guidance</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                When should you visit A&E or dial 999 instead?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                If you have difficulty breathing, chest tightness, severe neck stiffness, sudden weakness, or spreading rashes with high fever, seek emergency hospital care immediately.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="tel:111"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-white text-[#001970] font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Call NHS 111 (Out of Hours)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970] border border-black/5">
            <Award className="w-3.5 h-3.5" />
            <span>Comprehensive Community Health</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-black tracking-tight">
            Clinical Services for Every Stage of Life
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B]">
            From routine blood pressure monitoring to certified yellow fever immunisations, Queensway Chemist provides transparent, hospital-grade pharmacy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#27251E] bg-[#F3F0EC] px-2.5 py-1 rounded-md">
                    {serv.badge}
                  </span>
                  <span className="text-xs text-[#6B6B6B]">{serv.duration}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-black">
                  {serv.title}
                </h3>

                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {serv.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#001970] bg-white px-2.5 py-1 rounded-lg border border-black/10 inline-block">
                    {serv.priceTag}
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="cdphe-primary-btn text-xs inline-flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Appointment</span>
                </button>
                <Link
                  href={`/services#${serv.id}`}
                  className="text-xs font-medium text-[#27251E] hover:text-[#001970] underline"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DISPENSARY OPENING HOURS & LIVE AVAILABILITY */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-8 sm:p-12 pplx-card-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
              <Clock className="w-3.5 h-3.5" />
              <span>Dispensary Opening Hours</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
              Always Here When Chorlton Needs Us
            </h2>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              We are open 7 days a week for in-person dispensing, clinical triage, and private consultations. No appointment is needed for urgent minor ailments.
            </p>

            <div className="p-4 rounded-xl bg-white border border-black/10 space-y-2 text-xs">
              <div className="font-semibold text-black flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#001970]" />
                <span>14 Manchester Road, Chorlton M21 9PN</span>
              </div>
              <p className="text-[#6B6B6B]">
                Opposite Chorlton Library, 3 minutes walk from Chorlton Metrolink tram stop. Free 30-minute parking bays available on Manchester Road.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
                  className="text-[#001970] font-semibold hover:underline inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Dispensary Phone: {PHARMACY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl border border-black/10 p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#6B6B6B]">Day</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#6B6B6B]">Dispensary & Consultation Suite</span>
            </div>

            <div className="divide-y divide-black/[0.04] text-sm">
              {PHARMACY_DETAILS.regularHours.map((h) => {
                const isToday = new Date().getDay() === h.dayIndex;
                return (
                  <div
                    key={h.day}
                    className={`py-2.5 px-3 flex items-center justify-between rounded-lg transition-colors ${
                      isToday ? 'bg-[#F3F0EC] font-semibold text-black' : 'text-[#27251E]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{h.day}</span>
                      {isToday && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#001970] text-white">
                          Today
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs">
                      {h.opens} – {h.closes}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-STEP GUIDE: HOW TO NOMINATE QUEENSWAY FOR FREE DELIVERY */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
            <Truck className="w-3.5 h-3.5" />
            <span>Free NHS Prescription Delivery</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-black tracking-tight">
            Nominate Queensway in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B]">
            Never queue in the rain again. Have your repeat medications dispensed and hand-delivered directly to your home across M21, M20, M16, and M32.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 sm:p-8 space-y-4 relative">
            <span className="w-10 h-10 rounded-full bg-[#001970] text-white font-serif font-bold text-lg flex items-center justify-center">
              1
            </span>
            <h3 className="font-serif text-xl font-bold text-black">
              Select in NHS App or GP
            </h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Open your free <strong>NHS App</strong>, tap <em>Your health ▸ Nominated pharmacy</em>, and search for <strong>Queensway Chemist (M21 9PN)</strong>. Or simply request your GP receptionist to nominate us.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 sm:p-8 space-y-4 relative">
            <span className="w-10 h-10 rounded-full bg-[#001970] text-white font-serif font-bold text-lg flex items-center justify-center">
              2
            </span>
            <h3 className="font-serif text-xl font-bold text-black">
              Doctor Issues Electronic Script
            </h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              When your GP signs off your repeat medication, it arrives instantly via the secure NHS Electronic Prescription Service (EPS) into our dispensary terminal.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 sm:p-8 space-y-4 relative">
            <span className="w-10 h-10 rounded-full bg-[#001970] text-white font-serif font-bold text-lg flex items-center justify-center">
              3
            </span>
            <h3 className="font-serif text-xl font-bold text-black">
              Delivered To Your Door
            </h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Our clinical checking team prepares your order with cold-chain safeguards. Liam delivers your medication right to your home at no charge.
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#F3F0EC] rounded-2xl border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-black">Need assistance setting up your nomination?</h4>
            <p className="text-xs text-[#6B6B6B]">Our team can call your surgery on your behalf with your permission.</p>
          </div>
          <Link
            href="/nominate"
            className="cdphe-primary-btn text-xs font-semibold whitespace-nowrap"
          >
            Step-by-Step Nomination Guide →
          </Link>
        </div>
      </section>

      {/* 6. CLINICAL TEAM & HERITAGE */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Chorlton Community Care</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-black tracking-tight">
            Meet Your Dispensary Team
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B]">
            Independent, family-owned, and embedded in South Manchester since 1987. Click any member to read their pharmacy story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICAL_TEAM.map((member, idx) => (
            <div
              key={member.name}
              onClick={() => setActiveTeamStory(activeTeamStory === idx ? null : idx)}
              className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:border-[#001970]/40 transition-all pplx-card-shadow group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#001970]/10 flex items-center justify-center text-[#001970] font-serif font-bold text-xl group-hover:bg-[#001970] group-hover:text-white transition-colors">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-black">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#001970]">{member.role}</p>
                  <p className="text-[11px] text-[#6B6B6B] mt-0.5">{member.credentials}</p>
                  <p className="text-[10px] font-mono text-[#8C8C8C] mt-0.5">GPhC: {member.gphc}</p>
                </div>

                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  {member.bio}
                </p>

                {activeTeamStory === idx && (
                  <div className="p-3 rounded-xl bg-white border border-black/10 text-xs text-[#27251E] italic mt-2 animate-in fade-in">
                    "{member.story}"
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.08] flex items-center justify-between text-xs text-[#001970] font-medium">
                <span>{activeTeamStory === idx ? 'Close story' : 'Read personal story'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeTeamStory === idx ? 'rotate-90' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VERIFIED PATIENT REVIEWS */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-black/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-black ml-2">4.9 / 5.0 (420+ Verified Local Patients)</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
              Trusted Across South Manchester
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="bg-[#FAF8F5] border border-black/[0.08] rounded-2xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, r) => (
                    <Star key={r} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#27251E] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] text-xs">
                <strong className="text-black block">{rev.name}</strong>
                <span className="text-[#6B6B6B]">{rev.location} · {rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. COMMON PATIENT QUESTIONS (ACCORDION) */}
      <section className="px-4 sm:px-8 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
            Patient Guidance & Practice FAQs
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-2 font-serif text-base sm:text-lg font-bold text-black hover:text-[#001970] transition-colors focus:outline-none"
                >
                  <span>{item.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-[#001970] shrink-0 transition-transform ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-sm text-[#4A4A4A] leading-relaxed pt-2 pb-3 pr-6 animate-in fade-in">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/help-center"
            className="text-xs text-[#001970] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Search our full 25+ question Knowledge Base</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 9. BOTTOM CLINICAL CTA BAND */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 text-center space-y-6 pplx-card-shadow">
          <span className="text-xs font-bold text-[#001970] uppercase tracking-wider">
            Ready to speak with our clinical team?
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-black max-w-xl mx-auto">
            Book an appointment today or visit our Chorlton dispensary.
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto">
            Private consultation room available 7 days a week. Zero online fees, zero patient account creation, and zero medical record storage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="cdphe-primary-btn text-sm px-6 py-3 font-semibold"
            >
              Book a Consultation
            </button>
            <a
              href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
              className="cdphe-action-btn text-sm px-6 py-3 font-medium"
            >
              Call 0161 946 0834
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
