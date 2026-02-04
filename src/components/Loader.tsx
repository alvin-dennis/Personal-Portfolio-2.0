"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Loader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const letters = ["A", "L", "V", "I", "N"];
  const numColumns = 10;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut"
        }
      });

      tl.to(".name-text span", {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.5,
        willChange: "transform, opacity"
      });

      tl.to(
        ".preloader-item",
        {
          delay: 0.7,
          y: "100%",
          scaleY: 0.7,
          opacity: 0,
          duration: 0.7,
          stagger: 0.09,
          willChange: "transform, opacity"
        },
        ">"
      );

      tl.to(
        ".name-text span",
        {
          y: 40,
          opacity: 0,
          stagger: 0.09,
          duration: 0.4,
          willChange: "transform, opacity"
        },
        "<0.2"
      );

      tl.to(
        preloaderRef.current,
        {
          autoAlpha: 0,
          duration: 0.5
        },
        ">"
      );
    },
    { scope: preloaderRef }
  );

  return (
    <div className="fixed inset-0 z-9999 flex" ref={preloaderRef}>
      {[...Array(numColumns)].map((_, index) => (
        <div
          key={index}
          className="preloader-item bg-background h-full w-[10%]"
        />
      ))}
      <p className="name-text text-primary font-nougat absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[20vw] leading-none lg:text-[200px]">
        {letters.map((letter, index) => (
          <span key={index} className="inline-block translate-y-full opacity-0">
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}