import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SaunaNews',
  description: 'Review the SaunaNews terms governing use of our website, content, and newsletter services.',
  alternates: { canonical: 'https://www.saunanews.com/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-6 tracking-tight">
          Terms of Use
        </h1>
        <div className="space-y-6 text-base text-warm-gray dark:text-dark-muted leading-relaxed">
          <p><strong>Last updated:</strong> April 22, 2026</p>
          <p>
            By using SaunaNews, you agree to these terms. If you do not agree, please do not use
            this website.
          </p>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Content Use</h2>
            <p>
              SaunaNews content is provided for informational purposes. You may share excerpts with
              proper attribution and a link back to the original article.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Accuracy and Availability</h2>
            <p>
              We aim for accurate reporting but do not warrant that all content is complete,
              error-free, or continuously available.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Third-Party Links</h2>
            <p>
              Our site may link to external websites. We are not responsible for the content,
              policies, or practices of third-party services.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-2">Contact</h2>
            <p>
              For legal or terms questions, contact hello@saunanews.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
