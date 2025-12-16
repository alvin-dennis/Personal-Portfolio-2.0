import { SITE_CONTENT } from "@/lib/constants";
import Hero from "@/app/(home)/_components/Hero";
import Skills from "@/app/(home)/_components/Skills";
import Experience from "@/app/(home)/_components/Experience";
import Education from "@/app/(home)/_components/Education";
import { Projects } from "@/app/(home)/_components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const sanitizedSkills = Object.fromEntries(
    Object.entries(SITE_CONTENT.skills).map(([category, list]) => [
      category,
      list.map((skill) => (typeof skill === "string" ? skill : { name: skill.name })),
    ])
  ) as typeof SITE_CONTENT.skills;

  return (
    <>
      <Hero {...SITE_CONTENT.hero} />
      <Skills skills={sanitizedSkills} />
      <Experience />
      <Education education={SITE_CONTENT.education} />
      <Projects />
      <Footer />
    </>
  );
}
