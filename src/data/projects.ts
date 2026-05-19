import type { ProjectData } from "@/lib/interfaces";

export const projects: Record<string, Omit<ProjectData, "id">> = {
  "ani-scrapy": {
    year: "2024",
    type: "openSource",
    status: "ongoing",
    madeAt: "Personal",
    stack: ["Python", "BeautifulSoup", "Playwright", "PyPI"],
    links: {
      github: "https://github.com/ElPitagoras14/ani-scrapy",
      live: "https://pypi.org/project/ani-scrapy",
      liveLabel: "PyPI",
    },
    featured: true,
  },
  aniseek: {
    year: "2025",
    type: "personal",
    status: "ongoing",
    madeAt: "Personal",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "Redis", "JWT"],
    links: {
      github: "https://github.com/ElPitagoras14/aniseek",
      live: null,
      liveLabel: null,
    },
    featured: true,
  },
  "home-lab": {
    year: "2025",
    type: "ongoing",
    status: "ongoing",
    madeAt: "Personal",
    stack: [
      "Docker",
      "Dokploy",
      "Nginx",
      "Headscale",
      "Cloudflare Tunnels",
      "Ansible",
    ],
    links: {
      github: null,
      live: null,
      liveLabel: null,
    },
    featured: true,
  },
  "ppl-adventure": {
    year: "2023",
    type: "clubProject",
    status: "completed",
    madeAt: "TAWS Club · ESPOL",
    stack: ["Unity", "C#", "Git"],
    links: {
      github: "https://github.com/Taws-Espol/PreTawsG5-Unity",
      live: null,
      liveLabel: null,
    },
    featured: false,
  },
  subnetting: {
    year: "2022",
    type: "personal",
    status: "completed",
    madeAt: "Personal",
    stack: ["React", "Next.js", "TypeScript"],
    links: {
      github: "https://github.com/ElPitagoras14/subnetting-static-web",
      live: null,
      liveLabel: null,
    },
    featured: false,
  },
  "urbapass-backend": {
    year: "2022",
    type: "personal",
    status: "completed",
    madeAt: "Personal",
    stack: ["Node.js", "Express", "MongoDB", "MySQL", "Sequelize", "JWT"],
    links: {
      github: "https://github.com/ElPitagoras14/backend-urbapass",
      live: null,
      liveLabel: null,
    },
    featured: false,
  },
};
