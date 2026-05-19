import { type Lang, ui } from "./ui";

export function getDictionary(lang: Lang) {
  return ui[lang] ?? ui.en;
}
