import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { Button } from "../ui/button";
import ScrollIndicator from "../ScrollIndicator";

export const Hero = () => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center space-y-12">
      <TypographyH1>Hey, my name is Jonathan García</TypographyH1>
      <TypographyH3 className="w-[55%] text-center">
        Computer Science Engineer | Full Stack Developer | Salesforce Developer
        | Algorithm Design Enjoyer | Videogames Enjoyer
      </TypographyH3>
      <Button size={"2xl"}>
        <TypographyH4>Download CV</TypographyH4>
      </Button>
      <ScrollIndicator></ScrollIndicator>
    </section>
  );
};
