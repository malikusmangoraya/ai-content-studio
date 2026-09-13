import ButtonMotion from '@/components/ui/ButtonMotion';
import React, { useState, useEffect, useCallback } from 'react';

/**
 * ExitIntentPopup Component
 * Detects user exit intent (mouse leaving top of viewport) and presents
 * a conversion-focused modal overlay with lead capture or discount offer.
 */
export default function ExitIntentPopup({
  title = 'Wait! Before you go...',
  subtitle = 'Get 20% off your first 3 months with code SPECIAL20',
  ctaText = 'Claim Discount',
  secondaryText = "No thanks, I'll pay full price",
  onClaim,
  dismissDays = 7,
  cookieKey = 'exit_intent_dismissed',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const checkDismissed = useCallback(() => {
    try {
      const dismissedUntil = localStorage.getItem(cookieKey);
      if (dismissedUntil) {
        return new Date().getTime() < parseInt(dismissedUntil, 10);
      }
    } catch (e) {
      // LocalStorage unavailable
    }
    return false;
  }, [cookieKey]);
  const dismissPopup = useCallback(() => {
    setIsVisible(false);
    try {
      const expiry = new Date().getTime() + dismissDays * 24 * 60 * 60 * 1000;
      localStorage.setItem(cookieKey, expiry.toString());
    } catch (e) {
      // LocalStorage unavailable
    }
  }, [cookieKey, dismissDays]);
  useEffect(() => {
    if (checkDismissed()) return;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isVisible) {
        dismissPopup();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [checkDismissed, dismissPopup, isVisible]);
  if (!isVisible) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      if (onClaim) {
        onClaim(email);
      }
      setTimeout(() => {
        dismissPopup();
      }, 2500);
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      onClick={dismissPopup}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <ButtonMotion
          type="button"
          onClick={dismissPopup}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </ButtonMotion>
        {!isSubmitted ? (
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h2
                id="exit-popup-title"
                className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                {title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <ButtonMotion
                type="submit"
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                {ctaText}
              </ButtonMotion>
            </form>
            <ButtonMotion
              type="button"
              onClick={dismissPopup}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline transition-colors"
            >
              {secondaryText}
            </ButtonMotion>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Offer Unlocked!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Check your inbox for your 20% discount code. Redirecting you back...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
