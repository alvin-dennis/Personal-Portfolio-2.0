"use client";

import { ChevronsDownUpIcon, ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ScaleUp, SlideInBottom, SlideInLeft } from "@/components/animations";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  Education,
  ExperiencePositionItemType,
  Experience as ExperienceType,
  iconMap,
} from "@/types";

interface Props {
  experiences: ExperienceType[];
  education: Education[];
}

export default function ExperienceTabs({ experiences, education }: Props) {
  return (
    <div className="w-full">
      <Tabs defaultValue="experience" className="">
        <TabsList className="mb-6" shape="pill">
          <TabsTrigger value="experience" className="font-nougat text-2xl md:text-5xl">
            Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="font-nougat text-2xl md:text-5xl">
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience">
          {experiences.map((experience, index) => (
            <ScaleUp key={experience.id} delay={index * 0.08} duration={0.5}>
              <ExperienceItem experience={experience} />
            </ScaleUp>
          ))}
        </TabsContent>

        <TabsContent value="education">
          {education.map(({ name, position, start, end, link, logo }, index) => (
            <ScaleUp key={name} delay={index * 0.08} duration={0.5} className="mb-10 last:mb-0">
              <div className="mb-1.5 flex items-center gap-3">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </Link>
                <h3 className="text-lg font-semibold text-muted-foreground">{name}</h3>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-lg">{position}</span>
                <span className="text-sm">
                  {start} — {end}
                </span>
              </div>
            </ScaleUp>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ExperienceItem({ experience }: { experience: ExperienceType }) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3">
        <Link href={experience.companyLink} target="_blank" rel="noopener noreferrer">
          <div className="size-10 items-start justify-start">
            {experience.companyLogo ? (
              <Image
                src={experience.companyLogo}
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

        <h3 className="text-lg font-semibold text-muted-foreground">{experience.companyName}</h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-4 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, index) => (
          <SlideInLeft key={position.id} delay={index * 0.06} duration={0.5}>
            <ExperiencePositionItem position={position} />
          </SlideInLeft>
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
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted group-data-[state=open]/experience:bg-primary"
              aria-hidden
            >
              {ExperienceIcon && <ExperienceIcon className="size-4 text-black" />}
            </div>

            <span className="flex-1 text-lg text-balance group-data-[state=open]/experience:text-popover-foreground">
              {position.title}
            </span>

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
                  <dd className="group-data-[state=open]/experience:text-popover-foreground">
                    {position.employmentType}
                  </dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4 group-data-[state=open]/experience:bg-primary"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd className="group-data-[state=open]/experience:text-popover-foreground">
                {position.employmentPeriod}
              </dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {position.description && (
            <Prose className="pt-2 pl-11">
              <ReactMarkdown
                components={{
                  ul: ({ children, ...props }) => (
                    <ul className="list-disc pl-5 space-y-1" {...props}>
                      {children}
                    </ul>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="text-foreground" {...props}>
                      {children}
                    </li>
                  ),
                }}
              >
                {position.description}
              </ReactMarkdown>
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-11">
              {position.skills.map((skill, index) => (
                <li key={index} className="list-none">
                  <SlideInBottom delay={index * 0.05} duration={0.35}>
                    <Skill>{skill}</Skill>
                  </SlideInBottom>
                </li>
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
        className,
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("inline-flex items-center rounded-lg border px-1.5 py-0.5 text-xs", className)}
      {...props}
    />
  );
}
