import { Header } from "@/components/pageComponents/Header";
import { TypographyH2, TypographyH6 } from "@/components/ui/typography";
import { projects, projectHeaders } from "@/data/projects";
import { Project } from "@/utils/interfaces";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects I've worked on.",
};

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
    isSamePage: true,
  },
];

const getTableCell = (key: string, project: Project) => {
  if (key === "title") {
    return <TypographyH6>{project[key]}</TypographyH6>;
  }
  if (key === "technologies") {
    return (
      <div className="">
        {project[key].map((technology) => (
          <Badge
            key={technology}
            size="md"
            variant="secondary"
            rounded={"2xl"}
            className="mr-2 my-1 font-normal"
          >
            {technology}
          </Badge>
        ))}
      </div>
    );
  }
  return project[key as keyof Project];
};

const SingleProject = () => {
  return (
    <>
      <Header infoLinks={infoLinks}></Header>
      <main className="px-4 md:px-24 pt-12 md:py-12 space-y-12">
        <TypographyH2 className="text-center">All Projects</TypographyH2>
        <Table>
          <TableHeader>
            <TableRow>
              {projectHeaders
                .filter((header) => header.show)
                .map((header) => {
                  const { key, label } = header;
                  return <TableHead key={key}>{label}</TableHead>;
                })}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project: Project) => {
              const { page } = project;
              return (
                <TableRow key={project.id} className="hover:bg-muted/10">
                  {projectHeaders
                    .filter((header) => header.show)
                    .map((header) => {
                      const { key } = header;
                      const cell = getTableCell(key, project);
                      return <TableCell key={key}>{cell as any}</TableCell>;
                    })}
                  <TableCell>
                    <Link href={page}>
                      <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </>
  );
};

export default SingleProject;
