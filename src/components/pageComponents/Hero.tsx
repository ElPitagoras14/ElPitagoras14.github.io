"use client";

import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { Button } from "../ui/button";
import ScrollIndicator from "../ScrollIndicator";
import Link from "next/link";
import { breakpoints } from "@/utils/breakpoints";
import { SocialMedia } from "../SocialMedia";

export const Hero = () => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < breakpoints.lg;
  }

  return (
    <section className="h-[75vh] md:h-[85vh]">
      <div className="h-[75vh] flex flex-col items-center justify-center space-y-12 text-center">
        <TypographyH1>Hey, my name is Jonathan García</TypographyH1>
        <TypographyH3 className="w-[55%] text-center">
          Computer Science Engineer | Full Stack Developer | Salesforce
          Developer | Algorithm Design Enjoyer | Videogames Enjoyer
        </TypographyH3>
        <SocialMedia />
        <Button size={isMobile ? "xl" : "2xl"}>
          <Link href="/files/resume.pdf" target="_blank">
            <TypographyH4>Download CV</TypographyH4>
          </Link>
        </Button>
      </div>
      {!isMobile && (
        <div className="flex justify-center">
          <ScrollIndicator></ScrollIndicator>
        </div>
      )}
    </section>
  );
};
