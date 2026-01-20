import { Variants } from "framer-motion";
import { MotionH2, MotionP, MotionSection } from "@/components/Framer";

interface Props {
  text?: string;
  href: string;
  paragraph?: string;
  children?: React.ReactNode;
  className?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Section({ text, href, paragraph, children, className }: Props) {
  return (
    <MotionSection
      id={href}
      className={`py-20 ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionH2 className="mb-6 text-5xl md:text-7xl text-primary" variants={fadeInUp}>
        {text}
      </MotionH2>
      {paragraph && (
        <MotionP className="mb-14 max-w-2xl text-md leading-relaxed" variants={fadeInUp}>
          {paragraph}
        </MotionP>
      )}
      {children}
    </MotionSection>
  );
}
