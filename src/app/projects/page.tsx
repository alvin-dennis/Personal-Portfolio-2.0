"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
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
import { Variants, AnimatePresence, easeOut } from "framer-motion";
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
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

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
    <AnimatePresence mode="wait">
      {loading ? (
        <MotionDiv
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <Loader />
        </MotionDiv>
      ) : (
        <MotionDiv
          key="projects"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: easeOut,
            }}
          className="mb-1 flex justify-center text-center"
        >
          <Section href="/projects" text="My Projects & Contributions">
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="mb-8 flex items-center gap-2 border px-4 py-2 text-sm font-medium border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700">
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
                <ProjectGrid
                  key={selectedCategory}
                  projects={filteredProjects}
                />
              </AnimatePresence>
            </MotionDiv>
          </Section>
        </MotionDiv>
      )}
    </AnimatePresence>
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
              priority
            />
            <h3 className="absolute bottom-0 left-0 z-10 rounded-tr-2xl bg-black px-2 py-1 text-white text-xl">
              {name}
            </h3>
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-900 relative">
            <div className="absolute inset-0 bg-[url('/assets/noise-bg.webp')] bg-repeat bg-[length:128px] opacity-10 rounded-2xl" />
            <h3 className="relative text-2xl font-bold text-white z-10">
              {name}
            </h3>
          </div>
        )}
      </FlipCardFront>

      <FlipCardBack className="relative overflow-auto rounded-2xl p-6 bg-black">
        <div className="absolute inset-0 z-0 rounded-2xl bg-[url('/assets/noise-bg.webp')] bg-repeat bg-[length:128px] opacity-10" />
        <div className="relative z-10">
          <p className="mb-4 text-base text-white">{description}</p>

          {technologies?.length > 0 && (
            <ul className="mb-4 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => {
                if (typeof tech === "string") {
                  return (
                    <MotionLi
                      key={idx}
                      variants={fadeInUp}
                      className="rounded-full border px-3 py-1 text-xs border-neutral-700 bg-neutral-800 text-white"
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
                    className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-neutral-700 bg-neutral-800 text-white"
                  >
                    {Icon && <Icon className="size-4" />}
                    {tech.name}
                  </MotionLi>
                );
              })}
            </ul>
          )}

          <div className="mt-10 flex gap-5 text-white">
            <Link href={url} target="_blank" className="inline-flex items-center gap-1">
              Source <FaArrowUpRightFromSquare className="size-4" />
            </Link>

            {hosted_url && !hosted_url.includes("github.com") && (
              <Link
                href={hosted_url}
                target="_blank"
                className="inline-flex items-center gap-1"
              >
                Preview <FaArrowUpRightFromSquare className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </FlipCardBack>
    </FlipCard>
  );
}
