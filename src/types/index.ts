export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  header: HeaderProps;
  hero: HeroProps;
  about: AboutProps;
  education: Education[];
  experience: Experience[];
  projects: Projects;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
  behance: string;
  resume: string;
}

export interface Projects {
  name: string;
  description: string;
  url: string;
  hosted_url: string;
  technologies: string[];
  developed: string;
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

