import { Project } from "../utils/interfaces";
import coverUrbapass from "../../public/projects/urbapass/cover.jpg";
import urbapassImg1 from "../../public/projects/urbapass/urbapass-1.jpg";
import coverSubnetting from "../../public/projects/subnetting/cover.jpg";
import coverPpl from "../../public/projects/ppl/cover.jpg";
import pplImg1 from "../../public/projects/ppl/ppl-1.jpg";
import pplImg2 from "../../public/projects/ppl/ppl-2.jpg";
import pplImg3 from "../../public/projects/ppl/ppl-3.jpg";
import pplImg4 from "../../public/projects/ppl/ppl-4.jpg";
import pplImg5 from "../../public/projects/ppl/ppl-5.jpg";

type ProjectKey = keyof Project;

export const projectHeaders: {
  label: string;
  key: ProjectKey;
  show: boolean;
}[] = [
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
    key: "images",
    show: false,
  },
];

export const projects: Project[] = [
  {
    id: "pplAdventure",
    year: "2023",
    title: "PPL Adventure",
    description:
      "PPL Adventure is a game made with Unity set in the ESPOL campus as part of the Taws club's new member admission project. In this project I acted as a mentor of the team where I guided the approach of the project.",
    cover: coverPpl,
    page: "/projects/pplAdventure",
    images: [pplImg1, pplImg2, pplImg3, pplImg4, pplImg5],
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
    images: [],
    madeAt: "Freelance",
    technologies: [
      "FastAPI",
      "Python",
      "Next.js",
      "Typescript",
      "Algorithm Design",
    ],
    links: {
      live: "https://elpitagoras14.github.io/subnetting-static-web/",
      code: [
        {
          label: "FrontEnd",
          url: "https://github.com/ElPitagoras14/subnetting-web"
        },
        {
          label: "BackEnd",
          url: "https://github.com/ElPitagoras14/subnetting-api"
        },
        {
          label: "Static Website",
          url: "https://github.com/ElPitagoras14/subnetting-static-web"
        }
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
    images: [urbapassImg1],
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
          url: "https://github.com/ElPitagoras14/backend-urbapass"
        }
      ]
    }
  },
];

export const indexedProjects = projects.reduce((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {} as Record<string, Project>);
