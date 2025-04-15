import { ChevronDown, X } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openProject = (index: number) => {
    setSelectedProject(index);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="col-span-12 lg:col-span-5 bg-[#000000]/40 rounded-[2rem] p-6 relative h-full md:min-h-0 min-h-[50vh] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg flex flex-col">
      <h2 className="text-[2rem] font-bold font-title mb-6">Projects</h2>
      <div className="font-content overflow-y-auto scrollbar-hide pr-1 flex-grow">
        <div className="grid grid-cols-1 gap-4">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-xl overflow-hidden cursor-pointer hover:bg-black-700/30 transition-all transform hover:scale-[1.02]"
              onClick={() => openProject(index)}
            >
              <div className="bg-[#000000]/40 backdrop-blur-sm w-full aspect-video" />
              <div className="p-3">
                <h3 className="text-md font-semibold font-content text-center">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-[#000000]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#000000]/40  border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  {PROJECTS[selectedProject].name}
                </h3>
                <button
                type="button"
                  onClick={closeProject}
                  className="p-2 rounded-full hover:bg-gray-700/50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-[#000000]/40 backdrop-blur-sm w-full aspect-video rounded-xl mb-4" />
              <p className="text-gray-300 mb-4">
                {PROJECTS[selectedProject].description}
              </p>
              {PROJECTS[selectedProject].developed && (
                <p className="text-sm text-gray-400 mb-3">
                  Developed as: {PROJECTS[selectedProject].developed}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

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
