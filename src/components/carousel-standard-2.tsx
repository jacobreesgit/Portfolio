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

export const title = "Carousel with Thumbnails";

interface CarouselStandard2Props {
  images: string[];
  alt?: string;
}

const CarouselStandard2 = ({ images, alt = "Carousel image" }: CarouselStandard2Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
      <Carousel setApi={handleApiChange}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg border bg-background">
                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  width={1920}
                  height={1080}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

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
