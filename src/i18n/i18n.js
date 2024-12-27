import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const importTranslationFiles = async (language) => {
  const translationFiles = {
    common: await import(`../data/${language}/common.json`),
    heroSection: await import(`../data/${language}/heroSection.json`),
    footer: await import(`../data/${language}/footer.json`),
  };

  return Object.assign({}, ...Object.values(translationFiles));
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path"],
      caches: ["localStorage", "cookie"],
    },
    resources: {}, // Start with empty resources
  });

// Default language preload
(async () => {
  const initialLanguage = localStorage.getItem("i18nextLng");

  const defaultTranslations = await importTranslationFiles(initialLanguage);
  i18n.addResourceBundle(initialLanguage, "translation", defaultTranslations, true, true);
  i18n.changeLanguage(initialLanguage); // Ensure UI updates with the initial language
})();

// Language change listener
i18n.on("languageChanged", async (lng) => {
  console.log("Switching language to:", lng);

  try {
    const translations = await importTranslationFiles(lng);
    i18n.addResourceBundle(lng, "translation", translations, true, true);
  } catch (error) {
    console.error("Error loading translations for language:", lng, error);
  }
});

export default i18n;
