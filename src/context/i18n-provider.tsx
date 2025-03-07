"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en.json";
import esMessages from "@/locales/es.json";

const messages: Record<string, Record<string, string>> = {
  en: enMessages,
  es: esMessages,
};

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocale] = useState<string>("en");

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n debe ser usado dentro de un I18nProvider");
  }
  return context;
}
