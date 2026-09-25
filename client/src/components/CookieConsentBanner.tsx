import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, Settings } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [functionalConsent, setFunctionalConsent] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('queensway_cookie_consent');
    if (!saved) {
      // Delay showing banner slightly so initial hero can render cleanly
      const t = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(t);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setAnalyticsConsent(!!parsed.analytics);
        setFunctionalConsent(parsed.functional !== false);
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      'queensway_cookie_consent',
      JSON.stringify({ necessary: true, functional: true, analytics: true, date: new Date().toISOString() })
    );
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem(
      'queensway_cookie_consent',
      JSON.stringify({ necessary: true, functional: false, analytics: false, date: new Date().toISOString() })
    );
    setShowBanner(false);
    setShowPreferences(false);
  };

  const saveCustomPreferences = () => {
    localStorage.setItem(
      'queensway_cookie_consent',
      JSON.stringify({ necessary: true, functional: functionalConsent, analytics: analyticsConsent, date: new Date().toISOString() })
    );
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <div className="fixed bottom-3 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#FAF8F5]/95 backdrop-blur-md border border-black/15 rounded-2xl p-4 sm:p-5 pplx-card-shadow text-[#27251E] shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#F3F0EC] text-[#001970] shrink-0 mt-0.5">
            <Shield className="w-4 h-4" />
          </div>

          <div className="flex-1 space-y-1.5">
            <h3 className="font-serif font-bold text-sm text-black">
              Data Privacy & Cookie Consent
            </h3>
            <p className="text-[11px] sm:text-xs text-[#6B6B6B] leading-relaxed">
              We use strictly necessary cookies for scheduling and navigation. We never hold medical histories or track health data.
            </p>

            {showPreferences && (
              <div className="pt-2 pb-1 space-y-2 border-t border-black/10 mt-2 text-xs">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#F3F0EC]">
                  <div>
                    <span className="font-semibold text-black text-[11px]">Strictly Necessary</span>
                    <p className="text-[10px] text-[#6B6B6B]">Session tokens & security</p>
                  </div>
                  <span className="text-[10px] font-medium text-[#001970]">Active</span>
                </div>

                <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#F3F0EC]">
                  <div>
                    <span className="font-semibold text-black text-[11px]">Functional</span>
                    <p className="text-[10px] text-[#6B6B6B]">Saved preferences</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={functionalConsent}
                    onChange={(e) => setFunctionalConsent(e.target.checked)}
                    className="w-3.5 h-3.5 accent-[#001970]"
                  />
                </div>

                <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#F3F0EC]">
                  <div>
                    <span className="font-semibold text-black text-[11px]">Aggregated Analytics</span>
                    <p className="text-[10px] text-[#6B6B6B]">Umami non-PII metrics</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="w-3.5 h-3.5 accent-[#001970]"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
              {showPreferences ? (
                <>
                  <button
                    type="button"
                    onClick={saveCustomPreferences}
                    className="cdphe-primary-btn text-[11px] py-1.5 px-3"
                  >
                    Save Preferences
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(false)}
                    className="cdphe-action-btn text-[11px] py-1.5 px-3"
                  >
                    Back
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="cdphe-primary-btn text-[11px] py-1.5 px-3"
                  >
                    Accept All
                  </button>
                  <button
                    type="button"
                    onClick={acceptNecessaryOnly}
                    className="cdphe-action-btn text-[11px] py-1.5 px-3"
                  >
                    Necessary Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    className="p-1.5 text-[11px] text-[#27251E] hover:text-[#001970] inline-flex items-center gap-1 font-medium ml-auto"
                  >
                    <Settings className="w-3 h-3" />
                    <span>Customize</span>
                  </button>
                </>
              )}
            </div>

            <div className="pt-1 text-[9px] text-[#8C8C8C]">
              Read our <Link href="/legal/cookie-policy" className="underline hover:text-black">Cookie Policy</Link> and <Link href="/legal/privacy-policy" className="underline hover:text-black">Privacy Notice</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
