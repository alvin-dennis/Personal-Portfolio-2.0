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
    title: 'ISTQB Foundation Level',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
  },
  {
    title: 'GitHub Foundations',
    institution: 'Microsoft Learn',
    link: 'https://learn.microsoft.com/en-us/collections/o1njfe825p602p?&sharingId=D29021379D713BFF',
  },
  {
    title: 'cat linux.txt',
    institution: 'TryHackMe',
    link: 'https://tryhackme.com/p/alvindennis80',
  },
  {
    title: 'OWASP Top 10',
    institution: 'TryHackMe',
    link: 'https://tryhackme.com/p/alvindennis80',
  },
  {
    title: 'Pentesting Principles',
    institution: 'TryHackMe',
    link: 'https://tryhackme.com/p/alvindennis80',
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
    company: 'Gtech Mulearn SJCET',
    position: 'Media Team & IoT IG Lead',
    start: '2024',
    end: 'Present',
    link: 'https://mulearn@sjcetpalai.ac.in',
    tasks: [
      'Lead the IoT Interest Group',
      'Managed the Media Team',
      'Organized Workshops',
    ],
  },
  {
    company: 'PHICSIT',
    position: 'Open-Source Contributor',
    start: '2024',
    end: 'Present',
    link: 'https://phicsit.in/',
    tasks: [
      'Contributed to Open-Source Projects',
      'Mentored Students',
      'Participated in Hackathons',
    ],
  },
  {
    company: 'Radio Community SJCET',
    position: 'Technical Lead',
    start: '2023',
    end: 'Present',
    link: '',
    tasks: [
      'Managed the Technical Team',
      'Organized Events',
      'Hosted Workshops',
    ],
  },
  {
    company: 'Startup Bootcamp SJCET-IEDC',
    position: 'Chief Finance Officer',
    start: '2023',
    end: 'Present',
    link: 'https://iedc.sjcetpalai.ac.in/',
    tasks: [
      'Managed Finances',
      'Organized Events',
      'Hosted Workshops',
    ],
  },
  {
    company: 'Startup Bootcamp SJCET-IEDC',
    position: 'Technical Officer',
    start: '2022',
    end: '2023',
    link: 'https://iedc.sjcetpalai.ac.in/',
    tasks: [
      'Managed the Technical Team',
      'Organized Events',
      'Hosted Workshops',
    ],
  },
]