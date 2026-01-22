/**
 * i18n Configuration
 *
 * Internationalization setup for the NR-GEO website.
 * Provides multi-language support across 7 languages.
 *
 * Supported Languages:
 * - Slovak (sk) - Native language
 * - English (en) - Default fallback
 * - German (de)
 * - Swedish (sv)
 * - Norwegian (no)
 * - Spanish (es)
 * - French (fr)
 *
 * To add a new language:
 * 1. Create new JSON file in ./locales/[language-code].json
 * 2. Import it below
 * 3. Add to resources object
 * 4. Add language code to supportedLngs array
 * 5. Update language selector in Navbar.jsx
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import sk from './locales/sk.json';
import en from './locales/en.json';
import de from './locales/de.json';
import sv from './locales/sv.json';
import no from './locales/no.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

// Translation resources object
const resources = {
  sk: { translation: sk },
  en: { translation: en },
  de: { translation: de },
  sv: { translation: sv },
  no: { translation: no },
  es: { translation: es },
  fr: { translation: fr },
};

// Initialize i18n
i18n
  // Detect user's preferred language
  .use(LanguageDetector)
  // Pass i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    resources,

    // Default language if detection fails
    fallbackLng: 'en',

    // List of supported languages
    supportedLngs: ['sk', 'en', 'de', 'sv', 'no', 'es', 'fr'],

    // Language detection configuration
    detection: {
      // Detection order: browser settings, HTML lang tag, URL path, subdomain
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      // Cache selected language in localStorage
      caches: ['localStorage'],
    },

    // Interpolation settings
    interpolation: {
      // React already escapes values to prevent XSS
      escapeValue: false,
    },

    // React-specific settings
    react: {
      // Don't use Suspense (we handle loading manually)
      useSuspense: false,
    },
  });

export default i18n;
