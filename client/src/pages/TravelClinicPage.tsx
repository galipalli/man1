import React, { useState } from 'react';
import { Plane, ShieldCheck, MapPin, Calendar, Clock, AlertTriangle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { VACCINE_PRICES, PHARMACY_DETAILS } from '@/const';

interface TravelClinicPageProps {
  onOpenBooking: () => void;
}

export const TravelClinicPage: React.FC<TravelClinicPageProps> = ({ onOpenBooking }) => {
  const [searchDestination, setSearchDestination] = useState('');

  const filteredVaccines = VACCINE_PRICES.filter((v) =>
    v.vaccine.toLowerCase().includes(searchDestination.toLowerCase()) ||
    v.recommendation.toLowerCase().includes(searchDestination.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
        <Link href="/" className="hover:text-black flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span>/</span>
        <span className="text-black font-semibold">Travel Clinic & Vaccinations</span>
      </div>

      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
          <Plane className="w-3.5 h-3.5" />
          <span>Official Yellow Fever Vaccination Centre</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
          Chorlton Travel Health & Vaccination Clinic
        </h1>
        <p className="text-base sm:text-lg text-[#4A4A4A] max-w-3xl leading-relaxed">
          Prepare safely for your trip abroad. We provide complete travel risk assessments, malaria prophylaxis tablets, and all routine, occupational, and tropical vaccines with instant certificate issuance.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="cdphe-primary-btn text-sm font-semibold inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Travel Consultation</span>
          </button>
          <Link
            href="/vaccine-prices"
            className="cdphe-action-btn text-sm font-medium inline-flex items-center gap-2"
          >
            <span>View Full Price Schedule</span>
            <ArrowRight className="w-4 h-4 text-[#001970]" />
          </Link>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#001970]" />
          <h2 className="font-serif font-bold text-lg text-black">Yellow Fever Certified</h2>
          <p className="text-xs text-[#4A4A4A] leading-relaxed">
            Registered with NaTHNaC to administer the yellow fever vaccine and issue official International Certificates of Vaccination or Prophylaxis (ICVP).
          </p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-3">
          <Clock className="w-8 h-8 text-[#001970]" />
          <h2 className="font-serif font-bold text-lg text-black">4–6 Weeks Prior Guidance</h2>
          <p className="text-xs text-[#4A4A4A] leading-relaxed">
            Many vaccine courses (e.g. Rabies, Hep B, Japanese Encephalitis) require multiple doses spaced over several weeks. Book early for complete immunity.
          </p>
        </div>

        <div className="p-6 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-3">
          <MapPin className="w-8 h-8 text-[#001970]" />
          <h2 className="font-serif font-bold text-lg text-black">Malaria Risk Advice</h2>
          <p className="text-xs text-[#4A4A4A] leading-relaxed">
            Direct dispensing of Malarone (Atovaquone/Proguanil) and Doxycycline based on precise regional transmission risk charts.
          </p>
        </div>
      </div>

      {/* Vaccine Schedule & Destination Search */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-10 pplx-card-shadow space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10">
          <div>
            <h2 className="font-serif text-2xl font-bold text-black">
              Vaccine Schedule & Destination Guidelines
            </h2>
            <p className="text-xs text-[#6B6B6B]">Transparent in-clinic pricing. All payments are completed in person.</p>
          </div>

          <div className="w-full sm:w-72">
            <input
              type="text"
              value={searchDestination}
              onChange={(e) => setSearchDestination(e.target.value)}
              placeholder="Search destination or vaccine..."
              className="w-full bg-white border border-black/15 rounded-lg px-3.5 py-2 text-xs text-black placeholder:text-[#8C8C8C] focus:ring-2 focus:ring-[#001970] outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F3F0EC] text-black uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-3 rounded-l-lg">Immunisation</th>
                <th className="p-3">Course Schedule</th>
                <th className="p-3">Price Per Dose</th>
                <th className="p-3">Full Course</th>
                <th className="p-3 rounded-r-lg">Common Destinations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-[#27251E]">
              {filteredVaccines.map((v, i) => (
                <tr key={i} className="hover:bg-white/60 transition-colors">
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

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <p>
            * Prices include clinical administration and consultation. Certificate provided free of charge with relevant immunisations.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="cdphe-primary-btn text-xs font-semibold whitespace-nowrap"
          >
            Book Travel Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
export default TravelClinicPage;
