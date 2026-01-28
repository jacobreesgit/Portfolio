'use client';

import type { LucideIcon } from 'lucide-react';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, fadeUpSmall, heroContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jacobrees@icloud.com',
    href: 'mailto:jacobrees@icloud.com',
    gradient: 'from-blue-500/80 via-cyan-500/80 to-blue-600/80',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/jacobdanielrees',
    href: 'https://linkedin.com/in/jacobdanielrees',
    gradient: 'from-blue-600/80 via-indigo-600/80 to-blue-700/80',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/jacobreesgit',
    href: 'https://github.com/jacobreesgit',
    gradient: 'from-purple-600/80 via-violet-600/80 to-purple-700/80',
  },
  {
    icon: Download,
    label: 'CV',
    value: 'Download PDF',
    href: '/cv.pdf',
    gradient: 'from-orange-500/80 via-amber-500/80 to-orange-600/80',
  },
];

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  gradient: string;
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  gradient,
}: ContactCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <motion.div variants={fadeUpSmall}>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105',
            gradient,
          )}
        />
        <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/30" />
        <div className="absolute inset-0 flex items-end p-6 sm:p-8">
          <div className="text-left text-white">
            <div className="mb-3 flex items-center gap-2">
              <Icon className="size-5 opacity-90" />
              <p className="text-sm font-medium tracking-wider uppercase opacity-90">
                {label}
              </p>
            </div>
            <p className="text-xl font-light tracking-tight sm:text-2xl">
              {value}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ContactPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-violet-500/15 blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/4',
          )}
        />
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-indigo-400/15 blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/2 md:translate-x-1/4',
          )}
        />
      </div>
      <Noise />

      <div className="relative z-10 container">
        {/* Header */}
        <motion.div
          className="mb-12 text-left lg:mb-16"
          initial={initial}
          animate="visible"
          variants={heroContainer}
        >
          <motion.h1
            className="mb-4 text-4xl font-medium tracking-tight md:text-5xl lg:mb-8 lg:text-6xl"
            variants={fadeUp}
          >
            Get in Touch
          </motion.h1>
          <motion.div className="space-y-2" variants={fadeUp}>
            <p className="text-muted-foreground text-lg md:text-xl">
              Open to new opportunities in front-end and full-stack development
            </p>
            <p className="text-muted-foreground flex items-center gap-1.5">
              <MapPin className="size-4" />
              Based in Durham, England · Open to remote and hybrid
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          initial={initial}
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {contactLinks.map((contact) => (
            <ContactCard key={contact.label} {...contact} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
