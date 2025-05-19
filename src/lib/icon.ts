interface Icon {
  name: string;
  icon: string;
  isDefault?: boolean;
}

const icons: Icon[] = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Vue", icon: "vuejs" },
  { name: "Next.js", icon: "next" },
  { name: "Astro", icon: "astro" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Redux", icon: "redux" },
  { name: "JWT", icon: "jwt" },
  { name: "Shadcn UI", icon: "shadcn" },
  { name: "Figma", icon: "figma" },
  { name: "NodeJS", icon: "nodejs" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redis", icon: "redis" },
  { name: "Prisma", icon: "prisma" },
  { name: "Pandas", icon: "pandas", isDefault: true },
  { name: "Selenium", icon: "selenium" },
  { name: "BeautifulSoup", icon: "beautifulsoup", isDefault: true },
  { name: "Playwright", icon: "playwright" },
  { name: "Seaborn", icon: "seaborn" },
  { name: "Scikit-learn", icon: "scikit-learn" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Gitlab", icon: "gitlab" },
  { name: "Jupyter", icon: "jupyter" },
  { name: "Algorithm Analysis", icon: "algorithm", isDefault: true },
  { name: "Postman", icon: "postman" },
  { name: "Unity", icon: "unity" },
  { name: "Godot", icon: "godot" },
  { name: "Salesforce", icon: "salesforce" },
  { name: "C#", icon: "csharp" },
  { name: "Game Design", icon: "game-design", isDefault: true },
  { name: "Game Development", icon: "game-development", isDefault: true },
  { name: "2D Design", icon: "2d-design", isDefault: true },
  { name: "Sequelize ORM", icon: "sequelize" },
  { name: "Express", icon: "express" },
];

export const iconsMap = icons.reduce((acc, iconInfo) => {
  const { icon } = iconInfo;
  acc[icon] = iconInfo;
  return acc;
}, {} as Record<string, Icon>);

export const imageChange = ["python", "next", "nodejs", "figma"];
