'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  showCaption?: boolean;
}

export function ImageLightbox({ src, alt, isOpen, onClose, showCaption = true }: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 }); // Percentage values

  // Reset zoom when lightbox closes
  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      setZoomOrigin({ x: 50, y: 50 });
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, isZoomed]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Get click position relative to the image element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomOrigin({ x, y });
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Backdrop - glass morphism effect */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:top-8 sm:right-8"
            aria-label="Close image preview"
          >
            <X className="size-5" />
          </button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10 cursor-zoom-in"
              onClick={handleImageClick}
              animate={{ scale: isZoomed ? 2 : 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className="h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
                unoptimized
              />
            </motion.div>

            {/* Caption if alt text exists */}
            {showCaption && alt && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mt-4 text-center text-sm text-white/70"
              >
                {alt}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
