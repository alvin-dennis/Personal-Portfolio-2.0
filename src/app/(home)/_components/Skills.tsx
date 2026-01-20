import { Variants } from "framer-motion";
import { MotionDiv } from "@/components/Framer";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import type { SkillProp, Skills as SkillsType } from "@/types";

interface Props {
  skills: SkillsType;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export default function Skills({ skills }: Props) {
  return (
    <Section
      text="Skills"
      href="skills"
      paragraph="A curated technical stack focused on modern web architectures and robust engineering."
    >
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col gap-y-8"
      >
        {Object.entries(skills).map(([category, list]) => (
          <MotionDiv
            key={category}
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 md:gap-25 group"
          >
            <h3 className="font-bold text-muted-foreground uppercase tracking-wider w-32 pt-2 transition-colors group-hover:text-primary">
              {category}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-3 flex-1">
              {list.map((skill: SkillProp) => {
                const name = typeof skill === "string" ? skill : skill.name;
                const Icon = typeof skill === "string" ? null : skill.icon;
                return (
                  <Badge variant={"secondary"} key={name} className="flex items-center">
                    {Icon && <Icon className="size-12" />}
                    <span className="text-lg">{name}</span>
                  </Badge>
                );
              })}
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
}
