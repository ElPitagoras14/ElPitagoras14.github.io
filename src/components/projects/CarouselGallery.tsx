"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Lens } from "../ui/lens";
import { useState } from "react";

interface CarouselProps {
  slides: ImageMetadata[];
}

export default function CarouselGallery({ slides }: CarouselProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <Carousel className="w-[80%] md:w-[85%] self-center">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="hidden md:block">
              <Lens hovering={hovering} setHovering={setHovering}>
                <img
                  src={slide.src}
                  className="max-h-[20dvh] md:max-h-[60dvh]"
                  alt={`Demo ${index + 1}`}
                />
              </Lens>
            </div>
            <img
              src={slide.src}
              className="max-h-[20dvh] md:max-h-[60dvh] md:hidden"
              alt={`Demo ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
