import { cn } from "@/lib/utils";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLeetcode,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialMedia = {
  linkedin: "https://www.linkedin.com/in/jonathan-garcia-elpi/",
  github: "https://github.com/ElPitagoras14",
  instagram: "https://www.instagram.com/_afjhony/",
  leetcode: "https://leetcode.com/u/ElPitagoras14/",
  x: "https://twitter.com/ElPitagoras14",
};

const { linkedin, github, x, instagram, leetcode } = socialMedia;

export type SocialMediaProps = {
  className?: string;
};

export const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <div className={cn("flex space-x-2", className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href={linkedin} target="_blank">
              <IconBrandLinkedin size={26} className="hover:text-primary" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href={github} target="_blank">
              <IconBrandGithub size={26} className="hover:text-primary" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href={x} target="_blank">
              <IconBrandX size={26} className="hover:text-primary" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Twitter</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href={instagram} target="_blank">
              <IconBrandInstagram size={26} className="hover:text-primary" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Instagram</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href={leetcode} target="_blank">
              <IconBrandLeetcode size={26} className="hover:text-primary" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>LeetCode</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
