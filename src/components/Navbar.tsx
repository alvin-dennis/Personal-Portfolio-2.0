"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { MotionDiv } from "@/components/Framer";
import Link from "next/link";
import { Fan } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <Button
        variant="default"
        size={"icon-lg"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MotionDiv
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <Fan className="w-6 h-6 md:w-8 md:h-8" />
        </MotionDiv>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.1,
            }}
            className="absolute bottom-10 right-0 mb-2"
          >
            <div className="flex flex-col items-end gap-3">
              {SITE_CONFIG.socialLinks.map((option, index) => {
                const Icon = option.icon;
                return (
                  <MotionDiv
                    key={option.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Link
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{option.text}</span>
                      </Link>
                    </Button>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};
