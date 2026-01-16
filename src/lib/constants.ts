import {
  SiJavascript,
  SiPython,
  SiMarkdown,
  SiYaml,
  SiLatex,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiFigma,
  SiOpencv,
  SiNodedotjs,
  SiHono,
  SiTrpc,
  SiDrizzle,
  SiSupabase,
  SiFirebase,
  SiTurborepo,
  SiHoppscotch,
  SiGithubactions,
  SiRoboflow,
  SiVercel,
  SiNetlify,
  SiRender,
  SiCloudflare,
  SiTwilio,
  SiArduino,
  SiRaspberrypi,
  SiTypescript,
  SiShadcnui,
  SiFramer,
  SiJekyll,
  SiPostgresql,
  SiVite,
  SiPrisma,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import {
  FaBrain,
  FaFileAlt,
  FaGlobe,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";

export const SITE_CONFIG = {
  title: "Alvin Dennis — Builder | Maker | Manager",
  author: "Alvin Dennis",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  siteLogo: "/assets/common/logo-nobg.png",
  socialLinks: [
    {
      text: "Resume",
      href: "https://resume.alvinn.me/",
      icon: FaFileAlt,
    },
    {
      text: "Github",
      href: "https://github.com/alvin-dennis/",
      icon: SiGithub,
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/alvindennis/",
      icon: SiLinkedin,
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/_a.lvin._/",
      icon: SiInstagram,
    },
  ],
  socialImage: "/assets/og.webp",
  canonicalURL: "https://alvinn.me",
  contact: {
    email: "alvindennis80@gmail.com",
    cal_link: "https://cal.com/alvindennis",
  },
};

export const SITE_CONTENT = {
  hero: {
    name: "Alvin Dennis",
    summary: `Developing human experiences in code`,
    currentWork: "Frontend Intern at µLearn",
    image:
      "https://mulearn.org/muback-media/user/profile/65f1f78e-20bf-4265-bb44-30ec9cd6b5cc.png",
  },
  skills: {
    languages: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Markdown", icon: SiMarkdown },
      { name: "YAML", icon: SiYaml },
      { name: "LaTeX", icon: SiLatex },
    ],
    libraries: [
      { name: "React", icon: SiReact },
      { name: "Astro", icon: SiAstro },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Prisma", icon: SiPrisma },
      { name: "oRPC", icon: SiTrpc },
    ],
    frameworks: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Jekyll", icon: SiJekyll },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Hono.js", icon: SiHono },
    ],
    databases: [
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "Upstash Redis", icon: DiRedis },
      { name: "Postgresql", icon: SiPostgresql },
    ],
    tools: [
      { name: "Vite", icon: SiVite },
      { name: "Turborepo", icon: SiTurborepo },
      { name: "HoppScotch", icon: SiHoppscotch },
      { name: "Figma", icon: SiFigma },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "RoboFlow", icon: SiRoboflow },
    ],
    hardware: [
      { name: "Arduino", icon: SiArduino },
      { name: "Raspberry Pi", icon: SiRaspberrypi },
    ],
    platforms: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Github", icon: SiGithub },
      { name: "Twilio", icon: SiTwilio },
    ],
  },
  experience: [
    {
      id: "foodo-ai",
      companyName: "Foodo AI",
      companyLink: "https://foodo.ai",
      companyLogo: "https://foodo.ai/logo.svg",
      positions: [
        {
          id: "foodo-tech-001",
          title: "Frontend Developer",
          employmentPeriod: "01.2026 — Present",
          employmentType: "Internship",
          icon: "code",
          description: `- Engineered responsive and high-performance web applications using Next.js and React.
- Designed and implemented reusable, accessible UI components with Shadcn, styled with Tailwind CSS for consistency.
- Streamlined state management and data fetching using TanStack Query, improving app efficiency.
- Collaborated with cross-functional teams to optimize code quality, implement best practices, and deliver robust features.`,
          skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Shadcn",
            "TanStack Query",
            "TypeScript",
            "Responsive Design",
            "UI/UX Optimization",
          ],

          isExpanded: true,
        },
      ],
      isCurrentEmployer: true,
    },
    {
      id: "mulearn-foundation",
      companyName: "µLearn Foundation",
      companyLink: "https://mulearn.org",
      companyLogo: "https://github.com/gtech-mulearn.png",
      positions: [
        {
          id: "mulearn-tech-001",
          title: "Frontend Developer",
          employmentPeriod: "12.2025 — Present",
          employmentType: "Internship",
          icon: "code",
          description: `- Developed and maintained responsive web applications using Next.js and React.
- Built reusable and accessible UI components with Shadcn and styled them with Tailwind CSS.
- Managed state and data fetching efficiently using TanStack Query and related tools.
- Collaborated with the team to optimize performance, implement best practices, and deliver high-quality features.`,
          skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Shadcn",
            "TanStack Query",
            "TypeScript",
            "Responsive Design",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: true,
    },
    {
      id: "metaloom",
      companyName: "MetaLoom",
      companyLink: "https://metaloom.in",
      companyLogo: "https://github.com/MetaLoomLabs.png",
      positions: [
        {
          id: "metaloom-frontend-001",
          title: "Frontend Engineer",
          employmentPeriod: "07.2025 — 01.2026",
          employmentType: "Full-time",
          icon: "code",
          description: `- Led multiple projects end-to-end, turning ideas into live features under tight timelines.
- Built and scaled full-stack solutions using modern web technologies, optimizing for speed and reliability.
- Reviewed and shipped code rapidly while maintaining quality and best practices.
- Mentored teammates and interns, helping them take ownership and grow as engineers.
- Collaborated closely with cross-functional teams to deliver products that make real impact.`,
          skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Shadcn",
            "Supabase",
            "Technical Leadership",
            "Team Management",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "tinkerhub",
      companyName: "Tinkerhub",
      companyLink: "https://tinkerhub.org",
      companyLogo: "https://github.com/tinkerhub.png",
      positions: [
        {
          id: "tinkerhub-intern-001",
          title: "Community Management",
          employmentPeriod: "12.2024 — 05.2025",
          employmentType: "Internship",
          icon: "community",
          description: `- Managed community initiatives, fostering engagement across community members.
- Coordinated online and offline events, improving participation rates.
- Streamlined volunteer onboarding and communication channels.
- Collected and analyzed member feedback to enhance community programs and activities.`,
          skills: [
            "Community Management",
            "Event Coordination",
            "Engagement",
            "Communication",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "radio-sjcet",
      companyName: "Radio Community SJCET",
      companyLink: "https://radiocommunity.sjcetpalai.ac.in",
      companyLogo: "https://github.com/Radio-Community-SJCET.png",
      positions: [
        {
          id: "radio-sjcet-ops-001",
          title: "Operations Lead",
          employmentPeriod: "09.2024 — 03.2025",
          employmentType: "Part-time",
          icon: "operations",
          description: `- Managed daily operations, ensuring smooth broadcasting and event scheduling.
- Implemented efficient workflow systems, reducing operational delays.
- Coordinated with volunteers and technical teams for timely execution of radio shows.`,
          skills: ["Operations", "Management", "Scheduling", "Coordination"],
          isExpanded: false,
        },
        {
          id: "radio-sjcet-tech-002",
          title: "Technical Lead",
          employmentPeriod: "11.2023 — 08.2024",
          employmentType: "Part-time",
          icon: "code",
          description: `- Oversaw technical aspects of the community.
- Managed equipment setup, software deployment, and technical troubleshooting.
- Led a technical team to improve broadcast quality and reliability.
- Developed internal documentation and training guides for technical processes.`,
          skills: [
            "Technical Leadership",
            "Team Management",
            "Troubleshooting",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "gtech-mulearn-sjc",
      companyName: "Gtech Mulearn SJCET",
      companyLink: "https://mulearn.org",
      companyLogo: "https://github.com/mulearn-sjc.png",
      positions: [
        {
          id: "gtech-mulearn-campus-001",
          title: "Campus Co-Lead",
          employmentPeriod: "06.2024 — 02.2025",
          employmentType: "Part-time",
          icon: "community",
          description: `- Co-led campus initiatives to promote educational and tech-based projects.
- Organized workshops and events, engaging over 100 students.
- Supported cross-campus collaborations and project incubations.
- Mentored students on project execution, technical skills, and leadership.`,
          skills: [
            "Leadership",
            "Community Management",
            "Event Organization",
            "Mentorship",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "startup-iedc",
      companyName: "Startup Bootcamp SJCET-IEDC",
      companyLink: "https://iedc.sjcet.in",
      companyLogo: "https://github.com/IEDC-SJCET.png",
      positions: [
        {
          id: "startup-iedc-cfo-001",
          title: "Chief Finance Officer",
          employmentPeriod: "09.2023 — 03.2025",
          employmentType: "Part-time",
          icon: "finance",
          description: `- Managed financial operations, budgeting, and resource allocation for startup bootcamp programs.
- Provided strategic financial guidance to project leads and student entrepreneurs.
- Coordinated funding requests, sponsorships.`,
          skills: [
            "Finance Management",
            "Budgeting",
            "Leadership",
            "Financial Planning",
          ],
          isExpanded: false,
        },
        {
          id: "startup-iedc-tech-002",
          title: "Technical Officer",
          employmentPeriod: "06.2022 — 08.2023",
          employmentType: "Part-time",
          icon: "code",
          description: `- Provided technical support to startup projects and events.
- Coordinated project development efforts and ensured technical feasibility.
- Assisted in prototype development, testing, and deployment.`,
          skills: [
            "Technical Support",
            "Project Coordination",
            "Prototyping",
            "Training",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
  ],
  education: [
    {
      name: "St. Josephs College of Engineering & Technology",
      location: "Palai, Kerala, India",
      position: "B.Tech in Electrical & Electronics Engineering",
      start: "November 2021",
      end: "July 2025",
      link: "https://sjcetpalai.ac.in/",
      logo: "https://sjcetpalai.ac.in/wp-content/uploads/2019/01/SJCET-LOGO-Orginal-1200x1161.png",
    },
  ],
  categories: [
    { value: "all", label: "All", icon: FaLayerGroup },
    { value: "frontend", label: "Frontend", icon: FaGlobe },
    { value: "backend", label: "Backend", icon: FaServer },
    { value: "genai", label: "GenAI", icon: FaBrain },
    { value: "hardware", label: "Hardware", icon: HiMiniCpuChip },
  ],
  projects: [
    {
      name: "Illuµnate",
      description:
        "Designed and developed a Christmas-themed website as part of Illuµnate by µLearn. Focused on optimizing performance, ensuring smooth and stable interactions. Delivered a user-friendly experience with attention to responsive design and accessibility",
      category: "Frontend",
      image: "/projects/illumunate.webp",
      url: "https://github.com/gtech-mulearn/Illumunate",
      hosted_url: "https://illumunate.mulearn.org",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "µLearn Home",
      description:
        "Contributed to the development of the μLearn homepage, focusing on a clean, responsive UI. Optimized performance through efficient component structuring and improved loading behavior to ensure a smooth, stable, and user-friendly experience",
      category: "Frontend",
      image: "/projects/mulearn.webp",
      url: "https://github.com/gtech-mulearn/mulearnhome",
      hosted_url: "https://mulearn.org/",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "KUHS-GMC",
      description:
        "Developed the KUHS landing page and results page, using Google Sheets as a CMS for easy result management, ensuring a responsive UI and smooth data handling",
      category: ["Frontend", "Backend"],
      image: "/projects/kuhsgmc.webp",
      url: "https://github.com/alvin-dennis/KUHS-GMC",
      hosted_url: "https://kuhs-gmc.vercel.app/",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "Punarjjani",
      description:
        "Led the end-to-end development of the Punarjjani website, delivering a responsive and user-friendly platform. Collaborated with the team throughout the development process, contribute to performance optimization, ensuring a seamless user experience.",
      category: "Frontend",
      image: "/projects/punarjjani.webp",
      url: "https://github.com/alvin-dennis/Punarjjani",
      hosted_url: "https://punarjjani.vercel.app/",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "Beyond Syllabus",
      description:
        "Built the Beyond syllabus chat UI and set up the backend to support real-time interactions. Worked across both frontend and backend, focusing on performance improvements, optimization, and smooth user experience.",
      category: ["Frontend", "Backend", "GenAI"],
      image: "/projects/beyondsyllabus.webp",
      url: "https://github.com/The-Purple-Movement/Beyond-Syllabus",
      hosted_url: "https://beyondsyllabus.in/",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Elysia", icon: SiNodedotjs },
      ],
    },
    {
      name: "MetaLoom",
      description:
        "Developed and launched the Metaloom website from start to finish, focusing on responsiveness, usability, and performance. Worked with the team to refine features and maintain a seamless experience across devices.",
      category: "Frontend",
      image: "/projects/metaloom.webp",
      url: "https://github.com/metaloomhq/metaloom",
      hosted_url: "https://metaloom.in/",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "Personal Portfolio",
      description:
        "Developed a professional developer portfolio featuring a modern, minimal layout. Ensured full responsiveness across devices with optimized performance. Implemented accessibility best practices for an inclusive user experience",
      category: "Frontend",
      image: "/projects/portfolio.webp",
      url: "https://github.com/alvin-dennis/alvin-dennis.github.io",
      hosted_url: "https://alvinn.me/",
      technologies: [
        { name: "Astro", icon: SiAstro },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "BuilderClan",
      description:
        "Contributed to BuilderClan homepage by building and optimizing the revamped frontend. Delivered a responsive, user-friendly interface with improved performance and modern design practices",
      category: "Frontend",
      image: "/projects/builderclan.webp",
      url: "https://github.com/BuilderClan/builderclan-site",
      hosted_url: "https://builderclan.org/",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
      ],
    },
    {
      name: "EleGuard",
      description:
        "Built the software components for EleGuard, enabling real-time elephant monitoring with hazard detection and alert notifications to support wildlife safety.",
      category: "Hardware",
      image: "",
      url: "https://github.com/alvin-dennis/EleGuard",
      hosted_url: "https://github.com/alvin-dennis/EleGuard",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "Raspberry Pi", icon: SiRaspberrypi },
        { name: "Roboflow", icon: SiRoboflow },
        { name: "OpenCV", icon: SiOpencv },
        { name: "Twilio", icon: SiTwilio },
      ],
    },
  ],
  testimonials: [
    {
      id: 0,
      testimonial:
        "Alvin Dennis brought a clean, user-friendly design to Punarjjani. He completely built our website with great attention to detail and usability, giving our charity a strong and professional digital presence. His dedication and passion for the work really stood out. A pleasure to work with!",
      by: "Hanih PC, President at Punarjjani",
    },
    {
      id: 1,
      testimonial:
        "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
      by: "Dan, CTO at SecureNet",
    },
    {
      id: 2,
      testimonial:
        "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
      by: "Stephanie, COO at InnovateCo",
    },
    {
      id: 3,
      testimonial:
        "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
      by: "Marie, CFO at FuturePlanning",
    },
    {
      id: 4,
      testimonial: "If I could give 11 stars, I'd give 12.",
      by: "Andre, Head of Design at CreativeSolutions",
    },
    {
      id: 5,
      testimonial:
        "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
      by: "Jeremy, Product Manager at TimeWise",
    },
    {
      id: 6,
      testimonial:
        "Took some convincing, but now that we're on COMPANY, we're never going back.",
      by: "Pam, Marketing Director at BrandBuilders",
    },
    {
      id: 7,
      testimonial:
        "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.",
      by: "Daniel, Data Scientist at AnalyticsPro",
    },
    {
      id: 8,
      testimonial: "It's just the best. Period.",
      by: "Fernando, UX Designer at UserFirst",
    },
    {
      id: 9,
      testimonial: "I switched 5 years ago and never looked back.",
      by: "Andy, DevOps Engineer at CloudMasters",
    },
    {
      id: 10,
      testimonial:
        "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!",
      by: "Pete, Sales Director at RevenueRockets",
    },
  ],
};
