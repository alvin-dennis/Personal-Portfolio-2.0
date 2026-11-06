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

    // Case-study fields — optional so existing projects keep the simple
    // layout until this content is filled in.
    defineField({
      name: "subtitle",
      type: "string",
      description: "One-line tagline under the title",
    }),
    defineField({ name: "role", type: "string", description: "e.g. Sole Engineer, Frontend Lead" }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: ["Live", "In Production", "Archived", "Internal", "Prototype", "Replaced"],
      },
    }),
    defineField({
      name: "overview",
      type: "text",
      description: "Longer lede paragraph for the case study, separate from the card description",
    }),
    defineField({
      name: "objectives",
      type: "array",
      of: [
        defineField({
          name: "item",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", type: "text", validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: "challenges",
      type: "array",
      of: [
        defineField({
          name: "item",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", type: "text", validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: "approach",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich-text narrative of how the project was built",
    }),
    defineField({
      name: "results",
      type: "array",
      of: [
        defineField({
          name: "item",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", type: "text", validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
    defineField({ name: "conclusion", type: "text" }),
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
