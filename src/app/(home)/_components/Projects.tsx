import Section from "@/components/Section";
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Projects as ProjectsType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, MotionP, MotionLi } from "@/components/Framer";
import { Variants } from "framer-motion";

interface Props {
  projects: ProjectsType[];
}

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

export default function Projects({ projects }: Props) {
  return (
    <Section text="Featured Projects" href="projects">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8"
      >
        {projects.slice(0, 3).map(
          ({ name, description, url, image, hosted_url, technologies }) => (
            <MotionDiv key={name} variants={fadeInUp}>
              <FlipCard flipDirection="vertical" className="h-96 w-full">
                <FlipCardFront className="flex items-center justify-center rounded-2xl overflow-hidden">
                  {hosted_url && !hosted_url.includes("github.com") ? (
                    <>
                      <div className="absolute inset-0 bg-black/20 z-0" />
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
                      <h3 className="absolute bottom-0 left-0 z-10 rounded-tr-2xl bg-[#FAF9F6] dark:bg-[#0a0a0a] px-2 py-1 text-black dark:text-white text-xl w-auto h-auto break-words whitespace-wrap text-left">
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
                    <MotionP
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mb-4 text-base text-[#0a0a0a] dark:text-white">
                      {description}
                    </MotionP>

                    {technologies?.length > 0 && (
                      <ul className="mb-4 flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => {
                          const { name: techName, icon: Icon } =
                            typeof tech === "string"
                              ? { name: tech, icon: null }
                              : tech;

                          return (
                            <MotionLi
                              variants={fadeInUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              key={idx}
                              className="flex items-center gap-2 rounded-full border border-neutral-200 
                                bg-neutral-100 px-3 py-1 text-xs text-[#0a0a0a] 
                                dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                            >
                              {Icon && <Icon className="inline size-4" />}
                              {techName}
                            </MotionLi>
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
            </MotionDiv>
          )
        )}
      </MotionDiv>

      <MotionDiv
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <Button
          variant="secondary"
          className="rounded-full bg-[#0a0a0a] px-5 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-[#0a0a0a] dark:hover:bg-gray-200"
        >
          <Link href="/projects">View All Projects</Link>
        </Button>
      </MotionDiv>
    </Section>
  );
}
