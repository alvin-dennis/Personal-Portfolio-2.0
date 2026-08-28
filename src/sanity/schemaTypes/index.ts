import { type SchemaTypeDefinition } from "sanity";
import education from "./education";
import experience from "./experience";
import hero from "./hero";
import project from "./project";
import projectCategory from "./project-category";
import siteSettings from "./site-settings";
import skills from "./skills";
import testimonial from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, hero, skills, experience, education, projectCategory, project, testimonial],
};
