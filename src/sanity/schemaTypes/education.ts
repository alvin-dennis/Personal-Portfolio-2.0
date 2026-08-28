import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "position", type: "string", validation: (r) => r.required() }),
    defineField({ name: "start", type: "string", validation: (r) => r.required() }),
    defineField({ name: "end", type: "string", validation: (r) => r.required() }),
    defineField({ name: "link", type: "url" }),
    defineField({ name: "logo", type: "image" }),
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
    select: { title: "name", subtitle: "position" },
  },
});
