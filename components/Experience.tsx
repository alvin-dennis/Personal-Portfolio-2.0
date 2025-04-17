import { EXPERIENCE } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-4 sm:p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg h-[350px] flex flex-col">
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h2 className="text-[1.75rem] sm:text-[2rem] font-bold font-title">
          Experience
        </h2>
      </div>
      <div className="space-y-3 sm:space-y-4 font-content overflow-y-auto pr-2 flex-grow scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
              <div className="flex items-center gap-2">
                {exp.logo && (
                  <div className="h-7 w-7 sm:h-8 sm:w-8 relative flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="(max-width: 640px) 28px, 32px"
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-base sm:text-lg font-content line-clamp-2 sm:line-clamp-none">
                  {exp.position}
                </h3>
              </div>
              <span className="text-sm font-content sm:text-sm text-gray-400 mt-1 sm:mt-0">
                {exp.start} - {exp.end}
              </span>
            </div>
            <p className="text-gray-400 font-content text-base sm:text-base">
              {exp.company}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center text-sm sm:text-sm text-white mt-2 flex items-center justify-center gap-1 animate-pulse">
        <span>Scroll for more</span>
        <ChevronDown className="w-3 h-3" />
      </div>
    </div>
  );
}
