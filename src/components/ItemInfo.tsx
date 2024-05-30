import { Button } from "./ui/button";
import { TypographyH2, TypographyP, TypographyH5 } from "./ui/typography";
import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";

interface ItemInfoProps {
  item: {
    title: string;
    description: string;
    cover: StaticImageData;
    page?: string;
  };
}

export const ItemInfo = ({ item }: ItemInfoProps) => {
  const { title, description, cover, page } = item;

  return (
    <div className="flex flex-col lg:flex-row space-y-4">
      <div className="w-[100%] lg:w-[50%]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={cover}
            alt={title}
            className="rounded-lg"
            width={1000}
          ></Image>
        </AspectRatio>
      </div>
      <div className="self-center w-[100%] lg:w-[50%] p-6 pl-0 lg:pl-12">
        <TypographyH2>{title}</TypographyH2>
        <TypographyP>{description}</TypographyP>
        {page && (
          <Link href={page}>
            <Button className="mt-6" size={"xl"}>
              <TypographyH5>More Info</TypographyH5>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
