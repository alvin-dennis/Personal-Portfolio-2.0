import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <div className="col-span-12 lg:col-span-5 bg-[#161616] rounded-[2rem] p-6 relative h-full md:min-h-0 min-h-[50vh] overflow-y-auto scrollbar-hide border border-[#222222] hover:border-[#333333] transition-colors">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-[2rem] font-bold font-title">Projects</h2>
      </div>
      <div className="font-content">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold font-content mb-4">
              {project.name}
            </h3>
            <div className="bg-gray-200 w-full aspect-video rounded-2xl mb-4" />
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 left-0 w-full pointer-events-none">
        <div className=" h-16 flex flex-col items-center justify-end pb-2">
          <div className="flex items-center gap-1.5 animate-pulse">
            <p className="text-sm text-white font-medium">Scroll for more</p>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
