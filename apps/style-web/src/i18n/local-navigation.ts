/**
 * Defines a link in the navigation menu
 * - If `string`, the is a route to a markdown file
 * - Otherwise defines a "submenu"
 */
export type Entry =
  | string
  | {
      /** Label for the submenu */
      heading: {
        sv: string;
        en: string;
      };

      /** Pages included in the submenu */
      routes: Entry[];
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
      {
        heading: {
          sv: "Huvudet",
          en: "Header",
        },
        routes: [
          "/components/header",
          "/components/entrances",
          "/components/kpm",
          "/components/logotype",
          "/components/mega-menu",
        ],
      },
      "/components/menu-item",
    ],
  },
];
