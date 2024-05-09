import coverUrbapass from "../../public/projects/urbapass/cover.jpg";
import urbapassImg1 from "../../public/projects/urbapass/urbapass-1.jpg";
import coverSubnetting from "../../public/projects/subnetting/cover.jpg";
import coverPpl from "../../public/projects/ppl/cover.jpg";
import pplImg1 from "../../public/projects/ppl/ppl-1.jpg";
import pplImg2 from "../../public/projects/ppl/ppl-2.jpg";
import pplImg3 from "../../public/projects/ppl/ppl-3.jpg";
import pplImg4 from "../../public/projects/ppl/ppl-4.jpg";
import pplImg5 from "../../public/projects/ppl/ppl-5.jpg";

export const projects = [
  {
    id: "urbapassBackend",
    title: "UrbaPass Backend",
    description:
      "UrbaPass Backend is a REST API that will allow communication between the company client and server, facilitating interaction and obtaining data through requests with the HTTP protocol.",
    cover: coverUrbapass,
    page: "/projects/urbapass",
    images: [urbapassImg1],
  },
  {
    id: "subnettingAlgorithm",
    title: "Subnetting Algorithm",
    description:
      "Code written in python where the algorithm for IP segmentation with FLSM and VLSM techniques is used.",
    cover: coverSubnetting,
    page: "/projects/subnetting",
    images: [],
  },
  {
    id: "pplAdventure",
    title: "PPL Adventure",
    description:
      "PPL Adventure is a game made with Unity set in the ESPOL campus as part of the Taws club's new member admission project. In this project I acted as a mentor of the team where I guided the approach of the project.",
    cover: coverPpl,
    page: "/projects/ppl",
    images: [pplImg1, pplImg2, pplImg3, pplImg4, pplImg5],
  },
];

export const indexedProjects = projects.reduce((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {} as Record<string, (typeof projects)[0]>);
