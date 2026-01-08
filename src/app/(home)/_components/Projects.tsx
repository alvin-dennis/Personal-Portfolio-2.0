"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { Variants } from "framer-motion"
import { MotionDiv } from "@/components/Framer"
import Section from "@/components/Section"
import Image from "next/image"
import { SITE_CONTENT } from "@/lib/constants"
import type { Projects } from "@/types"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <Section text="Projects" href="projects">
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-full mx-auto px-6">
        <div
          className="pointer-events-none absolute z-50 overflow-hidden rounded-xl shadow-2xl"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden">
            {SITE_CONTENT.projects.map((project, index) => {
              const isFallback = !project.image;

              return (
                <Image
                  key={project.name}
                  src={project.image || "/assets/common/noise-bg.webp"}
                  alt={project.name}
                  fill
                  className="absolute inset-0 object-cover transition-all duration-500 ease-out"
                  style={{
                    opacity:
                      hoveredIndex === index
                        ? isFallback
                          ? 0.25
                          : 1
                        : 0,
                    transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
                    filter: hoveredIndex === index ? "none" : "blur(10px)",
                  }}
                />
              );
            })}
          </div>
        </div>

        <div>
          {SITE_CONTENT.projects.slice(0, 3).map((project, index) => (
            <Link
              key={project.name}
              href={project.hosted_url}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative py-5 border-t border-border transition-all duration-300 ease-out">
                <div
                  className={`
                  absolute inset-0 -mx-4 px-4 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2">
                      <h3 className="text-muted-foreground font-medium text-lg tracking-tight">
                        <span className="relative">
                          {project.name}
                          <span
                            className={`
                            absolute left-0 -bottom-0.5 h-px
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                          />
                        </span>
                      </h3>
                      <ArrowUpRight
                        className={`
                        w-4 h-4 text-muted-foreground
                        transition-all duration-300 ease-out
                        ${hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                          }
                      `}
                      />
                    </div>
                    <p
                      className={`
                      text-foreground text-sm mt-1 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-foreground" : "text-foreground"}
                    `}
                    >
                      {project.description}
                    </p>
                  </div>

                  <Button
                    variant="link"
                    onMouseEnter={(e) => {
                      e.stopPropagation()
                      setIsVisible(false)
                      setHoveredIndex(null)
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(project.url, "_blank", "noopener,noreferrer")
                    }}
                    className="group inline-flex items-center gap-1.5 text-muted"
                    aria-label="Open GitHub repository"
                  >
                    <FaGithub
                      className="
                      h-3.5 w-3.5 transition-all duration-300 ease-out"
                    />
                    <span
                      className="text-xs transition-all duration-300 ease-out"
                    >
                      GitHub
                    </span>
                  </Button>
                </div>
              </div>
            </Link>
          ))}

          <div className="border-t border-border" />
        </div>
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Button variant="default" asChild>
            <Link href="/projects" className="group flex items-center gap-2">
              View All Projects
              <ArrowUpRight
                className="size-4 sm:size-5 transition-all duration-500
                   group-hover:translate-x-[3px]
                   group-hover:-translate-y-[3px]
                   group-hover:scale-110"
                strokeWidth={1.5}
              />
            </Link>
          </Button>
        </MotionDiv>

      </div>
    </Section>
  )
}
