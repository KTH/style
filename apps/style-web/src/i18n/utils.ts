import type { MarkdownInstance } from "astro";
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

function getOriginalData(
  allFiles: MarkdownInstance<Record<string, any>>[],
  route: string,
) {
  const REGEX = /^\/style\/(\w+)(.*)$/;
  const entry = allFiles
    .filter(
      (file) =>
        file.frontmatter.original === undefined ||
        file.frontmatter.original === true,
    )
    .find((file) => {
      const match = file.url?.match(REGEX);

      return `${match?.[2]}` === route;
    });

  if (entry && entry.url) {
    const entryLanguage = entry.url.match(REGEX)?.[1];

    if (entryLanguage !== "sv" && entryLanguage !== "en") {
      throw new Error("");
    }

    return {
      href: entry.url,
      title: entry.frontmatter.title as string,
      lang: entryLanguage,
    };
  }

  throw new Error("");
}

export function getRouteData(
  allFiles: MarkdownInstance<Record<string, any>>[],
  lang: "sv" | "en",
  route: string,
) {
  const entry = allFiles.find((file) => file.url === `/style/${lang}${route}`);

  if (!entry) {
    throw new Error("");
  }

  const status = entry?.frontmatter.status;
  const original = entry?.frontmatter.original;

  if (status === "empty" && original === false) {
    return getOriginalData(allFiles, route);
  }

  if (!entry.url) {
    throw new Error("");
  }

  if (typeof entry.frontmatter.title !== "string") {
    throw new Error("");
  }

  return {
    href: entry.url,
    title: entry.frontmatter.title,
    lang: undefined,
  };
}
