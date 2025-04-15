import { ChevronDown } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <div className="col-span-12 lg:col-span-5 bg-[#000000]/40 rounded-[2rem] p-6 relative h-full md:min-h-0 min-h-[50vh] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg flex flex-col">
      <h2 className="text-[2rem] font-bold font-title mb-6">Projects</h2>
      <div className="font-content overflow-y-auto scrollbar-hide pr-1 flex-grow">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold font-content mb-4">
              {project.name}
            </h3>
            <div className="bg-gray-700/30 backdrop-blur-sm w-full aspect-video rounded-2xl mb-4" />
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 left-0 w-full pointer-events-none mt-2">
        <div className="h-12 flex flex-col items-center justify-end pb-2">
          <div className="flex items-center gap-1.5 animate-pulse">
            <p className="text-sm text-white font-medium">Scroll for more</p>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
