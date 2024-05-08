"use client";

import { skills } from "@/data/skills";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  TypographyH2,
  TypographyP,
  TypographyH3,
  TypographyH4,
} from "../ui/typography";
import { Separator } from "../ui/separator";

export const AboutMe = () => {
  return (
    <section className="flex flex-col p-12 space-y-12" id="about">
      <div className="flex flex-col items-center space-y-5">
        <TypographyH2>About Me</TypographyH2>
        <Separator
          className="w-10 py-1 rounded-sm"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
        <TypographyP>
          Learn more about my experience, preferences and hobbies.
        </TypographyP>
      </div>
      <div className="grid grid-cols-2 px-12">
        <div className="mr-10">
          <TypographyH3>Get to know me!</TypographyH3>
          <TypographyP>
            Hello! I'm Jonathan Garcia, a passionate{" "}
            <strong>Full Stack Developer</strong> and{" "}
            <strong>Salesforce Developer</strong> based in Ecuador. I specialize
            in turning programming ideas into reality and have worked on remote
            projects with talented individuals and startups, enhancing both
            business and consumer experiences.
          </TypographyP>
          <TypographyP>
            My programming journey began at the age of 14, driven by the
            question, "How are video games made?" While initially focused on
            game development, I soon expanded my interests to{" "}
            <strong>algorithm design</strong> and efficient code.
          </TypographyP>
          <TypographyP>
            I thrive on <strong>algorithm analysis</strong> and solving complex
            problems, actively participating in competitive programming
            competitions, showcasing my ability to creatively and effectively
            tackle <strong>algorithmic challenges</strong>. My passion for{" "}
            <strong>optimization</strong> and{" "}
            <strong>technical excellence</strong> continually drives me to push
            boundaries and find innovative solutions for any task at hand.
          </TypographyP>
          <TypographyP>
            I'm excited to apply my technical skills and algorithmic expertise
            to exciting projects that require an{" "}
            <strong>analytical approach</strong> and{" "}
            <strong>problem-solving mindset</strong>. Let's work together to
            take your ideas to the next level!
          </TypographyP>
          <TypographyP>
            <strong>Fun fact:</strong> In my free time I usually play
            videogames, listen to music and watch anime, of which Steins Gate is
            my favorite.
          </TypographyP>
          <TypographyP>
            Feel free to <strong>contact</strong> me here.
          </TypographyP>
          <Button
            className="mt-6"
            size={"xl"}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TypographyH4>Contact</TypographyH4>
          </Button>
        </div>
        <div className="ml-10">
          <TypographyH3>Skills</TypographyH3>
          <div className="flex flex-wrap pt-5">
            {skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  size="lg"
                  variant="default"
                  rounded={"md"}
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
