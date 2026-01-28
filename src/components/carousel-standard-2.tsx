"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLightbox } from "@/components/lightbox-provider";

export const title = "Carousel with Thumbnails";

interface CarouselStandard2Props {
  images: string[];
  alt?: string | string[]; // Single alt or array of alts for each image
}

const CarouselStandard2 = ({ images, alt = "Carousel image" }: CarouselStandard2Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { openLightbox } = useLightbox();

  // Helper to get alt text for a specific image
  const getAltText = (index: number) => {
    if (Array.isArray(alt)) {
      return alt[index] || `Image ${index + 1}`;
    }
    return `${alt} ${index + 1}`;
  };

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);

    if (newApi) {
      setCurrent(newApi.selectedScrollSnap());

      newApi.on("select", () => {
        setCurrent(newApi.selectedScrollSnap());
      });
    }
  };

  return (
    <div className="not-prose mx-auto w-full space-y-4">
      <Carousel setApi={handleApiChange} className="rounded-xl shadow-2xl ring-1 ring-white/10">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <button
                onClick={() => openLightbox(image, getAltText(index), true)}
                className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="button"
              >
                <Image
                  src={image}
                  alt={getAltText(index)}
                  width={1920}
                  height={1080}
                  unoptimized
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

      <span className="block text-center text-sm italic" style={{ color: 'var(--tw-prose-body)' }}>
        {getAltText(current)}
      </span>

      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <Button
            key={index}
            onClick={() => api?.scrollTo(index)}
            variant={current === index ? "default" : "outline"}
            size="sm"
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CarouselStandard2;
