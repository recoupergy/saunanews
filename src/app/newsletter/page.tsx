'use client';

import { useState } from 'react';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function NewsletterPage() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroHoneypot, setHeroHoneypot] = useState('');
  const [heroStatus, setHeroStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [heroMessage, setHeroMessage] = useState('');

  async function handleHeroSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!heroEmail.trim() || heroStatus === 'loading') return;
    setHeroStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: heroEmail.trim(), website: heroHoneypot, source: 'newsletter-page' }),
      });
      const data = await res.json();
      if (data.success) {
        setHeroStatus('success');
        setHeroMessage(data.message);
        setHeroEmail('');
      } else {
        setHeroStatus('error');
        setHeroMessage(data.message);
      }
    } catch {
      setHeroStatus('error');
      setHeroMessage('Something went wrong. Please try again.');
    }
  }

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: 'Curated Coverage',
      description: 'We filter the noise so you get only the stories that matter. Every issue is hand-edited by our editorial team.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Market Intelligence',
      description: 'Data points, pricing trends, and competitive insights you won\'t find aggregated anywhere else.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Five-Minute Read',
      description: 'Designed to be read in a single sitting. Get up to speed on the sauna industry in the time it takes to drink a coffee.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: 'Exclusive Analysis',
      description: 'Subscriber-first commentary and analysis that goes deeper than our daily coverage.',
    },
  ];

  const sampleTopics = [
    'Manufacturer acquisitions and strategic moves',
    'New product launches and first-look coverage',
    'Consumer demand data and market sizing',
    'Tariff and trade policy updates',
    'Hospitality and commercial project news',
    'Wellness and longevity research affecting sauna',
    'Supply chain and materials intelligence',
    'Weekly data snapshots and pricing trends',
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal dark:bg-slate text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-14 h-14 bg-brass/20 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            The SaunaNews Weekly
          </h1>
          <p className="text-xl text-cream/70 mb-8 max-w-xl mx-auto">
            The most important sauna industry news, product launches, and market intelligence, delivered every Thursday.
          </p>
          {heroStatus === 'success' ? (
            <div className="flex items-center justify-center gap-2 text-emerald-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{heroMessage}</span>
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleHeroSubmit}>
              <input
                type="email"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3.5 bg-cream/10 border border-cream/20 rounded-lg text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
              />
              <input
                type="text"
                name="website"
                value={heroHoneypot}
                onChange={(e) => setHeroHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
              />
              <button
                type="submit"
                disabled={heroStatus === 'loading'}
                className="px-8 py-3.5 bg-brass text-charcoal text-sm font-semibold rounded-lg hover:bg-copper transition-colors shrink-0 disabled:opacity-60"
              >
                {heroStatus === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
              </button>
            </form>
          )}
          {heroStatus === 'error' && (
            <p className="text-xs text-red-400 mt-3">{heroMessage}</p>
          )}
          {heroStatus !== 'success' && (
            <p className="text-xs text-cream/40 mt-4">
              Free. No spam. Unsubscribe anytime.
            </p>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-10 text-center">
            What You Get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-12 h-12 bg-green/10 dark:bg-green/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-green dark:text-green-light">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-charcoal dark:text-cream mb-2">{b.title}</h3>
                <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-6">
            Inside Each Issue
          </h2>
          <p className="text-base text-warm-gray dark:text-dark-muted mb-8">
            Every edition of The SaunaNews Weekly covers the stories, data, and developments that sauna industry professionals need to know. Topics include:
          </p>
          <ul className="space-y-3">
            {sampleTopics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green dark:text-brass shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-charcoal dark:text-dark-text">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample issue preview */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-6">
            Sample Issue Preview
          </h2>
          <div className="bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-8">
            <div className="border-b border-border dark:border-dark-border pb-4 mb-6">
              <p className="text-xs uppercase tracking-wider text-brass font-semibold">The SaunaNews Weekly</p>
              <p className="text-xs text-stone-dark dark:text-dark-muted">Issue #42 — April 3, 2026</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold text-brass mt-1 shrink-0">01</span>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-cream text-sm">Supreme Court IEEPA Ruling Reshapes Tariff Picture</h4>
                  <p className="text-xs text-stone-dark dark:text-dark-muted mt-0.5">Section 122 replacement at 15% and what importers need to know.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold text-brass mt-1 shrink-0">02</span>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-cream text-sm">Harvia Q1 Revenue Hits EUR 52M, Up 22.7%</h4>
                  <p className="text-xs text-stone-dark dark:text-dark-muted mt-0.5">ThermaSol integration driving growth ahead of schedule.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold text-brass mt-1 shrink-0">03</span>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-cream text-sm">Homecraft Launches WiFi Controller for North American Market</h4>
                  <p className="text-xs text-stone-dark dark:text-dark-muted mt-0.5">Canada's oldest heater maker adds app control at $825.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold text-brass mt-1 shrink-0">04</span>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-cream text-sm">Thermory Signs Exclusive Japan Distribution Deal</h4>
                  <p className="text-xs text-stone-dark dark:text-dark-muted mt-0.5">Bergman Co. brings thermowood to Japan's sauna renaissance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <NewsletterSignup variant="hero" source="newsletter-page-bottom" />
    </>
  );
}
