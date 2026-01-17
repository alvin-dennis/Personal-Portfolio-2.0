"use client";

import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import Hero from "@/app/(home)/_components/Hero";
import Footer from "@/components/Footer";
import { SITE_CONTENT } from "@/lib/constants";
import { MotionMain } from "@/components/Framer";
import { BlurFade } from "@/components/ui/blur-fade";

const Skills = dynamic(() => import("@/app/(home)/_components/Skills"));
const Experience = dynamic(() => import("@/app/(home)/_components/Experience"));
const Education = dynamic(() => import("@/app/(home)/_components/Education"));
const Projects = dynamic(() => import("@/app/(home)/_components/Projects").then((m) => m.Projects));
// const Testimonials = dynamic(() => import("@/app/(home)/_components/Testmonials").then((m) => m.Testimonials));

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  const sanitizedSkills = Object.fromEntries(
    Object.entries(SITE_CONTENT.skills).map(([category, list]) => [
      category,
      list.map((skill) =>
        typeof skill === "string" ? skill : { name: skill.name }
      ),
    ])
  ) as typeof SITE_CONTENT.skills;

  return (
    <AnimatePresence mode="wait">
      <MotionMain
        key="content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
      >
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Hero {...SITE_CONTENT.hero} />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Skills skills={sanitizedSkills} />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Experience />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <Education education={SITE_CONTENT.education} />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <Projects />
        </BlurFade>

        {/* <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <Testimonials />
        </BlurFade> */}

        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <Footer />
        </BlurFade>
      </MotionMain>
    </AnimatePresence>
  );
}
