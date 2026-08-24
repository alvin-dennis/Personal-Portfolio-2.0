"use client";

import { Variants } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MotionDiv, MotionLi } from "@/components/Framer";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Projects as ProjectsType } from "@/types";

interface Props {
  projects: ProjectsType[];
}

export function Projects({ projects }: Props) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<ProjectsType | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const sheetContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const sheetItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const sheetImage: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <Section
      text="Projects"
      href="projects"
      paragraph="A curated selection of projects that demonstrate my approach to building thoughtful, well-engineered applications, with an emphasis on performance, usability, and clean architecture."
    >
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="inset-x-3 bottom-3 top-3 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[92vw] md:max-w-4xl md:top-[5vh] md:bottom-[5vh] h-auto rounded-2xl p-0 overflow-hidden border border-border shadow-2xl focus:outline-none"
          showCloseButton={false}
        >
          {activeProject && (
            <MotionDiv
              key={activeProject.name}
              variants={sheetContainer}
              initial="hidden"
              animate="visible"
              className="relative h-full flex flex-col overflow-hidden"
            >
              {/* ── Floating close button ── */}
              <MotionDiv variants={sheetItem} className="absolute top-4 right-4 md:top-6 md:right-6 z-30">
                <Button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  variant="default"
                  size="icon"
                >
                  <X className="w-4 h-4" />
                </Button>
              </MotionDiv>

              {/* ── Full-bleed hero image ── */}
              <MotionDiv
                variants={sheetImage}
                className="relative w-full aspect-[3/2] max-h-[46vh] shrink-0 bg-secondary overflow-hidden"
              >
                {activeProject.image && (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.name}
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-transparent" />
              </MotionDiv>

              {/* ── Content card, overlapping the image ── */}
              <div className="relative z-10 -mt-8 md:-mt-12 flex-1 flex flex-col min-h-0 rounded-t-3xl bg-background overflow-hidden">
                {/* Drag handle */}
                <div className="flex justify-center pt-3 pb-1 shrink-0">
                  <div className="h-1 w-10 rounded-full bg-border" />
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-2xl px-6 pt-4 pb-8 md:px-8 md:pt-6 flex flex-col gap-6">
                    <MotionDiv variants={sheetItem}>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        {Array.isArray(activeProject.category) && (
                          <div className="flex flex-wrap gap-2">
                            {(activeProject.category as string[]).map((cat) => (
                              <span
                                key={cat}
                                className="text-xs uppercase tracking-widest rounded-full px-3 py-1 border border-border text-muted-foreground"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <SheetTitle className="mt-4 text-4xl md:text-5xl font-black italic text-primary leading-none">
                        {activeProject.name}
                      </SheetTitle>
                    </MotionDiv>

                    <Separator />

                    <MotionDiv variants={sheetItem}>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                        {activeProject.description}
                      </p>
                    </MotionDiv>

                    {Array.isArray(activeProject.technologies) &&
                      activeProject.technologies.length > 0 && (
                        <MotionDiv variants={sheetItem}>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                            Built with
                          </p>
                          <ul className="flex flex-wrap gap-2">
                            {activeProject.technologies.map((tech, index) => {
                              if (typeof tech === "string") {
                                return (
                                  <MotionLi
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.04 }}
                                    className="list-none"
                                  >
                                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5 text-xs">
                                      {tech}
                                    </span>
                                  </MotionLi>
                                );
                              }
                              const Icon = tech.icon;
                              return (
                                <MotionLi
                                  key={tech.name}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + index * 0.04 }}
                                  className="list-none"
                                >
                                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5 text-xs">
                                    {Icon && <Icon className="size-3.5" />}
                                    {tech.name}
                                  </span>
                                </MotionLi>
                              );
                            })}
                          </ul>
                        </MotionDiv>
                      )}
                  </div>
                </div>

                {/* ── Sticky CTA footer ── */}
                <MotionDiv
                  variants={sheetItem}
                  className="shrink-0 border-t border-border bg-background/95 backdrop-blur-md"
                >
                  <div className="mx-auto w-full max-w-2xl px-6 py-5 md:px-8 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link
                        href={activeProject.hosted_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    {!activeProject.freelance && (
                      <Button variant="outline" asChild className="flex-1">
                        <Link
                          href={activeProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>
          )}
        </SheetContent>
      </Sheet>

      {/* ── Project list ── */}
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
            transform: `translate3d(${smoothPosition.x + 20}px, ${Math.max(smoothPosition.y - 100, 0)}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            transition:
              "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative w-70 h-45 bg-secondary rounded-xl overflow-hidden">
            {projects.map((project, index) => {
              if (!project.image) return null;
              return (
               <Image
                  key={project.name}
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="absolute inset-0 object-cover transition-all duration-500 ease-out"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
                    filter: hoveredIndex === index ? "none" : "blur(10px)",
                  }}
                />
              );
            })}
          </div>
        </div>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const categories: string[] = Array.isArray(project.category)
              ? project.category
              : [project.category];
            return (
              <MotionDiv
                key={project.name}
                variants={fadeInUp}
                className="group block w-full mx-auto cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setActiveProject(project);
                  setOpen(true);
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
                        : "opacity-0 scale-95",
                    )}
                  />
                  <div className="relative flex flex-col md:flex-row md:items-center gap-4">
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
                                "w-20 h-20 text-muted-foreground transition-all duration-300 ease-out",
                                hoveredIndex === index
                                  ? "opacity-100 translate-x-0 translate-y-0"
                                  : "opacity-0 -translate-x-2 translate-y-2",
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
                              : "text-muted-foreground border-border",
                          )}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </MotionDiv>

        <Separator orientation="horizontal" className="my-2" />
      </div>
    </Section>
  );
}