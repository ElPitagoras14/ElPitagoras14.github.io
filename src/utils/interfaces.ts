import { StaticImageData } from "next/image";

export interface InfoLinks {
  label: string;
  url: string;
  id: string;
  isSamePage: boolean;
}

export interface ProjectLinks {
  live?: string;
  code: {
    label: string;
    url: string;
  }[];
  documentation?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  cover: StaticImageData;
  page: string;
  images: StaticImageData[];
  year: string;
  madeAt: string;
  technologies: string[];
  links: ProjectLinks;
}
