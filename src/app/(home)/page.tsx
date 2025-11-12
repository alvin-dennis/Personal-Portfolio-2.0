import { SITE_CONTENT } from "@/lib/constants";
import Hero from "@/app/(home)/_components/Hero";
import Skills from "@/app/(home)/_components/Skills";
import Experience from "@/app/(home)/_components/Experience";
import Education from "@/app/(home)/_components/Education";
import Projects from "@/app/(home)/_components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Hero {...SITE_CONTENT.hero} />
        <Skills skills={SITE_CONTENT.skills} />
        <Experience />
        <Education education={SITE_CONTENT.education} />
        <Projects projects={SITE_CONTENT.projects} />
        <Footer />
    </>
  );
}
