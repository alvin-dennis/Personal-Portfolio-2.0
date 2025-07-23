import BlurFade from "@/components/ui/blur-fade";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const BLUR_FADE_DELAY = 0.03;

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen text-white p-4 md:p-8 lg:p-12 bg-[#0f0f0f] lg:overflow-hidden relative flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="w-full lg:h-full lg:overflow-hidden pb-20 sm:pb-4 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-auto">
          <BlurFade
            delay={BLUR_FADE_DELAY}
            className="col-span-1 sm:col-span-12 lg:col-span-7"
          >
            <AboutMe />
          </BlurFade>
          <BlurFade
            delay={BLUR_FADE_DELAY * 1.5}
            className="col-span-1 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0"
          >
            <Skills />
          </BlurFade>
          <BlurFade
            delay={BLUR_FADE_DELAY * 2}
            className="col-span-1 sm:col-span-6 lg:col-span-4 mt-4 lg:mt-0 flex"
          >
            <div className="space-y-4 w-full lg:h-full lg:overflow-hidden">
              <Education />
              <Experience />
            </div>
          </BlurFade>
          <BlurFade
            delay={BLUR_FADE_DELAY * 3}
            className="col-span-1 sm:col-span-12 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 mt-4 sm:mt-4 lg:mt-0 lg:sticky lg:top-0 lg:overflow-hidden lg:max-h-[calc(54vh)]"
          >
            <div className="w-full h-full">
              <Projects />
            </div>
          </BlurFade>
          <BlurFade
            delay={BLUR_FADE_DELAY * 3.5}
            className="col-span-1 sm:col-span-12 lg:col-span-5 lg:row-start-2 lg:row-span-1 lg:col-start-8 mt-1 sm:mt-4 lg:mt-56 lg:sticky lg:top-[calc(54vh+14rem)] lg:overflow-hidden"
          >
            <div className="w-full h-full">
              <Contact />
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
