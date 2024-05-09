import { Button } from "./ui/button";
import { TypographyH2, TypographyP, TypographyH5 } from "./ui/typography";
import Image, { StaticImageData } from "next/image";

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
    <div className="flex flex-col lg:flex-row">
      <Image
        src={cover}
        alt={title}
        className="w-[100%] lg:w-[50%] rounded-lg"
        width={1000}
        height={1000}
      ></Image>
      <div className="self-center w-[100%] lg:w-[50%] p-6 pl-0 lg:pl-12">
        <TypographyH2>{title}</TypographyH2>
        <TypographyP>{description}</TypographyP>
        {page && (
          <Button className="mt-6" size={"xl"}>
            <TypographyH5>More Info</TypographyH5>
          </Button>
        )}
      </div>
    </div>
  );
};
