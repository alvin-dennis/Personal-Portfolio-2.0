import Image from "next/image";
import BlurText from "@/components/ui/BlurText";
import { MotionDiv } from "@/components/Framer";
import { Variants } from "framer-motion";
import RotatingText from "@/components/ui/RotatingText";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};


interface Props {
  name: string;
  image: string;
  currentWork?: string;
  summary: string;
  specialty: string[];
}

export default function Hero({
  name,
  image,
  currentWork,
  summary,
  specialty
}: Props) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="absolute top-[34%] sm:top-[33%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="text-center">
          <MotionDiv
            viewport={{ once: true }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center justify-center"
          >
            <div>
              <BlurText
                text="ALVIN"
                delay={20}
                animateBy="letters"
                direction="top"
                className="font-bold text-[100px] text-[#C3E41D] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              />
            </div>
            <div>
              <BlurText
                text="DENNIS"
                delay={20}
                animateBy="letters"
                direction="top"
                className="font-bold mt-5 text-[100px] text-[#C3E41D] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              />
            </div>
          </MotionDiv>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <MotionDiv
              viewport={{ once: true }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="flex items-center justify-center"
            >
              <div className="w-[65px] h-20 sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <Image
                  src={`https://images.weserv.nl/?url=${image}&output=webp`}
                  width={190}
                  height={190}
                  alt={name ?? ""}
                  className="object-cover md:h-full md:w-full"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>

      <div className="absolute justify-center bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-44 xl:bottom-52 left-1/2 -translate-x-1/2 w-full">
        <MotionDiv
          viewport={{ once: true }}
          variants={blurFadeIn}
          className="flex flex-col items-center justify-center"
        >
          <RotatingText
            texts={specialty}
            splitBy="words"
            rotationInterval={2000}
            auto={true}
            mainClassName="md:mb-10 text-3xl font-bold sm:text-5xl md:text-6xl"
            elementLevelClassName="inline-block"
          />
        </MotionDiv>
        <MotionDiv
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <div className="items-center justify-center">
              <BlurText
                text={summary.trim().replace(/\s+/g, ' ')}
                delay={30}
                animateBy="words"
                direction="top"
                className="font-semibold text-sm sm:text-lg md:text-2xl max-w-full sm:max-w-md lg:max-w-2xl mx-auto leading-relaxed wrap-break-word text-center"
              />
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center"
        >
            <div className="items-center justify-center text-center">
              <BlurText
                text={currentWork ?? "…"}
                delay={20}
                animateBy="words"
                direction="top"
                className="font-semibold text-lg md:text-2xl mt-2"
              />
            </div>
        </MotionDiv>
      </div>
    </main>
  );
}