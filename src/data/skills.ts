export const skillCategories: Record<
  string,
  { readonly skills: readonly string[] }
> = {
  languages: {
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#"],
  },
  "web-frontend": {
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Tanstack",
      "HTML5",
      "Astro",
      "Figma",
    ],
  },
  "backend-data": {
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Message Queue",
    ],
  },
  "devops-infra": {
    skills: [
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "AWS",
      "Nginx",
      "Linux",
      "On Premise",
    ],
  },
  "ai-automation": {
    skills: ["Gen AI", "AI Agents", "LLMs", "LangChain", "LangGraph"],
  },
};
