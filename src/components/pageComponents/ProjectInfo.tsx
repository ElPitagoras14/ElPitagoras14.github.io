import { TitleSeparator } from "../TitleSeparator";
import {
  TypographyH1,
  TypographyP,
} from "../ui/typography";

interface ProjectInfoProps {
  title: string;
  description: string;
}

export const ProjectInfo = ({ title, description }: ProjectInfoProps) => {
  return (
    <section className="px-12 md:px-24 pt-24 py-16 space-y-8 text-center flex flex-col items-center">
      <TypographyH1>{title}</TypographyH1>
      <TitleSeparator />
      <TypographyP className="md:w-[50%]">{description}</TypographyP>
    </section>
  );
};
