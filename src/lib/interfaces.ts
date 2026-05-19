export type LangType = "en" | "es";

export type ProjectType = "openSource" | "personal" | "ongoing" | "clubProject";
export type ProjectStatus = "ongoing" | "completed";

export interface ProjectLinks {
  github: string;
  live: string | null;
  liveLabel: string | null;
}

export interface ProjectNarrative {
  problem: string;
  approach: string;
  learned: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  type: ProjectType;
  status: ProjectStatus;
  madeAt: string;
  role: string;
  tagline: string;
  shortDescription: string;
  stack: string[];
  links: ProjectLinks;
  featured: boolean;
  narrative: ProjectNarrative;
  gallery?: string[];
}

export type TypesDict = Record<ProjectType | ProjectStatus, string>;

export interface ListViewDict {
  label: string;
  title: string;
  subtitle: string;
  allProjectsTitle: string;
  viewToggle: { list: string; grid: string };
  tableHeaders: {
    year: string;
    project: string;
    type: string;
    stack: string;
    links: string;
  };
  cta: { title: string; description: string; button: string };
}

export interface DetailViewDict {
  back: string;
  projectInfo: string;
  labels: {
    role: string;
    madeAt: string;
    year: string;
    status: string;
    stack: string;
    links: string;
  };
  gallery: string;
  prevProject: string;
  nextProject: string;
  sections: { problem: string; approach: string; learned: string };
}
