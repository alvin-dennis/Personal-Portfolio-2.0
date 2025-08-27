import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaCuttlefish,
  FaMarkdown,
  FaFileCode,
} from "react-icons/fa";

export const SITE_CONFIG = {
  title: "Alvin Dennis — Builder | Maker | Manager",
  author: "Alvin Dennis",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  lang: "en",
  siteLogo: "/logo.png",
  socialLinks: [
    {
      text: "Github",
      href: "https://github.com/alvin-dennis/",
      icon: GitHubLogoIcon,
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/alvin-dennis-0a70ba163/",
      icon: LinkedInLogoIcon,
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/_a.lvin._/",
      icon: InstagramLogoIcon,
    },
  ],
  socialImage: "/alvin-og.png",
  canonicalURL: "https://alvindennis.tech",
  contact: {
    email: "alvindennis80@gmail.com",
    cal_link: "https://cal.com/alvindennis",
  },
};

export const SITE_CONTENT = {
  hero: {
    name: "Alvin Dennis",
    specialty: [
      "Electrical Engineer",
      "Frontend Developer",
      "UI/UX Designer",
      "IoT Enthusiast",
      "Manual Software Tester",
      "Bot Developer",
      "Community Manager",
      "Open Source Enthusiast",
      "Innovator",
    ],
    summary: `
      Builder and Maker, combining technical skills with creative problem-solving to deliver impactful, user-focused solutions.
    `,
    email: "alvindennis80@gmail.com",
    resume: {
      text: "Resume",
      href: "https://resume.alvindennis.tech/",
    },
    image: "/alvin.webp",
  },
  skills: {
    languages: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "C", icon: FaCuttlefish },
      { name: "Markdown", icon: FaMarkdown },
      { name: "LaTeX", icon: FaFileCode },
    ],
    frameworks: ["React", "Vue", "Astro", "Next.js", "Node.js", "Tailwind CSS"],
    databases: ["PostgreSQL", "Supabase", "Firebase", "Prisma"],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
      "PyCharm",
      "Bash",
      "PowerShell",
      "Cloudflare",
      "Cloudflare Workers",
      "OpenCV",
      "Vercel",
      "Netlify",
      "Notion",
      "GitHub Actions",
      "Anaconda",
    ],
    hardware: ["Arduino", "Raspberry Pi"],
    platforms: ["Linux Mint", "Arch Linux", "Bun"],
    other: ["Bot", "MATLAB"],
  },
  experience: [
    {
      company: "MetaLoom",
      position: "Frontend Developer",
      start: "Jul 2025",
      end: "Present",
      link: "https://metaloom.vercel.app/",
      logo: "https://github.com/MetaLoomLabs.png",
    },
    {
      company: "vHackBotz",
      position: "Frontend Developer",
      start: "July 2025",
      end: "Present",
      link: "https://vhackbotz.vercel.app/",
      logo: "https://github.com/vhackbotz.png",
    },
    {
      company: "BuilderClan",
      position: "Technical Lead",
      start: "January 2025",
      end: "Present",
      link: "https://builderclan.org/",
      logo: "https://github.com/builderclan.png",
    },
    {
      company: "Tinkerhub",
      position: "Community Management Intern",
      start: "December 2024",
      end: "May 2025",
      link: "https://app.tinkerhub.org/",
      logo: "https://github.com/tinkerhub.png",
    },
    {
      company: "Radio Community SJCET",
      position: "Operations Lead",
      start: "September 2024",
      end: "March 2025",
      link: "https://radiocommunity.sjcetpalai.ac.in",
      logo: "https://github.com/Radio-Community-SJCET.png",
    },
    {
      company: "Gtech Mulearn SJCET",
      position: "Campus Co-Lead",
      start: "June 2024",
      end: "February 2025",
      link: "https://mulearn.sjcetpalai.ac.in",
      logo: "https://github.com/mulearn-sjc.png",
    },
    {
      company: "Startup Bootcamp SJCET-IEDC",
      position: "Chief Finance Officer",
      start: "September 2023",
      end: "March 2025",
      link: "https://iedc.sjcetpalai.ac.in/",
      logo: "https://github.com/IEDC-SJCET.png",
    },
    {
      company: "Radio Community SJCET",
      position: "Technical Lead",
      start: "November 2023",
      end: "August 2024",
      link: "https://radiocommunity.sjcetpalai.ac.in",
      logo: "https://github.com/Radio-Community-SJCET.png",
    },
    {
      company: "Gtech Mulearn",
      position: "QA IG Lead Intern",
      start: "October 2023",
      end: "March 2024",
      link: "https://app.mulearn.org",
      logo: "https://github.com/gtech-mulearn.png",
    },
    {
      company: "Startup Bootcamp SJCET-IEDC",
      position: "Technical Officer",
      start: "June 2022",
      end: "August 2023",
      link: "https://iedc.sjcetpalai.ac.in/",
      logo: "https://github.com/IEDC-SJCET.png",
    },
  ],
  education: [
    {
      name: "St. Josephs College of Engineering & Technology",
      location: "Palai, Kerala, India",
      position: "B.Tech in Electrical & Electronics Engineering",
      start: "November 2021",
      link: "https://sjcetpalai.ac.in/",
      logo: "https://sjcetpalai.ac.in/wp-content/uploads/2019/01/SJCET-LOGO-Orginal-1200x1161.png",
      end: "July 2025",
    },
  ],
  projects: [
    {
      name: "EleGuard",
      description:
        "Smart elephant monitoring system with real-time hazard detection and notification capabilities.",
      url: "https://github.com/alvin-dennis/EleGuard",
      hosted_url: "https://github.com/alvin-dennis/EleGuard",
      technologies: ["Python", "Raspberry Pi", "Roboflow", "OpenCV", "Twilio"],
    },
    {
      name: "Personal Portfolio",
      description:
        "Professional developer portfolio utilizing modern bento grid layout with responsive design and accessibility features.",
      url: "https://github.com/alvin-dennis/Personal-Portfolio-2.0",
      hosted_url: "https://alvindennis.tech/",
      technologies: ["Nextjs", "Tailwind CSS", "Shadcn", "TypeScript"],
    },
    {
      name: "DevMate",
      description:
        "DevMate is a chatbot that assists developers in finding the code they need.",
      url: "https://github.com/alvin-dennis/DevMate",
      hosted_url: "https://github.com/alvin-dennis/DevMate",
      technologies: ["Python", "Pathway", "OpenAI", "Streamlit"],
    },
  ],
};
