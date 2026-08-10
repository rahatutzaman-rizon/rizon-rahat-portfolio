"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, LANGUAGES, LanguageInfo, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  currentLanguageInfo: LanguageInfo;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  currentLanguageInfo: LANGUAGES[0],
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("rizon-portfolio-language") as Language;
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    const info = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
    document.documentElement.dir = info.dir;
    document.documentElement.lang = language;
    localStorage.setItem("rizon-portfolio-language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const currentLanguageInfo = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, currentLanguageInfo, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
