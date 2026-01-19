import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import sk from './locales/sk.json';
import en from './locales/en.json';
import sv from './locales/sv.json';
import no from './locales/no.json';
import uk from './locales/uk.json';
import zh from './locales/zh.json';
import hi from './locales/hi.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';

const resources = {
  sk: { translation: sk },
  en: { translation: en },
  sv: { translation: sv },
  no: { translation: no },
  uk: { translation: uk },
  zh: { translation: zh },
  hi: { translation: hi },
  es: { translation: es },
  fr: { translation: fr },
  ar: { translation: ar },
  pt: { translation: pt },
  ru: { translation: ru },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['sk', 'en', 'sv', 'no', 'uk', 'zh', 'hi', 'es', 'fr', 'ar', 'pt', 'ru'],

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
