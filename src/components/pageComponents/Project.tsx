import { ItemInfo } from "../ItemInfo";
import { TitleSeparator } from "../TitleSeparator";
import { TypographyH2, TypographyP } from "../ui/typography";
import { projects } from "@/data/projects";

export const Project = () => {
  return (
    <section
      className="flex flex-col px-4 md:px-24 pt-12 md:py-12 space-y-12"
      id="projects"
    >
      <div className="flex flex-col items-center space-y-5 text-center">
        <TypographyH2>Projects</TypographyH2>
        <TitleSeparator />
        <TypographyP className="w-[70%]">
          Learn more about the main projects I've worked on.
        </TypographyP>
      </div>
      <div className="flex flex-col px-4 md:px-12 space-y-8 md:space-y-16">
        {projects.map((project) => {
          const { id } = project;
          return <ItemInfo key={id} item={project}></ItemInfo>;
        })}
      </div>
    </section>
  );
};
