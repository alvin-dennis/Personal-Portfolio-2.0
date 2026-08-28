import { defineField, defineType } from "sanity";

export const SKILL_ICON_KEYS = [
  "javascript",
  "typescript",
  "python",
  "markdown",
  "yaml",
  "react",
  "astro",
  "tailwindcss",
  "drizzle",
  "prisma",
  "reactquery",
  "nextdotjs",
  "nodedotjs",
  "hono",
  "supabase",
  "firebase",
  "redis",
  "postgresql",
  "vite",
  "turborepo",
  "hoppscotch",
  "figma",
  "githubactions",
  "arduino",
  "raspberrypi",
  "vercel",
  "netlify",
  "render",
  "cloudflare",
  "github",
  "twilio",
  "framer",
  "shadcnui",
  "roboflow",
  "opencv",
] as const;

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "categories",
      type: "array",
      of: [
        defineField({
          name: "category",
          type: "object",
          fields: [
            defineField({
              name: "key",
              type: "string",
              validation: (r) => r.required(),
              options: {
                list: [
                  "languages",
                  "libraries",
                  "frameworks",
                  "databases",
                  "tools",
                  "hardware",
                  "platforms",
                ],
              },
            }),
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "skills",
              type: "array",
              of: [
                defineField({
                  name: "skill",
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
          ],
          preview: {
            select: { title: "label" },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Skills" }),
  },
});
