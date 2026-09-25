import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Home, Phone, HelpCircle } from 'lucide-react';
import { PHARMACY_DETAILS } from '@/const';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-8 sm:p-12 max-w-lg text-center space-y-6 pplx-card-shadow">
        <div className="w-16 h-16 rounded-2xl bg-[#001970]/10 text-[#001970] mx-auto flex items-center justify-center font-serif text-2xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-black">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            The page or clinical resource you were looking for is unavailable or has moved. Please navigate back to our main dispensary directory.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="cdphe-primary-btn text-xs font-semibold inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href={`tel:${PHARMACY_DETAILS.phoneIntl}`}
            className="cdphe-action-btn text-xs font-medium inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#001970]" />
            <span>Dispensary Phone</span>
          </a>
        </div>
      </div>
    </div>
  );
}
