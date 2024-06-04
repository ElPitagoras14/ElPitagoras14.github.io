"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image, { StaticImageData } from "next/image";
import { TypographyH2 } from "../ui/typography";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryProps {
  images: StaticImageData[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [apiMain, setApiMain] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [apiModal, setApiModal] = useState<CarouselApi>();
  const carouselClass = images.length >= 2 ? "basis-1/2" : "";

  useEffect(() => {
    if (!apiModal) {
      return;
    }
    apiModal.scrollTo(current - 1, true);
  }, [apiModal, current]);

  return (
    <section className="px-12 md:px-24 py-12 md:py-12 space-y-10">
      {images.length > 0 && (
        <>
          <TypographyH2>Gallery</TypographyH2>
          <AlertDialog>
            <div className="flex justify-center">
              <Carousel className="max-w-[85%] flex justify-center" setApi={setApiMain}>
                <AlertDialogTrigger>
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className={`${carouselClass} flex items-center justify-center`}
                        onClick={() => {
                          setCurrent(index + 1);
                          apiMain?.scrollTo(index);
                        }}
                      >
                        <Image src={image} alt={""} width={600}></Image>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </AlertDialogTrigger>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <AlertDialogContent className="max-w-[95%] md:max-w-[80%]">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex justify-between">
                  <TypographyH2>Gallery</TypographyH2>
                  <AlertDialogCancel className="px-2">
                    <X className="h-5 w-5" />
                  </AlertDialogCancel>
                </AlertDialogTitle>
              </AlertDialogHeader>
              <div className="flex justify-center">
                <Carousel className="w-[90%]" setApi={setApiModal}>
                  <CarouselContent className="">
                    {images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className={`flex items-center justify-center`}
                      >
                        <Image src={image} alt={""} width={1000}></Image>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </section>
  );
};
