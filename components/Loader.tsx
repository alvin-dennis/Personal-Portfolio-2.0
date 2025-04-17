"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import loaderData from "./ui/loader.json";

const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});

interface LoaderProps {
  duration?: number;
}

export default function Loader({ duration = 2000 }: LoaderProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeOutStart = duration - 300;
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, fadeOutStart);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [duration]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
      style={{ opacity }}
    >
      <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[490px] lg:w-[450px] lg:h-[450px]">
        <Lottie
          loop={false}
          animationData={loaderData}
          play
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
