import { defineField, defineType } from "sanity";

export const EXPERIENCE_ICON_KEYS = [
  "code",
  "education",
  "community",
  "finance",
  "operations",
] as const;

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "companyName", type: "string", validation: (r) => r.required() }),
    defineField({ name: "companyLink", type: "url", validation: (r) => r.required() }),
    defineField({ name: "companyLogo", type: "image" }),
    defineField({ name: "isCurrentEmployer", type: "boolean", initialValue: false }),
    defineField({ name: "order", type: "number", validation: (r) => r.required() }),
    defineField({
      name: "positions",
      type: "array",
      of: [
        defineField({
          name: "position",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "employmentPeriod",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({ name: "employmentType", type: "string" }),
            defineField({
              name: "icon",
              type: "string",
              options: { list: [...EXPERIENCE_ICON_KEYS] },
            }),
            defineField({
              name: "description",
              type: "text",
              description: "Markdown bullet list, rendered via ReactMarkdown on the frontend.",
            }),
            defineField({
              name: "skills",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({ name: "isExpanded", type: "boolean", initialValue: false }),
          ],
          preview: {
            select: { title: "title", subtitle: "employmentPeriod" },
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "companyName", subtitle: "positions.0.title" },
  },
});
