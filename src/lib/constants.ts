import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-in' },
]

// Social Media Links
export const LINKS = {
  github: 'https://github.com/alvin-dennis',
  linkedin: 'https://www.linkedin.com/in/alvin-dennis-0a70ba163/',
  mail: 'mailto:alvindennis80@gmail.com',
  instagram: 'https://www.instagram.com/_a.lvin._/',
}

// Global
export const SITE: Site = {
  TITLE: 'Portfolio',
  DESCRIPTION:
    'My Personal Portfolio based on Astro and Tailwind CSS',
  AUTHOR: 'Alvin Dennis',
}

// Projects Page
export const PROJECTS = [
  {
    title: 'Portfolio',
    description: 'Portfolio Website',
    link: '',
  }
]


// Certifications Page
export const CERTIFICATIONS = [
  {
    title: 'Postman Student Expert',
    institution: 'Postman',
    link: 'https://badgr.com/public/assertions/uD_pSvk3QLebFhR70fBk9g',
    date: '2024',
  },
  {
    title: 'Responsive Web Design',
    institution: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/alvin-dennis/responsive-web-design',
  },
  {
    title: 'Front-End Web Development',
    institution: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/alvin-dennis/front-end-libraries',
  },
  {
    title: 'GitHub Foundations',
    institution: 'Microsoft Learn',
    link: 'https://learn.microsoft.com/en-us/collections/o1njfe825p602p?&sharingId=D29021379D713BFF',
  },
  {
    title: 'Introduction to Packet Tracer',
    institution: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/bc3d602d-13a3-44a4-823a-a429f43945b2/public_url',
  },
]

// Education Page
export const EDUCATION = [
  {
    name: 'St. Josephs College of Engineering & Technology',
    location: 'Sharjah, United Arab Emirates',
    position: 'B.Tech in Electrical & Electronics Engineering',
    start: '2021',
    link: 'https://sjcetpalai.ac.in/',
    end: 'Present',
    tasks: [
    ],
  },
  {
    name: 'Sharjah Indian School',
    location: 'Sharjah, United Arab Emirates',
    position: 'Higher Secondary Education',
    link: 'https://sisjuwaiza.com/',
    start: '2019',
    end: '2021',
    tasks: [
    ],
  },
  {
    name: 'Sharjah Indian School',
    link: 'https://sisjuwaiza.com/',
    location: 'Sharjah, United Arab Emirates',
    position: 'High School Education',
    start: '2015',
    end: '2019',
    tasks: [
    ],
  },
]

// Experience Page
export const EXPERIENCE = [
  {
    company: 'Radio Community SJCET',
    position: 'Operations Lead',
    start: 'September 2024',
    end: 'Present',
    link: 'https://radiocommunitysjcet.vercel.app',
    tasks: [
      'Managed the operations team, organized events, and hosted workshops.'
    ],
  },
  {
    company: 'PHICSIT',
    position: 'Frontend Intern',
    start: 'August 2024',
    end: 'Present',
    link: 'https://phicsit.in/',
    tasks: [
      'Developed user-friendly web interfaces, collaborated with designers and developers, and optimized applications for performance and accessibility.'
    ],
  },

  {
    company: 'Gtech Mulearn SJCET',
    position: 'Campus Co-Lead',
    start: 'June 2024',
    end: 'Present',
    link: 'https://mulearn@sjcetpalai.ac.in',
    tasks: [
      'Co-led campus initiatives, managed QA Interest Group, and organized events and bootcamps.'
    ],
  },
  {
    company: 'Startup Bootcamp SJCET-IEDC',
    position: 'Chief Finance Officer',
    start: 'September 2023',
    end: 'Present',
    link: 'https://iedc.sjcetpalai.ac.in/',
    tasks: [
      'Managed finances, organized events, and hosted workshops.'
    ],
  },
  {
    company: 'PHICSIT',
    position: 'Open-Source Contributor',
    start: 'March 2024',
    end: 'May 2024',
    link: 'https://phicsit.in/',
    tasks: [
      'Contributed to open-source projects, mentored students, and actively participated in hackathons.'
    ],
  },
  {
    company: 'Gtech Mulearn SJCET',
    position: 'Media Team & IoT IG Lead',
    start: 'December 2023',
    end: 'June 2024',
    link: 'https://mulearn@sjcetpalai.ac.in',
    tasks: [
      'Led the IoT Interest Group, managed the Media Team, and coordinated the organization of workshops.'
    ],
  },
  {
    company: 'Radio Community SJCET',
    position: 'Technical Lead',
    start: 'November 2023',
    end: 'August 2024',
    link: 'https://radiocommunitysjcet.vercel.app',
    tasks: [
      'Managed the technical team, organized events, and hosted workshops.'
    ],
  },
  {
    company: 'Gtech Mulearn',
    position: 'QA IG Lead Intern',
    start: 'October 2023',
    end: 'March 2024',
    link: 'https://mulearn.org',
    tasks: [
      'Led quality assurance initiatives, facilitated testing processes, created tasks and mentored members in best practices for software quality.'
    ],
  },
  {
    company: 'Startup Bootcamp SJCET-IEDC',
    position: 'Technical Officer',
    start: 'June 2022',
    end: 'August 2023',
    link: 'https://iedc.sjcetpalai.ac.in/',
    tasks: [
      'Managed the technical team, organized events, and facilitated workshops.'
    ],
  },
]
