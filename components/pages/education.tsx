import { ArrowUpRight } from "lucide-react";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  return (
    <div className="bg-[#161616] rounded-[2rem] p-6 relative border border-[#222222] hover:border-[#333333] transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-[2rem] font-bold">Education</h2>
        <div className="bg-black rounded-full p-2">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="space-y-4">
        {EDUCATION.slice(0, 1).map((edu, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{edu.position}</h3>
              <span className="text-sm text-gray-500">
                {edu.start} - {edu.end}
              </span>
            </div>
            <p className="text-gray-600">{edu.name}</p>
            <div className="text-sm text-gray-500">{edu.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
