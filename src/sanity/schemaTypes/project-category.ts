import { defineField, defineType } from "sanity";

export const CATEGORY_ICON_KEYS = ["layergroup", "globe", "server", "brain", "cpuchip"] as const;

export default defineType({
  name: "projectCategory",
  title: "Project Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "value",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "icon",
      type: "string",
      validation: (r) => r.required(),
      options: { list: [...CATEGORY_ICON_KEYS] },
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
