import { Badge } from "../ui/badge";
import { TypographyH2 } from "../ui/typography";

interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <section className="px-2 space-y-4">
      <TypographyH2>Tools Used</TypographyH2>
      <div>
        {technologies.map((tech, index) => (
          <Badge
            key={tech}
            size="lg"
            variant="secondary"
            rounded={"lg"}
            className="mr-3 mb-3"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
};
