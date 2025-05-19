import { getTranslations } from "@/i18n";
import React from "react";
import Marquee from "react-fast-marquee";

interface HorizontalScrollProps {
  lang: string;
}

export default function HorizontalScroll({ lang }: HorizontalScrollProps) {
  const t = getTranslations(lang);
  const {
    home: { scrolling },
  } = t;

  return (
    <Marquee
      className="text-2xl md:text-4xl font-semibold h-16 md:h-24 mt-4 md:mt-12 text-foreground/30 border-y-2 fade-mask"
      autoFill={true}
      speed={40}
      gradient={true}
      gradientWidth={100}
      gradientColor="#00000000"
    >
      {scrolling.map((text, index) => (
        <React.Fragment key={index}>
          <span className="mx-4">{text}</span>
          <span className="mx-4">❖</span>
        </React.Fragment>
      ))}
    </Marquee>
  );
}
