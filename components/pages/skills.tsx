import { ArrowUpRight } from "lucide-react";

export default function Skills() {
  const skills = Array(33).fill("Skill");

  return (
    <div className="bg-[#161616] rounded-[2rem] p-6 relative border border-[#222222] hover:border-[#333333] transition-colors">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[2rem] font-bold">Skills</h2>
        <div className="bg-black rounded-full p-2">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {skills.map((_, index) => (
          <div
            key={index}
            className="w-full aspect-square rounded-full border-2 border-gray-300"
          ></div>
        ))}
      </div>
    </div>
  );
}
