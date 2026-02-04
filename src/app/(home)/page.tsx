"use client"

import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Hero from "@/app/(home)/_components/Hero";
import Footer from "@/components/Footer";
import { MotionMain } from "@/components/Framer";
import { SITE_CONTENT } from "@/lib/constants";

const Skills = dynamic(() => import("@/app/(home)/_components/Skills"));
const Experience = dynamic(() => import("@/app/(home)/_components/Experience"));
const Education = dynamic(() => import("@/app/(home)/_components/Education"));
const Projects = dynamic(() => import("@/app/(home)/_components/Projects").then((m) => m.Projects));
// const Testimonials = dynamic(() =>
//   import("@/app/(home)/_components/Testmonials").then((m) => m.Testimonials),
// );

export default function Home() {
  const sanitizedSkills = Object.fromEntries(
    Object.entries(SITE_CONTENT.skills).map(([category, list]) => [
      category,
      list.map((skill) =>
        typeof skill === "string" ? skill : { name: skill.name, icon: skill.icon },
      ),
    ]),
  ) as typeof SITE_CONTENT.skills;

  return (
    <AnimatePresence mode="wait">
        <MotionMain
          key="content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
        >
          <Hero {...SITE_CONTENT.hero} />
          <Skills skills={sanitizedSkills} />
          <Experience experiences={SITE_CONTENT.experience} />
          <Education education={SITE_CONTENT.education} />
          <Projects projects={SITE_CONTENT.projects} />
          {/* <Testimonials /> */}
          <Footer />
        </MotionMain>
    </AnimatePresence>
  );
}
