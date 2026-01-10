'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Noise from '@/components/noise';
import { PROJECTS } from '@/lib/project-data';

import Logo from './logo';

const FOOTER_SECTIONS = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Projects',
    links: PROJECTS.map((p) => ({
      name: p.title,
      href: `/projects/${p.slug}`,
    })),
  },
  {
    title: 'Connect',
    links: [
      { name: 'Email', href: 'mailto:jacobrees@icloud.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/jacobdanielrees' },
      { name: 'GitHub', href: 'https://github.com/jacobreesgit' },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jacobdanielrees',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jacobreesgit',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:jacobrees@icloud.com',
    icon: Mail,
  },
];

const Footer = () => {
  const pathname = usePathname();

  const hideFooter = ['/docs', '/not-found'].some((route) =>
    pathname.includes(route),
  );

  if (hideFooter) return null;

  return (
    <footer className="relative border-t py-12">
      <Noise />

      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Left side - Footer sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            {FOOTER_SECTIONS.map((section, index) => (
              <div key={index}>
                <h3 className="text-foreground mb-4 font-bold md:mb-8">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        {...(link.href.startsWith('http') ||
                        link.href.startsWith('mailto')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right side - Branding and social */}
          <div className="flex w-fit flex-col items-start justify-self-end md:col-span-1">
            <Logo />
            <div className="mt-4 flex gap-4 md:mt-8">
              {SOCIAL_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-15 flex flex-col items-center justify-between gap-4 md:mt-20 md:flex-row">
          <p className="text-muted-foreground text-sm">
            Based in Durham, England
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Jacob Rees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
