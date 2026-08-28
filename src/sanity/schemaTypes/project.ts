import { defineField, defineType } from "sanity";
import { SKILL_ICON_KEYS } from "./skills";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projectCategory" }] }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "image", type: "image" }),
    defineField({ name: "url", type: "url", validation: (r) => r.required() }),
    defineField({ name: "hosted_url", type: "url", validation: (r) => r.required() }),
    defineField({
      name: "technologies",
      type: "array",
      of: [
        defineField({
          name: "technology",
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "icon",
              type: "string",
              validation: (r) => r.required(),
              options: { list: [...SKILL_ICON_KEYS] },
            }),
          ],
        }),
      ],
    }),
    defineField({ name: "freelance", type: "boolean" }),
    defineField({ name: "order", type: "number", validation: (r) => r.required() }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
