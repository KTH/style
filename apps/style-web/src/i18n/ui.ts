export const languages = {
  en: "English",
  sv: "Svenska",
} as const;

export type Languages = keyof typeof languages;

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.search": "Search",
    "nav.go-home": "Go to KTH Intranet",
    "nav.menu": "Menu",
    "nav.entrances": "Sites",
    "nav.main-content": "Go to main content",
    "nav.in-swedish": "(in Swedish)",
    "nav.in-english": "(in English)",
    "nav.unknown-language": "(unknown language)",
    close: "Close",
    "sites.student-web": "Student web",
    "sites.intranet": "Intranet",
    "search-intranet": "Search the KTH intranet",
  },
  sv: {
    "nav.search": "Sök",
    "nav.go-home": "Gå till KTH intranäts hemsida",
    "nav.menu": "Meny",
    "nav.entrances": "Ingångar",
    "nav.main-content": "Gå till innehåll",
    "nav.in-swedish": "(på svenska)",
    "nav.in-english": "(på engelska)",
    "nav.unknown-language": "(okänt språk)",
    close: "Stäng",
    "sites.student-web": "Studentwebben",
    "sites.intranet": "Intranät",
    "search-intranet": "Sök på intranätet",
  },
};
