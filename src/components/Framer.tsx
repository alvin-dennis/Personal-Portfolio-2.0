"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(function MotionDiv(
  { children, ...props },
  ref,
) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
});

const MotionMain = React.forwardRef<HTMLDivElement, HTMLMotionProps<"main">>(function MotionDiv(
  { children, ...props },
  ref,
) {
  return (
    <motion.main ref={ref} {...props}>
      {children}
    </motion.main>
  );
});

const MotionSection = React.forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  function MotionSection({ children, ...props }, ref) {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    );
  },
);

const MotionHeader = React.forwardRef<HTMLElement, HTMLMotionProps<"header">>(function MotionHeader(
  { children, ...props },
  ref,
) {
  return (
    <motion.header ref={ref} {...props}>
      {children}
    </motion.header>
  );
});

const MotionH1 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>(function MotionH1(
  { children, ...props },
  ref,
) {
  return (
    <motion.h1 ref={ref} {...props}>
      {children}
    </motion.h1>
  );
});

const MotionH2 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h2">>(function MotionH2(
  { children, ...props },
  ref,
) {
  return (
    <motion.h2 ref={ref} {...props}>
      {children}
    </motion.h2>
  );
});

const MotionH3 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h2">>(function MotionH2(
  { children, ...props },
  ref,
) {
  return (
    <motion.h3 ref={ref} {...props}>
      {children}
    </motion.h3>
  );
});

const MotionP = React.forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>(function MotionP(
  { children, ...props },
  ref,
) {
  return (
    <motion.p ref={ref} {...props}>
      {children}
    </motion.p>
  );
});

const MotionSpan = React.forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>(function MotionSpan(
  { children, ...props },
  ref,
) {
  return (
    <motion.span ref={ref} {...props}>
      {children}
    </motion.span>
  );
});

const MotionFooter = React.forwardRef<HTMLElement, HTMLMotionProps<"footer">>(function MotionFooter(
  { children, ...props },
  ref,
) {
  return (
    <motion.footer ref={ref} {...props}>
      {children}
    </motion.footer>
  );
});

const MotionLi = React.forwardRef<HTMLLIElement, HTMLMotionProps<"li">>(function MotionLI(
  { children, ...props },
  ref,
) {
  return (
    <motion.li ref={ref} {...props}>
      {children}
    </motion.li>
  );
});

export {
  MotionDiv,
  MotionMain,
  MotionSection,
  MotionHeader,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionSpan,
  MotionP,
  MotionFooter,
  MotionLi
};
