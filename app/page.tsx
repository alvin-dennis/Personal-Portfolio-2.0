"use client";
import { useState, useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);
  const loaderDuration = 3000;

  useEffect(() => {
    const contentFadeInStart = loaderDuration - 100;

    const contentTimer = setTimeout(() => {
      setContentOpacity(1);
    }, contentFadeInStart);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loaderDuration);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="bg-black h-screen overflow-hidden">
      {isLoading && <Loader duration={loaderDuration} />}

      <main
        className="h-screen bg-black text-white p-4 md:p-8 lg:p-12 overflow-hidden relative flex items-center justify-center transition-opacity duration-500 ease-in-out"
        style={{ opacity: contentOpacity }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
        <div className="absolute inset-0 pointer-events-none" />
        <div className="h-[calc(100vh-2.5rem)] md:h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-6.5rem)] max-w-[1400px] w-full bg-black/50 backdrop-blur-sm rounded-[2.5rem] p-4 md:p-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] border border-white/20 hover:border-white/30 transition-colors relative z-10 animate-fadeIn overflow-hidden">
          <div className="h-full overflow-y-auto scrollbar-none pb-20 sm:pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-auto">
              <div className="sm:col-span-12 lg:col-span-7">
                <AboutMe />
              </div>
              <div className="sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0">
                <Skills />
              </div>
              <div className="sm:col-span-6 lg:col-span-4 mt-4 lg:mt-0">
                <div className="space-y-4 h-full overflow-y-auto scrollbar-none">
                  <Education />
                  <Experience />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-12 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 mt-4 sm:mt-4 lg:mt-0 lg:sticky lg:top-0 overflow-y-auto max-h-[65vh] sm:max-h-full lg:max-h-[calc(100vh-9rem)] scrollbar-none">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
