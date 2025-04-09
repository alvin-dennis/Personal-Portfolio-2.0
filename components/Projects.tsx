import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <div className="col-span-12 lg:col-span-5 bg-[#161616] rounded-[2rem] p-6 relative h-full md:min-h-0 min-h-[50vh] overflow-y-auto scrollbar-hide border border-[#222222] hover:border-[#333333] transition-colors">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-[2rem] font-bold font-title">Projects</h2>
        <div className="bg-black rounded-full p-2">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="font-content">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold font-content mb-4">{project.name}</h3>
            <div className="bg-gray-200 w-full aspect-video rounded-2xl mb-4"></div>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 mt-8">scroll for more ↓</div>
    </div>
  );
}
