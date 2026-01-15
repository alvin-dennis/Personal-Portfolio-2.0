"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, easeOut } from "framer-motion";
import Hero from "@/app/(home)/_components/Hero";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import { SITE_CONTENT } from "@/lib/constants";
import { MotionDiv, MotionMain } from "@/components/Framer";
import Navbar from "@/components/Navbar";

const Skills = dynamic(() => import("@/app/(home)/_components/Skills"));
const Experience = dynamic(() => import("@/app/(home)/_components/Experience"));
const Education = dynamic(() => import("@/app/(home)/_components/Education"));
const Projects = dynamic(() =>
  import("@/app/(home)/_components/Projects").then((m) => m.Projects)
);
// const Testimonials = dynamic(() => import("@/app/(home)/_components/Testmonials").then((m) => m.Testimonials));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

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
      {loading ? (
        <MotionDiv
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <Loader />
        </MotionDiv>
      ) : (
        <MotionMain
          key="content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <Hero {...SITE_CONTENT.hero} />
          <Skills skills={sanitizedSkills} />
          <Experience />
          <Education education={SITE_CONTENT.education} />
          <Projects />
          {/* <Testimonials /> */}
          <Footer />
          <Navbar />
        </MotionMain>
      )}
    </AnimatePresence>
  );
}

