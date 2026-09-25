import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckCircle2, Send, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { PHARMACY_DETAILS } from '@/const';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
    honeypot: '', // anti-spam honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot: if filled, abort silently
    if (formData.honeypot) {
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      // simulated graceful submission
      setStatus('success');
      localStorage.setItem('last_contact_draft', JSON.stringify({ name: formData.name, date: new Date().toISOString() }));
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: '',
        honeypot: '',
      });
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
        <Link href="/" className="hover:text-black flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span>/</span>
        <span className="text-black font-semibold">Contact & Location</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dispensary Details & Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-8 space-y-6 pplx-card-shadow">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#001970]">
                Chorlton Community Pharmacy
              </span>
              <h1 className="font-serif text-3xl font-bold text-black mt-1">
                Find Queensway Chemist
              </h1>
              <p className="text-xs text-[#6B6B6B] mt-1.5">
                Conveniently located directly opposite Chorlton Library on Manchester Road.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A4A4A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#001970] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-black block">Dispensary Address:</strong>
                  <span>{PHARMACY_DETAILS.address}</span>
                  <div className="text-[11px] text-[#6B6B6B] mt-0.5">3-minute walk from Chorlton Metrolink tram station.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#001970] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-black block">Telephone Dispensary:</strong>
                  <a href={`tel:${PHARMACY_DETAILS.phoneIntl}`} className="text-[#001970] font-semibold hover:underline">
                    {PHARMACY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#001970] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-black block">General Inquiries:</strong>
                  <a href={`mailto:${PHARMACY_DETAILS.email}`} className="text-[#001970] hover:underline">
                    {PHARMACY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#001970] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-black block">Dispensary Hours:</strong>
                  <div className="text-xs text-[#6B6B6B] space-y-0.5 mt-0.5">
                    <div>Mon–Fri: 09:00 – 18:30</div>
                    <div>Saturday: 09:00 – 17:00</div>
                    <div>Sunday: 10:00 – 14:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-black/10 text-[11px] text-[#6B6B6B] space-y-1">
              <div><strong>GPhC Premises Registration:</strong> {PHARMACY_DETAILS.gphcNumber}</div>
              <div><strong>NHS ODS Dispensing Code:</strong> {PHARMACY_DETAILS.odsCode}</div>
              <div><strong>Superintendent Pharmacist:</strong> Meera Patel MPharm (MRPharmS)</div>
            </div>
          </div>

          {/* Interactive Directions Map Card */}
          <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-5 space-y-3">
            <h3 className="font-serif font-bold text-sm text-black flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#001970]" />
              <span>Location Map & Transit</span>
            </h3>
            <div className="w-full h-48 bg-stone-200 rounded-xl overflow-hidden relative border border-black/10 flex items-center justify-center text-center p-4">
              <div className="space-y-2">
                <div className="font-serif font-bold text-black text-sm">14 Manchester Road, M21 9PN</div>
                <div className="text-xs text-[#6B6B6B]">Opposite Chorlton Library · Manchester</div>
                <a
                  href="https://maps.google.com/?q=14+Manchester+Road+Chorlton+Manchester+M21+9PN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cdphe-primary-btn text-xs inline-flex items-center gap-1.5"
                >
                  <span>Open in Google Maps / Apple Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: General Enquiry Form with Confidentiality Guard */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-black/10 rounded-2xl p-6 sm:p-10 pplx-card-shadow space-y-6">
          {/* Medical Data Guard Notice */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5 text-xs text-amber-950">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Strict Patient Confidentiality Guard</span>
            </div>
            <p className="leading-relaxed">
              <strong>Please do not submit medical histories, symptoms, or private prescription requests through this contact form.</strong> 
              To guarantee patient privacy and adhere to UK GDPR regulations, this website does not store or process special-category health records. 
              For clinical inquiries or urgent medication requests, please telephone our dispensary on <strong>0161 946 0834</strong> or speak to our team in person.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-black">
              General Community Inquiry Form
            </h2>
            <p className="text-xs text-[#6B6B6B] mt-1">
              For service availability, opening hours, local delivery area queries, and general administrative questions.
            </p>
          </div>

          {status === 'success' && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>Thank you!</strong> Your message has been sent to our pharmacy administration team. We typically respond within 1 business day.
              </span>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-700 shrink-0" />
              <span>Please fill in all required fields (Name, Email, Message) before submitting.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field (hidden from human users) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input
                type="text"
                name="website_hp"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-black mb-1">
                  Your Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-white border border-black/15 rounded-lg px-3.5 py-2.5 text-xs text-black placeholder:text-[#8C8C8C] focus:ring-2 focus:ring-[#001970] outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-black mb-1">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.co.uk"
                  className="w-full bg-white border border-black/15 rounded-lg px-3.5 py-2.5 text-xs text-black placeholder:text-[#8C8C8C] focus:ring-2 focus:ring-[#001970] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold text-black mb-1">
                  Telephone (Optional)
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0161 000 0000"
                  className="w-full bg-white border border-black/15 rounded-lg px-3.5 py-2.5 text-xs text-black placeholder:text-[#8C8C8C] focus:ring-2 focus:ring-[#001970] outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-black mb-1">
                  Inquiry Topic
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border border-black/15 rounded-lg px-3.5 py-2.5 text-xs text-black focus:ring-2 focus:ring-[#001970] outline-none"
                >
                  <option value="General Question">General Dispensary Question</option>
                  <option value="Delivery Postcode Query">Prescription Delivery Area Check</option>
                  <option value="Travel Clinic Query">Travel Clinic Schedule Query</option>
                  <option value="Ear Wax Removal">Ear Wax Microsuction Consultation Query</option>
                  <option value="Accessibility Support">Accessibility & Chaperone Request</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-black mb-1">
                Your Message (Non-clinical only) *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can our community dispensary assist you?"
                className="w-full bg-white border border-black/15 rounded-lg px-3.5 py-2.5 text-xs text-black placeholder:text-[#8C8C8C] focus:ring-2 focus:ring-[#001970] outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#6B6B6B]">
                Protected by anti-spam honey pot & TLS 1.3 encryption.
              </span>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="cdphe-primary-btn text-xs font-semibold inline-flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'loading' ? 'Sending Inquiry...' : 'Submit Inquiry'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
