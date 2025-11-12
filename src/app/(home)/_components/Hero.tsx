import { Variants } from "framer-motion";
import { MotionDiv, MotionSection, MotionH1, MotionP } from "@/components/Framer";
import RotatingText from "@/components/ui/RotatingText";
import Image from "next/image";
import Timezone from "@/components/TimeZone"

interface Props {
  name: string;
  image: string;
  specialty: string[];
  summary: string;
  currentWork?: string;
  location: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Hero({
  name,
  image,
  specialty,
  summary,
  currentWork,
  location
}: Props) {

  return (
    <MotionSection
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-12 text-[#0a0a0a] md:py-20 dark:text-white"
    >
      <MotionDiv
        viewport={{ once: true }}
        variants={fadeInUp} className="flex justify-center">
        <div className="mb-4 inline-block flex-shrink-0 rotate-[5deg] bg-[#0a0a0a] p-4 sm:mb-6 md:h-80 md:w-64 md:rotate-[7deg] dark:bg-white">
          <Image
            src={image}
            width={190}
            height={190}
            alt={name ?? ""}
            className="object-cover md:h-full md:w-full"
          />
        </div>
      </MotionDiv>

      <MotionDiv
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center text-center"
      >
          <MotionH1
            variants={fadeInUp}
            className="mb-1 text-4xl text-neutral-900 sm:text-7xl md:text-8xl dark:text-white">
            {name}
          </MotionH1>

        <MotionDiv
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-2 mb-4 text-2xl font-bold text-blue-500 sm:text-4xl md:text-5xl dark:text-blue-500"
        >
          <RotatingText
            texts={specialty}
            mainClassName="inline font-bold"
            splitBy="words"
            rotationInterval={2000}
            auto={true}
          />
        </MotionDiv>

        <MotionP
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-5 text-lg font-normal sm:mb-8 md:text-xl">
          {summary}
        </MotionP>

        <MotionDiv
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-1 text-[#0a0a0a] dark:text-white"
        >
          <div className="text-center sm:text-left">
            <span className="font-medium text-neutral-500 dark:text-neutral-400">
              Currently working as
            </span>
            <span className="ml-1 font-semibold">{currentWork ?? "…"}</span>
          </div>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:items-center sm:justify-center sm:gap-2 sm:text-base"
        >
          <Timezone timezone="Asia/Kolkata" location={location} />
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
}
