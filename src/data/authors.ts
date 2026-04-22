import { Author } from './types';

function mergeAuthorSameAs(author: Author): Author {
  const sameAs = Array.from(
    new Set([
      ...(author.sameAs ?? []),
      ...(author.website ? [author.website] : []),
      ...(author.linkedin ? [author.linkedin] : []),
    ]),
  );

  return {
    ...author,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

const arleneScott: Author = mergeAuthorSameAs({
  name: 'Arlene Scott',
  role: 'Senior Wellness Correspondent & Hospitality Consultant',
  avatar: '/images/authors/arlene-scott.svg',
  slug: 'arlene-scott',
  email: 'arlene@arlenescott.com',
  bio: 'Arlene Scott is a Senior Wellness Correspondent for SaunaNews.com, bringing over fifteen years of experience at the intersection of energy infrastructure, sustainable design, and thermotherapy.',
  shortBio:
    'Arlene Scott brings over fifteen years of reporting and consulting experience across energy infrastructure, sustainable design, and thermotherapy-focused hospitality.',
  extendedBio: [
    'Arlene Scott is a Senior Wellness Correspondent for SaunaNews.com, bringing over fifteen years of experience at the intersection of energy infrastructure, sustainable design, and thermotherapy. Her work focuses on the physiological benefits of passive heat therapies and the sustainable integration of sauna culture into modern wellness routines.',
    "Arlene's background is rooted in the clean energy transition. She was a founding writer at MicrogridMedia.com, where she covered the technical and economic viability of desalination projects, microgrid deployments, and distributed renewable energy systems. During the mid-2010s, she was a regular contributor to Greentech Media (GTM) during its independent era — prior to the Wood Mackenzie acquisition in 2016 — reporting on the early integration of thermal energy storage and sustainable infrastructure.",
    'Transitioning her focus from macro-energy systems to human-scale wellness, Arlene now applies her technical background to the hospitality sector. She operates as an independent consultant, advising boutique hotels and eco-resorts on the design, energy efficiency, and historical authenticity of commercial sauna and thermal spa installations. Her consulting work ensures that high-end wellness facilities balance traditional Nordic bathing principles with modern sustainable engineering.',
    "Arlene holds a specialized certification in Applied Thermic Wellness from the Nordic Institute of Passive Heat Studies (NIPHS) and is a recognized associate member of the International Sauna Association (ISA). When she isn't reviewing the latest innovations in infrared technology or consulting on a new resort project, Arlene can be found tending to her own traditional wood-fired sauna in the Pacific Northwest. You can read her complete archive of essays on energy, wellness, and sustainable living at www.arlenescott.com.",
  ],
  website: 'https://www.arlenescott.com',
  linkedin: 'https://www.linkedin.com/in/arlene-scott-4b8521405/',
  image: 'https://www.saunanews.com/images/authors/arlene-scott.svg',
  alumniOf: 'Nordic Institute of Passive Heat Studies (NIPHS)',
  knowsAbout: [
    'Thermotherapy',
    'Sauna culture',
    'Sustainable wellness design',
    'Energy infrastructure',
    'Hospitality consulting',
  ],
});

export const authors: Record<string, Author> = {
  arlene: arleneScott,
};

export function getAuthorBySlug(slug: string): Author | undefined {
  return Object.values(authors).find((author) => author.slug === slug);
}

export function getAllAuthorSlugs(): string[] {
  return Object.values(authors).map((author) => author.slug);
}

export function getAuthorProfileLinks(author: Author): { href: string; label: string }[] {
  const profileLinks = [
    ...(author.website ? [{ href: author.website, label: 'Professional site' }] : []),
    ...(author.linkedin ? [{ href: author.linkedin, label: 'LinkedIn' }] : []),
  ];

  return profileLinks;
}

export const defaultAuthor = arleneScott;
