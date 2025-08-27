export interface SiteConfig extends Navbar {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string; icon: React.ElementType }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  header: Navbar[];
  hero: Hero;
  education: Education[];
  experience: Experience[];
  projects: Projects;
}

export interface Navbar {
  siteLogo: string;
  socialLinks: { text: string; href: string; icon: React.ElementType }[];
}

export interface Hero {
  name: string;
  image: string;
  specialty: string[];
  summary: string;
  email: string;
  resume: { text: string; href: string; icon: React.ElementType };
}

export type SkillProp = string | { name: string; icon?: React.ElementType };

export interface Skills {
  languages: SkillProp[];
  frameworks: SkillProp[];
  databases: SkillProp[];
  tools: SkillProp[];
  hardware: SkillProp[];
  platforms: SkillProp[];
}

export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Projects {
  name: string;
  description: string;
  url: string;
  hosted_url: string;
  technologies: string[];
}

export interface Education {
  name: string;
  location: string;
  position: string;
  start: string;
  link: string;
  logo: string;
  end: string;
}

export interface Experience {
  company: string;
  position: string;
  start: string;
  end: string;
  link: string;
  logo: string;
}

export interface Contact {
  email: string;
  cal_link: string;
}
