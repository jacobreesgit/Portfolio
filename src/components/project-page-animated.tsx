'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface ProjectPageAnimatedProps {
  backButton: ReactNode;
  sidebar: ReactNode;
  mainContent: ReactNode;
  preloadImages?: string[]; // High-res images to preload after animations
}

export function ProjectPageAnimated({
  backButton,
  sidebar,
  mainContent,
  preloadImages = [],
}: ProjectPageAnimatedProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  // Initialize animation state based on reduced motion preference
  const [animationComplete, setAnimationComplete] =
    useState(prefersReducedMotion);

  if (prefersReducedMotion) {
    return (
      <>
        <section className="relative z-10 py-16">
          <div className="container max-w-7xl">
            {backButton}
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
              <div className="lg:col-span-1">{sidebar}</div>
              <div className="lg:col-span-3">{mainContent}</div>
            </div>
          </div>
        </section>
        {/* Preload high-res images */}
        {animationComplete &&
          preloadImages.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={1920}
              height={1080}
              className="hidden"
              priority
            />
          ))}
      </>
    );
  }

  return (
    <>
      <section className="relative z-10 py-16">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            onAnimationComplete={() => setAnimationComplete(true)}
          >
            {/* Back Button */}
            <motion.div variants={fadeUp}>{backButton}</motion.div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
              {/* Sidebar (Left) */}
              <motion.div className="lg:col-span-1" variants={fadeUp}>
                {sidebar}
              </motion.div>

              {/* Main Content (Right) */}
              <motion.div className="lg:col-span-3" variants={fadeUp}>
                {mainContent}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Preload high-res images after animations complete */}
      {animationComplete &&
        preloadImages.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={1920}
            height={1080}
            className="hidden"
            priority
          />
        ))}
    </>
  );
}
