import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "summary", type: "string", validation: (r) => r.required() }),
    defineField({ name: "currentWork", type: "string" }),
    defineField({ name: "image", type: "image", validation: (r) => r.required() }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        defineField({
          name: "stat",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "value", type: "string", validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "name" },
    prepare: ({ title }) => ({ title: `Hero — ${title}` }),
  },
});
