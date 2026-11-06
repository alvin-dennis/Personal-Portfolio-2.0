import { PortableText } from "@portabletext/react";
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

function CardGrid({
  items,
  inverted = false,
}: {
  items: { title: string; description: string }[];
  inverted?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <RotateIn key={item.title} delay={index * 0.06} duration={0.4}>
          <div
            className={
              inverted
                ? "rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 h-full"
                : "rounded-xl border border-border bg-secondary/30 p-5 h-full"
            }
          >
            <h3 className={`font-semibold mt-1 mb-2 ${inverted ? "text-primary-foreground" : "text-primary"}`}>
              {item.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                inverted ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}
            >
              {item.description}
            </p>
          </div>
        </RotateIn>
      ))}
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-4">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const categories = Array.isArray(project.category) ? project.category : [project.category];
  const metadata = [
    project.role && { label: "Role", value: project.role },
    project.status && { label: "Status", value: project.status },
    { label: "Stack", value: `${project.technologies.length} technologies` },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <SlideInLeft className="block md:col-span-2 md:col-start-1 md:sticky md:top-24 h-fit space-y-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </SlideInLeft>

        <div className="min-w-0 md:col-span-8 md:col-start-3 space-y-12">
          <div>
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
              {project.subtitle && (
                <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>
              )}
            </SlideInBottom>

            {metadata.length > 0 && (
              <SlideInBottom
                delay={0.12}
                duration={0.4}
                className="mb-8 flex flex-wrap rounded-xl border border-border divide-x divide-border overflow-hidden block"
              >
                {metadata.map((m) => (
                  <div key={m.label} className="px-5 py-3 flex-1 min-w-[120px]">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="text-sm font-medium text-primary">{m.value}</p>
                  </div>
                ))}
              </SlideInBottom>
            )}

            <Separator className="mb-8" />

            <SlideInBottom delay={0.15} duration={0.4} className="mb-10 block" id="overview">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.overview || project.description}
              </p>
            </SlideInBottom>

            {project.technologies.length > 0 && (
              <SlideInBottom delay={0.2} duration={0.4} className="block">
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
          </div>

          {project.objectives && project.objectives.length > 0 && (
            <section id="objectives">
              <SectionHeading title="Objectives" />
              <CardGrid items={project.objectives} />
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section id="challenges">
              <SectionHeading title="Challenges" />
              <CardGrid items={project.challenges} />
            </section>
          )}

          {project.approach && project.approach.length > 0 && (
            <section id="approach">
              <SectionHeading title="Approach" />
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <PortableText value={project.approach} />
              </div>
            </section>
          )}

          {project.results && project.results.length > 0 && (
            <section id="results">
              <ScaleUp
                delay={0.05}
                duration={0.5}
                className="rounded-3xl bg-primary text-primary-foreground p-6 md:p-10"
              >
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 className="text-2xl font-bold">Results</h2>
                </div>
                <CardGrid items={project.results} inverted />
              </ScaleUp>
            </section>
          )}

          {project.conclusion && (
            <section id="conclusion">
              <SectionHeading title="Conclusion" />
              <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.conclusion}
              </p>
            </section>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
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
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
