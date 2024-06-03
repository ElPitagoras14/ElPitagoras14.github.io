import { IconMenu2 } from "@tabler/icons-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TypographyH4 } from "./ui/typography";
import { breakpoints } from "@/utils/breakpoints";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface NavBarProps {
  children?: React.ReactNode;
}

export const NavBar = ({ children }: NavBarProps) => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < breakpoints.lg;
  }
  return (
    <nav>
      {isMobile ? (
        <Accordion type="single" collapsible className="">
          <AccordionItem
            value="item-1"
            className="py-0 sm:py-1 px-2 sm:px-5 md:px-8 lg:px-12"
          >
            <div className="flex justify-between items-center pl-1">
              <Avatar size="lg">
                <AvatarImage src="/profile.png" />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <div className="flex space-x-1 items-center">
                <ModeToggle isMobile></ModeToggle>
                <AccordionTrigger noIcon>
                  <Button variant={null} className="pr-2">
                    <IconMenu2 size={24} />
                  </Button>
                </AccordionTrigger>
              </div>
            </div>
            <AccordionContent>
              <div className="flex flex-col space-x-0 sm:space-x-2 md:space-x-4 items-end">
                {children}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <div className="flex justify-between py-4 px-2 sm:px-5 md:px-8 lg:px-12">
            <div className="flex space-x-0 sm:space-x-2 md:space-x-4 lg:space-x-6 items-center">
              <Avatar size="lg">
                <AvatarImage src="/profile.png" />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <TypographyH4>Portfolio</TypographyH4>
            </div>
            <div className="flex space-x-0 sm:space-x-2 md:space-x-4 lg:space-x-6 items-center">
              {children}
              <ModeToggle></ModeToggle>
            </div>
          </div>
          <Separator />
        </>
      )}
    </nav>
  );
};
