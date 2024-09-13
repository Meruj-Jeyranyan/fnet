import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translationEN from "locales/en/translation.json";
import translationRU from "locales/ru/translation.json";
import translationHY from "locales/hy/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  hy: {
    translation: translationHY,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already prevents XSS
  },
});

export default i18n;
