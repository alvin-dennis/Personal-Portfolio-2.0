"use client";
import { Github, Instagram, Linkedin, File } from "lucide-react";
import Image from "next/image";
import { LINKS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const skills = [
    "IoT Developer",
    "UI/UX Designer",
    "Web Developer",
    "Bot Developer",
    "Software Tester",
    "Freelancer",
  ];

  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[2rem] font-bold font-title">About Me</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Image
            src="/alvin.webp"
            alt="Alvin Dennis"
            width={300}
            height={400}
            className="rounded-2xl"
            priority
          />
        </div>
        <div className="md:w-3/4">
          <div className="text-xl mb-4 font-content scrollbar-hide">
            Hi, I'm{" "}
            <span className="font-bold font-title inline-flex">
              ALVIN DENNIS
            </span>
            , a{" "}
            <span className="inline-flex bg-blue-500 bg-clip-text text-transparent font-bold relative">
              <div className="w-full sm:w-[165px] h-[30px] inline-flex overflow-hidden">
                <span className="skill-text">{skills[currentSkill]}</span>
              </div>
            </span>{" "}
            with a drive for excellence. I combine technical expertise with
            strong communication and collaboration skills. Adaptable and
            disciplined, I excel in team environments and have extensive
            experience in event management, delivering innovative, impactful
            solutions that address real-world challenges.
          </div>
          <div className="flex gap-3">
            <a
              href={LINKS.github}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href={LINKS.instagram}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href={LINKS.linkedin}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href={LINKS.behance}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faBehance}
                className="w-5 h-5 text-white"
              />
            </a>
            <a
              href={LINKS.resume}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <File className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .skill-text {
          display: block;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
