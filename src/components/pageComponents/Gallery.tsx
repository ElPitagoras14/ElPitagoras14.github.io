import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { TypographyH2 } from "../ui/typography";

interface GalleryProps {
  images: StaticImageData[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const carouselClass =
    images.length >= 3 ? "md:basis-1/2 lg:basis-1/3" : images.length === 2 ? "md:basis-1/2" : "";
  return (
    <section className="px-12 md:px-24 pt-12 md:py-12 space-y-12">
      <TypographyH2>Gallery</TypographyH2>
      <Carousel className="mx-4 sm:mx-12 md:mx-0">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={`${carouselClass} flex  items-center justify-center`}
            >
              <Image src={image} alt={""} width={400}></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
