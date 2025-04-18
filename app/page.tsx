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
    <div className="bg-black min-h-screen">
      {isLoading && <Loader duration={loaderDuration} />}

      <main
        className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 overflow-x-hidden relative flex items-center justify-center transition-opacity duration-500 ease-in-out"
        style={{ opacity: contentOpacity }}
      >
        <div className="min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(76vh-6rem)] max-w-[1400px] w-full bg-black rounded-[2.5rem] p-4 md:p-6 border border-white/20 hover:border-white/30 transition-colors relative z-10 animate-fadeIn">
          <div className="h-full overflow-y-auto scrollbar-none">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-12 lg:col-span-7">
                <AboutMe />
              </div>
              <div className="sm:col-span-6 lg:col-span-3 mt-4 lg:mt-0">
                <Skills />
              </div>
              <div className="sm:col-span-6 lg:col-span-4 mt-4 lg:mt-0">
                <div className="space-y-4">
                  <Education />
                  <Experience />
                </div>
              </div>
              <div className="sm:col-span-12 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 lg:sticky lg:top-0 overflow-y-auto max-h-[70vh] sm:max-h-[50vh] lg:max-h-[calc(76vh-9rem)] scrollbar-none">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
