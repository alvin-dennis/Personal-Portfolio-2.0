import { ChevronDown, X, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [loadedIframes, setLoadedIframes] = useState<
    Record<string | number, boolean>
  >({});
  const iframeRefs = useRef<Record<number, HTMLIFrameElement | null>>({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          const iframe = iframeRefs.current[index];
          if (iframe?.getAttribute("data-src")) {
            iframe.setAttribute("src", iframe.getAttribute("data-src") || "");
          }
          observer.unobserve(entry.target);
        }
      }
    }, options);

    for (const container of Array.from(
      document.querySelectorAll(".iframe-container")
    )) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const openProject = (index: number) => {
    setSelectedProject(index);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const isGithubUrl = (url: string) => {
    return url.toLowerCase().includes("github.com");
  };

  const handleIframeLoad = (index: number) => {
    setLoadedIframes((prev) => ({ ...prev, [index]: true }));
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
    if (isGithubUrl(project.hosted_url)) {
      return (
        <div className="w-full aspect-video rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub Logo</title>
              <path
                d="M50,0 C22.38,0 0,22.38 0,50 C0,72.12 14.34,90.64 34.2,97.24 C36.7,97.76 37.64,96.26 37.64,94.96 C37.64,93.8 37.58,90.46 37.58,86.28 C23.66,89.3 20.7,80.5 20.7,80.5 C18.48,74.7 15.16,73.2 15.16,73.2 C10.6,70.12 15.52,70.12 15.52,70.12 C20.58,70.48 23.24,75.34 23.24,75.34 C27.68,83 34.92,80.86 37.82,79.56 C38.28,76.3 39.56,74.16 40.96,72.96 C29.84,71.76 18.14,67.4 18.14,48.02 C18.14,42.46 20.1,37.96 23.3,34.52 C22.78,33.28 21.06,28.06 23.78,21.1 C23.78,21.1 28,19.74 37.58,26.32 C41.56,25.2 45.78,24.64 50,24.64 C54.22,24.64 58.44,25.2 62.42,26.32 C72,19.74 76.22,21.1 76.22,21.1 C78.94,28.06 77.22,33.28 76.7,34.52 C79.9,37.96 81.86,42.46 81.86,48.02 C81.86,67.4 70.16,71.76 59.04,72.96 C60.8,74.46 62.36,77.38 62.36,82 C62.36,88.46 62.3,93.26 62.3,94.96 C62.3,96.26 63.24,97.76 65.74,97.24 C85.6,90.64 99.94,72.12 99.94,50 C100,22.38 77.62,0 50,0 Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="relative flex flex-col items-center gap-3 p-4 text-center z-10">
            <Github className="w-14 h-14 text-white mb-1" />
            <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-content font-medium">
              GitHub Repository
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        className="w-full aspect-video rounded-xl relative iframe-container"
        data-index={index}
      >
        {!loadedIframes[index] && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-xl">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 border-4 border-gray-800 border-t-gray-400 rounded-full animate-spin [animation-duration:1.5s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-700/30 to-gray-600/20 blur-md"/>
              </div>
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-[1px] rounded-lg">
                <span className="block text-base font-content font-medium tracking-wide text-gray-300 px-4 py-2 rounded-[7px] bg-[#121212] backdrop-filter backdrop-blur-sm">
                  Loading preview
                </span>
              </div>
            </div>
          </div>
        )}
        <iframe
          ref={(el) => {
            if (el) {
              iframeRefs.current[index] = el;
            }
          }}
          data-src={project.hosted_url}
          title={`Preview of ${project.name}`}
          className="w-full aspect-video rounded-xl pointer-events-none"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts"
          onLoad={() => handleIframeLoad(index)}
        />
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
                  <circle
                    cx="400"
                    cy="400"
                    r="200"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <path
                    d="M200,200 Q400,100 600,200 T1000,200"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M200,400 Q400,300 600,400 T1000,400"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M200,600 Q400,500 600,600 T1000,600"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col items-center gap-5 p-6 text-center z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-md" />
                <div className="relative bg-[#0d1117] rounded-full p-4 border border-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.4)]">
                  <Github className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 font-content px-5 py-2 rounded-lg border border-white/10 shadow-sm text-sm font-medium">
                GitHub Repository
              </div>
              <a
                href={project.hosted_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-2 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-black/20 backdrop-blur-sm px-7 py-3 font-content flex items-center gap-2 text-white font-medium transform group-hover:translate-y-[-1px] transition-transform">
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
              </a>
            </div>
            <div className="absolute top-6 left-6 w-12 h-12 border border-indigo-500/20 rounded-md rotate-45" />
            <div className="absolute bottom-6 right-6 w-20 h-20 border border-purple-500/20 rounded-full" />
            <div className="absolute top-1/4 right-10 w-6 h-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-sm" />
            <div className="absolute bottom-1/4 left-10 w-10 h-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-md" />
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
        <div className="w-full aspect-video rounded-xl relative">
          {!loadedIframes[`modal-${index}`] && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-xl z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 border-4 border-gray-800 border-t-gray-400 rounded-full animate-spin [animation-duration:1.5s]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-700/30 to-gray-600/20 blur-md"/>
                </div>
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-[1px] rounded-lg">
                  <span className="block text-base font-content font-medium tracking-wide text-gray-300 px-4 py-2 rounded-[7px] bg-[#121212] backdrop-filter backdrop-blur-sm">
                    Loading content
                  </span>
                </div>
              </div>
            </div>
          )}
          <iframe
            src={project.hosted_url}
            title={`Project ${project.name}`}
            className="w-full aspect-video rounded-xl mb-4"
            loading="lazy"
            allow="fullscreen"
            onLoad={() =>
              setLoadedIframes((prev) => ({
                ...prev,
                [`modal-${index}`]: true,
              }))
            }
          />
        </div>

        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies?.map((langs: string, i: number) => (
            <span
              key={langs}
              className="text-sm px-3 py-1.5 rounded-md font-content bg-[#1A1A1A] border-l-2 text-gray-300"
              style={{
                borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
              }}
            >
              {langs}
            </span>
          )) ?? (
            <span className="text-sm px-3 py-1.5 rounded-md font-content bg-[#1A1A1A] border-l-2 border-gray-500/50 text-gray-400">
              No technologies listed
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-12 lg:col-span-5 bg-[#000000]/40 rounded-[2rem] p-6 relative h-full md:min-h-0 min-h-[50vh] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg flex flex-col">
      <h2 className="text-[2rem] font-bold font-title mb-6">Projects</h2>

      <div className="font-content overflow-y-auto scrollbar-hide pr-1 flex-grow">
        <div className="grid grid-cols-1 gap-4">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212]/70 rounded-xl overflow-hidden cursor-pointer hover:bg-[#181818]/70 transition-all transform hover:scale-[1.02] border border-white/5"
              onClick={() => openProject(index)}
            >
              {getProjectCardContent(project, index)}
              <div className="p-3">
                <h3 className="text-md font-semibold font-content text-center">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-[#000000]/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[#101010]/80 to-[#000000]/80 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl shadow-black/50 animate-fadeIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-2xl font-bold font-content text-white">
                  {PROJECTS[selectedProject].name}
                </h3>
                <button
                  type="button"
                  onClick={closeProject}
                  className="p-2 rounded-full hover:bg-white/10 cursor-pointer transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {getProjectModalContent(
                PROJECTS[selectedProject],
                selectedProject
              )}

              <p className="text-gray-300 mb-5 leading-relaxed font-content">
                {PROJECTS[selectedProject].description}
              </p>
              {PROJECTS[selectedProject].developed && (
                <p className="text-sm text-gray-400 mb-3 bg-white/5 inline-block font-content px-3 py-1 rounded-lg">
                  {PROJECTS[selectedProject].developed}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="sticky bottom-0 left-0 w-full pointer-events-none mt-2">
        <div className="h-12 flex flex-col items-center justify-end pb-2">
          <div className="flex items-center gap-1.5 animate-pulse">
            <p className="text-sm text-white font-medium">Scroll for more</p>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
