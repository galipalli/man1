import React, { useState } from 'react';
import { Route, Switch } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { Home } from '@/pages/Home';
import { PharmacyFirstPage } from '@/pages/PharmacyFirstPage';
import { TravelClinicPage } from '@/pages/TravelClinicPage';
import { NominatePage } from '@/pages/NominatePage';
import { ContactPage } from '@/pages/ContactPage';
import { HelpCenterPage } from '@/pages/HelpCenterPage';
import { LegalPage } from '@/pages/LegalPage';
import {
  ServicesPage,
  EarWaxPage,
  BloodPressurePage,
  VaccinePricesPage,
  AboutPage,
} from '@/pages/ClinicalPages';
import NotFound from '@/pages/NotFound';

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBFA] text-[#111111] selection:bg-[#001970] selection:text-white">
      {/* Site Header */}
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Main Content View */}
      <main className="flex-1">
        <Switch>
          <Route path="/">
            <Home onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/pharmacy-first">
            <PharmacyFirstPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/travel-clinic">
            <TravelClinicPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/vaccine-prices">
            <VaccinePricesPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/nominate">
            <NominatePage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route path="/help-center">
            <HelpCenterPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/services">
            <ServicesPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/ear-wax-removal">
            <EarWaxPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/blood-pressure">
            <BloodPressurePage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/about">
            <AboutPage onOpenBooking={() => setBookingOpen(true)} />
          </Route>

          <Route path="/legal">
            <LegalPage />
          </Route>

          <Route path="/legal/:docId">
            <LegalPage />
          </Route>

          {/* Fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
