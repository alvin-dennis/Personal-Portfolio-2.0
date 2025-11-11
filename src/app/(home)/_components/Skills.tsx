import React from "react";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import type { Skills as SkillsType } from "@/types";

interface Props {
  skills: SkillsType;
}

export default function Skills({ skills }: Props) {
  const renderSkill = (skill: string | { name: string; icon?: React.ElementType }) => {
    if (typeof skill === "string") return <Badge key={skill}>{skill}</Badge>;
    const Icon = skill.icon;
    return (
      <Badge key={skill.name}>
        {Icon && <Icon style={{ marginRight: "0.25em" }} />}
        {skill.name}
      </Badge>
    );
  };

  return (
    <Section text="Skills" href="skills">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-wrap items-start gap-1">
          <Badge variant="secondary">Languages</Badge>
          {skills.languages.map(renderSkill)}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Libraries</Badge>
          {skills.libraries.map(renderSkill)}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Frameworks</Badge>
          {skills.frameworks.map(renderSkill)}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Databases</Badge>
          {skills.databases.map(renderSkill)}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Tools</Badge>
          {skills.tools.map(renderSkill)}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Hardware</Badge>
          {skills.hardware.map(renderSkill)}
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Platforms</Badge>
          {skills.platforms.map(renderSkill)}
        </div>
      </div>
    </Section>
  );
}
