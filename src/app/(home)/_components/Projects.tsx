"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { MotionLi, MotionDiv } from "@/components/Framer"
import Section from "@/components/Section"
import Image from "next/image"
import { SITE_CONTENT } from "@/lib/constants"
import type { Projects } from "@/types"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Projects() {
  const [open, setOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [activeProject, setActiveProject] = useState<Projects | null>(null)
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
  }

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
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
    <Section
      text="Projects"
      href="projects"
      paragraph="A curated selection of projects that demonstrate my approach to building thoughtful, well-engineered applications, with an emphasis on performance, usability, and clean architecture."
    >
      <Dialog open={open} onOpenChange={setOpen}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-full mx-auto px-6"
      >
        <div
          className="pointer-events-none absolute z-50 hidden md:block overflow-hidden rounded-xl shadow-2xl"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            transition:
              "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
            <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden">
              {SITE_CONTENT.projects.map((project, index) => {
                if (!project.image) return null
                return (
                  <Image
                    key={project.name}
                    src={project.image}
                    alt={project.name}
                    fill
                    className="absolute inset-0 object-cover transition-all duration-500 ease-out"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
                      filter: hoveredIndex === index ? "none" : "blur(10px)",
                    }}
                  />
                )
              })}
            </div>

        </div>
        <div>
            {SITE_CONTENT.projects.map((project, index) => {
              const categories: string[] = Array.isArray(project.category)
                ? project.category
                : [project.category]
              return (
              <div
                key={project.name}
                className="group block w-full mx-auto cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setActiveProject(project)
                  setOpen(true)
                }}
              >
                <div
                  className="relative py-5 border-t border-border transition-all duration-300 ease-out"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={cn(
                      "absolute inset-0 -mx-4 px-4 rounded-lg transition-all duration-300 ease-out",
                      hoveredIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    )}
                  />
                  <div className="relative flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="relative overflow-hidden h-[60px] md:h-20 group">
                        <div
                          className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2"
                          style={{ transform: "translateY(0%)" }}
                        >
                          <div className="h-[60px] md:h-20 flex items-center">
                            <h2 className="text-muted-foreground text-3xl md:text-5xl">
                              {project.name}
                            </h2>
                          </div>

                          <div className="flex items-center gap-2">
                            <h2 className="text-3xl md:text-5xl font-black italic text-primary">
                              {project.name}
                            </h2>
                            <ArrowUpRight
                              className={cn(
                                "w-20 h-20 text-muted-foreground transition-all duration-300 ease-out",
                                hoveredIndex === index
                                  ? "opacity-100 translate-x-0 translate-y-0"
                                  : "opacity-0 -translate-x-2 translate-y-2"
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:ml-auto flex flex-wrap items-center gap-2">
                      {categories.map((cat: string) => (
                        <span
                          key={cat}
                          className={cn(
                            "text-xs md:text-sm uppercase tracking-wide rounded-full px-3 py-1 border transition-all duration-300 whitespace-nowrap",
                            hoveredIndex === index
                              ? "bg-primary text-primary-foreground border-primary"
                              : "text-muted-foreground border-border"
                          )}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )
            })}

          <Separator orientation="horizontal" className="my-2" />
          {activeProject && (
            <DialogContent className="max-w-2xl rounded-2xl p-0 overflow-hidden">
                <MotionDiv
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="relative aspect-square h-[30vh] w-full bg-secondary"
                >
                  {activeProject.image && (
                    <Image
                      src={activeProject.image}
                      alt={activeProject.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </MotionDiv>

              <div className="p-6 space-y-6">
                <MotionDiv variants={fadeInUp} initial="hidden" animate="visible">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-primary">
                      {activeProject.name}
                    </DialogTitle>
                  </DialogHeader>
                </MotionDiv>

                <MotionDiv
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                >
                  <DialogDescription className="text-sm text-popover-foreground leading-relaxed whitespace-pre-line max-h-[40vh] overflow-y-auto pr-2">
                    {activeProject.description}
                  </DialogDescription>
                </MotionDiv>

                {Array.isArray(activeProject.technologies) &&
                  activeProject.technologies.length > 0 && (
                    <MotionDiv
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <ul className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech, index) => {
                          if (typeof tech === "string") {
                            return (
                              <MotionLi
                                key={tech}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="list-none"
                              >
                                <span className="inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 text-xs">
                                  {tech}
                                </span>
                              </MotionLi>
                            )
                          }
                          const Icon = tech.icon
                          return (
                            <MotionLi
                              key={tech.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="list-none"
                            >
                              <span className="inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 text-xs">
                                {Icon && <Icon className="size-3.5" />}
                                {tech.name}
                              </span>
                            </MotionLi>
                          )
                        })}

                      </ul>
                    </MotionDiv>
                  )}
                <MotionDiv
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button asChild className="flex-1">
                    <Link
                      href={activeProject.hosted_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="flex-1">
                    <Link
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </MotionDiv>
              </div>
            </DialogContent>
          )}
          </div>
          </div>
      </Dialog>
    </Section>
  )
}