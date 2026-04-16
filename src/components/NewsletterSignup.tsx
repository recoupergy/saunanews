'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'hero' | 'footer';
  source?: string;
}

export default function NewsletterSignup({ variant = 'inline', source = 'website' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          website: honeypot, // honeypot field
          source,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (variant === 'hero') {
    return (
      <section className="bg-charcoal text-cream py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold mb-4">
            Stay ahead of the curve.
          </h2>
          <p className="text-lg text-cream/70 mb-8 max-w-xl mx-auto">
            Get the most important sauna industry news, product launches, and market intelligence delivered to your inbox every week.
          </p>
          {status === 'success' ? (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{message}</span>
              </div>
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
              />
              {/* Honeypot: hidden from humans, bots fill it */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-brass text-charcoal text-sm font-semibold rounded-lg hover:bg-copper transition-colors shrink-0 disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-400 mt-3">{message}</p>
          )}
          {status !== 'success' && (
            <p className="text-xs text-cream/40 mt-4">
              Free weekly newsletter. No spam. Unsubscribe anytime.
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <div className="bg-ivory border border-border rounded-xl p-8 sm:p-10">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 className="font-editorial text-xl font-bold text-charcoal mb-2">
          The SaunaNews Weekly
        </h3>
        <p className="text-sm text-stone-dark mb-6">
          One email per week with the stories, data, and analysis that matter most in the sauna industry.
        </p>
        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-green mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{message}</span>
          </div>
        ) : (
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 bg-surface border border-border rounded-lg text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
            />
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 bg-charcoal text-cream text-sm font-medium rounded-lg hover:bg-slate transition-colors shrink-0 disabled:opacity-60"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-xs text-red-500 mt-2">{message}</p>
        )}
      </div>
    </div>
  );
}
