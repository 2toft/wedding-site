import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import sv from "./locales/sv.json";

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: "sv", // Default locale
  fallbackLocale: "en",
  messages: {
    en,
    sv,
  },
});

export default i18n;
