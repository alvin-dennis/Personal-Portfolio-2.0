export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string; icon: React.ElementType }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  header: HeaderProps;
  hero: HeroProps;
  education: Education[];
  experience: Experience[];
  projects: Projects;
}

export interface HeaderProps {
  siteLogo: string;
  socialLinks: { text: string; href: string; icon: React.ElementType }[];
}

export interface HeroProps {
  name: string;
  image: string;
  specialty: string;
  summary: string;
  email: string;
  resume: { text: string; href: string; icon: React.ElementType };
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
