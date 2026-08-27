"use client";

import { useEffect, useRef, useState } from "react";

const words = ["Hello", "Bonjour", "Ciao", "Olà", "Hallå", "হ্যালো", "مرحبا", "നമസ്കാരം"];

const EASE_OUT_EXPO_CSS = "cubic-bezier(0.76, 0, 0.24, 1)";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isExiting, setIsExiting] = useState(false);
  const [wordVisible, setWordVisible] = useState(false);
  const [curveProgress, setCurveProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setWordVisible(true), 0);
    return () => clearTimeout(t);
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
      index === 0 ? 1000 : 150,
    );
  }, [index, onComplete]);

  useEffect(() => {
    if (!isExiting) return;

    const duration = 700;
    const delay = 300;
    const startAt = performance.now() + delay;

    const tick = (now: number) => {
      if (now < startAt) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min((now - startAt) / duration, 1);
      setCurveProgress(easeOutExpo(t));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isExiting]);

  const controlY = dimension.height + 300 - curveProgress * 300;
  const path = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${controlY} 0 ${dimension.height} L0 0`;

  return (
    <div
      className="bg-background fixed inset-0 z-9999 flex h-screen w-screen items-center justify-center"
      style={{
        top: isExiting ? "-100vh" : 0,
        transition: `top 0.8s ${EASE_OUT_EXPO_CSS} 0.2s`,
      }}
    >
      {dimension.width > 0 && (
        <>
          <p
            className="font-pacifico text-primary absolute z-10 flex items-center text-6xl md:text-7xl lg:text-9xl"
            style={{
              opacity: wordVisible ? 0.75 : 0,
              transition: "opacity 1s ease 0.2s",
            }}
          >
            {words[index]}
          </p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full" aria-hidden="true">
            <path d={path} className="fill-background" />
          </svg>
        </>
      )}
    </div>
  );
}
