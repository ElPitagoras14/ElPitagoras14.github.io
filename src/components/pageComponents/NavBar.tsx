"use client";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../ModeToggle";
import { TypographyH4, TypographyH5 } from "../ui/typography";
import { Button } from "../ui/button";

export const NavBar = () => {
  return (
    <header className="sticky top-0">
      <nav className="py-4 px-12 flex justify-between">
        <div className="flex space-x-6 items-center">
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <TypographyH4>Jonathan García</TypographyH4>
        </div>
        <div className="flex space-x-6 items-center">
          <Button
            variant={null}
            onClick={() => {
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH5>Home</TypographyH5>
          </Button>
          <Button
            variant={null}
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH5>About</TypographyH5>
          </Button>
          <Button
            variant={null}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH5>Projects</TypographyH5>
          </Button>
          <Button
            variant={null}
            onClick={() => {
              document
                .getElementById("awards")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH5>Awards</TypographyH5>
          </Button>
          <Button
            variant={null}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH5>Contact</TypographyH5>
          </Button>
          <ModeToggle></ModeToggle>
        </div>
      </nav>
      <Separator />
    </header>
  );
};
