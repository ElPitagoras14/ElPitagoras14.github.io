"use client";

import { TypographyP, TypographyH2 } from "../ui/typography";
import { awards } from "@/data/awards";
import { ItemInfo } from "../ItemInfo";
import { TitleSeparator } from "../TitleSeparator";

export const Awards = () => {
  return (
    <section className="flex flex-col px-4 md:px-24 pt-12 md:py-12 space-y-12">
      <div
        className="flex flex-col items-center space-y-5 text-center"
        id="awards"
      >
        <TypographyH2>Awards</TypographyH2>
        <TitleSeparator />
        <TypographyP className="w-[70%]">
          Learn more about my recognitions and awards.
        </TypographyP>
      </div>
      <div className="flex flex-col px-4 md:px-12 space-y-8 md:space-y-16">
        {awards.map((award) => {
          const { id } = award;
          return <ItemInfo key={id} item={award}></ItemInfo>;
        })}
      </div>
    </section>
  );
};
