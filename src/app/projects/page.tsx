import Section from "@/components/Section";
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SITE_CONTENT } from "@/lib/constants";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mb-1 flex justify-center text-center">
      <Section href="/projects" text="My Projects & Contributions">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {SITE_CONTENT.projects.map(
            ({ name, description, url, hosted_url, technologies }) => (
              <FlipCard key={name} flipDirection="vertical" className="h-96 w-full">
                <FlipCardFront className="flex items-center justify-center rounded-2xl overflow-hidden">
                  {hosted_url && !hosted_url.includes("github.com") ? (
                    <>
                      <div className="absolute inset-0 bg-black/40 z-0" />
                      <iframe
                        src={hosted_url}
                        title={name}
                        className="h-full w-full rounded-2xl relative z-[-1]"
                        frameBorder="0"
                        scrolling="0"
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
                  <div
                    className="absolute inset-0 z-0 rounded-2xl bg-[url('/noise-bg.png')] bg-repeat bg-[length:128px] opacity-10"
                  />

                  <div className="relative z-10">
                    <p className="mb-4 text-base text-[#0a0a0a] dark:text-white">
                      {description}
                    </p>

                    {technologies?.length > 0 && (
                      <ul className="mb-4 flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => {
                          const { name: techName, icon: Icon } =
                            typeof tech === "string" ? { name: tech, icon: null } : tech;

                          return (
                            <li
                              key={idx}
                              className="flex items-center gap-2 rounded-full border border-neutral-200 
                                       bg-neutral-100 px-3 py-1 text-xs text-[#0a0a0a] 
                                       dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                            >
                              {Icon && <Icon className="inline size-4" />}
                              {techName}
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    <div className="flex gap-5 text-[#0a0a0a] dark:text-white">
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
            )
          )}
        </div>
      </Section>
    </div>
  );
}
