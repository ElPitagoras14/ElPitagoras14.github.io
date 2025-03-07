"use client";

import {
  sortedProjects as projects,
  projectHeadersLocale,
  Project,
} from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/context/i18n-provider";
import { useIntl } from "react-intl";

const getTableCell = (key: string, project: Project) => {
  if (key === "title") {
    return <p>{project[key]}</p>;
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

export default function ProjectPage() {
  const { locale } = useI18n();
  const intl = useIntl();

  return (
    <main className="px-4 md:px-24 pt-24 space-y-2">
      <p className="text-center scroll-m-20 pb-2 text-2xl md:text-4xl font-semibold tracking-tight first:mt-0">
        {intl.formatMessage({ id: "projects.title" })}
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            {projectHeadersLocale[locale as keyof typeof projectHeadersLocale]
              .filter((header) => header.show)
              .map((header) => {
                const { key, label } = header;
                return <TableHead key={key}>{label}</TableHead>;
              })}
            <TableHead>
              {intl.formatMessage({ id: "projects.actions" })}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project: Project) => {
            const { page } = project;
            return (
              <TableRow key={project.id} className="hover:bg-muted/10">
                {projectHeadersLocale[
                  locale as keyof typeof projectHeadersLocale
                ]
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
  );
}
