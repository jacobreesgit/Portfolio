'use client';

import Image from 'next/image';
import Link from 'next/link';

import Noise from '@/components/noise';

const COMPANIES = [
  {
    name: 'Revolution Viewing',
    logo: '/images/logos/revolution-viewing.webp',
    url: 'https://revolutionviewing.com',
    role: 'Front-End Developer',
  },
  {
    name: 'Pavers',
    logo: '/images/logos/pavers.png',
    url: 'https://pavers.co.uk',
    role: 'Web Developer',
  },
  {
    name: 'University of Leeds',
    logo: '/images/logos/leeds.png',
    url: 'https://leeds.ac.uk',
    role: 'BA Digital Media',
  },
];

export default function TeamShowcase() {
  return (
    <section className="section-padding relative">
      <Noise />
      <div className="bigger-container">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <p className="max-w-sm text-center text-2xl leading-tight lg:text-start">
            Companies I&apos;ve worked with
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {COMPANIES.map((company) => (
              <Link
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-opacity duration-200 hover:opacity-80"
              >
                <div className="relative flex h-12 w-32 items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-muted-foreground text-xs">
                  {company.role}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
