import { StaticImageData } from "next/image";
import { urbapass, subnetting, ppl, scraper } from "./images";

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
  gallery: {
    type: "image" | "video";
    src: StaticImageData | string;
  }[];
  year: string;
  madeAt: string;
  technologies: string[];
  links: ProjectLinks;
}

export interface ProjectsLocale {
  es: Project[];
  en: Project[];
}

type ProjectKey = keyof Project;

export interface ProjectHeader {
  label: string;
  key: ProjectKey;
  show: boolean;
}

export interface ProjectHeaderLocale {
  es: ProjectHeader[];
  en: ProjectHeader[];
}

export const projectHeadersLocale: ProjectHeaderLocale = {
  es: [
    {
      label: "Año",
      key: "year",
      show: true,
    },
    {
      label: "Id",
      key: "id",
      show: false,
    },
    {
      label: "Proyecto",
      key: "title",
      show: true,
    },
    {
      label: "Descripción",
      key: "description",
      show: false,
    },
    {
      label: "Hecho en",
      key: "madeAt",
      show: true,
    },
    {
      label: "Tecnologías",
      key: "technologies",
      show: true,
    },
    {
      label: "Cover",
      key: "cover",
      show: false,
    },
    {
      label: "Página",
      key: "page",
      show: false,
    },
    {
      label: "Imágenes",
      key: "gallery",
      show: false,
    },
  ],
  en: [
    {
      label: "Year",
      key: "year",
      show: true,
    },
    {
      label: "Id",
      key: "id",
      show: false,
    },
    {
      label: "Project",
      key: "title",
      show: true,
    },
    {
      label: "Description",
      key: "description",
      show: false,
    },
    {
      label: "Made at",
      key: "madeAt",
      show: true,
    },
    {
      label: "Tools used",
      key: "technologies",
      show: true,
    },
    {
      label: "Cover",
      key: "cover",
      show: false,
    },
    {
      label: "Page",
      key: "page",
      show: false,
    },
    {
      label: "Images",
      key: "gallery",
      show: false,
    },
  ],
};

const { cover: coverUrbapass, images: urbapassImages } = urbapass;
const { cover: coverSubnetting, images: subnettingImages } = subnetting;
const { cover: coverPpl, images: pplImages } = ppl;
const { cover: coverScraper, images: scraperImages } = scraper;

export const projects: Project[] = [
  {
    id: "pplAdventure",
    year: "2023",
    title: "PPL Adventure",
    description:
      "PPL Adventure is a game made with Unity set in the ESPOL campus as part of the Taws club's new member admission project. In this project I acted as a mentor of the team where I guided the approach of the project.",
    cover: coverPpl,
    page: "/projects/pplAdventure",
    gallery: pplImages.map((image) => ({
      type: "image",
      src: image,
    })),
    madeAt: "TAWS Club",
    technologies: [
      "Unity",
      "C#",
      "Game Design",
      "Game Development",
      "2D Design",
    ],
    links: {
      live: "https://elpitagoras.itch.io/ppl-adventure",
      code: [
        {
          label: "Main code",
          url: "https://github.com/Taws-Espol/PreTawsG5-Unity",
        },
      ],
    },
  },
  {
    id: "subnettingAlgorithm",
    year: "2022",
    title: "Subnetting Algorithm",
    description:
      "Code written in python where the algorithm for IP segmentation with FLSM and VLSM techniques is used.",
    cover: coverSubnetting,
    page: "/projects/subnettingAlgorithm",
    gallery: subnettingImages.map((image) => ({
      type: "image",
      src: image,
    })),
    madeAt: "Freelance",
    technologies: [
      "FastAPI",
      "Python",
      "Next.js",
      "Typescript",
      "Algorithm Design",
      "TailwindCSS",
    ],
    links: {
      live: "https://elpitagoras14.github.io/subnetting-static-web/",
      code: [
        {
          label: "Frontend",
          url: "https://github.com/ElPitagoras14/subnetting-web",
        },
        {
          label: "Backend",
          url: "https://github.com/ElPitagoras14/subnetting-api",
        },
        {
          label: "Static Website",
          url: "https://github.com/ElPitagoras14/subnetting-static-web",
        },
      ],
    },
  },
  {
    id: "urbapassBackend",
    year: "2022",
    title: "UrbaPass Backend",
    description:
      "UrbaPass Backend is a REST API that will allow communication between the company client and server, facilitating interaction and obtaining data through requests with the HTTP protocol.",
    cover: coverUrbapass,
    page: "/projects/urbapassBackend",
    gallery: urbapassImages.map((image) => ({
      type: "image",
      src: image,
    })),
    madeAt: "ESPOL",
    technologies: [
      "Node.js",
      "Express",
      "Javascript",
      "Express",
      "MongoDB",
      "MySQL",
      "Sequelize",
      "JWT",
    ],
    links: {
      code: [
        {
          label: "Main code",
          url: "https://github.com/ElPitagoras14/backend-urbapass",
        },
      ],
    },
  },
  {
    id: "scraperAnime",
    year: "2024",
    title: "Anime Scraper",
    description:
      "Anime Scraper is a web scraping project that allows you to extract anime data and download from servers in the internet.",
    cover: coverScraper,
    page: "/projects/scraperAnime",
    gallery: scraperImages.map((image) => ({
      type: "image",
      src: image,
    })),
    madeAt: "Freelance",
    technologies: [
      "FastAPI",
      "Python",
      "BeautifulSoup",
      "Playwright",
      "Next.js",
      "Typescript",
      "Redux",
      "TailwindCSS",
      "Docker",
      "Postgres",
      "JWT",
      "Authentication",
    ],
    links: {
      code: [
        {
          label: "Frontend",
          url: "https://github.com/ElPitagoras14/scrap-anime-web",
        },
        {
          label: "Backend",
          url: "https://github.com/ElPitagoras14/scrap-anime-api",
        },
      ],
    },
  },
];

export const sortedProjects = projects.sort((a, b) => {
  return parseInt(b.year) - parseInt(a.year);
});

export const indexedProjects = sortedProjects.reduce((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {} as Record<string, Project>);
