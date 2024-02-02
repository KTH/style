import { ui, languages, defaultLang } from "./ui";
import type { Languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split("/");
  if (lang in languages) return lang as Languages;

  return defaultLang;
}

/** Get the URL and label for the same page in the other language */
export function getTranslatedLink(url: URL) {
  const currentLanguage = getLangFromUrl(url);

  if (currentLanguage === "en") {
    const newUrl = new URL(url);
    newUrl.pathname = url.pathname.replace("/style/en", "/style/sv");

    return {
      url: newUrl,
      path: "",
      lang: "sv",
      label: "Svenska",
    };
  } else {
    const newUrl = new URL(url);
    newUrl.pathname = url.pathname.replace("/style/sv", "/style/en");

    return {
      url: newUrl,
      path: newUrl.pathname,
      lang: "en",
      label: "English",
    };
  }
}

export function useTranslations(lang: Languages) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
