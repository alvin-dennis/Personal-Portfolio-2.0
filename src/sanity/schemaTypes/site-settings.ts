import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", validation: (r) => r.required() }),
    defineField({ name: "siteLogo", type: "string", validation: (r) => r.required() }),
    defineField({ name: "socialImage", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "menuItems",
      type: "array",
      of: [
        defineField({
          name: "menuItem",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", type: "string", validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          type: "object",
          fields: [
            defineField({ name: "text", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "icon",
              type: "string",
              validation: (r) => r.required(),
              options: {
                list: ["resume", "email", "github", "linkedin", "instagram"],
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contact",
      type: "object",
      fields: [
        defineField({ name: "email", type: "string", validation: (r) => r.required() }),
        defineField({ name: "cal_link", type: "url", validation: (r) => r.required() }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
