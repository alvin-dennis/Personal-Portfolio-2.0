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
                      loading={index <= 1 ? "eager" : "lazy"}
                      priority={index <= 1}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ1cmwoI2cpIiAvPgo8L3N2Zz4="
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
      <div className="sticky bottom-0 left-0 w-full pointer-events-none mt-2">
        <div className="h-12 flex items-center justify-center pb-2 animate-pulse">
          <p className="text-sm text-white font-medium mr-1">Scroll for more</p>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
