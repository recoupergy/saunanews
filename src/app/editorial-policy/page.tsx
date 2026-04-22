import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    'Read SaunaNews editorial standards for sourcing, fact-checking, corrections, conflicts of interest, AI disclosure, and sponsored-content handling.',
  alternates: { canonical: 'https://www.saunanews.com/editorial-policy' },
  openGraph: {
    title: 'Editorial Policy | SaunaNews',
    description:
      'Read SaunaNews editorial standards for sourcing, fact-checking, corrections, conflicts of interest, AI disclosure, and sponsored-content handling.',
    type: 'article',
    url: 'https://www.saunanews.com/editorial-policy',
    siteName: 'SaunaNews',
  },
};

const policySections = [
  {
    title: 'Sourcing Standards',
    points: [
      'We prioritize primary documents, direct company filings, official statements, and on-the-record interviews.',
      'When reporting claims, we attribute them clearly and include context readers need to evaluate reliability.',
      'Anonymous sources are used only when there is a clear public-interest reason and editors can independently verify the information.',
    ],
  },
  {
    title: 'Fact-Checking Process',
    points: [
      'Every article is reviewed for names, dates, figures, links, and material factual assertions before publication.',
      'We verify key claims against at least one high-confidence source, and we seek multiple confirmations for consequential claims.',
      'If information is uncertain or still developing, we label it explicitly and update the story as new facts emerge.',
    ],
  },
  {
    title: 'Corrections Policy',
    points: [
      'If we publish a material error, we correct it promptly and transparently.',
      'Substantive corrections are noted on-page with a date and a plain-language explanation of what changed.',
      'To report a potential error, email our newsroom at newsroom@saunanews.com.',
    ],
  },
  {
    title: 'Conflicts of Interest',
    points: [
      'Editors and contributors must disclose personal, financial, or professional relationships relevant to their coverage.',
      'Writers do not cover companies where they have undisclosed compensation, advisory roles, or material holdings.',
      'When a potential conflict exists but coverage remains in the public interest, we disclose the relationship directly in the article.',
    ],
  },
  {
    title: 'AI Usage and Disclosure',
    points: [
      'SaunaNews uses AI tools only as editorial support (for example, transcription assistance, formatting, or workflow automation).',
      'Published reporting, analysis, and conclusions remain under human editorial control and review.',
      'If a story materially relies on AI-generated media or analysis, we disclose that usage clearly in the article.',
    ],
  },
  {
    title: 'Sponsored and Advertising Content',
    points: [
      'Paid placements are labeled with a clear “Sponsor” designation.',
      'Sponsored material is handled separately from newsroom decision-making and does not guarantee editorial coverage.',
      'Read our full sponsored-content and advertising disclosure policy for details.',
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <section className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal dark:text-cream mb-5 tracking-tight">
            Editorial Policy
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed">
            SaunaNews is committed to accurate, independent, and transparent journalism. This page explains how
            we source information, verify facts, handle corrections, disclose conflicts, and label sponsored content.
          </p>
        </div>
      </section>

      <section className="bg-surface dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 space-y-8">
          {policySections.map((section) => (
            <article key={section.title} className="p-6 sm:p-7 rounded-xl border border-border dark:border-dark-border bg-cream dark:bg-dark-bg">
              <h2 className="font-editorial text-2xl font-semibold text-charcoal dark:text-cream mb-4">{section.title}</h2>
              <ul className="space-y-3 text-sm sm:text-base text-stone-dark dark:text-dark-muted leading-relaxed list-disc pl-5">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ivory dark:bg-dark-bg border-t border-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm sm:text-base text-stone-dark dark:text-dark-muted">
          Questions or concerns about this policy? Contact the editorial team at{' '}
          <a href="mailto:newsroom@saunanews.com" className="text-green dark:text-brass font-medium hover:underline">
            newsroom@saunanews.com
          </a>
          . For sponsored placements, see{' '}
          <Link href="/sponsored-content-policy" className="text-green dark:text-brass font-medium hover:underline">
            Sponsored Content Policy
          </Link>
          .
        </div>
      </section>
    </>
  );
}
