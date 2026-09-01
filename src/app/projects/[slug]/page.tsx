import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { RotateIn, ScaleUp, SlideInBottom, SlideInLeft } from "@/components/animations";
import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { skillIconMap } from "@/lib/icon-maps";
import { getProjectBySlug, getProjects } from "@/sanity/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <SlideInLeft className="block md:col-span-2 md:col-start-1 md:sticky md:top-24 h-fit">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </SlideInLeft>

        <div className="min-w-0 md:col-span-8 md:col-start-3">
          <ScaleUp
            delay={0.05}
            duration={0.5}
            className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-secondary mb-10"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            )}
          </ScaleUp>

          <SlideInBottom delay={0.1} duration={0.4} className="mb-8 block">
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs uppercase tracking-widest rounded-full px-3 py-1 border border-border text-muted-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-black italic text-primary leading-none">
              {project.name}
            </h1>
          </SlideInBottom>

          <Separator className="mb-8" />

          <SlideInBottom delay={0.15} duration={0.4} className="mb-10 block">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </SlideInBottom>

          {project.technologies.length > 0 && (
            <SlideInBottom delay={0.2} duration={0.4} className="mb-12 block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Built with
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => {
                  if (typeof tech === "string") {
                    return (
                      <li key={tech} className="list-none">
                        <RotateIn delay={0.24 + index * 0.04} duration={0.35}>
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5 text-xs">
                            {tech}
                          </span>
                        </RotateIn>
                      </li>
                    );
                  }
                  const Icon = skillIconMap[tech.icon];
                  return (
                    <li key={tech.name} className="list-none">
                      <RotateIn delay={0.24 + index * 0.04} duration={0.35}>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5 text-xs">
                          {Icon && <Icon className="size-3.5" />}
                          {tech.name}
                        </span>
                      </RotateIn>
                    </li>
                  );
                })}
              </ul>
            </SlideInBottom>
          )}

          <SlideInBottom delay={0.3} duration={0.4} className="flex flex-col sm:flex-row gap-3 block">
            <Button asChild className="flex-1">
              <Link href={project.hosted_url} target="_blank" rel="noopener noreferrer">
                View Project
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            {!project.freelance && (
              <Button variant="outline" asChild className="flex-1">
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            )}
          </SlideInBottom>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
