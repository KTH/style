import { languages, defaultLang } from "./ui";
import type { Languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split("/");
  if (lang in languages) return lang as Languages;

  return defaultLang;
}
