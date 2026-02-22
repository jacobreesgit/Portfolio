import {
  Globe,
  Headphones,
  type LucideIcon,
  MonitorPlay,
  Music,
  ShoppingBag,
} from 'lucide-react';

export interface ProjectMeta {
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  tags: string[];
  image: string;
  featured: boolean;
  icon: LucideIcon;
  link?: string;
  links?: { label: string; url: string }[];
  github?: string;
}

// Filter categories matching homepage Skills & Technologies section
export const PROJECT_TAGS = [
  'Front-End',
  'Full-Stack',
  'Mobile',
  'Tools & Design',
] as const;

export type ProjectTag = (typeof PROJECT_TAGS)[number];

/**
 * Single source of truth for project metadata used across the site.
 * For full project content (MDX), use lib/projects.ts which reads from content files.
 */
export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'canoncore',
    title: 'CanonCore',
    category: 'Personal Project',
    description:
      'Google Drive meets Netflix. Visual browsing, drag-and-drop organisation, watch progress, and public collections.',
    shortDescription: 'Full-stack media library',
    technologies: [
      'Next.js 16',
      'React 19',
      'React Native',
      'TypeScript',
      'PostgreSQL',
      'Prisma 7',
      'Three.js',
    ],
    tags: ['Front-End', 'Full-Stack', 'Tools & Design'],
    image: '/images/canoncore.webp',
    featured: true,
    icon: MonitorPlay,
    link: 'https://demo.canoncore.com',
    github: 'https://github.com/jacobreesgit/canoncore-v2',
  },
  {
    slug: 'vepple',
    title: 'Vepple',
    category: 'Client Work',
    description:
      'Virtual campus tour platform serving 30+ UK universities. Achieved 4x page engagement with 12+ pages per session.',
    shortDescription: 'Virtual campus tours',
    technologies: ['Vue.js', 'Pinia', 'Quasar', 'Firebase', 'Mapbox GL'],
    tags: ['Front-End', 'Tools & Design'],
    image: '/images/vepple.webp',
    featured: true,
    icon: Globe,
    links: [
      { label: 'Product', url: 'https://vepple.com' },
      { label: 'Demo', url: 'https://demo.vepple.com' },
    ],
  },
  {
    slug: 'waveger',
    title: 'Waveger',
    category: 'Personal Project',
    description:
      'Billboard meets Fantasy Football. Predict Hot 100 chart positions each week and compete in leagues for accuracy.',
    shortDescription: 'Music prediction game',
    technologies: [
      'React 18',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Deno Edge Functions',
    ],
    tags: ['Front-End', 'Full-Stack'],
    image: '/images/waveger.webp',
    featured: true,
    icon: Headphones,
    link: 'https://waveger.vercel.app',
  },
  {
    slug: 'pavers',
    title: 'Pavers',
    category: 'Client Work',
    description:
      'WCAG-compliant component library and personalisation engine for a UK footwear retailer with 160+ shops.',
    shortDescription: 'E-commerce components',
    technologies: ['Shopify Liquid', 'Sanity CMS', 'Algolia', 'React'],
    tags: ['Front-End', 'Tools & Design'],
    image: '/images/pavers.webp',
    featured: false,
    icon: ShoppingBag,
    links: [
      { label: 'Pavers', url: 'https://pavers.co.uk' },
      { label: 'Jones Bootmaker', url: 'https://www.jonesbootmaker.com' },
    ],
  },
  {
    slug: 'musiccount',
    title: 'MusicCount',
    category: 'Personal Project',
    description:
      'iOS app to match play counts across duplicate songs before cleanup. Smart detection finds and groups duplicates.',
    shortDescription: 'iOS play count sync',
    technologies: ['Swift 6.1', 'SwiftUI', 'MediaPlayer', 'Swift Testing'],
    tags: ['Mobile'],
    image: '/images/musiccount.webp',
    featured: false,
    icon: Music,
    link: 'https://apps.apple.com/gb/app/musiccount/id6754639829',
    github: 'https://github.com/jacobreesgit/MusicCount',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => !p.featured);
