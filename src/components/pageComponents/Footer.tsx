import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { TypographyH4, TypographySmall } from "../ui/typography";

export const Footer = () => {
  return (
    <footer className="p-12">
      <div className="flex justify-between px-12">
        <div className="flex flex-col space-y-6 w-[40%]">
          <TypographyH4>Jonathan García</TypographyH4>
          <TypographySmall>
            Computer Science Engineer | Full Stack Developer | Salesforce
            Developer | Algorithm Design Enjoyer | Videogames Enjoyer
          </TypographySmall>
        </div>
        <div className="flex flex-col pl-12 space-y-4">
          <TypographyH4>Social</TypographyH4>
          <div className="flex space-x-6">
            <Linkedin />
            <Github />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <TypographySmall>
          © 2024 Jonathan García. All rights reserved.
        </TypographySmall>
      </div>
    </footer>
  );
};
