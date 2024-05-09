"use client";

import { skills } from "@/data/general";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  TypographyH2,
  TypographyP,
  TypographyH3,
  TypographyH4,
} from "../ui/typography";
import { breakpoints } from "@/utils/breakpoints";
import { TitleSeparator } from "../TitleSeparator";

export const AboutMe = () => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < breakpoints.lg;
  }

  return (
    <section
      className="flex flex-col px-4 md:px-24 pt-12 md:py-12 space-y-12"
      id="about"
    >
      <div className="flex flex-col items-center space-y-5 text-center">
        <TypographyH2>About Me</TypographyH2>
        <TitleSeparator />
        <TypographyP className="w-[70%]">
          Learn more about my experience, preferences and hobbies.
        </TypographyP>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 px-4 lg:px-12 space-y-12">
        <div className="mr-0 lg:mr-10">
          <TypographyH2>Get to know me!</TypographyH2>
          <TypographyP>
            Hello! I'm Jonathan Garcia, a passionate Full Stack Developer and{" "}
            Salesforce Developer based in Ecuador. I specialize in turning
            programming ideas into reality and have worked on remote projects
            with talented individuals and startups, enhancing both business and
            consumer experiences.
          </TypographyP>
          <TypographyP>
            My programming journey began at the age of 14, driven by the
            question, "How are video games made?" While initially focused on
            game development, I soon expanded my interests to algorithm design
            and efficient code.
          </TypographyP>
          <TypographyP>
            I thrive on algorithm analysis and solving complex problems,
            actively participating in competitive programming competitions,
            showcasing my ability to creatively and effectively tackle
            algorithmic challenges. My passion for optimization and technical
            excellence continually drives me to push boundaries and find
            innovative solutions for any task at hand.
          </TypographyP>
          <TypographyP>
            I'm excited to apply my technical skills and algorithmic expertise
            to exciting projects that require an analytical approach and{" "}
            problem-solving mindset. Let's work together to take your ideas to
            the next level!
          </TypographyP>
          <TypographyP>
            Fun fact: In my free time I usually play videogames, listen to music
            and watch anime, of which Steins Gate is my favorite.
          </TypographyP>
          <TypographyP>Feel free to contact me here.</TypographyP>
          <Button
            className="mt-6"
            size={isMobile ? "lg" : "xl"}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH4>Contact</TypographyH4>
          </Button>
        </div>
        <div className="ml-0 lg:ml-10">
          <TypographyH3>Skills</TypographyH3>
          <div className="flex flex-wrap pt-5">
            {skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  size="lg"
                  variant="default"
                  rounded={"lg"}
                  className="mr-3 mb-3"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
