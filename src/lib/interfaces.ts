export type LangType = "en" | "es";
export type Period = { start: string; end: string | "present" };
export type AwardDate = string | { start: string; end: string | "present" };

export type ProjectType = "openSource" | "personal" | "ongoing" | "clubProject";
export type ProjectStatus = "ongoing" | "completed";

export interface ProjectLinks {
  github: string | null;
  live: string | null;
  liveLabel: string | null;
}

export interface ProjectNarrative {
  problem: string;
  approach: string;
  learned: string;
}

export interface ProjectData {
  id: string;
  year: string;
  type: ProjectType;
  status: ProjectStatus;
  madeAt: string;
  stack: string[];
  links: ProjectLinks;
  featured: boolean;
  gallery?: string[];
}

export interface ProjectStrings {
  id: string;
  title: string;
  role: string;
  tagline: string;
  shortDescription: string;
  narrative: ProjectNarrative;
}

export interface Project extends ProjectData, ProjectStrings {}

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

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  metric: string;
  activities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
}

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface ContactInfoDict {
  availabilityTitle: string;
  availabilityText: string;
  availabilityBadge: string;
  directContactTitle: string;
  responseNote: string;
  links: ContactLink[];
}
