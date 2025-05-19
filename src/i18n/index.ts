import es from './es.json';
import en from './en.json';

export const translations = {
  es,
  en
};

export function getTranslations(lang: string) {
  return translations[lang as keyof typeof translations] ?? translations.es;
}
