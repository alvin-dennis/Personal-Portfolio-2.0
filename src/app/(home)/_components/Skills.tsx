import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import type { Skills as SkillsType } from "@/types";
import { MotionSection, MotionDiv } from "@/components/Framer";
import { Variants } from "framer-motion";

interface Props {
  skills: SkillsType;
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

export default function Skills({ skills }: Props) {
  const renderSkill = (
    skill: string | { name: string; icon?: React.ElementType }
  ) => {
    if (typeof skill === "string") {
      return (
        <MotionDiv variants={fadeInUp} key={skill}>
          <Badge>{skill}</Badge>
        </MotionDiv>
      );
    }

    const Icon = skill.icon;
    return (
      <MotionDiv viewport={{ once: true }} variants={fadeInUp} key={skill.name}>
        <Badge>
          {Icon && <Icon style={{ marginRight: "0.25em" }} />}
          {skill.name}
        </Badge>
      </MotionDiv>
    );
  };

  return (
    <MotionSection
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-12 md:py-20"
    >
      <Section text="Skills" href="skills">
        <MotionDiv
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-y-4"
        >
          {Object.entries(skills).map(([category, list]) => (
            <MotionDiv
              key={category}
              variants={fadeInUp}
              className="flex flex-wrap items-start gap-1"
            >
              <Badge variant="secondary">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
              {list.map(renderSkill)}
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>
    </MotionSection>
  );
}
