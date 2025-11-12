import Image from "next/image";
import Section from "@/components/Section";
import type { Education } from "@/types";
import Link from "next/link";
import { MotionDiv } from "@/components/Framer";
import { Variants } from "framer-motion";

interface Props {
  education: Education[];
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

export default function Education({ education }: Props) {
  return (
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
      <Section text="Education" href="education">
        {education.map(({ name, position, start, end, link, logo }) => (
          <MotionDiv
            key={name}
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10 last:mb-0"
          >
            <div className="mb-1.5 flex items-center gap-3">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`https://images.weserv.nl/?url=${logo}&output=webp`}
                  alt={name ?? ""}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>

            <div className="flex flex-col items-start text-[#0a0a0a] dark:text-white">
              <span className="text-lg">{position}</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {start} — {end}
              </span>
              </div>
          </MotionDiv>
        ))}
      </Section >
    </MotionDiv>
  );
}
