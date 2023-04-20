import { RichTextElement } from "payload/dist/fields/config/types";
import { CollectionConfig } from "payload/types";

const elements: RichTextElement[] = ["h1", "h2", "link", "ol", "ul"];

export const Components: CollectionConfig = {
  slug: "components",
  fields: [
    {
      name: "id",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "purpose",
      type: "text",
      required: true,
      localized: true,
      label: {
        en: "Purpose",
        sv: "Syfte",
      },
      admin: {
        description: {
          en: "A sentence that describes the purpose of the component",
          sv: "En mening som beskriver syftet med komponenten",
        },
      },
    },
    {
      name: "whenToUse",
      type: "richText",
      required: true,
      localized: true,
      label: {
        en: "When to use",
        sv: "När ska man använda",
      },
      admin: {
        elements,
      },
    },
    {
      name: "whenNotToUse",
      type: "richText",
      required: false,
      localized: true,
      label: {
        en: "When not to use",
        sv: "När ska man inte använda",
      },
      admin: {
        elements,
      },
    },
    {
      name: "howToUse",
      type: "richText",
      required: true,
      localized: true,
      label: {
        en: "How to use",
        sv: "Hur använder man komponenten",
      },
      admin: {
        elements,
      },
    },
  ],
};
