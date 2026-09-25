import React, { useState } from 'react';
import { HelpCircle, Search, ChevronRight, ArrowLeft, Phone, Calendar, BookOpen, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';
import { FAQ_ITEMS, PHARMACY_DETAILS } from '@/const';

interface HelpCenterPageProps {
  onOpenBooking: () => void;
}

const EXTENDED_FAQS = [
  ...FAQ_ITEMS,
  {
    q: 'How does Ear Wax Microsuction work and how should I prepare?',
    a: 'Ear wax microsuction uses gentle medical suction under direct video magnification. To prepare, apply olive oil or softening ear drops twice daily for 3 days prior to your appointment to gently soften the wax.',
  },
  {
    q: 'What is the NHS Blood Pressure Check service?',
    a: 'Adults aged 40 and over without a prior diagnosis of hypertension can receive a free NHS blood pressure check. If readings are elevated, we can fit a 24-hour ambulatory blood pressure monitoring (ABPM) device to record daytime and nocturnal trends.',
  },
  {
    q: 'How do you handle emergency supply of prescription medications (CPCS)?',
    a: 'If you have run out of your regular repeat medication and your GP surgery is closed, call NHS 111 or visit our pharmacy. Under the NHS Community Pharmacy Consultation Service (CPCS), we can dispense an emergency supply when clinically appropriate.',
  },
  {
    q: 'Can I access oral contraception directly from Queensway Chemist?',
    a: 'Yes. Under the NHS Pharmacy Contraceptive Service, our trained pharmacists can initiate or supply repeat supplies of oral contraceptive pills without needing a doctor’s appointment.',
  },
  {
    q: 'Do you charge a deposit for travel vaccinations or private bookings?',
    a: 'No. We take zero upfront online deposits or card details on this website. All private services (travel jabs, microsuction) are settled in person on the day of your appointment.',
  },
];

export const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const filtered = EXTENDED_FAQS.filter((f) =>
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
        <Link href="/" className="hover:text-black flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span>/</span>
        <span className="text-black font-semibold">Help Center & Knowledge Base</span>
      </div>

      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 pplx-card-shadow text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Patient Guidance & Knowledge Base</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
          How can we help you today?
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl mx-auto">
          Find instant answers about NHS Pharmacy First, repeat prescription delivery, travel vaccinations, and clinic policies.
        </p>

        {/* Live Search Input */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g. nomination, ear wax, UTI, delivery)..."
              className="w-full bg-white border border-black/15 rounded-xl pl-10 pr-4 py-3 text-sm text-black placeholder:text-[#8C8C8C] focus:ring-2 focus:ring-[#001970] outline-none shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-8 pplx-card-shadow space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-black/10 text-xs text-[#6B6B6B]">
          <span>Showing {filtered.length} relevant question{filtered.length === 1 ? '' : 's'}</span>
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="text-[#001970] font-semibold hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-[#6B6B6B] mx-auto" />
            <h3 className="font-serif font-bold text-lg text-black">No articles found matching "{searchTerm}"</h3>
            <p className="text-xs text-[#6B6B6B] max-w-sm mx-auto">
              Please contact our dispensary staff directly on 0161 946 0834 for immediate clinical or logistical guidance.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-black/10">
            {filtered.map((item, idx) => {
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
        )}
      </div>

      {/* Direct Contact Fallback */}
      <div className="p-6 bg-[#F3F0EC] border border-black/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-base text-black">Still have questions?</h3>
          <p className="text-xs text-[#6B6B6B]">Our pharmacists are available by phone 7 days a week.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
            className="cdphe-action-btn text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#001970]" />
            <span>Call {PHARMACY_DETAILS.phone}</span>
          </a>
          <button
            type="button"
            onClick={onOpenBooking}
            className="cdphe-primary-btn text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HelpCenterPage;
