import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import commonEN from './locales/en.json';
import commonES from './locales/es.json';
import authEN from './modules/auth/locales/en.json';
import authES from './modules/auth/locales/es.json';
import pricingEN from './modules/pricing/locales/en.json';
import pricingES from './modules/pricing/locales/es.json';

// Merge all translations
const resources = {
  en: {
    translation: {
      ...commonEN,
      ...authEN,
      ...pricingEN,
    },
  },
  es: {
    translation: {
      ...commonES,
      ...authES,
      ...pricingES,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
