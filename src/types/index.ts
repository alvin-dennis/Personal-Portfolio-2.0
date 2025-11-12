import {
  CodeXmlIcon,
  Globe,
  GraduationCapIcon,
} from "lucide-react";
import { GiMoneyStack } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";

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

export type SkillProp = string | { name: string; icon: React.ElementType };

export interface Skills {
  languages: SkillProp[];
  libraries: SkillProp[];
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
  category: string | string[];
  image: string;
  url: string;
  hosted_url: string;
  technologies: SkillProp[];
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

export const iconMap = {
  code: CodeXmlIcon,
  education: GraduationCapIcon,
  community: RiUserCommunityFill,
  finance: GiMoneyStack,
  operations: Globe,
} as const;

export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: string;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLink: string;
  companyLogo?: string;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};

export interface Contact {
  email: string;
  cal_link: string;
}
