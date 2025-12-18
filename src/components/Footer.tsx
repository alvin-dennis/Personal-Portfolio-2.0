"use client"

import { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import { Variants } from "framer-motion"
import { MotionFooter, MotionDiv, MotionH2, MotionH3 } from "@/components/Framer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }


  return (
    <MotionFooter
      className="flex items-center justify-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative flex flex-col items-center gap-12">
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase text-foreground transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Perfect
            </span>
            <MotionH3
              className="text-3xl font-light text-primary tracking-tight transition-all duration-500 sm:text-4xl"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let&apos;s talk
            </MotionH3>
          </div>

          <Button
            asChild
            variant="default"
            className="group relative flex items-center gap-3 rounded-full px-6 py-3 border border-border sm:px-8 sm:py-4"
          >
            <Link
              href={SITE_CONFIG.contact.cal_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
              />

              <span className="text-sm font-medium tracking-wide sm:text-base">
                Book a call
              </span>

              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:scale-110"
                strokeWidth={1.5}
              />
            </Link>
          </Button>
        </div>

        <MotionDiv
          variants={fadeInUp}
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <MotionH2
              className="relative text-center text-primary text-5xl font-light tracking-tight sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let&apos;s work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  together
                </span>
              </span>
            </MotionH2>

            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isHovered || isClicked
                    ? "var(--muted)"
                    : "var(--border)",

                  backgroundColor: isHovered && !isClicked
                    ? "var(--primary)"
                    : "transparent",

                  transform: isClicked
                    ? "scale(3)"
                    : isHovered
                      ? "scale(1.1)"
                      : "scale(1)",

                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />

              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",

                  opacity: isClicked ? 0 : 1,

                  color: isHovered && !isClicked
                    ? "var(--background)"
                    : "var(--primary)",

                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>

          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </MotionDiv>

        <MotionDiv
          variants={fadeInUp}
          className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something exceptional together.
          </p>
          <Button
            asChild
            variant="link"
            className="text-xs tracking-widest uppercase"
          >
            <Link
              href={`mailto:${SITE_CONFIG.contact.email}?subject=Project Enquiry`}
            >
              {SITE_CONFIG.contact.email}
            </Link>
          </Button>

        </MotionDiv>
      </div>
    </MotionFooter>
  )
}
