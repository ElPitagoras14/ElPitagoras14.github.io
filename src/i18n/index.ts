import es from "./es.json";
import en from "./en.json";

type TranslationKeys = keyof typeof es;

type Translations = {
  [key: string]: Record<TranslationKeys, string>;
};

const translations: Translations = {
  es,
  en,
};

export function getTranslations(lang: string): Record<TranslationKeys, string> {
  return translations[lang] ?? translations["es"];
}
