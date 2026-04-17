'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language } from '@/data/siteContent';
import { getTranslation } from '@/data/translations';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    // Update html lang attribute for accessibility
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang === 'ti' ? 'ti' : newLang === 'am' ? 'am' : 'en';
    }
  }, []);

  const t = useCallback((key: string) => getTranslation(lang, key), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
