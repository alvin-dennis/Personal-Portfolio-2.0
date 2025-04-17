"use client";
import { useState, useEffect, lazy, Suspense } from "react";

declare global {
  interface Navigator {
    deviceMemory?: number;
  }
}
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Loader from "@/components/Loader";

const Earth = lazy(() => import("@/components/ui/globe"));
const Sparkles = lazy(() =>
  import("@/components/ui/sparkles").then((module) => ({
    default: module.Sparkles,
  }))
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);
  const [shouldRenderEffects, setShouldRenderEffects] = useState(false);
  const loaderDuration = 3000;

  useEffect(() => {
    const contentFadeInStart = loaderDuration - 100;

    const contentTimer = setTimeout(() => {
      setContentOpacity(1);
    }, contentFadeInStart);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShouldRenderEffects(true), 500);
    }, loaderDuration);

    const checkPerformance = () => {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;

      if (!isMobile && !hasLowMemory) {
        setShouldRenderEffects(true);
      } else {
        setShouldRenderEffects(true);
      }
    };

    window.addEventListener("load", checkPerformance);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
      window.removeEventListener("load", checkPerformance);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {isLoading && <Loader duration={loaderDuration} />}

      <main
        className="min-h-screen bg-[#000000] text-white p-4 md:p-8 lg:p-12 overflow-x-hidden relative flex items-center justify-center transition-opacity duration-500 ease-in-out"
        style={{ opacity: contentOpacity }}
      >
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          {shouldRenderEffects && (
            <>
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-90">
                <Suspense fallback={null}>
                  <Earth />
                </Suspense>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <Suspense fallback={null}>
                  <Sparkles className="w-full h-full" />
                </Suspense>
              </div>
            </>
          )}
        </div>

        <div className="min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(76vh-6rem)] max-w-[1400px] w-full bg-gradient-to-br from-white/5 to-white/10 rounded-[2.5rem] p-4 md:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:border-white/30 transition-colors relative z-10 animate-fadeIn">
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
