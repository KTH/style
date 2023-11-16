export const languages = {
  en: "English",
  sv: "Svenska",
} as const;

export type Languages = keyof typeof languages;

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.search": "Search",
  },
  sv: {
    "nav.search": "Sök",
  },
};
