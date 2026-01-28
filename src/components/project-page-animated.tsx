'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  staggerContainer,
} from '@/lib/animations';

interface ProjectPageAnimatedProps {
  backButton: ReactNode;
  sidebar: ReactNode;
  mainContent: ReactNode;
}

export function ProjectPageAnimated({
  backButton,
  sidebar,
  mainContent,
}: ProjectPageAnimatedProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section className="relative z-10 py-16">
        <div className="container max-w-7xl">
          {backButton}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            <div className="lg:col-span-1">{sidebar}</div>
            <div className="lg:col-span-3">{mainContent}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16">
      <div className="container max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Back Button */}
          <motion.div variants={fadeUp}>
            {backButton}
          </motion.div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            {/* Sidebar (Left) */}
            <motion.div
              className="lg:col-span-1"
              variants={fadeUp}
            >
              {sidebar}
            </motion.div>

            {/* Main Content (Right) */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeUp}
            >
              {mainContent}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
