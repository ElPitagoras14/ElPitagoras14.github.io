"use client";

import { IconMenu2 } from "@tabler/icons-react";
import { ModeToggle } from "../ModeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { breakpoints } from "@/utils/breakpoints";
import { TypographyH4, TypographyH5 } from "../ui/typography";

interface NavigationProps {
  color?: string;
}

const Navigation = ({ color }: NavigationProps) => {
  return (
    <>
      <Button
        variant={null}
        onClick={() => {
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TypographyH5 className={`hover:text-[${color}]`}>Home</TypographyH5>
      </Button>
      <Button
        variant={null}
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TypographyH5 className={`hover:text-[${color}]`}>About</TypographyH5>
      </Button>
      <Button
        variant={null}
        onClick={() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TypographyH5 className={`hover:text-[${color}]`}>
          Projects
        </TypographyH5>
      </Button>
      <Button
        variant={null}
        onClick={() => {
          document
            .getElementById("awards")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TypographyH5 className={`hover:text-[${color}]`}>Awards</TypographyH5>
      </Button>
      <Button
        variant={null}
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TypographyH5 className={`hover:text-[${color}]`}>Contact</TypographyH5>
      </Button>
    </>
  );
};

export const NavBar = () => {
  const isMobile = window.innerWidth < breakpoints.md;
  const hoverColor = "#6D28D9";

  return (
    <header className="sticky top-0 z-50">
      <nav>
        {isMobile ? (
          <Accordion type="single" collapsible className="">
            <AccordionItem
              value="item-1"
              className="py-0 sm:py-1 px-2 sm:px-5 md:px-8 lg:px-12"
            >
              <div className="flex justify-between items-center">
                <Avatar size="lg">
                  <AvatarImage src="/profile.png" />
                  <AvatarFallback>JG</AvatarFallback>
                </Avatar>
                <div className="flex space-x-0 items-center">
                  <ModeToggle isMobile></ModeToggle>
                  <AccordionTrigger noIcon>
                    <Button variant={null}>
                      <IconMenu2 size={24} />
                    </Button>
                  </AccordionTrigger>
                </div>
              </div>
              <AccordionContent>
                <div className="flex flex-col space-x-0 sm:space-x-2 md:space-x-4 items-end">
                  <Navigation />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <>
            <div className="flex justify-between py-4 px-2 sm:px-5 md:px-8 lg:px-12">
              <div className="flex space-x-6 items-center">
                <Avatar size="lg">
                  <AvatarImage src="/profile.png" />
                  <AvatarFallback>JG</AvatarFallback>
                </Avatar>
                <TypographyH4>Jonathan García</TypographyH4>
              </div>
              <div className="flex space-x-0 sm:space-x-2 md:space-x-4 lg:space-x-6 items-center">
                <Navigation color={hoverColor} />
                <ModeToggle></ModeToggle>
              </div>
            </div>
            <Separator />
          </>
        )}
      </nav>
    </header>
  );
};
