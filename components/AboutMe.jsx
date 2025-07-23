import React from "react";
import { Github, Instagram, Linkedin, File } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
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
            <span className="inline-flex bg-blue-500 bg-clip-text text-transparent font-bold">
              builder and maker
            </span>{" "}
            with a drive for excellence. I fuse hands-on technical skills with
            creative problem-solving. I thrive in building systems and managing
            events that create meaningful, real-world impact. I believe in
            turning ideas into functional, user-focused outcomes that solve
            problems and inspire innovation.
          </div>

          <div className="flex gap-3">
            <Link
              href={SOCIALS.github}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="w-5 h-5 text-white" />
            </Link>
            <Link
              href={SOCIALS.instagram}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link
              href={SOCIALS.linkedin}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
            <Link
              href={SOCIALS.behance}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faBehance}
                className="w-5 h-5 text-white"
              />
            </Link>
            <Link
              href={SOCIALS.resume}
              className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <File className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
