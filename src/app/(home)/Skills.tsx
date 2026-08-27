import { FloatingAnimation } from "@/components/animations";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import type { SkillProp, Skills as SkillsType } from "@/types";

interface Props {
  skills: SkillsType;
}

export default function Skills({ skills }: Props) {
  return (
    <Section
      text="Skills"
      href="skills"
      paragraph="A curated technical stack focused on modern web architectures and robust engineering."
    >
      <div className="flex flex-col gap-y-8">
        {Object.entries(skills).map(([category, list], index) => (
          <FloatingAnimation
            key={category}
            delay={index * 0.08}
            duration={0.5}
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
          </FloatingAnimation>
        ))}
      </div>
    </Section>
  );
}
