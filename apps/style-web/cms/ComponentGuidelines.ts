import { RichTextElement } from "payload/dist/fields/config/types";
import { CollectionConfig } from "payload/types";

const elements: RichTextElement[] = ["h1", "h2", "link", "ol", "ul"];

export const ComponentGuidelines: CollectionConfig = {
  slug: "component-guidelines",
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
      admin: {
        description: "A sentence that describes the purpose of the component",
      },
    },
    {
      name: "whenToUse",
      type: "richText",
      required: true,
      localized: true,
      label: "When to use",
      admin: {
        elements,
      },
    },
    {
      name: "whenNotToUse",
      type: "richText",
      required: false,
      localized: true,
      label: "When not to use",
      admin: {
        elements,
      },
    },
    {
      name: "howToUse",
      type: "richText",
      required: true,
      localized: true,
      label: "How to use",
      admin: {
        elements,
      },
    },
  ],
};
