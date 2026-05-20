import { ExternalLinkIcon, LayoutGridIcon, ListIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon } from "@/components/icons/github";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { ListViewDict, Project, TypesDict } from "@/lib/interfaces";

interface Props {
  projects: Project[];
  lang: string;
  dict: ListViewDict;
  types: TypesDict;
}

function stopRowClick(e: React.MouseEvent) {
  e.stopPropagation();
}

export default function ProjectsTable({ projects, lang, dict, types }: Props) {
  const [view, setView] = useState<"list" | "grid">("list");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 767px)");
    setView(mql.matches ? "grid" : "list");
  }, []);

  const navigate = (id: string) => {
    window.location.href = `/${lang}/projects/${id}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(v: string) => {
            if (v === "list" || v === "grid") setView(v);
          }}
          variant="outline"
          spacing={0}
          aria-label={dict.viewToggle.list}
        >
          <ToggleGroupItem value="list" aria-label={dict.viewToggle.list}>
            <ListIcon className="w-4 h-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label={dict.viewToggle.grid}>
            <LayoutGridIcon className="w-4 h-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {view === "list" ? (
        <div className="rounded-xl bg-card ring-1 ring-foreground/5 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-foreground/10 hover:bg-transparent">
                <TableHead className="h-12 px-5 text-[0.7rem] uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium">
                  {dict.tableHeaders.year}
                </TableHead>
                <TableHead className="h-12 px-5 text-[0.7rem] uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium">
                  {dict.tableHeaders.project}
                </TableHead>
                <TableHead className="h-12 px-5 text-[0.7rem] uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium">
                  {dict.tableHeaders.type}
                </TableHead>
                <TableHead className="h-12 px-5 text-[0.7rem] uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium">
                  {dict.tableHeaders.stack}
                </TableHead>
                <TableHead className="h-12 px-5 text-right text-[0.7rem] uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium">
                  {dict.tableHeaders.links}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => {
                const stackVisible = project.stack.slice(0, 3);
                const stackExtra = project.stack.length - stackVisible.length;

                return (
                  <TableRow
                    key={project.id}
                    onClick={() => navigate(project.id)}
                    className="cursor-pointer border-foreground/10 hover:bg-blue-400/5 group/row"
                  >
                    <TableCell className="px-5 py-5 text-sm font-mono text-muted-foreground">
                      {project.year}
                    </TableCell>
                    <TableCell className="px-5 py-5">
                      <div className="space-y-1.5">
                        <p className="text-base font-semibold tracking-tight group-hover/row:text-blue-600 dark:group-hover/row:text-blue-300 transition-colors">
                          {project.title}
                        </p>
                        <p className="text-sm text-muted-foreground whitespace-normal max-w-md leading-relaxed line-clamp-2">
                          {project.shortDescription}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="px-5 py-5">
                      <Badge variant="outline" className="px-2.5 py-1">
                        {types[project.type]}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-5 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        {stackVisible.map((tech) => (
                          <Badge
                            key={tech}
                            variant="tech"
                            className="px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {stackExtra > 0 && (
                          <Badge variant="outline" className="px-2 py-1">
                            +{stackExtra}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell
                      onClick={stopRowClick}
                      className="px-5 py-5 text-right"
                    >
                      <div className="flex justify-end gap-1">
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          aria-label="GitHub"
                        >
                          <a
                            href={project.links.github || ""}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </Button>
                        {project.links.live && (
                          <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            aria-label={project.links.liveLabel ?? "Live"}
                          >
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            return (
              <a
                key={project.id}
                href={`/${lang}/projects/${project.id}`}
                className="group flex flex-col bg-secondary rounded-lg overflow-hidden transition-colors hover:bg-secondary/80"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-card">
                  {/* Layered gradient mesh */}
                  <div aria-hidden="true" className="absolute inset-0">
                    <div className="absolute -top-24 -left-24 h-[60%] w-[60%] rounded-full bg-blue-500/30 blur-[100px]" />
                    <div className="absolute -bottom-32 -right-16 h-[70%] w-[60%] rounded-full bg-emerald-500/20 blur-[110px]" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[50%] w-[40%] rounded-full bg-blue-400/15 blur-[120px]" />
                  </div>

                  {/* Dot grid overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-25 bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1px)] bg-size-[22px_22px]"
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
                    <span className="font-mono text-lg md:text-xl font-semibold tracking-tight text-blue-700 dark:text-blue-300/90">
                      {project.id}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 p-4 flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="p-3">
                      {types[project.type]}
                    </Badge>
                    <Badge variant="outline" className="p-3">
                      {project.year}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex gap-1 mt-auto pt-2">
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      aria-label="GitHub"
                    >
                      <a
                        href={project.links.github || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.links.live && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        aria-label={project.links.liveLabel ?? "Live"}
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
