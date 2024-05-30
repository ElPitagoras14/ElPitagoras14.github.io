import { Gallery } from "@/components/pageComponents/Gallery";
import { Header } from "@/components/pageComponents/Header";
import { ProjectInfo } from "@/components/pageComponents/ProjectInfo";
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
  const { title, description, images } = currProject;

  return (
    <>
      <Header infoLinks={infoLinks}></Header>
      <main>
        <ProjectInfo title={title} description={description}></ProjectInfo>
        <Gallery images={images}></Gallery>
      </main>
    </>
  );
};

export default SingleProject;
