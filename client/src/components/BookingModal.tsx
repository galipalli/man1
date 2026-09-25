import React, { useState } from 'react';
import { X, Calendar, Phone, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PHARMACY_DETAILS } from '@/const';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'NHS Pharmacy First Consultation',
}) => {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [activeTab, setActiveTab] = useState<'scheduler' | 'phone'>('scheduler');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF8F5] border border-black/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pplx-card-shadow relative p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F3F0EC] text-black transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0EC] text-[#001970] mb-3 border border-black/5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Clinical Scheduling</span>
          </div>
          <h2 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-black">
            Book an Appointment with Queensway Chemist
          </h2>
          <p className="text-sm text-[#6B6B6B] mt-1.5 leading-relaxed">
            Choose a consultation time in our private accredited clinical room, or call our dispensary team directly. No online payment is requested or collected.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex rounded-xl bg-[#F3F0EC] p-1.5 mb-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('scheduler')}
            className={`flex-1 py-2 text-center rounded-lg transition-all ${
              activeTab === 'scheduler'
                ? 'bg-white text-black font-semibold shadow-xs'
                : 'text-[#6B6B6B] hover:text-black'
            }`}
          >
            Online Scheduler (Cal.com)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('phone')}
            className={`flex-1 py-2 text-center rounded-lg transition-all ${
              activeTab === 'phone'
                ? 'bg-white text-black font-semibold shadow-xs'
                : 'text-[#6B6B6B] hover:text-black'
            }`}
          >
            Telephone / Walk-in Guidance
          </button>
        </div>

        {activeTab === 'scheduler' ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="service-select" className="block text-xs font-semibold text-black uppercase tracking-wider mb-2">
                Select Clinical Service
              </label>
              <select
                id="service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-white border border-black/15 rounded-lg px-3 py-2.5 text-sm text-black focus:ring-2 focus:ring-[#001970] focus:border-transparent outline-none"
              >
                <option value="NHS Pharmacy First Consultation">NHS Pharmacy First (UTI, Sore Throat, Sinusitis, Earache, Impetigo, Shingles, Bites)</option>
                <option value="Travel Vaccination Risk Assessment">Private Travel Vaccination Consultation & Jabs</option>
                <option value="Ear Wax Microsuction Clinic">Ear Wax Video Otoscopy & Microsuction</option>
                <option value="NHS Blood Pressure Screening">NHS Hypertension Blood Pressure & ABPM Check</option>
                <option value="NHS Contraception Consultation">NHS Oral Contraception Consultation</option>
                <option value="General Medication Review">Prescription Review & Adherence Advice</option>
              </select>
            </div>

            {/* Embedded Cal.com container */}
            <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
              <div className="p-3 bg-[#FAF8F5] border-b border-black/5 flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="font-medium text-black">Live Availability · 15–30 Minute Slots</span>
                <span>Chorlton Private Suite</span>
              </div>
              <iframe
                src="https://cal.com/dhanu-g/15min?embed=true"
                title="Cal.com Consultation Scheduler"
                className="w-full h-[360px] border-0"
              />
            </div>

            {/* Data privacy reminder */}
            <div className="p-3 bg-[#F3F0EC] rounded-xl text-xs text-[#4A4A4A] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#001970] shrink-0 mt-0.5" />
              <span>
                <strong>Zero Financial or Medical Record Intake:</strong> No credit card details, medical symptoms, or patient histories are stored on this site. You only reserve a calendar slot.
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-5 bg-white border border-black/10 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#001970]/10 text-[#001970]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-black">Speak with the Pharmacist</h3>
                  <p className="text-xs text-[#6B6B6B]">Available during standard dispensary opening hours</p>
                </div>
              </div>

              <div className="text-center py-2">
                <a
                  href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
                  className="font-serif text-2xl font-bold text-[#001970] hover:underline"
                >
                  {PHARMACY_DETAILS.phone}
                </a>
              </div>

              <p className="text-xs text-[#4A4A4A] leading-relaxed">
                If you are unsure whether your symptoms qualify under NHS Pharmacy First or if you require an urgent same-day emergency supply, please call our dispensary. Our clinical staff can assess your urgency over the phone.
              </p>
            </div>

            <div className="p-4 bg-[#F3F0EC] rounded-xl text-xs text-[#4A4A4A] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-black">
                <Clock className="w-4 h-4 text-[#001970]" />
                <span>Walk-in Hours at 14 Manchester Road, M21 9PN:</span>
              </div>
              <ul className="grid grid-cols-2 gap-1 text-[11px] pt-1">
                <li>Monday–Friday: 09:00 – 18:30</li>
                <li>Saturday: 09:00 – 17:00</li>
                <li>Sunday: 10:00 – 14:00</li>
                <li>Bank Holidays: Call ahead</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer controls */}
        <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-[#6B6B6B]">
          <span>Queensway Chemist · 14 Manchester Rd, Chorlton</span>
          <button
            type="button"
            onClick={onClose}
            className="cdphe-action-btn text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
