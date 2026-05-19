import en from "./locales/en.json";
import es from "./locales/es.json";

export const ui = {
  en,
  es,
} as const;

export type Lang = keyof typeof ui;
