import { socialMedia } from "@/data/general";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLeetcode,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import Link from "next/link";

const { linkedin, github, x, instagram, leetcode } = socialMedia;

export const SocialMedia = () => {
  return (
    <div className="flex space-x-1">
      <Button variant={null} size={"icon"}>
        <Link href={linkedin} target="_blank">
          <IconBrandLinkedin size={32} className="hover:text-primary"/>
        </Link>
      </Button>
      <Button variant={null} size={"icon"}>
        <Link href={github} target="_blank">
          <IconBrandGithub size={32} className="hover:text-primary"/>
        </Link>
      </Button>
      <Button variant={null} size={"icon"}>
        <Link href={x} target="_blank">
          <IconBrandX size={32} className="hover:text-primary"/>
        </Link>
      </Button>
      <Button variant={null} size={"icon"}>
        <Link href={instagram} target="_blank">
          <IconBrandInstagram size={32} className="hover:text-primary"/>
        </Link>
      </Button>
      <Button variant={null} size={"icon"}>
        <Link href={leetcode} target="_blank">
          <IconBrandLeetcode size={32} className="hover:text-primary"/>
        </Link>
      </Button>
    </div>
  );
};
