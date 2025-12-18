"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import Loader from "@/components/Loader";
import { SITE_CONTENT } from "@/lib/constants";
import Hero from "@/app/(home)/_components/Hero";
import Skills from "@/app/(home)/_components/Skills";
import Experience from "@/app/(home)/_components/Experience";
import Education from "@/app/(home)/_components/Education";
import { Projects } from "@/app/(home)/_components/Projects";
// import { Testimonials } from "./_components/Testmonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

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
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: easeOut,
          }}
        >
          <Hero {...SITE_CONTENT.hero} />
          <Skills skills={sanitizedSkills} />
          <Experience />
          <Education education={SITE_CONTENT.education} />
          <Projects />
          {/* <Testimonials /> */}
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
