import animeScraperCover from "../assets/anime-scraper/cover.jpg";
import animeScraperImg1 from "../assets/anime-scraper/img-1.jpg";
import animeScraperImg2 from "../assets/anime-scraper/img-2.jpg";
import animeScraperImg3 from "../assets/anime-scraper/img-3.jpg";
import animeScraperImg4 from "../assets/anime-scraper/img-4.jpg";
import animeScraperImg5 from "../assets/anime-scraper/img-5.jpg";
import animeScraperImg6 from "../assets/anime-scraper/img-6.jpg";
import animeScraperImg7 from "../assets/anime-scraper/img-7.jpg";
import animeScraperImg8 from "../assets/anime-scraper/img-8.jpg";
import animeScraperImg9 from "../assets/anime-scraper/img-9.jpg";
import animeScraperImg10 from "../assets/anime-scraper/img-10.jpg";

import subnettingCover from "../assets/subnetting/cover.jpg";
import subnettingImg1 from "../assets/subnetting/img-1.jpg";
import subnettingImg2 from "../assets/subnetting/img-2.jpg";
import subnettingImg3 from "../assets/subnetting/img-3.jpg";
import subnettingImg4 from "../assets/subnetting/img-4.jpg";
import subnettingImg5 from "../assets/subnetting/img-5.jpg";

import pplAdventureCover from "../assets/ppl-adventure/cover.jpg";
import pplAdventureImg1 from "../assets/ppl-adventure/img-1.jpg";
import pplAdventureImg2 from "../assets/ppl-adventure/img-2.jpg";
import pplAdventureImg3 from "../assets/ppl-adventure/img-3.jpg";
import pplAdventureImg4 from "../assets/ppl-adventure/img-4.jpg";
import pplAdventureImg5 from "../assets/ppl-adventure/img-5.jpg";

import urbapassBackendCover from "../assets/urbapass-backend/cover.jpg";
import urbapassBackendImg1 from "../assets/urbapass-backend/img-1.jpg";

interface ProjectInfo {
  description: string;
  status: string;
  sections?: {
    title: string;
    images: ImageMetadata[];
  }[];
}

export interface Project {
  id: string;
  title: string;
  year: string;
  madeAt: string;
  role: string;
  cover: ImageMetadata;
  link: string;
  technologies: string[];
  en: ProjectInfo;
  es: ProjectInfo;
}

const projects: Project[] = [
  {
    id: "anime-scraper",
    cover: animeScraperCover,
    title: "Anime Scraper",
    year: "2024",
    madeAt: "Personal",
    role: "Fullstack Developer & UX/UI Designer",
    link: "https://github.com/ElPitagoras14/anime-scraper",
    technologies: [
      "fastapi",
      "python",
      "beautifulsoup",
      "playwright",
      "react",
      "next",
      "typescript",
      "redux",
      "tailwindcss",
      "docker",
      "postgresql",
      "jwt",
    ],
    en: {
      description:
        "Anime Scraper is a web scraping project that allows you to extract anime data and download from servers in the internet.",
      status: "Completed",
      sections: [
        {
          title: "Gallery",
          images: [
            animeScraperImg1,
            animeScraperImg2,
            animeScraperImg3,
            animeScraperImg4,
            animeScraperImg5,
            animeScraperImg6,
            animeScraperImg7,
            animeScraperImg8,
            animeScraperImg9,
            animeScraperImg10,
          ],
        },
      ],
    },
    es: {
      description:
        "Anime Scraper es un proyecto de web scraping que permite extraer datos de anime y descargarlos desde servidores en internet.",
      status: "Completado",
      sections: [
        {
          title: "Galería",
          images: [
            animeScraperImg1,
            animeScraperImg2,
            animeScraperImg3,
            animeScraperImg4,
            animeScraperImg5,
            animeScraperImg6,
            animeScraperImg7,
            animeScraperImg8,
            animeScraperImg9,
            animeScraperImg10,
          ],
        },
      ],
    },
  },
  {
    id: "subnetting",
    title: "Subnetting",
    year: "2022",
    madeAt: "Personal",
    role: "Frontend Developer",
    cover: subnettingCover,
    link: "https://github.com/ElPitagoras14/subnetting-static-web",
    technologies: ["react", "next", "typescript"],
    en: {
      description:
        "Code written in python where the algorithm for IP segmentation with FLSM and VLSM techniques is used.",
      status: "Completed",
      sections: [
        {
          title: "Gallery",
          images: [
            subnettingImg1,
            subnettingImg2,
            subnettingImg3,
            subnettingImg4,
            subnettingImg5,
          ],
        },
      ],
    },

    es: {
      description:
        "Código escrito en Python que implementa el algoritmo de segmentación IP utilizando las técnicas FLSM y VLSM.",
      status: "Completado",
      sections: [
        {
          title: "Galería",
          images: [
            subnettingImg1,
            subnettingImg2,
            subnettingImg3,
            subnettingImg4,
            subnettingImg5,
          ],
        },
      ],
    },
  },
  {
    id: "ppl-adventure",
    title: "PPL Adventure",
    year: "2023",
    madeAt: "Taws Club",
    role: "Mentor & Game Designer",
    cover: pplAdventureCover,
    link: "https://github.com/Taws-Espol/PreTawsG5-Unity",
    technologies: [
      "unity",
      "csharp",
      "git",
      "game-design",
      "game-development",
      "2d-design",
    ],
    en: {
      description:
        "PPL Adventure is a game made with Unity and set on the ESPOL campus. It was part of the Taws club's admission process, where I participated as a mentor guiding the team's approach.",
      status: "Completed",
      sections: [
        {
          title: "Gallery",
          images: [
            pplAdventureImg1,
            pplAdventureImg2,
            pplAdventureImg3,
            pplAdventureImg4,
            pplAdventureImg5,
          ],
        },
      ],
    },
    es: {
      description:
        "PPL Adventure es un juego hecho con Unity y ambientado en el campus de la ESPOL. Fue parte del proceso de admisión al club Taws, donde participé como mentor guiando el enfoque del equipo.",
      status: "Completado",
      sections: [
        {
          title: "Galería",
          images: [
            pplAdventureImg1,
            pplAdventureImg2,
            pplAdventureImg3,
            pplAdventureImg4,
            pplAdventureImg5,
          ],
        },
      ],
    },
  },
  {
    id: "urbapass-backend",
    title: "Urbapass Backend",
    year: "2022",
    madeAt: "Personal",
    role: "Backend Developer",
    cover: urbapassBackendCover,
    link: "https://github.com/ElPitagoras14/backend-urbapass",
    technologies: [
      "nodejs",
      "express",
      "javascript",
      "mongodb",
      "mysql",
      "sequelize",
      "jwt",
    ],
    en: {
      description:
        "Urbapass is a web application that allows you to calculate subnets and IP addresses.",
      status: "Completed",
      sections: [
        {
          title: "Gallery",
          images: [urbapassBackendImg1],
        },
      ],
    },
    es: {
      description:
        "Urbapass es una aplicación web que permite calcular subredes y direcciones IP.",
      status: "Completado",
      sections: [
        {
          title: "Galería",
          images: [urbapassBackendImg1],
        },
      ],
    },
  },
];

export const projectsMap = projects.reduce((acc, project) => {
  const { id } = project;
  acc[id] = project;
  return acc;
}, {} as Record<string, Project>);
