"use client";

import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { MotionDiv, MotionP, MotionPath } from "@/components/Framer";

const words = ["Hello", "Bonjour", "Ciao", "Olà", "Hallå", "হ্যালো", "مرحبا", "നമസ്കാരം"];

const easeOutExpo = [0.76, 0, 0.24, 1] as const;

const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: easeOutExpo, delay: 0.2 },
  },
};

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete?.();
        }, 1000);
      }, 1000);
      return;
    }

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: easeOutExpo },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: easeOutExpo, delay: 0.3 },
    },
  };

  return (
    <MotionDiv
      variants={slideUp}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="bg-background fixed inset-0 z-9999 flex h-screen w-screen items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          <MotionP
            variants={opacity}
            initial="initial"
            animate="enter"
            className="font-pacifico text-primary absolute z-10 flex items-center text-6xl md:text-7xl lg:text-9xl"
          >
            {words[index]}
          </MotionP>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full" aria-hidden="true">
            <MotionPath
              variants={curve}
              initial="initial"
              animate={isExiting ? "exit" : "initial"}
              className="fill-background"
            />
          </svg>
        </>
      )}
    </MotionDiv>
  );
}
