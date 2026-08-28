import { getEducation, getExperience } from "@/sanity/lib/queries";
import ExperienceTabs from "./experience-tabs";

export default async function ExperienceSection() {
  const [experiences, education] = await Promise.all([getExperience(), getEducation()]);
  return <ExperienceTabs experiences={experiences} education={education} />;
}
