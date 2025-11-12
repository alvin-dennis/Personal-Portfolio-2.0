"use client";

import Section from "@/components/Section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FlipCard,
  FlipCardFront,
  FlipCardBack,
} from "@/components/ui/flip-card";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SITE_CONTENT } from "@/lib/constants";
import Link from "next/link";
import { Projects } from "@/types";
import { MotionDiv, MotionLi } from "@/components/Framer";
import { Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? SITE_CONTENT.projects
      : SITE_CONTENT.projects.filter((p) => {
        const categories = Array.isArray(p.category)
          ? p.category.map((c) => c.toLowerCase())
          : [p.category.toLowerCase()];
        return categories.includes(selectedCategory.toLowerCase());
      });

  return (
    <div className="mb-1 flex justify-center text-center">
      <Section href="/projects" text="My Projects & Contributions">
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger className="mb-8 flex items-center gap-2 border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700">
              <SelectValue placeholder="All" />
            </SelectTrigger>

            <SelectContent>
              {SITE_CONTENT.categories.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <AnimatePresence mode="wait">
            <ProjectGrid key={selectedCategory} projects={filteredProjects} />
          </AnimatePresence>
        </MotionDiv>
      </Section>
    </div>
  );
}

interface ProjectGridProps {
  projects: Projects[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
    >
      {projects.map((project) => (
        <MotionDiv key={project.name} variants={fadeInUp}>
          <ProjectCard project={project} />
        </MotionDiv>
      ))}
    </MotionDiv>
  );
}

interface ProjectCardProps {
  project: Projects;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, url, image, hosted_url, technologies } = project;

  return (
    <FlipCard
      flipDirection="vertical"
      className="h-96 w-full transition-transform duration-300 hover:scale-[1.02]"
    >
      <FlipCardFront className="flex items-center justify-center rounded-2xl overflow-hidden">
        {hosted_url && !hosted_url.includes("github.com") ? (
          <>
            <div className="absolute inset-0 bg-black/40 z-0" />
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-2xl z-[-1]"
              style={{
                position: "absolute",
              }}
              priority={true}
            />
            <h3 className="absolute bottom-0 left-0 z-10 rounded-tr-2xl bg-[#FAF9F6] dark:bg-[#0a0a0a] px-2 py-1 text-black dark:text-white text-xl h-auto w-auto break-words text-left">
              {name}
            </h3>
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-900 relative">
            <div className="absolute inset-0 bg-[url('/noise-bg.webp')] bg-repeat bg-[length:128px] opacity-10 rounded-2xl" />
            <h3 className="relative text-2xl font-bold text-left text-[#0a0a0a] dark:text-white z-10">
              {name}
            </h3>
          </div>
        )}
      </FlipCardFront>

      <FlipCardBack className="relative overflow-auto rounded-2xl bg-white p-6 dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 rounded-2xl bg-[url('/noise-bg.webp')] bg-repeat bg-[length:128px] opacity-10" />
        <div className="relative z-10">
          <p className="mb-4 text-base text-[#0a0a0a] dark:text-white">{description}</p>

          {technologies?.length > 0 && (
            <ul className="mb-4 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => {
                if (typeof tech === "string") {
                  return (
                    <MotionLi
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-[#0a0a0a] dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    >
                      {tech}
                    </MotionLi>
                  );
                }
                const Icon = tech.icon;
                return (
                  <MotionLi
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-[#0a0a0a] dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  >
                    {Icon && <Icon className="inline size-4" />}
                    {tech.name}
                  </MotionLi>
                );
              })}
            </ul>
          )}

          <div className="mt-6 flex gap-5 text-[#0a0a0a] dark:text-white">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary dark:hover:text-primary-light"
            >
              Source
              <FaArrowUpRightFromSquare className="size-4 inline-block" />
            </Link>

            {hosted_url && !hosted_url.includes("github.com") && (
              <Link
                href={hosted_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary dark:hover:text-primary-light"
              >
                Preview
                <FaArrowUpRightFromSquare className="size-4 inline-block" />
              </Link>
            )}
          </div>
        </div>
      </FlipCardBack>
    </FlipCard>
  );
}

