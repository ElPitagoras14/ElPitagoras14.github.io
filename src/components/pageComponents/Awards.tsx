"use client";

import { Separator } from "@radix-ui/react-separator";
import { Card } from "../ui/card";
import { TypographyP, TypographyH2 } from "../ui/typography";
import Image from "next/image";
import { awards } from "@/data/awards";

export const Awards = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-12 p-12">
      <div className="flex flex-col items-center space-y-5" id="awards">
        <TypographyH2>Awards</TypographyH2>
        <Separator
          className="w-10 py-1 rounded-sm"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
        <TypographyP>Learn more about my recognitions and awards.</TypographyP>
      </div>
      <div className="flex flex-col px-12 space-y-12">
        {awards.map((award) => {
          const { title, description, cover, id } = award;
          return (
            <Card className="flex shadow" key={id}>
              <Image
                src={cover}
                alt={title}
                className="w-[50%] rounded-lg"
                width={700}
                height={100}
                sizes="100vw"
              ></Image>
              <div className="self-center w-[50%] p-6 pl-12">
                <TypographyH2>{title}</TypographyH2>
                <TypographyP>{description}</TypographyP>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
