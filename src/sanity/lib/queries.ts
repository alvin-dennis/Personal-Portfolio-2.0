import { defineQuery } from "next-sanity";
import type {
  Education,
  Experience,
  HeroProp,
  Projects,
  SiteConfig,
  SkillProp,
  Skills,
  Testimonial,
} from "@/types";
import { client } from "./client";
import { urlFor } from "./image";

const siteSettingsQuery = defineQuery(`*[_id == "siteSettings"][0]`);
const heroQuery = defineQuery(`*[_id == "hero"][0]`);
const skillsQuery = defineQuery(`*[_id == "skills"][0]`);
const experienceQuery = defineQuery(`*[_type == "experience"] | order(order asc)`);
const educationQuery = defineQuery(`*[_type == "education"] | order(order asc)`);
const projectsQuery = defineQuery(
  `*[_type == "project"] | order(order asc){..., category[]->{title}}`,
);
const projectBySlugQuery = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{..., category[]->{title}}`,
);
const testimonialsQuery = defineQuery(`*[_type == "testimonial"] | order(order asc)`);

// 1 hour Next.js data-cache revalidation, tagged per content type so a
// future Sanity webhook can call revalidateTag() to bust it on publish.
const revalidate = (tag: string) => ({ next: { revalidate: 3600, tags: [tag] } });

interface RawPosition {
  _key: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: string;
  skills?: string[];
  isExpanded?: boolean;
}

interface RawExperience {
  _id: string;
  companyName: string;
  companyLink: string;
  companyLogo?: Parameters<typeof urlFor>[0];
  isCurrentEmployer?: boolean;
  positions: RawPosition[];
}

interface RawEducation {
  name: string;
  location: string;
  position: string;
  start: string;
  end: string;
  link: string;
  logo?: Parameters<typeof urlFor>[0];
}

interface RawProject {
  name: string;
  slug: { current: string };
  description: string;
  category: { title: string }[];
  image?: Parameters<typeof urlFor>[0] | null;
  url: string;
  hosted_url: string;
  technologies: { name: string; icon: string }[];
  freelance?: boolean;
}

interface RawTestimonial {
  _id: string;
  testimonial: string;
  by: string;
}

export async function getSiteSettings(): Promise<SiteConfig> {
  const settings = await client.fetch(siteSettingsQuery, {}, revalidate("siteSettings"));
  return {
    title: settings.title,
    author: settings.author,
    description: settings.description,
    siteLogo: settings.siteLogo,
    socialImage: settings.socialImage,
    menuItems: settings.menuItems.map((item: { label: string; href: string }) => ({
      label: item.label,
      href: item.href,
    })),
    socialLinks: settings.socialLinks.map((link: { text: string; href: string; icon: string }) => ({
      text: link.text,
      href: link.href,
      icon: link.icon,
    })),
    contact: settings.contact,
  };
}

export async function getHero(): Promise<HeroProp> {
  const hero = await client.fetch(heroQuery, {}, revalidate("hero"));
  return {
    name: hero.name,
    image: urlFor(hero.image).width(1200).url(),
    currentWork: hero.currentWork,
    summary: hero.summary,
    stats: hero.stats,
  };
}

export async function getSkills(): Promise<Skills> {
  const skills = await client.fetch(skillsQuery, {}, revalidate("skills"));
  const result: Record<string, SkillProp[]> = {};
  for (const category of skills.categories) {
    result[category.key] = category.skills.map((skill: { name: string; icon: string }) => ({
      name: skill.name,
      icon: skill.icon,
    }));
  }
  return result as unknown as Skills;
}

export async function getExperience(): Promise<Experience[]> {
  const experience: RawExperience[] = await client.fetch(
    experienceQuery,
    {},
    revalidate("experience"),
  );
  return experience.map((company) => ({
    id: company._id,
    companyName: company.companyName,
    companyLink: company.companyLink,
    companyLogo: company.companyLogo ? urlFor(company.companyLogo).width(200).url() : undefined,
    isCurrentEmployer: company.isCurrentEmployer,
    positions: company.positions.map((position) => ({
      id: position._key,
      title: position.title,
      employmentPeriod: position.employmentPeriod,
      employmentType: position.employmentType,
      description: position.description,
      icon: position.icon,
      skills: position.skills,
      isExpanded: position.isExpanded,
    })),
  }));
}

export async function getEducation(): Promise<Education[]> {
  const education: RawEducation[] = await client.fetch(educationQuery, {}, revalidate("education"));
  return education.map((edu) => ({
    name: edu.name,
    location: edu.location,
    position: edu.position,
    start: edu.start,
    end: edu.end,
    link: edu.link,
    logo: edu.logo ? urlFor(edu.logo).width(200).url() : "",
  }));
}

export async function getProjects(): Promise<Projects[]> {
  const projects: RawProject[] = await client.fetch(projectsQuery, {}, revalidate("project"));
  return projects.map((project) => ({
    name: project.name,
    slug: project.slug.current,
    description: project.description,
    category: project.category.map((c: { title: string }) => c.title),
    image: project.image ? urlFor(project.image).width(1600).url() : null,
    url: project.url,
    hosted_url: project.hosted_url,
    technologies: project.technologies.map((tech) => ({ name: tech.name, icon: tech.icon })),
    freelance: project.freelance,
  }));
}

export async function getProjectBySlug(slug: string): Promise<Projects | null> {
  const project: RawProject | null = await client.fetch(
    projectBySlugQuery,
    { slug },
    revalidate("project"),
  );
  if (!project) return null;
  return {
    name: project.name,
    slug: project.slug.current,
    description: project.description,
    category: project.category.map((c: { title: string }) => c.title),
    image: project.image ? urlFor(project.image).width(1600).url() : null,
    url: project.url,
    hosted_url: project.hosted_url,
    technologies: project.technologies.map((tech) => ({ name: tech.name, icon: tech.icon })),
    freelance: project.freelance,
  };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials: RawTestimonial[] = await client.fetch(
    testimonialsQuery,
    {},
    revalidate("testimonial"),
  );
  return testimonials.map((t) => ({
    id: t._id,
    testimonial: t.testimonial,
    by: t.by,
  }));
}
