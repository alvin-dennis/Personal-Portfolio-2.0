"use client";

import Section from "@/components/Section";
import { ChevronsDownUpIcon, ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SITE_CONTENT } from "@/lib/constants";
import { Experience, ExperiencePositionItemType, iconMap } from "@/types";
import { MotionDiv, MotionLi } from "@/components/Framer";
import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function WorkExperience({ className }: { className?: string }) {
  const experiences: Experience[] = SITE_CONTENT.experience;

  return (
      <MotionDiv
        className={cn("w-full", className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Section text="Work Experience" href="experience">
        {experiences.map((experience) => (
          <MotionDiv
            key={experience.id}
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-6 last:mb-0"
          >
            <ExperienceItem experience={experience} />
          </MotionDiv>
        ))}
      </Section>
      </MotionDiv>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3">
        <Link href={experience.companyLink} target="_blank" rel="noopener noreferrer">
          <div className="size-10 items-start justify-start">
            {experience.companyLogo ? (
              <Image
                src={`https://images.weserv.nl/?url=${experience.companyLogo}&output=webp`}
                alt={experience.companyName}
                width={50}
                height={50}
                className="rounded-full"
              />
            ) : (
              <span className="flex size-2 rounded-full" />
            )}
          </div>
        </Link>

        <h3 className="text-lg font-semibold">{experience.companyName}</h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-4 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <MotionDiv key={position.id} variants={fadeInUp} viewport={{ once: true }}>
            <ExperiencePositionItem position={position} />
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}

function ExperiencePositionItem({ position }: { position: ExperiencePositionItemType }) {
  const ExperienceIcon = iconMap[position.icon as keyof typeof iconMap];

  return (
    <Collapsible defaultOpen={position.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4d">
        <CollapsibleTrigger className="group/experience not-prose block w-full text-left select-none">
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted"
              aria-hidden
            >
              <ExperienceIcon className="size-4 text-black" />
            </div>

            <span className="flex-1 text-lg text-balance">{position.title}</span>

            <div className="shrink-0 [&_svg]:size-6" aria-hidden>
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-11 text-sm">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd>{position.employmentPeriod}</dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {position.description && (
            <Prose className="pt-2 pl-11 text-muted-foreground">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-11">
              {position.skills.map((skill, index) => (
                <MotionLi key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex">
                  <Skill>{skill}</Skill>
                </MotionLi>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none text-foreground prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-1.5 py-0.5 text-xs",
        className
      )}
      {...props}
    />
  );
}
