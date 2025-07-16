import BlurFade from "@/components/ui/blur-fade";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills"; 
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

const BLUR_FADE_DELAY = 0.03;

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen text-white p-4 md:p-8 lg:p-12 bg-[#0f0f0f] lg:overflow-hidden relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
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
            className="col-span-1 sm:col-span-12 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 mt-4 sm:mt-4 lg:mt-0 lg:sticky lg:top-0 lg:overflow-hidden lg:max-h-[calc(100vh-8rem)]"
          >
            <Projects />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
