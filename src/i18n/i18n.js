import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import sk from './locales/sk.json';
import en from './locales/en.json';
import de from './locales/de.json';
import sv from './locales/sv.json';
import no from './locales/no.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

const resources = {
  sk: { translation: sk },
  en: { translation: en },
  de: { translation: de },
  sv: { translation: sv },
  no: { translation: no },
  es: { translation: es },
  fr: { translation: fr },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['sk', 'en', 'de', 'sv', 'no', 'es', 'fr'],

    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
