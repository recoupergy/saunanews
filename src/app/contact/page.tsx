'use client';

import { useState } from 'react';
import EmailLink from '@/components/EmailLink';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', organization: '', inquiryType: 'News Submission / Press Release', message: '',
    website: '', // honeypot — hidden from humans, filled by bots
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data.message ?? 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error — please try again or email us directly.');
      setStatus('error');
    }
  }

  const inquiryTypes = [
    {
      title: 'Submit News or Announcements',
      description: 'Have a press release, product launch, or company announcement? Send it to our editorial team for coverage consideration.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
    },
    {
      title: 'Suggest a Story',
      description: 'Know about something we should be covering? We welcome story tips, trend observations, and leads from across the industry.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      title: 'Sponsorship & Advertising',
      description: 'Interested in reaching the sauna industry\'s most engaged professional audience? Let\'s discuss how we can work together.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
    {
      title: 'General Inquiries',
      description: 'Questions about SaunaNews, editorial partnerships, feedback, or anything else? We read every message.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-4 tracking-tight">
            Contact & Submit News
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted mb-6">
            We welcome news submissions, story tips, partnership inquiries, and reader feedback.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green dark:text-brass shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <EmailLink className="text-green dark:text-brass font-medium hover:underline transition-colors text-lg" />
            </div>
            <a href="https://x.com/sauna_news" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green dark:text-brass font-medium hover:underline transition-colors text-lg">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @sauna_news
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-dark dark:text-dark-muted">
            <p>
              <strong>Office:</strong> 548 Market St PMB 64203, San Francisco, CA 94104, USA
            </p>
            <p>
              <strong>Editorial phone:</strong>{' '}
              <a href="tel:+14155550141" className="text-green dark:text-brass font-medium hover:underline">
                +1 (415) 555-0141
              </a>
            </p>
            <p>
              <strong>Newsroom inbox:</strong>{' '}
              <a href="mailto:newsroom@saunanews.com" className="text-green dark:text-brass font-medium hover:underline">
                newsroom@saunanews.com
              </a>
            </p>
            <p>
              <strong>Editorial inbox:</strong>{' '}
              <a href="mailto:editorial@saunanews.com" className="text-green dark:text-brass font-medium hover:underline">
                editorial@saunanews.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {inquiryTypes.map((t) => (
              <div key={t.title} className="p-8 bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-xl">
                <div className="w-12 h-12 bg-green/10 dark:bg-green/20 rounded-lg flex items-center justify-center mb-4 text-green dark:text-green-light">
                  {t.icon}
                </div>
                <h3 className="font-editorial text-lg font-semibold text-charcoal dark:text-cream mb-2">{t.title}</h3>
                <p className="text-sm text-stone-dark dark:text-dark-muted leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-8">
            Send Us a Message
          </h2>

          {status === 'success' ? (
            <div className="p-8 bg-green/10 dark:bg-green/20 border border-green/30 rounded-xl text-center">
              <svg className="w-10 h-10 text-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-editorial text-lg font-semibold text-charcoal dark:text-cream mb-2">Message sent.</p>
              <p className="text-sm text-stone-dark dark:text-dark-muted">We read everything and will be in touch shortly.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={set('website')}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={set('name')}
                    className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={set('organization')}
                  className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                  placeholder="Company or organization (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                  Type of Inquiry
                </label>
                <select
                  value={form.inquiryType}
                  onChange={set('inquiryType')}
                  className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass"
                >
                  <option>News Submission / Press Release</option>
                  <option>Story Tip or Idea</option>
                  <option>Sponsorship / Advertising</option>
                  <option>Partnership Inquiry</option>
                  <option>General Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={set('message')}
                  className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass resize-none"
                  placeholder="Tell us what you're reaching out about..."
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-3 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-sm font-semibold rounded-lg hover:bg-slate dark:hover:bg-ivory transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                <span className="text-sm text-stone-dark dark:text-dark-muted">
                  or email us directly at{' '}
                  <EmailLink className="text-green dark:text-brass hover:underline font-medium" />
                </span>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Sponsorship callout */}
      <section className="bg-ivory dark:bg-dark-surface border-t border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-base text-warm-gray dark:text-dark-muted leading-relaxed mb-2">
            SaunaNews reaches a focused audience of sauna industry professionals, manufacturers, dealers, architects, hospitality operators, and serious enthusiasts.
          </p>
          <p className="text-base text-warm-gray dark:text-dark-muted leading-relaxed">
            We offer tasteful, high-impact sponsorship placements that align with our editorial standards. Contact us to learn more about reaching this audience.
          </p>
        </div>
      </section>
    </>
  );
}
