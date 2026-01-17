"use client"

import { useState, useRef } from "react"
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Projects | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] },
    },
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
          className="relative w-full max-w-full mx-auto px-6"
        >
          {SITE_CONTENT.projects.map((project, index) => (
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
              <div className="relative py-5 border-t border-border transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="relative overflow-hidden h-[60px] md:h-20 group">
                      <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
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
                              "w-20 h-20 text-muted-foreground transition-all duration-300",
                              hoveredIndex === index
                                ? "opacity-100 translate-x-0 translate-y-0"
                                : "opacity-0 -translate-x-2 translate-y-2"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground text-sm mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Separator className="my-2" />

          {activeProject && (
            <DialogContent className="max-w-2xl rounded-2xl p-0 overflow-hidden">
              <MotionDiv
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="relative aspect-square h-[30vh] w-full"
              >
                <Image
                  src={activeProject.image || "/assets/common/noise-bg.webp"}
                  alt={activeProject.name}
                  fill
                  className="object-cover"
                />
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
      </Dialog>
    </Section>
  )
}
