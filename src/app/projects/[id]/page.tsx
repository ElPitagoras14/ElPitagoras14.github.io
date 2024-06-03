import { SectionSeparator } from "@/components/SectionSeparator";
import { Gallery } from "@/components/pageComponents/Gallery";
import { Header } from "@/components/pageComponents/Header";
import { ProjectInfo } from "@/components/pageComponents/ProjectInfo";
import { Reference } from "@/components/pageComponents/Reference";
import { TechStack } from "@/components/pageComponents/TechStack";
import { projects, indexedProjects } from "@/data/projects";

const infoLinks = [
  {
    label: "Portfolio",
    url: "/",
    id: "portfolio",
    isSamePage: false,
  },
  {
    label: "All Projects",
    url: "/projects",
    id: "home",
    isSamePage: false,
  },
];

interface SingleProjectProps {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.page.split("/")[2] }));
}

const SingleProject = ({ params }: SingleProjectProps) => {
  const { id } = params;
  const currProject = indexedProjects[id];
  const { title, description, images, technologies, links } = currProject;

  return (
    <>
      <Header infoLinks={infoLinks}></Header>
      <main>
        <ProjectInfo title={title} description={description}></ProjectInfo>
        <SectionSeparator></SectionSeparator>
        <div className="md:grid md:grid-cols-2 px-12 md:px-24 pt-12 md:pt-12 space-y-6 md:space-y-0">
          <TechStack technologies={technologies}></TechStack>
          <Reference links={links}></Reference>
        </div>
        <Gallery images={images}></Gallery>
      </main>
    </>
  );
};

export default SingleProject;
