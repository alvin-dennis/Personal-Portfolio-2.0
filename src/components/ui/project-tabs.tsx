import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SITE_CONTENT } from "@/lib/constants";
import type { Projects } from "@/types";
import { BlurFade } from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

interface Props {
  projects: Projects[];
}

export default function Projects({ projects }: Props) {
  const categories = SITE_CONTENT.categories;
  const getIcon = (techName: string) => {
    for (const project of SITE_CONTENT.projects) {
      const foundTech = project.technologies.find(
        (tech) => typeof tech === "object" && tech.name === techName,
      );
      if (foundTech && typeof foundTech === "object" && foundTech.icon) {
        return foundTech.icon;
      }
    }
    return null;
  };

  return (
    <Tabs defaultValue="all" className="w-full text-sm text-muted-foreground">
      <TabsList className="mb-6 flex flex-wrap justify-center gap-2">
        {categories.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center gap-2"
          >
            {Icon && <Icon className="text-xl" />} {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map(({ value }) => {
        const filtered =
          value === "all"
            ? projects
            : projects.filter((p) =>
              Array.isArray(p.category)
                ? p.category.map((c) => c.toLowerCase()).includes(value)
                : p.category.toLowerCase() === value,
            );
        return (
          <TabsContent key={value} value={value}>
            <div className="pt-6">
              {filtered.length === 0 ? (
                <p className="text-[#0a0a0a] dark:text-white">
                  No projects in this category.
                </p>
              ) : (
                filtered.map(
                  (
                    { name, description, url, hosted_url, technologies }
                  ) => (
                    <BlurFade key={name} delay={BLUR_FADE_DELAY * 3}>
                      <div className="mb-12 rounded-2xl border border-[#0a0a0a] bg-white dark:border-white dark:bg-[#0a0a0a]">
                        <div className="bg-difu relative z-[1] grid h-[580px] w-full grid-rows-2 rounded-2xl before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-[url(/noise-bg.png)] before:bg-[length:128px] before:bg-repeat before:opacity-[7%] before:content-[''] sm:grid-cols-2 sm:grid-rows-1 md:h-96">
                          <div className="px-6 pt-12">
                            <h3 className="mb-5 text-3xl font-bold text-[#0a0a0a] dark:text-white">
                              {name}
                            </h3>
                            <p className="text-base text-[#0a0a0a] dark:text-white">
                              {description}
                            </p>
                            {technologies?.length && (
                              <ul className="mt-4 flex flex-wrap gap-2">
                                {technologies.map((tech, i) => {
                                  const isObject = typeof tech !== "string";
                                  const techName = isObject ? tech.name : tech;
                                  const Icon = getIcon(techName);

                                  return (
                                    <li
                                      key={i}
                                      className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-[#0a0a0a] dark:text-white"
                                    >
                                      {Icon && (
                                        <Icon className="inline size-4" />
                                      )}
                                      {techName}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                            <div className="flex gap-5 pt-10 text-[#0a0a0a] dark:text-white">
                              <a
                                href={url}
                                target="_blank"
                                className="inline-flex items-center gap-1 text-[#0a0a0a] hover:text-primary hover:underline dark:text-white"
                              >
                                Source
                                <FaArrowUpRightFromSquare className="inline-block text-lg" />
                              </a>
                              {hosted_url &&
                                !hosted_url.includes("github.com") && (
                                  <a
                                    href={hosted_url}
                                    target="_blank"
                                    className="inline-flex items-center gap-1 text-[#0a0a0a] hover:text-primary hover:underline dark:text-white"
                                  >
                                    Preview
                                    <FaArrowUpRightFromSquare className="inline-block text-lg" />
                                  </a>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </BlurFade>
                  ),
                )
              )}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
