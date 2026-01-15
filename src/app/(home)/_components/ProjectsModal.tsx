import { X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import type { ProjectsModal } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function ProjectsModal({ project, isOpen, onClose }: ProjectsModal) {
    if (!isOpen || !project) return null
    return (
        <div className="fixed inset-0 z-50 bg-background" onClick={onClose}>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
                <div
                    className="relative w-full max-w-2xl bg-background rounded-xl shadow-2xl border border-border animation-in fade-in slide-in-from-bottom-4 duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-full h-64 md:h-80 bg-secondary overflow-hidden rounded-t-xl">
                        <Image
                            src={project.image || "/assets/common/noise-bg.webp"}
                            alt={project.name}
                            fill
                            className="object-cover"
                        />
                        <Button
                            variant={"default"}
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-black italic text-primary">{project.name}</h1>
                            <p className="text-foreground text-base leading-relaxed">{project.description}</p>
                        </div>
                        {project.technologies && (
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <Badge
                                            variant={"outline"}
                                            key={`${typeof tech === 'string' ? tech : tech.name}-${index}`}
                                            className="px-3 py-1 text-sm"
                                        >
                                            {typeof tech === 'string' ? tech : tech.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                        <Separator orientation="horizontal" className="h-0.5" />
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button asChild className="flex-1 group">
                                <Link href={project.hosted_url} target="_blank" rel="noopener noreferrer">
                                    View Project
                                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </Button>

                            <Button variant="outline" asChild>
                                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="w-4 h-4 mr-2" />
                                    GitHub
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
