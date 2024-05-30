import { TypographyH4, TypographySmall } from "../ui/typography";
import { SocialMedia } from "../SocialMedia";

export const Footer = () => {
  return (
    <footer className="px-4 py-8 md:p-12">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-normal md:justify-between px-4 md:px-12">
        <div className="flex flex-col space-y-2 md:space-y-6 w-[100%] md:w-[40%]">
          <TypographyH4>Jonathan García</TypographyH4>
          <TypographySmall>
            Computer Science Engineer | Full Stack Developer | Salesforce
            Developer | Algorithm Design Enjoyer | Videogames Enjoyer
          </TypographySmall>
        </div>
        <div className="flex flex-col pl-0 md:pl-12 space-y-4">
          <TypographyH4>Social</TypographyH4>
          <SocialMedia />
        </div>
      </div>
      <div className="text-center mt-12 md:mt-16">
        <TypographySmall>
          © 2024 Jonathan García. All rights reserved.
        </TypographySmall>
      </div>
    </footer>
  );
};
