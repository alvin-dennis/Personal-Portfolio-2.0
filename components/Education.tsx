import { EDUCATION } from "@/lib/constants";

export default function Education() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-[2rem] font-bold font-title">Education</h2>
      </div>
      <div className="space-y-4 font-content">
        {EDUCATION.slice(0, 1).map((edu, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg font-content">
                {edu.position}
              </h3>
              <span className="text-sm text-gray-400">
                {edu.start} - {edu.end}
              </span>
            </div>
            <p className="text-gray-400">{edu.name}</p>
            <div className="text-sm text-gray-500">{edu.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
