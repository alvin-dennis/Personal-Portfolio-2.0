import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <div className="bg-[#161616] rounded-[2rem] p-6 relative border border-[#222222] hover:border-[#333333] transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-[2rem] font-bold">Experience</h2>
        <div className="bg-black rounded-full p-2">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="space-y-4">
        {EXPERIENCE.slice(0, 2).map((exp, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{exp.position}</h3>
              <span className="text-sm text-gray-500">
                {exp.start} - {exp.end}
              </span>
            </div>
            <p className="text-gray-600">{exp.company}</p>
            <ul className="text-sm text-gray-500 list-disc pl-4 space-y-1">
              {exp.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
