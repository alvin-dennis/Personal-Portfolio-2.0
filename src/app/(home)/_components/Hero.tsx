"use client";

import { useEffect, useState } from "react";
import RotatingText from "@/components/ui/RotatingText";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  specialty: string[];
  summary: string;
  currentWork?: string;
  location: string;
}

export default function Hero({
  name,
  image,
  specialty,
  summary,
  currentWork,
  location,
}: Props) {
  const [currentTime, setCurrentTime] = useState("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setCurrentTime(now.toLocaleString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-12 text-[#0a0a0a] md:py-20 dark:text-white"
      id="hero"
    >
      <div className="flex justify-center">
        <div className="mb-4 inline-block flex-shrink-0 rotate-[5deg] bg-[#0a0a0a] p-4 sm:mb-6 md:h-80 md:w-64 md:rotate-[7deg] dark:bg-white">
          <Image
            src={image}
            width={190}
            height={190}
            alt={name ?? ""}
            className="object-cover md:h-full md:w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-1 text-4xl text-neutral-900 sm:text-7xl md:text-8xl dark:text-white">
          {name}
        </h1>

        <div className="mt-2 mb-4 text-2xl font-bold text-blue-500 sm:text-4xl md:text-5xl dark:text-blue-500">
          <RotatingText
            texts={specialty}
            mainClassName="inline font-bold"
            splitBy="words"
            rotationInterval={2000}
            auto={true}
          />
        </div>

        <p className="mb-5 text-lg font-normal sm:mb-8 md:text-xl">{summary}</p>

        <div className="flex flex-col items-center justify-center gap-1 text-[#0a0a0a] dark:text-white">
          <div className="text-center sm:text-left">
            <span className="font-medium text-neutral-500 dark:text-neutral-400">
              Currently working as
            </span>
            <span className="ml-1 font-semibold">{currentWork ?? "…"}</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-sm sm:flex-row sm:items-center sm:justify-center sm:gap-2 sm:text-base">
            <span id="current-time">{currentTime}</span>
            <span className="sm:ml-1">{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
