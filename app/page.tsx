"use client";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8 lg:p-12 overflow-x-hidden">
      <div className="min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] max-w-[1400px] mx-auto bg-[#111111]/50 rounded-[2.5rem] p-4 md:p-6 shadow-2xl backdrop-blur-sm border border-[#222222]">
        <div className="h-full overflow-y-auto">
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
            <div className="sm:col-span-12 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 overflow-y-auto max-h-[70vh] sm:max-h-[50vh] lg:max-h-[calc(100vh-9rem)]">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
