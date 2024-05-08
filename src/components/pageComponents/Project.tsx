import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  TypographyH1,
  TypographyH2,
  TypographyH5,
  TypographyP,
} from "../ui/typography";
import { projects } from "@/data/projects";
import Image from "next/image";

export const Project = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-12 p-12" id="projects">
      <div className="flex flex-col items-center space-y-5">
        <TypographyH2>Project</TypographyH2>
        <Separator
          className="w-10 py-1 rounded-sm"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
        <TypographyP>
          Learn more about the main projects I've worked on.
        </TypographyP>
      </div>
      <div className="flex flex-col px-12 space-y-12">
        {projects.map((project) => {
          const { title, description, cover, id } = project;
          return (
            <Card className="flex shadow" key={id}>
              <Image
                src={cover}
                alt={title}
                className="w-[50%] rounded-lg"
                width={700}
                height={100}
                sizes="100vw"
              ></Image>
              <div className="self-center w-[50%] p-6 pl-12">
                <TypographyH2>{title}</TypographyH2>
                <TypographyP>{description}</TypographyP>
                <Button className="mt-6" size={"xl"}>
                  <TypographyH5>Case Study</TypographyH5>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
