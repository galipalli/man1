import React, { useState } from 'react';
import { Truck, CheckCircle2, ShieldCheck, Phone, ArrowLeft, ArrowRight, HelpCircle, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { PHARMACY_DETAILS } from '@/const';

export const NominatePage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyDetails = () => {
    const text = `Queensway Chemist, 14 Manchester Road, Chorlton, Manchester M21 9PN (ODS: ${PHARMACY_DETAILS.odsCode}, GPhC: ${PHARMACY_DETAILS.gphcNumber})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
        <Link href="/" className="hover:text-black flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span>/</span>
        <span className="text-black font-semibold">Free Prescription Delivery & NHS Nomination</span>
      </div>

      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
          <Truck className="w-3.5 h-3.5" />
          <span>NHS Electronic Prescription Service (EPS)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
          How to Nominate Queensway for Free Doorstep Delivery
        </h1>
        <p className="text-base sm:text-lg text-[#4A4A4A] max-w-3xl leading-relaxed">
          Switching your nominated pharmacy takes under two minutes. Once nominated, your GP sends repeat prescriptions straight to our dispensary. We assemble, check, and hand-deliver your medicines for free.
        </p>

        {/* Postcodes covered */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-semibold text-black uppercase tracking-wider">Free Delivery Postcodes:</span>
          {PHARMACY_DETAILS.deliveryPostcodes.map((pc) => (
            <span key={pc} className="px-3 py-1 bg-white border border-black/10 rounded-lg text-xs font-mono font-bold text-[#001970]">
              {pc}
            </span>
          ))}
          <span className="text-xs text-[#6B6B6B]">(Chorlton, Didsbury, Whalley Range, Stretford)</span>
        </div>
      </div>

      {/* 3 Step Interactive Walkthrough */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-4 relative pplx-card-shadow">
          <div className="w-10 h-10 rounded-xl bg-[#001970] text-white font-serif font-bold text-lg flex items-center justify-center">
            Step 1
          </div>
          <h2 className="font-serif font-bold text-xl text-black">Open the NHS App</h2>
          <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
            Log in to your <strong>NHS App</strong> on your smartphone or visit the official NHS website. Tap <em>Your health</em> and select <em>View and change nominated pharmacy</em>.
          </p>
          <div className="pt-2 text-xs text-[#6B6B6B]">
            * No NHS login? You can also ask your GP surgery receptionist to set Queensway Chemist as your nomination.
          </div>
        </div>

        <div className="p-8 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-4 relative pplx-card-shadow">
          <div className="w-10 h-10 rounded-xl bg-[#001970] text-white font-serif font-bold text-lg flex items-center justify-center">
            Step 2
          </div>
          <h2 className="font-serif font-bold text-xl text-black">Select Queensway Chemist</h2>
          <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
            Search for <strong>Queensway Chemist</strong> or enter our postcode <strong>M21 9PN</strong>. Confirm the selection to bind your NHS electronic token.
          </p>
          <div className="p-3 bg-white border border-black/10 rounded-xl text-xs space-y-1">
            <div className="font-mono text-black font-semibold">ODS: {PHARMACY_DETAILS.odsCode}</div>
            <div className="text-[11px] text-[#6B6B6B]">GPhC Premises: {PHARMACY_DETAILS.gphcNumber}</div>
          </div>
        </div>

        <div className="p-8 bg-[#FAF8F5] border border-black/10 rounded-2xl space-y-4 relative pplx-card-shadow">
          <div className="w-10 h-10 rounded-xl bg-[#001970] text-white font-serif font-bold text-lg flex items-center justify-center">
            Step 3
          </div>
          <h2 className="font-serif font-bold text-xl text-black">Receive Free Delivery</h2>
          <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
            Every time your doctor authorizes your repeat prescription, we prepare your medication in our dispensary and our driver Liam delivers it right to your doorstep.
          </p>
          <div className="pt-2 text-xs text-emerald-700 font-medium">
            ✓ Cold-chain insulin & fridge medications handled with certified temperature monitoring.
          </div>
        </div>
      </div>

      {/* Official Details Copy Card */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 pplx-card-shadow flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-black">Our Exact Dispensary Details for Your GP</h2>
          <p className="text-xs text-[#6B6B6B]">
            Provide these details to your surgery if you are asking them over the phone to switch your nomination:
          </p>
          <p className="text-sm font-medium text-black bg-white p-3 rounded-xl border border-black/10">
            <strong>Queensway Chemist</strong> · 14 Manchester Road, Chorlton, Manchester M21 9PN · Phone: 0161 946 0834 · ODS: FFM98
          </p>
        </div>

        <button
          type="button"
          onClick={copyDetails}
          className="cdphe-primary-btn text-xs font-semibold whitespace-nowrap self-stretch md:self-auto"
        >
          {copied ? 'Copied to Clipboard!' : 'Copy Pharmacy Details'}
        </button>
      </div>

      {/* Frequently Asked Questions regarding Nominations */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 space-y-6">
        <h2 className="font-serif font-bold text-2xl text-black">Prescription Delivery Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#4A4A4A]">
          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-black/10">
            <h3 className="font-serif font-bold text-black">Is there any charge for delivery?</h3>
            <p>None at all. Delivery is 100% free for all patients residing within our South Manchester delivery zones.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-black/10">
            <h3 className="font-serif font-bold text-black">Do I need to be at home to sign?</h3>
            <p>Yes, controlled and prescription medicines require a signature or verbal confirmation at the door. If you are unavailable, we re-attempt delivery or hold it securely at the dispensary.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-black/10">
            <h3 className="font-serif font-bold text-black">Can you manage weekly blister dosette trays?</h3>
            <p>Yes. We offer fully sealed 7-day multi-compartment trays arranged by time of day, delivered directly on a regular weekly schedule.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-black/10">
            <h3 className="font-serif font-bold text-black">Can I switch back if I move away?</h3>
            <p>Yes, you can change your nomination at any time via the NHS App or through any GP surgery without penalty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NominatePage;
