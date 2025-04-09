import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { LINKS } from "@/lib/constants";

export default function AboutMe() {
  return (
    <div className="bg-[#161616] rounded-[2rem] p-6 relative border border-[#222222] hover:border-[#333333] transition-colors">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[2rem] font-bold font-title">About Me</h2>
        <div className="bg-black rounded-full p-2">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Image
            src="/alvin.webp"
            alt="Alvin Dennis"
            width={300}
            height={400}
            className="rounded-2xl"
          />
        </div>
        <div className="md:w-3/4">
          <p className="text-xl mb-4 font-content">
            Hi, My name is{" "}
            <span className="font-bold font-title">ALVIN DENNIS</span>. a
            Dynamic Electrical Engineering student skilled in IoT, circuit
            design, renewable energy systems, and automation, proficient in
            UI/UX design, web development, and software testing, adaptable and
            disciplined, committed to delivering innovative and impactful
            solutions.
          </p>
          <div className="flex gap-3">
            <a href={LINKS.github} className="bg-black p-3 rounded-full">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href={LINKS.instagram} className="bg-black p-3 rounded-full">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href={LINKS.linkedin} className="bg-black p-3 rounded-full">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
