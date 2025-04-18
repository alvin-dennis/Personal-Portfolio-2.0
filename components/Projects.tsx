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
          {project.technologies?.slice(0, isMobile ? 2 : 3).map((tech, i) => (
            <span
              key={`${tech}-preview-${i}`}
              className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
                border border-white/10 bg-white/5 text-gray-200 shadow-sm"
              style={{
                borderLeftColor: `hsl(${(i * 137.5) % 360}, 70%, 50%, 0.5)`,
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies &&
            project.technologies.length > (isMobile ? 2 : 3) && (
              <span
                className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
                border border-white/10 bg-white/5 text-gray-200 shadow-sm"
              >
                +{project.technologies.length - (isMobile ? 2 : 3)}
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] to-[#161b22]">
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 800 800">
                  <title>Decorative Geometric Background</title>
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#7E22CE"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grad1)" />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col items-center gap-5 p-6 text-center z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-md" />
                <div className="relative bg-[#0d1117] rounded-full p-3 sm:p-4 border border-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.4)]">
                  <Github
                    className="w-8 h-8 sm:w-16 sm:h-16 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 font-content px-5 py-2 rounded-lg border border-white/10 shadow-sm text-sm font-medium">
                GitHub Repository
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {project.technologies?.map((tech: string, i: number) => (
              <span
                key={tech}
                className="text-sm font-content px-3 py-1.5 rounded-md bg-[#1A1A1A] border-l-2 text-gray-300 font-content"
                style={{
                  borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
                }}
              >
                {tech}
              </span>
            ))}
            {!project.technologies?.length && (
              <span className="text-sm font-content px-3 py-1.5 rounded-md bg-[#1A1A1A] border-l-2 border-gray-500/50 text-gray-400">
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
          <div className="relative flex flex-col items-center gap-5 p-6 text-center z-10">
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
          className="fixed inset-0 bg-[#000000]/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProject();
          }}
        >
          <div className="bg-[#050505] md:bg-gradient-to-b md:from-[#101010]/80 md:to-[#000000]/80 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto shadow-xl shadow-black/50">
            <div className="p-3 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-5 sticky top-0 z-10 bg-[#050505] md:bg-[#101010]/80 backdrop-blur-md py-2 -mt-2 -mx-3 sm:-mx-6 px-3 sm:px-6">
                <h3 className="text-base sm:text-2xl font-bold font-content text-white line-clamp-1 pr-2">
                  {PROJECTS[selectedProject].name}
                </h3>
                <button
                  type="button"
                  onClick={closeProject}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-white/20 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
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

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                <a
                  href={PROJECTS[selectedProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg flex-1 min-w-[120px] sm:min-w-0 sm:flex-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-black/20 backdrop-blur-sm px-3 sm:px-7 py-2.5 sm:py-3 font-content flex items-center justify-center gap-2 text-white font-medium">
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-sm sm:text-base">Repository</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
                </a>
                {!isGithubUrl(PROJECTS[selectedProject].hosted_url) && (
                  <a
                    href={PROJECTS[selectedProject].hosted_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg flex-1 min-w-[120px] sm:min-w-0 sm:flex-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-black/20 backdrop-blur-sm px-3 sm:px-7 py-2.5 sm:py-3 font-content flex items-center justify-center gap-2 text-white font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
                      <span className="text-sm sm:text-base">Live Preview</span>
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
        <div className="h-12 flex flex-col items-center justify-end pb-2 animate-pulse">
          <p className="text-sm text-white font-medium">Scroll for more</p>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
