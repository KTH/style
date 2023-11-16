export const languages = {
  en: "English",
  sv: "Svenska",
} as const;

export type Languages = keyof typeof languages;

export const defaultLang = "en";
