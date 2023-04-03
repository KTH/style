import { CollectionConfig } from "payload/types";

export const Examples: CollectionConfig = {
  slug: "examples",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
};
