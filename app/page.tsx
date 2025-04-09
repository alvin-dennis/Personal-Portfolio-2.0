"use client";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden md:overflow-auto bg-[#0A0A0A] text-white p-4 md:p-8 lg:p-12">
      <div className="h-full max-w-[1400px] mx-auto bg-[#111111]/50 rounded-[2.5rem] p-4 md:p-6 shadow-2xl backdrop-blur-sm border border-[#222222]">
        <div className="h-full overflow-auto md:overflow-visible">
          <div className="h-full grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-7">
              <AboutMe />
            </div>
            <div className="col-span-12 lg:col-span-5 max-h-[calc(100vh-20rem)] overflow-y-auto">
              <Projects />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <Skills />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-4">
              <Education />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
