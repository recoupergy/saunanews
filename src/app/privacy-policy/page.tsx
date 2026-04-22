import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SaunaNews',
  description: 'Read SaunaNews privacy practices for newsletter subscriptions, contact submissions, analytics, and data rights.',
  alternates: { canonical: 'https://www.saunanews.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-base text-warm-gray dark:text-dark-muted leading-relaxed">
          <p><strong>Last updated:</strong> April 22, 2026</p>
          <p>
            SaunaNews uses your information to operate this publication, deliver newsletters,
            and respond to inquiries. We collect only the data needed for those purposes.
          </p>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Information We Collect</h2>
            <p>
              We may collect your name, email address, organization details you submit through
              forms, and limited usage data from analytics tools.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">How We Use Information</h2>
            <p>
              We use data to send requested newsletters, review editorial submissions, improve
              site performance, and communicate about reader inquiries.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Data Sharing</h2>
            <p>
              We do not sell personal data. We may share limited data with trusted service providers
              that help us run email delivery, hosting, and analytics.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Your Choices</h2>
            <p>
              You can unsubscribe from newsletters at any time using links in each email. To request
              data access or deletion, contact us at hello@saunanews.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
