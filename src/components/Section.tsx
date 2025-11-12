import { Variants } from "framer-motion";
import { MotionSection, MotionH2 } from "@/components/Framer";

interface Props {
  text: string;
  href: string;
  children?: React.ReactNode;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Section({ text, href, children }: Props) {
  return (
    <MotionSection
      id={href}
      className="py-24"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionH2
        className="mb-14 text-3xl text-[#0a0a0a] md:text-5xl dark:text-white"
        variants={fadeInUp}
      >
        {text}
      </MotionH2>
      {children}
    </MotionSection>
  );
}
