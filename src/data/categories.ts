import { CategoryInfo } from './types';

export const categories: CategoryInfo[] = [
  {
    name: 'Manufacturer News',
    slug: 'manufacturer-news',
    description: 'The latest from the companies building the sauna industry. Expansions, leadership changes, factory openings, and strategic moves from global manufacturers.',
    color: 'bg-green/10 text-green',
  },
  {
    name: 'Product Launches',
    slug: 'product-launches',
    description: 'New saunas, heaters, controls, accessories, and innovations hitting the market. First looks, specifications, and editorial analysis of what matters.',
    color: 'bg-brass/10 text-brass',
  },
  {
    name: 'Market Intelligence',
    slug: 'market-intelligence',
    description: 'Data, trends, forecasts, and analysis shaping the sauna and thermal wellness market. Consumer demand, pricing shifts, and competitive landscape.',
    color: 'bg-slate/10 text-slate',
  },
  {
    name: 'Wellness Trends',
    slug: 'wellness-trends',
    description: 'The broader wellness, longevity, and biohacking movements driving sauna adoption. Science, culture, and the people behind the thermal wellness revolution.',
    color: 'bg-copper/10 text-copper',
  },
  {
    name: 'Hospitality & Spa',
    slug: 'hospitality-spa',
    description: 'Hotels, resorts, spas, and commercial operators investing in sauna and thermal bathing experiences. Project news, design, and operator strategy.',
    color: 'bg-green-light/10 text-green-light',
  },
  {
    name: 'Tariffs & Logistics',
    slug: 'tariffs-logistics',
    description: 'Import tariffs, shipping costs, lumber pricing, and supply chain developments affecting the sauna industry. Trade policy and logistics intelligence.',
    color: 'bg-stone-dark/10 text-stone-dark',
  },
  {
    name: 'Commentary',
    slug: 'commentary',
    description: 'Opinion, perspective, and editorial commentary on the forces shaping the sauna world. Industry voices, analysis, and long-form thinking.',
    color: 'bg-charcoal/10 text-charcoal',
  },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): CategoryInfo | undefined {
  return categories.find((c) => c.name === name);
}
