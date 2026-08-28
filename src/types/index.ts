import { CodeXmlIcon, Globe, GraduationCapIcon } from "lucide-react";
import { GiMoneyStack } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";

export interface SiteConfig extends Navbar {
  title: string;
  description: string;
  author: string;
  socialLinks: { text: string; href: string; icon: string }[];
  socialImage: string;
  contact: Contact;
}

export interface Navbar {
  siteLogo: string;
  socialLinks: { text: string; href: string; icon: string }[];
  menuItems: { label: string; href: string }[];
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroProp {
  name: string;
  image: string;
  currentWork?: string;
  summary: string;
  stats?: HeroStat[];
}

export type SkillProp = string | { name: string; icon: string };

export interface Skills {
  languages: SkillProp[];
  libraries: SkillProp[];
  frameworks: SkillProp[];
  databases: SkillProp[];
  tools: SkillProp[];
  hardware: SkillProp[];
  platforms: SkillProp[];
}

export interface Projects {
  name: string;
  description: string;
  category: string | string[];
  image: string | null;
  url: string;
  hosted_url: string;
  technologies: SkillProp[];
  freelance?: boolean;
}

export interface Testimonial {
  id: string;
  testimonial: string;
  by: string;
}

export interface TestimonialCard {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
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
