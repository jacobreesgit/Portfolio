import type { Metadata } from 'next';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

import Noise from '@/components/noise';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jacob Rees - Front-End Developer open to new opportunities',
};

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jacobrees@icloud.com',
    href: 'mailto:jacobrees@icloud.com',
    image:
      'https://images.unsplash.com/photo-1526554850534-7c78330d5f90?w=800&h=600&fit=crop',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/jacobdanielrees',
    href: 'https://linkedin.com/in/jacobdanielrees',
    image:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&h=600&fit=crop',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/jacobreesgit',
    href: 'https://github.com/jacobreesgit',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  },
  {
    icon: Download,
    label: 'CV',
    value: 'Download PDF',
    href: '/cv.pdf',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
  },
];

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  image: string;
}

function ContactCard({ icon: Icon, label, value, href, image }: ContactCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg"
    >
      <img
        src={image}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-end p-6 sm:p-8">
        <div className="text-left text-white">
          <div className="mb-3 flex items-center gap-2">
            <Icon className="size-5 opacity-80" />
            <p className="text-sm font-medium tracking-wider uppercase opacity-80">
              {label}
            </p>
          </div>
          <p className="text-xl font-light tracking-tight sm:text-2xl">
            {value}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ContactPage() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 mask-t-from-50% mask-t-to-100% mask-b-from-50% mask-b-to-90%">
        <div
          className={cn(
            'absolute size-full rounded-full bg-violet-500/15 blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/3 md:translate-y-0',
          )}
        />
        <div
          className={cn(
            'absolute size-full rounded-full bg-indigo-400/15 blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/3 md:top-0 md:translate-x-1/3 md:-translate-y-0',
          )}
        />
      </div>
      <Noise />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-12 text-left lg:mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:mb-8 lg:text-7xl">
            Get in Touch
          </h1>
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg md:text-xl">
              Open to new opportunities in front-end and full-stack development
            </p>
            <p className="text-muted-foreground flex items-center gap-1.5">
              <MapPin className="size-4" />
              Based in Durham, England · Open to remote and hybrid
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {contactLinks.map((contact) => (
            <ContactCard key={contact.label} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
