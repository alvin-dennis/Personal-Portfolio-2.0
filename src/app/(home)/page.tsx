import { SITE_CONTENT } from "@/lib/constants";
import Hero from "@/app/(home)/_components/Hero";
import Skills from "@/app/(home)/_components/Skills";
import Experience from "@/app/(home)/_components/Experience";
import Education from "@/app/(home)/_components/Education";
import Projects from "@/app/(home)/_components/Projects";

import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/Footer";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <Hero {...SITE_CONTENT.hero} />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <Skills skills={SITE_CONTENT.skills} />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <Experience />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <Education education={SITE_CONTENT.education} />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <Projects projects={SITE_CONTENT.projects} />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <Footer />
      </BlurFade>
    </>
  );
}
