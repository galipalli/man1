import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Calendar, Clock, Menu, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PHARMACY_DETAILS } from '@/const';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenu();
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusText, setStatusText] = useState('Open Today until 18:30');

  useEffect(() => {
    // UK London time evaluation
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      if (day >= 1 && day <= 5) {
        // Mon-Fri: 09:00 - 18:30
        const openMin = 9 * 60;
        const closeMin = 18 * 60 + 30;
        if (totalMinutes >= openMin && totalMinutes < closeMin) {
          setIsOpenNow(true);
          setStatusText('Open Today until 18:30');
        } else {
          setIsOpenNow(false);
          setStatusText(totalMinutes < openMin ? 'Opens at 09:00 Today' : 'Closed · Opens Tomorrow 09:00');
        }
      } else if (day === 6) {
        // Sat: 09:00 - 17:00
        const openMin = 9 * 60;
        const closeMin = 17 * 60;
        if (totalMinutes >= openMin && totalMinutes < closeMin) {
          setIsOpenNow(true);
          setStatusText('Open Today until 17:00');
        } else {
          setIsOpenNow(false);
          setStatusText(totalMinutes < openMin ? 'Opens at 09:00 Today' : 'Closed · Opens Sunday 10:00');
        }
      } else {
        // Sun: 10:00 - 14:00
        const openMin = 10 * 60;
        const closeMin = 14 * 60;
        if (totalMinutes >= openMin && totalMinutes < closeMin) {
          setIsOpenNow(true);
          setStatusText('Open Today until 14:00');
        } else {
          setIsOpenNow(false);
          setStatusText(totalMinutes < openMin ? 'Opens at 10:00 Today' : 'Closed · Opens Monday 09:00');
        }
      }
    };

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBFA] border-b border-black/[0.08] transition-all">
      {/* Top Clinical Utility Bar */}
      <div className="bg-[#FAF8F5] border-b border-black/[0.06] text-xs text-[#27251E] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black tracking-wide">Queensway Chemist</span>
            <span className="hidden md:inline text-black/40">|</span>
            <span className="hidden md:inline text-[#6B6B6B]">Chorlton Independent Pharmacy Since 1987</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F3F0EC] text-black border border-black/10">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-600 animate-pulse' : 'bg-red-500'}`} />
              {statusText}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
              className="inline-flex items-center gap-1.5 font-medium hover:text-[#001970] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#001970]" />
              <span>{PHARMACY_DETAILS.phone}</span>
            </a>
            <span className="hidden sm:inline text-black/30">•</span>
            <span className="hidden sm:inline text-[#6B6B6B]">GPhC No. {PHARMACY_DETAILS.gphcNumber}</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#001970] rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-[#001970] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            {/* Medical Cross Motif */}
            <div className="relative w-5 h-5">
              <div className="absolute inset-x-1.5 inset-y-0 bg-[#FDFBFA] rounded-sm" />
              <div className="absolute inset-y-1.5 inset-x-0 bg-[#FDFBFA] rounded-sm" />
            </div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-black leading-tight">
              Queensway
            </div>
            <div className="text-[11px] uppercase tracking-wider font-medium text-[#6B6B6B]">
              Chemist & Travel Clinic
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[15px]">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              location === '/' ? 'text-black font-semibold bg-[#F3F0EC]' : 'text-[#27251E] hover:text-black hover:bg-[#FAF8F5]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/pharmacy-first"
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              location === '/pharmacy-first' ? 'text-[#001970] font-semibold bg-[#F3F0EC]' : 'text-[#27251E] hover:text-black hover:bg-[#FAF8F5]'
            }`}
          >
            NHS Pharmacy First
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className="px-3 py-2 rounded-md font-medium text-[#27251E] hover:text-black hover:bg-[#FAF8F5] inline-flex items-center gap-1 transition-colors"
            >
              Services <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-72 bg-[#FAF8F5] border border-black/[0.1] rounded-2xl shadow-xl p-3 z-50">
                <Link
                  href="/services"
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-black hover:bg-[#F3F0EC]"
                >
                  All Clinical Services
                </Link>
                <Link
                  href="/travel-clinic"
                  className="block px-3 py-2 rounded-xl text-sm text-[#27251E] hover:bg-[#F3F0EC]"
                >
                  Travel Vaccination Clinic
                </Link>
                <Link
                  href="/vaccine-prices"
                  className="block px-3 py-2 rounded-xl text-sm text-[#27251E] hover:bg-[#F3F0EC]"
                >
                  Vaccine Price Schedule
                </Link>
                <Link
                  href="/ear-wax-removal"
                  className="block px-3 py-2 rounded-xl text-sm text-[#27251E] hover:bg-[#F3F0EC]"
                >
                  Ear Wax Microsuction
                </Link>
                <Link
                  href="/blood-pressure"
                  className="block px-3 py-2 rounded-xl text-sm text-[#27251E] hover:bg-[#F3F0EC]"
                >
                  NHS Blood Pressure & ABPM
                </Link>
                <Link
                  href="/nominate"
                  className="block px-3 py-2 rounded-xl text-sm text-[#27251E] hover:bg-[#F3F0EC]"
                >
                  Free Prescription Delivery
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/nominate"
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              location === '/nominate' ? 'text-black font-semibold bg-[#F3F0EC]' : 'text-[#27251E] hover:text-black hover:bg-[#FAF8F5]'
            }`}
          >
            Nominate Us
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              location === '/about' ? 'text-black font-semibold bg-[#F3F0EC]' : 'text-[#27251E] hover:text-black hover:bg-[#FAF8F5]'
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              location === '/contact' ? 'text-black font-semibold bg-[#F3F0EC]' : 'text-[#27251E] hover:text-black hover:bg-[#FAF8F5]'
            }`}
          >
            Contact
          </Link>

          <Link
            href="/help-center"
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              location === '/help-center' ? 'text-black font-semibold bg-[#F3F0EC]' : 'text-[#27251E] hover:text-black hover:bg-[#FAF8F5]'
            }`}
          >
            Help & FAQs
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="cdphe-primary-btn text-sm inline-flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-black/10 bg-[#FAF8F5] text-black hover:bg-[#F3F0EC]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-black/10 px-6 py-6 animate-in slide-in-from-top-3">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold text-black"
            >
              Home
            </Link>
            <Link
              href="/pharmacy-first"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold text-[#001970]"
            >
              NHS Pharmacy First (7 Conditions)
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Clinical Services Catalog
            </Link>
            <Link
              href="/travel-clinic"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Travel Clinic & Vaccinations
            </Link>
            <Link
              href="/vaccine-prices"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Vaccine Price Schedule
            </Link>
            <Link
              href="/ear-wax-removal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Ear Wax Microsuction
            </Link>
            <Link
              href="/blood-pressure"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Blood Pressure Screening
            </Link>
            <Link
              href="/nominate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Free NHS Prescription Delivery
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              About Our Pharmacy
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Contact Us & Location
            </Link>
            <Link
              href="/help-center"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#27251E]"
            >
              Help & Patient FAQs
            </Link>

            <div className="pt-4 border-t border-black/10 flex flex-col gap-2">
              <a
                href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
                className="cdphe-action-btn flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#001970]" />
                <span>Call {PHARMACY_DETAILS.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="cdphe-primary-btn flex items-center justify-center gap-2 text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

function useMobileMenu(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [open, setOpen] = useState(false);
  return [open, setOpen];
}
