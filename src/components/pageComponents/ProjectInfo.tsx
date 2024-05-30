import {
  TypographyH2,
  TypographyH4,
} from "../ui/typography";

interface ProjectInfoProps {
  title: string;
  description: string;
}

export const ProjectInfo = ({ title, description }: ProjectInfoProps) => {
  return (
    <section className="px-12 md:px-24 pt-12 space-y-8 text-center flex flex-col items-center">
      <TypographyH2>{title}</TypographyH2>
      <TypographyH4 className="w-[50%]">{description}</TypographyH4>
    </section>
  );
};
