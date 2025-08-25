import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, FileIcon } from "@radix-ui/react-icons";

export const SITE_CONFIG = {
  title: "Alvin Dennis — Builder | Maker | Manager",
  author: "Alvin Dennis",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  lang: "en",
  siteLogo: "/logo.png",
  socialLinks: [
    { text: "Github", href: "https://github.com/alvin-dennis/", icon: GitHubLogoIcon },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/alvin-dennis-0a70ba163/", icon: LinkedInLogoIcon },
    { text: "Instagram", href: "https://www.instagram.com/_a.lvin._/", icon: InstagramLogoIcon },
  ],
  socialImage: "/alvin-og.png",
  canonicalURL: "https://alvindennis.tech",
};

export const SITE_CONTENT = {
  hero: {
    name: "Alvin Dennis",
    specialty: "Developer & Community Builder",
    summary: `
      Hi, I’m Alvin Dennis, a developer and student passionate about building impactful digital solutions. My work spans web development, IoT, and community leadership. I enjoy collaborating on open source and mentoring others in tech.
    `,
    email: "alvindennis80@gmail.com",
    resume: {
      text: "Resume",
      href: "https://resume.alvindennis.tech/",
      icon: FileIcon,
    },
    image: "/alvin.webp",
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
      developed:
        "Designed and built an IoT-based elephant monitoring system that detects elephants and alerts people in real-time using computer vision and machine learning techniques, enhancing wildlife safety and community awareness.",
    },
    {
      name: "Git Time Machine",
      description:
        "Interactive visualization platform for Git repository analysis that provides chronological mapping of project history.",
      url: "https://github.com/alvin-dennis/git-time-machine",
      hosted_url: "https://github.com/vHackBots/Git-Time-Machine",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "NPM", "GitHub API"],
      developed:
        "Implemented a repository visualization application leveraging GitHub API integration that presents commit history through an interactive timeline interface, facilitating efficient codebase evolution analysis.",
    },
    {
      name: "Personal Portfolio",
      description:
        "Professional developer portfolio utilizing modern bento grid layout with responsive design and accessibility features.",
      url: "https://github.com/alvin-dennis/Personal-Portfolio-2.0",
      hosted_url: "https://alvindennis.tech/",
      technologies: ["Nextjs", "Tailwind CSS", "Shadcn", "TypeScript"],
      developed:
        "Engineered a responsive TypeScript-based Next.js application featuring theme customization, component-based architecture, and optimized performance metrics to effectively showcase technical expertise and project accomplishments.",
    },
    {
      name: "DevMate",
      description:
        "DevMate is a chatbot that assists developers in finding the code they need.",
      url: "https://github.com/alvin-dennis/DevMate",
      hosted_url: "https://github.com/alvin-dennis/DevMate",
      technologies: ["Python", "Pathway", "OpenAI", "Streamlit"],
      developed:
        "Built an AI-powered coding assistant that integrates OpenAI's language models with a custom interface to provide contextualized code suggestions and explanations.",
    },
  ],
};
