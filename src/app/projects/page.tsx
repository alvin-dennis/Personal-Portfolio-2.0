import Section from "@/components/Section";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  FlipCard,
  FlipCardFront,
  FlipCardBack,
} from "@/components/ui/flip-card";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SITE_CONTENT } from "@/lib/constants";
import Link from "next/link";
import { Projects, SkillProp } from "@/types";

export default function ProjectsPage() {
  return (
    <div className="mb-1 flex justify-center text-center">
      <Section href="/projects" text="My Projects & Contributions">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2 bg-transparent">
            {SITE_CONTENT.categories.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 
                px-4 py-2 text-sm font-medium text-neutral-800 
                hover:bg-neutral-200 data-[state=active]:border-primary data-[state=active]:bg-neutral-200
                dark:border-neutral-700 dark:bg-neutral-800 dark:text-white 
                dark:hover:bg-neutral-700 dark:data-[state=active]:bg-neutral-700"
              >
                <Icon className="size-4" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <ProjectGrid projects={SITE_CONTENT.projects} />
          </TabsContent>

          {SITE_CONTENT.categories
            .filter((cat) => cat.value !== "all")
            .map(({ value }) => (
              <TabsContent key={value} value={value} className="mt-4">
                <ProjectGrid
                  projects={SITE_CONTENT.projects.filter((p) => {
                    const categories = Array.isArray(p.category)
                      ? p.category.map((c) => c.toLowerCase())
                      : [p.category.toLowerCase()];
                    return categories.includes(value.toLowerCase());
                  })}
                />
              </TabsContent>
            ))}
        </Tabs>
      </Section>
    </div>
  );
}

interface ProjectGridProps {
  projects: Projects[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Projects;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, url, hosted_url, technologies } = project;

  return (
    <FlipCard flipDirection="vertical" className="h-96 w-full">
      <FlipCardFront className="flex items-center justify-center rounded-2xl overflow-hidden">
        {hosted_url && !hosted_url.includes("github.com") ? (
          <>
            <div className="absolute inset-0 bg-black/40 z-0" />
            <iframe
              src={hosted_url}
              title={name}
              className="h-full w-full rounded-2xl relative z-[-1]"
              frameBorder="0"
              scrolling="no"
            />
            <h3
              className="absolute bottom-0 left-0 z-10 rounded-tr-2xl bg-black px-2 py-1 text-white text-lg
              max-w-[70%] w-auto break-words whitespace-wrap text-left"
            >
              {name}
            </h3>
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-900 relative">
            <div className="absolute inset-0 bg-[url('/noise-bg.png')] bg-repeat bg-[length:128px] opacity-10 rounded-2xl" />
            <h3 className="relative text-2xl font-bold text-left text-[#0a0a0a] dark:text-white z-10">
              {name}
            </h3>
          </div>
        )}
      </FlipCardFront>

      <FlipCardBack className="relative overflow-auto rounded-2xl bg-white p-6 dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 rounded-2xl bg-[url('/noise-bg.png')] bg-repeat bg-[length:128px] opacity-10" />
        <div className="relative z-10">
          <p className="mb-4 text-base text-[#0a0a0a] dark:text-white">{description}</p>

          {technologies?.length > 0 && (
            <ul className="mb-4 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => {
                if (typeof tech === "string") {
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-2 rounded-full border border-neutral-200 
                      bg-neutral-100 px-3 py-1 text-xs text-[#0a0a0a] 
                      dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    >
                      {tech}
                    </li>
                  );
                }

                const Icon = tech.icon;
                return (
                  <li
                    key={idx}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 
                    bg-neutral-100 px-3 py-1 text-xs text-[#0a0a0a] 
                    dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  >
                    {Icon && <Icon className="inline size-4" />}
                    {tech.name}
                  </li>
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
