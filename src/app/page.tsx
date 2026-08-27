import dynamic from "next/dynamic";
import ExperienceTabs from "@/app/(home)/ExperienceTabs";
import Footer from "@/components/Footer";
import { SITE_CONTENT } from "@/lib/constants";

const Hero = dynamic(() => import("@/app/(home)/Hero"));
const Skills = dynamic(() => import("@/app/(home)/Skills"));
const Projects = dynamic(() =>
  import("@/app/(home)/Projects").then((m) => m.Projects),
);

export default function Home() {
  const sanitizedSkills = Object.fromEntries(
    Object.entries(SITE_CONTENT.skills).map(([category, list]) => [
      category,
      list.map((skill) =>
        typeof skill === "string" ? skill : { name: skill.name, icon: skill.icon },
      ),
    ]),
  ) as typeof SITE_CONTENT.skills;

  return (
    <main>
      <Hero {...SITE_CONTENT.hero} />
      <Skills skills={sanitizedSkills} />
      <ExperienceTabs
        experiences={SITE_CONTENT.experience}
        education={SITE_CONTENT.education}
      />
      <Projects />
      <Footer />
    </main>
  );
}
