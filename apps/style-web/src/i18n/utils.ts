import type { MarkdownInstance } from "astro";
import { ui, languages, defaultLang } from "./ui";
import type { Languages } from "./ui";

export type FileMetadata = {
  lang: Languages;
  path: string;
  href: string;
  title: string;
};

// Example: /style/en/components/button
const URL_REGEX = /^\/style\/(\w+)(.*)$/;

/** Get parts of a `url` */
export function getUrlParts(pathname: string) {
  const match = pathname.match(URL_REGEX);

  if (match === null) {
    throw new Error(`The path [${pathname}] does not match expected pattern`);
  }

  return {
    lang: match[1],
    path: match[2],
  };
}

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
      path: newUrl.pathname,
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

/** Get the metadata of a markdown file */
export function parseFile(
  file: MarkdownInstance<Record<string, any>>,
): FileMetadata | undefined {
  if (!file.url) {
    throw new Error("");
  }

  const { lang, path } = getUrlParts(file.url);
  const status = file.frontmatter.status;
  const original = file.frontmatter.original;
  const title = file.frontmatter.title;

  if (status === "empty" && original === false) {
    return undefined;
  }

  if (typeof title !== "string") {
    throw new Error(`The file [${file.url}] does not have title`);
  }

  return {
    lang: lang as Languages,
    path,
    title,
    href: `/style/${lang}${path}`,
  };
}
