import Image from "next/image";
import Section from "@/components/Section";
import type { Education } from "@/types";
import Link from "next/link";

interface Props {
  education: Education[];
}

export default function Education({ education }: Props) {
  return (
    <Section text="Education" href="education">
      {education.map(({ name, position, start, end, link, logo }) => (
        <div key={name} className="mb-10">
          <div className="mb-1.5 flex items-center gap-3">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo}
                alt={name ?? ""}
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
            <h3 className="text-lg">
              {name}
            </h3>
          </div>
          <div className="flex flex-col items-start text-[#0a0a0a] dark:text-white">
            <span className="pl-15 text-lg">{position}</span>
            <span className="pl-15 text-sm">
              {start} — {end}
            </span>
          </div>
        </div>
      ))}
    </Section>
  );
}
