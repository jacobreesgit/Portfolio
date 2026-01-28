'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';

import { ImageLightbox } from './image-lightbox';

interface LightboxContextType {
  openLightbox: (src: string, alt: string, showCaption?: boolean) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(
  undefined,
);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    showCaption: boolean;
  } | null>(null);

  const openLightbox = (src: string, alt: string, showCaption = true) => {
    setLightboxImage({ src, alt, showCaption });
  };

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <ImageLightbox
        src={lightboxImage?.src || ''}
        alt={lightboxImage?.alt || ''}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        showCaption={lightboxImage?.showCaption ?? true}
      />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within LightboxProvider');
  }
  return context;
}
