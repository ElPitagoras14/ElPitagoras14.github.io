import { Header } from "@/components/pageComponents/Header";
import { projects } from "@/data/projects";

const infoLinks = [
  {
    label: "Home",
    url: "/",
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
  return (
    <>
      <Header infoLinks={infoLinks}></Header>
    </>
  );
};

export default SingleProject;
