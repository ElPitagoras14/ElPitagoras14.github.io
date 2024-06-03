"use client";

import { breakpoints } from "@/utils/breakpoints";
import { Button } from "./ui/button";
import { TypographyH5 } from "./ui/typography";
import Link from "next/link";
import { InfoLinks } from "@/utils/interfaces";

interface NavigationProps {
  infoLinks: InfoLinks[];
}

export const Navigation = ({ infoLinks }: NavigationProps) => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < breakpoints.lg;
  }
  const hoverColor = !isMobile ? "hover:text-[#6D28D9]" : "";
  return infoLinks.map((link) => {
    const { url, id, isSamePage, label } = link;
    return (
      <Button
        key={id}
        variant={null}
        onClick={() => {
          if (isSamePage) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="px-1"
      >
        {isSamePage ? (
          <TypographyH5 className={hoverColor}>{label}</TypographyH5>
        ) : (
          <Link href={url}>
            <TypographyH5 className={hoverColor}>{label}</TypographyH5>
          </Link>
        )}
      </Button>
    );
  });
};
