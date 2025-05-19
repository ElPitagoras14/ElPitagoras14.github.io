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
    <Carousel className="w-[85%] self-center">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <Lens hovering={hovering} setHovering={setHovering}>
              <img
                src={slide.src}
                className="max-h-[60dvh]"
                alt={`Demo ${index + 1}`}
              />
            </Lens>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
