type Entry =
  | string
  | {
      heading: {
        sv: string;
        en: string;
      };
      routes: string[];
    };

export const navigationEntries: Entry[] = [
  "",
  {
    heading: {
      sv: "Kom igång",
      en: "Get started",
    },
    routes: ["/get-started/developers"],
  },
  {
    heading: {
      sv: "Styles",
      en: "Styles",
    },
    routes: [
      "/styles/design-tokens",
      "/styles/colors",
      "/styles/typography",
      "/styles/spacing",
    ],
  },
  {
    heading: {
      sv: "Riktlinjer",
      en: "Guides",
    },
    routes: [
      "/guides/design",
      "/guides/introduction",
      "/guides/page-structure",
    ],
  },
  {
    heading: {
      sv: "Komponenter",
      en: "Components",
    },
    routes: [
      "/components/button",
      "/components/details",
      "/components/entrances",
      "/components/header",
      "/components/kpm",
      "/components/logotype",
      "/components/mega-menu",
      "/components/menu-item",
      "/components/search",
    ],
  },
];
