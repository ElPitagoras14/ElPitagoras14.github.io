import { type Lang, ui } from "./ui";

export function getDictionary(lang: Lang) {
  return ui[lang] ?? ui.en;
}

export const socialMedia = {
  github: "https://github.com/ElPitagoras14",
  linkedin: "https://www.linkedin.com/in/jfgarciaa",
  email: "jhony-2001-2011@outlook.com",
};
