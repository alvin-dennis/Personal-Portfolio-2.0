import dynamic from "next/dynamic";
import { getProjects } from "@/sanity/lib/queries";

const Projects = dynamic(() => import("./projects").then((m) => m.Projects));

export default async function ProjectsSection() {
  const projects = await getProjects();
  return <Projects projects={projects} />;
}
