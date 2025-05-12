import { ChevronDown, X, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const openProject = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const isGithubUrl = (url: string) => {
    return url.toLowerCase().includes("github.com");
  };

  interface Project {
    name: string;
    url: string;
    hosted_url: string;
    technologies?: string[];
    description: string;
    developed?: string;
  }

  const getProjectCardContent = (project: Project, index: number) => {
    return (
      <div className="w-full aspect-[2/1] bg-gradient-to-br from-black/50 to-black/70 flex items-center justify-center relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_25%)]" />
          <div className="absolute w-40 h-40 -top-20 -right-20 rounded-full bg-purple-500/10 blur-xl" />
          <div className="absolute w-40 h-40 -bottom-20 -left-20 rounded-full bg-blue-500/10 blur-xl" />
        </div>

        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex items-center justify-center">
          {isGithubUrl(project.hosted_url) ? (
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="relative w-24 h-24 opacity-30 group-hover:opacity-80 transition-opacity duration-700">
                <Github className="w-full h-full text-indigo-500/70" />
              </div>
            </div>
          ) : (
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="relative w-24 h-24 opacity-30 group-hover:opacity-80 transition-opacity duration-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-cyan-500/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Web Application</title>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex items-center">
          <div
            className={`w-2 h-2 rounded-full animate-pulse ${
              isGithubUrl(project.hosted_url) ? "bg-indigo-500" : "bg-cyan-500"
            }`}
          />
          <div className="ml-2 text-xs font-medium font-content opacity-70 tracking-wider uppercase">
            {isGithubUrl(project.hosted_url) ? "Repository" : "Application"}
          </div>
        </div>

        <div className="absolute bottom-2 left-3 right-3 flex flex-wrap gap-1.5">
          {project.technologies && project.technologies.length > 0 ? (
            <>
              {project.technologies
                .slice(0, isMobile ? 2 : 3)
                .map((tech, i) => (
                  <span
                    key={`${tech}-preview-${i}`}
                    className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
                    border border-white/10 bg-white/5 text-gray-200 shadow-sm"
                    style={{
                      borderLeftColor: `hsl(${
                        (i * 137.5) % 360
                      }, 70%, 50%, 0.5)`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              {project.technologies.length > (isMobile ? 2 : 3) && (
                <span
                  className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
                  border border-white/10 bg-white/5 text-gray-200 shadow-sm"
                >
                  +{project.technologies.length - (isMobile ? 2 : 3)}
                </span>
              )}
            </>
          ) : (
            <span
              className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
              border border-white/10 bg-white/5 text-gray-200 shadow-sm"
            >
              No technologies
            </span>
          )}
        </div>
      </div>
    );
  };

  const getProjectModalContent = (project: Project, index: number) => {
    if (isGithubUrl(project.hosted_url)) {
      return (
        <div className="mb-6">
          <div className="w-full aspect-video rounded-xl flex items-center justify-center relative overflow-hidden mb-5 shadow-2xl">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] to-[#161b22]">
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                  }}
                />
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-9 bg-[#161b22]/90 border-b border-white/10 flex items-center px-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 ring-1 ring-inset ring-white/10" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 ring-1 ring-inset ring-white/10" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 ring-1 ring-inset ring-white/10" />
                </div>
                <div className="ml-4 h-4 w-32 bg-white/10 rounded-full" />
                <div className="ml-auto flex space-x-2">
                  <div className="h-4 w-12 bg-white/10 rounded-sm" />
                  <div className="h-4 w-8 bg-white/10 rounded-sm" />
                </div>
              </div>
              <div className="absolute top-9 left-0 bottom-0 w-[60px] border-r border-white/10 bg-[#0d1117]/80">
                <div className="absolute top-3 inset-x-0 flex justify-center">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-indigo-400/70 rounded-sm" />
                  </div>
                </div>
                <div className="absolute top-14 inset-x-0 flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>
                <div className="absolute top-24 inset-x-0 flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>
                <div className="absolute top-34 inset-x-0 flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>
                <div className="absolute bottom-3 inset-x-0 flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="absolute top-9 left-[60px] right-0 bottom-0 p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-5 h-5 rounded bg-purple-500/30 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-purple-400/80 rounded-sm" />
                  </div>
                  <div className="h-4 w-36 bg-white/20 rounded-md" />
                  <div className="h-4 w-6 rounded bg-indigo-500/20 ml-auto" />
                  <div className="h-4 w-6 rounded bg-indigo-500/20" />
                </div>
                <div className="rounded-md border border-white/10 bg-[#0d1117]/50 p-2 mb-3 overflow-hidden">
                  <div className="flex items-center space-x-2 border-b border-white/5 pb-2 mb-2">
                    <div className="w-3 h-3 bg-cyan-500/40 rounded-sm" />
                    <div className="h-3 w-24 bg-white/10 rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="w-4 text-right text-xs text-white/20 mr-2">
                        1
                      </div>
                      <div className="h-3 w-36 bg-white/10 rounded-sm" />
                    </div>
                    <div className="flex">
                      <div className="w-4 text-right text-xs text-white/20 mr-2">
                        2
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-3 w-4 bg-purple-500/40 rounded-sm" />
                        <div className="h-3 w-20 bg-white/10 rounded-sm" />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-4 text-right text-xs text-white/20 mr-2">
                        3
                      </div>
                      <div className="h-3 w-44 bg-white/10 rounded-sm animate-pulse" />
                    </div>
                    <div className="flex">
                      <div className="w-4 text-right text-xs text-white/20 mr-2">
                        4
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-3 w-8 bg-green-500/40 rounded-sm" />
                        <div className="h-3 w-28 bg-white/10 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mt-5 h-14">
                  {[...Array(28)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        backgroundColor: `hsl(265, 89%, ${
                          50 + Math.floor(Math.random() * 20)
                        }%, ${0.1 + Math.floor(Math.random() * 4) / 10})`,
                        height: "8px",
                        width: "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#161b22]/80 border-t border-white/10 px-3 flex items-center">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400/50 rounded-full" />
                  <div className="h-2 w-20 bg-white/10 rounded-full text-[8px]" />
                </div>
                <div className="ml-auto flex space-x-3">
                  <div className="h-2 w-4 bg-white/10 rounded-full" />
                  <div className="h-2 w-8 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center gap-5 p-6 text-center z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full blur-md" />
                <div className="relative bg-[#0d1117] rounded-full p-3 sm:p-4 border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.08),0_4px_8px_rgba(0,0,0,0.4)]">
                  <Github
                    className="w-8 h-8 sm:w-16 sm:h-16 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/10 font-content px-5 py-2 rounded-lg border border-white/20 shadow-sm text-sm font-medium">
                GitHub Repository
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {project.technologies?.map((tech: string, i: number) => (
              <span
                key={tech}
                className="text-sm font-content px-3 py-1.5 rounded-md bg-[#161b22] border-l-2 text-gray-300 font-content"
                style={{
                  borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
                }}
              >
                {tech}
              </span>
            ))}
            {!project.technologies?.length && (
              <span className="text-sm font-content px-3 py-1.5 rounded-md bg-[#161b22] border-l-2 border-gray-500/50 text-gray-400">
                No technologies listed
              </span>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="mb-6">
        <div className="w-full aspect-video rounded-xl flex items-center justify-center relative overflow-hidden mb-5 shadow-2xl bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
              }}
            />

            <div className="absolute top-0 left-0 right-0 h-9 bg-[#111]/90 border-b border-white/10 flex items-center px-4">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 ring-1 ring-inset ring-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 ring-1 ring-inset ring-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 ring-1 ring-inset ring-green-500/20" />
              </div>

              <div className="ml-4 h-5 flex-1 max-w-[260px] mx-auto bg-[#0a0a0a] rounded-md flex items-center px-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500/30" />
                <div className="w-full h-2 ml-2 bg-white/20 rounded-sm" />
              </div>

              <div className="ml-4 flex space-x-2">
                <div className="h-4 w-4 bg-white/10 rounded-sm" />
                <div className="h-4 w-4 bg-white/10 rounded-sm" />
              </div>
            </div>

            <div className="absolute top-9 left-0 w-[75px] bottom-0 bg-[#111]/50 border-r border-white/5">
              <div className="absolute top-4 inset-x-0 flex justify-center">
                <div className="w-8 h-8 rounded-md bg-cyan-500/20 animate-pulse" />
              </div>

              <div className="absolute top-16 inset-x-0 flex justify-center">
                <div className="w-6 h-6 rounded-md bg-white/10" />
              </div>

              <div className="absolute top-26 inset-x-0 flex justify-center">
                <div className="w-6 h-6 rounded-md bg-white/10" />
              </div>

              <div className="absolute top-36 inset-x-0 flex justify-center">
                <div className="w-6 h-6 rounded-md bg-white/10" />
              </div>

              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="absolute top-9 left-[75px] right-0 bottom-0 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/5 flex items-center px-4">
                <div className="h-5 w-40 bg-white/10 rounded-md" />
                <div className="ml-auto flex items-center space-x-3">
                  <div className="w-20 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <div className="w-14 h-2 bg-cyan-400/50 rounded-sm" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="absolute top-16 left-4 right-4 flex space-x-4">
                <div className="w-1/2 h-28 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-lg border border-white/5 p-3">
                  <div className="w-12 h-2 mb-2 bg-cyan-500/30 rounded-sm" />
                  <div className="w-full h-2 mb-1.5 bg-white/10 rounded-sm" />
                  <div className="w-2/3 h-2 mb-1.5 bg-white/10 rounded-sm" />
                  <div className="w-3/4 h-2 bg-white/10 rounded-sm" />
                </div>
                <div className="w-1/2 h-28 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-lg border border-white/5 p-3">
                  <div className="w-12 h-2 mb-2 bg-purple-500/30 rounded-sm" />
                  <div className="w-full h-2 mb-1.5 bg-white/10 rounded-sm" />
                  <div className="w-1/2 h-2 mb-1.5 bg-white/10 rounded-sm" />
                  <div className="w-3/4 h-2 bg-white/10 rounded-sm" />
                </div>
              </div>

              <div className="absolute top-52 left-4 right-4 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="h-6 w-40 bg-white/20 rounded-full animate-pulse" />
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-2">
                <div className="w-18 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <div className="w-10 h-2 bg-white/20 rounded-sm" />
                </div>
                <div className="w-24 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <div className="w-14 h-2 bg-cyan-400/50 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-5 p-6 text-center z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-md" />
              <div className="relative bg-[#0d1117] rounded-full p-4 border border-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.4)]">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Web Application</title>
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="8"
                      y1="21"
                      x2="16"
                      y2="21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="12"
                      y1="17"
                      x2="12"
                      y2="21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-lg bg-white/5 font-content px-5 py-2 rounded-lg border border-white/10 shadow-sm text-sm font-medium">
              Project Preview
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies?.map((langs: string, i: number) => (
            <span
              key={langs}
              className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-content bg-[#1A1A1A] border-l-2 text-gray-300"
              style={{
                borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
              }}
            >
              {langs}
            </span>
          )) ?? (
            <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-content bg-[#1A1A1A] border-l-2 border-gray-500/50 text-gray-400">
              No technologies listed
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-12 lg:col-span-5 bg-[#000000]/40 rounded-[2rem] p-4 sm:p-6 relative h-full md:min-h-0 min-h-[50vh] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg flex flex-col">
      <h2 className="text-xl sm:text-2xl md:text-[2rem] font-bold font-title mb-4 sm:mb-6">
        Projects
      </h2>

      <div className="font-content overflow-y-auto scrollbar-hide pr-1 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212]/70 rounded-xl overflow-hidden cursor-pointer hover:bg-[#181818]/70 transition-all border border-white/5 shadow-md hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/20"
              onClick={() => openProject(index)}
            >
              {getProjectCardContent(project, index)}
              <div className="p-3 flex justify-between items-center">
                <h3 className="text-md font-semibold font-content line-clamp-1">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-[#000000]/60 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProject();
          }}
        >
          <div className="bg-[#050505] md:bg-gradient-to-b md:from-[#101010]/80 md:to-[#000000]/80 border border-white/10 rounded-none sm:rounded-2xl w-full max-w-2xl h-full sm:h-auto sm:max-h-[85vh] md:max-h-[90vh] overflow-y-auto shadow-xl shadow-black/50 relative flex flex-col">
            <div className="p-4 sm:p-6 flex-1 overflow-y-auto pb-6 sm:pb-4">
              <div className="flex justify-between items-center sticky top-0 z-20 bg-[#050505] md:bg-[#101010]/80 backdrop-blur-md py-3 -mt-4 -mx-4 sm:-mx-6 px-4 sm:px-6 border-b border-white/10 shadow-md mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-2xl font-bold font-content text-white line-clamp-1 pr-2">
                  {PROJECTS[selectedProject].name}
                </h3>
                <button
                  type="button"
                  onClick={closeProject}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-white/20 flex-shrink-0 shadow-lg shadow-black/20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="responsive-modal-content">
                {getProjectModalContent(
                  PROJECTS[selectedProject],
                  selectedProject
                )}
              </div>

              <p className="text-gray-300 mb-4 sm:mb-5 leading-relaxed font-content text-sm sm:text-base">
                {PROJECTS[selectedProject].description}
              </p>
              {PROJECTS[selectedProject].developed && (
                <p className="text-xs sm:text-sm text-gray-400 mb-3 bg-white/5 inline-block font-content px-2 sm:px-3 py-1 rounded-lg">
                  {PROJECTS[selectedProject].developed}
                </p>
              )}

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-4 border-t border-white/10 flex flex-wrap gap-3 justify-center sm:justify-start">
                <a
                  href={PROJECTS[selectedProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg flex-1 min-w-[130px] sm:min-w-0 sm:flex-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                  <div className="relative px-4 sm:px-7 py-3 sm:py-3 font-content flex items-center justify-center gap-2 text-white font-medium">
                    <div className="bg-black/50 p-1.5 rounded-full">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="text-base">Repository</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
                </a>
                {!isGithubUrl(PROJECTS[selectedProject].hosted_url) && (
                  <a
                    href={PROJECTS[selectedProject].hosted_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg flex-1 min-w-[130px] sm:min-w-0 sm:flex-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    <div className="relative px-4 sm:px-7 py-3 sm:py-3 font-content flex items-center justify-center gap-2 text-white font-medium">
                      <div className="bg-black/50 p-1.5 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <title>live site</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                      <span className="text-base">Live Preview</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="sticky bottom-0 left-0 w-full pointer-events-none mt-2">
        <div className="h-12 flex items-center justify-center pb-2 animate-pulse">
          <p className="text-sm text-white font-medium mr-1">Scroll for more</p>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
