'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

import { useLightbox } from '@/components/lightbox-provider';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export const title = 'Carousel with Thumbnails';

interface CarouselStandard2Props {
  images: string[];
  alt?: string | string[]; // Single alt or array of alts for each image
  highResImages?: string[]; // Optional high-res versions for lightbox
  buttonLabels?: string[]; // Optional custom labels for carousel buttons (e.g., ["Desktop", "Mobile"])
}

const CarouselStandard2 = ({
  images,
  alt = 'Carousel image',
  highResImages,
  buttonLabels,
}: CarouselStandard2Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { openLightbox } = useLightbox();

  // Helper to get alt text for a specific image
  const getAltText = useCallback(
    (index: number) => {
      if (Array.isArray(alt)) {
        return alt[index] || `Image ${index + 1}`;
      }
      return `${alt} ${index + 1}`;
    },
    [alt],
  );

  // Helper to get lightbox image (high-res if available, otherwise auto-detect or use thumbnail)
  const getLightboxImage = useCallback(
    (index: number) => {
      if (highResImages && highResImages[index]) {
        return highResImages[index];
      }
      // Auto-detect: if image ends with -thumb.webp, replace with .webp for high-res
      const thumbImage = images[index];
      if (thumbImage.endsWith('-thumb.webp')) {
        return thumbImage.replace('-thumb.webp', '.webp');
      }
      return thumbImage;
    },
    [images, highResImages],
  );

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);

    if (newApi) {
      setCurrent(newApi.selectedScrollSnap());

      newApi.on('select', () => {
        setCurrent(newApi.selectedScrollSnap());
      });
    }
  };

  return (
    <div className="not-prose mx-auto w-full space-y-4">
      <Carousel
        setApi={handleApiChange}
        className="rounded-xl shadow-2xl ring-1 ring-white/10"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <button
                onClick={() =>
                  openLightbox(getLightboxImage(index), getAltText(index), true)
                }
                aria-label={`View larger version of ${getAltText(index)}`}
                className="group focus:ring-primary relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-black"
                type="button"
              >
                <Image
                  src={image}
                  alt={getAltText(index)}
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                />
                {/* Zoom hint overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/10 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black shadow-lg backdrop-blur-sm">
                    Click to enlarge
                  </span>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <span className="text-foreground block text-center text-sm italic">
        {getAltText(current)}
      </span>

      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <Button
            key={index}
            onClick={() => api?.scrollTo(index)}
            variant={current === index ? 'default' : 'outline'}
            size="sm"
          >
            {buttonLabels && buttonLabels[index]
              ? buttonLabels[index]
              : index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CarouselStandard2;
