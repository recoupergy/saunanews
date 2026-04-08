import { Author } from './types';

export const authors: Record<string, Author> = {
  elise: {
    name: 'Elise Lindgren',
    role: 'Editor-in-Chief',
    avatar: '/authors/elise.jpg',
    slug: 'elise-lindgren',
    bio: 'Elise Lindgren has covered the global sauna and wellness industry for over fifteen years, first as a business journalist in Stockholm and later as founding editor of SaunaNews. She has reported from trade floors in Helsinki, factory lines in Estonia, and boardrooms across three continents. Under her editorial leadership, SaunaNews has become the go-to source for decision-makers across the sauna supply chain.',
  },
  marcus: {
    name: 'Marcus Hale',
    role: 'Market Analyst',
    avatar: '/authors/marcus.jpg',
    slug: 'marcus-hale',
    bio: 'Marcus Hale brings a decade of experience in commodity and building-products market analysis to SaunaNews. Before joining the publication, he tracked timber futures and specialty construction materials for a London-based advisory firm. His weekly market briefings and pricing forecasts are read by distributors, investors, and manufacturers seeking an edge in a rapidly evolving sector.',
  },
  sofia: {
    name: 'Sofia Mäkelä',
    role: 'Industry Reporter',
    avatar: '/authors/sofia.jpg',
    slug: 'sofia-makela',
    bio: 'Sofia Mäkelä is an industry reporter based in Helsinki with deep ties to the Nordic sauna manufacturing community. A graduate of Aalto University, she spent five years covering industrial technology for Kauppalehti before turning her focus to the sauna sector full-time. Her reporting on supply-chain dynamics and manufacturer strategy has broken several major stories in the trade press.',
  },
  james: {
    name: 'James Chen',
    role: 'Trade & Policy Correspondent',
    avatar: '/authors/james.jpg',
    slug: 'james-chen',
    bio: 'James Chen covers international trade policy, tariffs, and cross-border logistics as they affect the sauna and wellness equipment industry. Based in Washington, D.C., he previously reported on Asia-Pacific trade corridors for a major wire service. His analysis of regulatory shifts and their downstream impact on pricing and sourcing has made him an essential voice for importers and exporters alike.',
  },
  anna: {
    name: 'Anna Virtanen',
    role: 'Wellness & Culture Editor',
    avatar: '/authors/anna.jpg',
    slug: 'anna-virtanen',
    bio: 'Anna Virtanen explores the intersection of sauna culture, wellness science, and hospitality design. A former spa director with a background in integrative health, she joined SaunaNews to bridge the gap between the commercial side of the industry and the lived experience of sauna bathing. Her features on emerging wellness trends and resort programming are widely shared across the hospitality sector.',
  },
};

export function getAuthorBySlug(slug: string): Author | undefined {
  return Object.values(authors).find((author) => author.slug === slug);
}

export function getAllAuthorSlugs(): string[] {
  return Object.values(authors).map((author) => author.slug);
}
