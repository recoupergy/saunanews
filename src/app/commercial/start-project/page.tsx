'use client';

import { useState } from 'react';
import EmailLink from '@/components/EmailLink';

export default function StartProjectPage() {
  const [form, setForm] = useState({
    name: '', email: '', organization: '', role: 'Developer / Owner',
    projectType: 'Urban Bathhouse', budget: '$50k - $100k', timeline: 'Within 6 months',
    details: '', website: '', // honeypot
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
        body: JSON.stringify({
          ...form,
          inquiryType: 'Commercial Project Intake',
          message: `Role: ${form.role}\nProject Type: ${form.projectType}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nDetails:\n${form.details}`
        }),
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

  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brass mb-4">Project Intake</p>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Scope Your Commercial Sauna
          </h1>
          <p className="text-lg text-white/75 mb-6">
            Tell us about your project. We'll review your requirements and connect you with the right European manufacturing partner and US installation team.
          </p>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {status === 'success' ? (
            <div className="p-8 bg-green/10 dark:bg-green/20 border border-green/30 rounded-xl text-center">
              <svg className="w-10 h-10 text-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-editorial text-lg font-semibold text-charcoal dark:text-cream mb-2">Project details received.</p>
              <p className="text-sm text-stone-dark dark:text-dark-muted">Our commercial team will review your specs and be in touch within one business day.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
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

              <div className="bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-xl p-6 sm:p-8 space-y-6">
                <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream border-b border-border dark:border-dark-border pb-4">
                  1. Contact Information
                </h2>
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
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.organization}
                      onChange={set('organization')}
                      className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                      Your Role
                    </label>
                    <select
                      value={form.role}
                      onChange={set('role')}
                      className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                    >
                      <option>Developer / Owner</option>
                      <option>Architect / Designer</option>
                      <option>General Contractor</option>
                      <option>Hospitality Operator</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-cream dark:bg-dark-bg border border-border dark:border-dark-border rounded-xl p-6 sm:p-8 space-y-6">
                <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream border-b border-border dark:border-dark-border pb-4">
                  2. Project Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                      Project Type
                    </label>
                    <select
                      value={form.projectType}
                      onChange={set('projectType')}
                      className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                    >
                      <option>Urban Bathhouse</option>
                      <option>Hotel / Resort Spa</option>
                      <option>Multifamily Amenity</option>
                      <option>Fitness Center / Gym</option>
                      <option>Private Wellness Club</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                      Estimated Timeline
                    </label>
                    <select
                      value={form.timeline}
                      onChange={set('timeline')}
                      className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                    >
                      <option>ASAP (Already under construction)</option>
                      <option>Within 6 months</option>
                      <option>6-12 months</option>
                      <option>12+ months (Planning phase)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                    Estimated Sauna Budget (Equipment & Build)
                  </label>
                  <select
                    value={form.budget}
                    onChange={set('budget')}
                    className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass"
                  >
                    <option>Under $50k (Routing to Sauna Marketplace)</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                  <p className="text-xs text-stone-dark dark:text-dark-muted mt-2">
                    Note: Projects under $50k will be routed to our retail partner, Sauna Marketplace, for equipment sourcing.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-dark-text mb-2">
                    Project Description & Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.details}
                    onChange={set('details')}
                    className="w-full px-4 py-3 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:border-green dark:focus:border-brass focus:ring-1 focus:ring-green dark:focus:ring-brass resize-none"
                    placeholder="Tell us about the space, capacity requirements, design vision, and any specific challenges..."
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-4 bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-base font-semibold rounded-lg hover:bg-slate dark:hover:bg-ivory transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  {status === 'sending' ? 'Submitting…' : 'Submit Project Details'}
                </button>
                <span className="text-sm text-stone-dark dark:text-dark-muted">
                  or email specs directly to{' '}
                  <EmailLink className="text-green dark:text-brass hover:underline font-medium" />
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
