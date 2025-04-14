import { EXPERIENCE } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg h-[350px] flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-[2rem] font-bold font-title">Experience</h2>
      </div>
      <div className="space-y-4 font-content overflow-y-auto pr-2 flex-grow scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg font-content">
                {exp.position}
              </h3>
              <span className="text-sm text-gray-400">
                {exp.start} - {exp.end}
              </span>
            </div>
            <p className="text-gray-400">{exp.company}</p>
            <ul className="text-sm text-gray-500 list-disc pl-4 space-y-1">
              {exp.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-white mt-2 flex items-center justify-center gap-1 animate-pulse">
        <span>Scroll for more</span>
        <ChevronDown className="w-3 h-3" />
      </div>
    </div>
  );
}
