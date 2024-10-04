import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ru from "./ru.json";
import hy from "./hy.json";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  hy: {
    translation: hy,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
