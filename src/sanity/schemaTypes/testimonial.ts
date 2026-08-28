import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "testimonial", type: "text", validation: (r) => r.required() }),
    defineField({ name: "by", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "by", subtitle: "testimonial" },
  },
});
