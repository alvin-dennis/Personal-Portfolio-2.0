import { lazy, Suspense } from "react";

const AboutMe = lazy(() => import("@/components/AboutMe"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#0f0f0f]">
      <main
        className="h-screen text-white p-4 md:p-8 lg:p-12 bg-[#0f0f0f] overflow-hidden relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
        <div className="absolute inset-0 pointer-events-none" />
        <div className="h-[calc(100vh-2.5rem)] md:h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-3.5rem)] max-w-[1400px] w-full backdrop-blur-sm rounded-[2.5rem] p-4 md:p-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] border border-white/20 hover:border-white/30 transition-colors relative z-10 animate-fadeIn overflow-hidden" style={{ backgroundColor: "rgba(15, 15, 15, 0.5)" }}>
          <div className="h-full overflow-hidden pb-20 sm:pb-4">
            <Suspense 
              fallback={
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-white/10 rounded-lg"></div>
                  <div className="h-4 bg-white/10 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded-lg w-1/2"></div>
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-auto">
                <div className="sm:col-span-12 lg:col-span-7">
                  <AboutMe />
                </div>
                <div className="sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0">
                  <Skills />
                </div>
                <div className="sm:col-span-6 lg:col-span-4 mt-4 lg:mt-0">
                  <div className="space-y-4 h-full overflow-hidden">
                    <Education />
                    <Experience />
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-12 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 mt-4 sm:mt-4 lg:mt-0 lg:sticky lg:top-0 overflow-hidden max-h-[65vh] sm:max-h-full lg:max-h-[calc(100vh-9rem)]">
                  <Projects />
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
