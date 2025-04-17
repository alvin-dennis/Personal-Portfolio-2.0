import { ChevronDown, X, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    const floatDelays = [
      0.2, 0.5, 0.8, 1.1, 1.4, 1.7, 2.0, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4,
      4.7,
    ];
    const floatDurations = [
      10, 12, 14, 16, 18, 20, 11, 13, 15, 17, 19, 10.5, 12.5, 14.5, 16.5, 18.5,
    ];
    const pingDelays = [
      0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3.0, 0.1, 0.4, 0.7, 1.0, 1.3,
      1.6, 1.9, 2.2, 2.5, 2.8,
    ];
    const pingDurations = [
      3, 3.5, 4, 4.5, 5, 3.2, 3.7, 4.2, 4.7, 3.3, 3.8, 4.3, 4.8, 3.1, 3.6, 4.1,
      4.6, 3.4, 3.9, 4.4,
    ];
    const floatSizes = [
      { width: 5, height: 5 },
      { width: 6, height: 6 },
      { width: 7, height: 7 },
      { width: 8, height: 8 },
      { width: 9, height: 9 },
      { width: 10, height: 10 },
      { width: 11, height: 11 },
      { width: 7, height: 5 },
      { width: 8, height: 6 },
      { width: 9, height: 7 },
      { width: 10, height: 8 },
      { width: 11, height: 9 },
    ];
    const positions = [
      { top: 10, left: 20 },
      { top: 20, left: 40 },
      { top: 30, left: 60 },
      { top: 40, left: 80 },
      { top: 50, left: 30 },
      { top: 60, left: 50 },
      { top: 70, left: 70 },
      { top: 80, left: 10 },
      { top: 90, left: 40 },
      { top: 15, left: 65 },
      { top: 25, left: 85 },
      { top: 35, left: 15 },
      { top: 45, left: 55 },
      { top: 55, left: 25 },
      { top: 65, left: 75 },
      { top: 75, left: 35 },
    ];

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full aspect-[2/1] bg-gradient-to-br from-black/50 to-black/70 flex items-center justify-center relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_25%)]" />
          <div className="absolute w-40 h-40 -top-20 -right-20 rounded-full bg-purple-500/10 blur-xl" />
          <div className="absolute w-40 h-40 -bottom-20 -left-20 rounded-full bg-blue-500/10 blur-xl" />
        </div>

        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/10 to-indigo-600/0"
          animate={{
            background: [
              "linear-gradient(to right, rgba(79, 70, 229, 0) 0%, rgba(79, 70, 229, 0.1) 50%, rgba(79, 70, 229, 0) 100%)",
              "linear-gradient(to right, rgba(79, 70, 229, 0) 100%, rgba(79, 70, 229, 0.1) 50%, rgba(79, 70, 229, 0) 0%)",
            ],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "linear",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>tap icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {isGithubUrl(project.hosted_url) ? (
            <div className="relative flex items-center justify-center w-full h-full">
              <div aria-hidden="true" className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-indigo-500/20"
                    style={{
                      width: `${floatSizes[i % floatSizes.length].width}px`,
                      height: `${floatSizes[i % floatSizes.length].height}px`,
                      top: `${positions[i % positions.length].top}%`,
                      left: `${positions[i % positions.length].left}%`,
                      animationDelay: `${floatDelays[i % floatDelays.length]}s`,
                      animationDuration: `${
                        floatDurations[i % floatDurations.length]
                      }s`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: floatDurations[i % floatDurations.length],
                      delay: floatDelays[i % floatDelays.length],
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <div className="relative w-24 h-24 opacity-30 group-hover:opacity-80 transition-opacity duration-700 transform group-hover:scale-110">
                <motion.div
                  className="absolute left-0 top-1/4 h-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/80 to-indigo-500/0 w-0 group-hover:w-full"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                />
                <motion.div
                  className="absolute left-1/4 top-1/3 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/80 to-purple-500/0 w-0 group-hover:w-3/4"
                  animate={{ width: ["0%", "75%", "0%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
                <motion.div
                  className="absolute left-1/3 top-1/2 h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 w-0 group-hover:w-2/3"
                  animate={{ width: ["0%", "66%", "0%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
                <motion.div
                  className="absolute left-1/2 top-2/3 h-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/80 to-indigo-500/0 w-0 group-hover:w-1/2"
                  animate={{ width: ["0%", "50%", "0%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500">
                  <motion.svg
                    animate={{ rotate: Number.POSITIVE_INFINITY }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 10,
                      ease: "linear",
                    }}
                    className="w-10 h-10 text-indigo-500/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>hash symbol</title>
                    <path
                      d="M10 3L6 21M18 3L14 21M4 8H20M4 16H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-dash"
                    />
                  </motion.svg>
                </div>
              </div>

              <motion.div
                animate={{ rotate: Number.POSITIVE_INFINITY }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 15,
                  ease: "linear",
                }}
                className="absolute w-32 h-32 rounded-full border border-indigo-500/20 group-hover:border-indigo-500/40"
              />
              <motion.div
                animate={{ rotate: -Number.POSITIVE_INFINITY }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute w-40 h-40 rounded-full border border-purple-500/10 group-hover:border-purple-500/30"
              />
            </div>
          ) : (
            <div className="relative flex items-center justify-center w-full h-full">
              <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-6 grid-rows-6"
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-center"
                    style={{
                      gridColumn: `${(i % 6) + 1}`,
                      gridRow: `${Math.floor(i / 6) + 1}`,
                    }}
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:bg-cyan-500/70"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: pingDurations[i % pingDurations.length],
                        delay: pingDelays[i % pingDelays.length],
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="relative w-32 h-32 opacity-30 group-hover:opacity-80 transition-opacity duration-700 transform group-hover:scale-110">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-cyan-500/40 group-hover:text-cyan-500/70"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="wave-grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                      <stop offset="50%" stopColor="rgba(56, 189, 248, 0.4)" />
                      <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,50 Q25,40 50,50 T100,50"
                    fill="none"
                    stroke="url(#wave-grad)"
                    strokeWidth="2"
                    animate={{
                      d: [
                        "M0,50 Q25,40 50,50 T100,50",
                        "M0,50 Q25,60 50,50 T100,50",
                        "M0,50 Q25,40 50,50 T100,50",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M0,50 Q25,60 50,50 T100,50"
                    fill="none"
                    stroke="url(#wave-grad)"
                    strokeWidth="2"
                    animate={{
                      d: [
                        "M0,50 Q25,60 50,50 T100,50",
                        "M0,50 Q25,40 50,50 T100,50",
                        "M0,50 Q25,60 50,50 T100,50",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                  <motion.svg
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    className="w-10 h-10 text-cyan-500/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>some sgv</title>
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-draw"
                    />
                  </motion.svg>
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute w-16 h-16 rounded-full border border-cyan-500/30 group-hover:border-cyan-500/50"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute w-24 h-24 rounded-full border border-blue-500/20 group-hover:border-blue-500/40"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute w-32 h-32 rounded-full border border-cyan-500/10 group-hover:border-cyan-500/30"
              />
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex items-center">
          <div
            className={`w-2 h-2 rounded-full animate-pulse ${
              isGithubUrl(project.hosted_url) ? "bg-indigo-500" : "bg-cyan-500"
            } group-hover:animate-ping`}
          />
          <div className="ml-2 text-xs font-medium font-content opacity-70 tracking-wider uppercase">
            {isGithubUrl(project.hosted_url) ? "Repository" : "Application"}
          </div>
        </div>
        <motion.div
          initial={{ width: 0, height: 0 }}
          whileHover={{ width: 20, height: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-0 right-0 border-t-transparent border-r-white/20"
          style={{ borderTopWidth: "20px", borderRightWidth: "20px" }}
        />

        <div className="absolute bottom-2 left-3 right-3 flex flex-wrap gap-1.5">
          {project.technologies?.slice(0, isMobile ? 2 : 3).map((tech, i) => (
            <motion.span
              key={`${tech}-preview-${i}`}
              initial={{ y: 5, opacity: 0 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.1,
              }}
              className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
                border border-white/10 bg-white/5 text-gray-200 shadow-sm"
              style={{
                borderLeftColor: `hsl(${(i * 137.5) % 360}, 70%, 50%, 0.5)`,
              }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies &&
            project.technologies.length > (isMobile ? 2 : 3) && (
              <motion.span
                initial={{ y: 5, opacity: 0 }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.3,
                }}
                className="text-xs font-content px-2.5 py-1 rounded-full backdrop-blur-md 
                border border-white/10 bg-white/5 text-gray-200 shadow-sm"
              >
                +{project.technologies.length - (isMobile ? 2 : 3)}
              </motion.span>
            )}
        </div>
      </motion.div>
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
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="200"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    animate={{ rotate: Number.POSITIVE_INFINITY }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 30,
                      ease: "linear",
                    }}
                  />
                  <motion.path
                    d="M200,200 Q400,100 600,200 T1000,200"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                    animate={{
                      d: [
                        "M200,200 Q400,100 600,200 T1000,200",
                        "M200,200 Q400,300 600,200 T1000,200",
                        "M200,200 Q400,100 600,200 T1000,200",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 10,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M200,400 Q400,300 600,400 T1000,400"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                    animate={{
                      d: [
                        "M200,400 Q400,300 600,400 T1000,400",
                        "M200,400 Q400,500 600,400 T1000,400",
                        "M200,400 Q400,300 600,400 T1000,400",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 12,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                  <motion.path
                    d="M200,600 Q400,500 600,600 T1000,600"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                    animate={{
                      d: [
                        "M200,600 Q400,500 600,600 T1000,600",
                        "M200,600 Q400,700 600,600 T1000,600",
                        "M200,600 Q400,500 600,600 T1000,600",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 15,
                      ease: "easeInOut",
                      delay: 4,
                    }}
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col items-center gap-5 p-6 text-center z-10">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-md" />
                <div className="relative bg-[#0d1117] rounded-full p-3 sm:p-4 border border-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.4)]">
                  <Github
                    className="w-8 h-8 sm:w-16 sm:h-16 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>
              <div className="backdrop-blur-lg bg-white/5 font-content px-5 py-2 rounded-lg border border-white/10 shadow-sm text-sm font-medium">
                GitHub Repository
              </div>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={project.hosted_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-2 overflow-hidden rounded-lg w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-black/20 backdrop-blur-sm px-7 py-3 font-content flex items-center justify-center sm:justify-start gap-2 text-white font-medium">
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ opacity: 0.2 }}
                />
              </motion.a>
            </div>
            <motion.div
              animate={{ rotate: 45, scale: [0.95, 1.05, 0.95] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
              className="absolute top-6 left-6 w-12 h-12 border border-indigo-500/20 rounded-md"
            />
            <motion.div
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 right-6 w-20 h-20 border border-purple-500/20 rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-10 w-6 h-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-sm"
            />
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 left-10 w-10 h-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-md"
            />
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {project.technologies?.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="text-sm font-content px-3 py-1.5 rounded-md bg-[#1A1A1A] border-l-2 text-gray-300 font-content"
                style={{
                  borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
                }}
              >
                {tech}
              </motion.span>
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
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-md" />
              <div className="relative bg-[#0d1117] rounded-full p-4 border border-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.4)]">
                <div className="w-16 h-16 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: [0, Number.POSITIVE_INFINITY] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 15,
                      ease: "linear",
                    }}
                  >
                    <title>some svg</title>
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 7H11V13H17V11H13V7Z"
                      fill="currentColor"
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
            <div className="backdrop-blur-lg bg-white/5 font-content px-5 py-2 rounded-lg border border-white/10 shadow-sm text-sm font-medium">
              Project Preview
            </div>
          </div>
          <motion.div
            animate={{ rotate: 45, scale: [0.95, 1.05, 0.95] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
            className="absolute top-6 left-6 w-12 h-12 border border-blue-500/20 rounded-md"
          />
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
            }}
            className="absolute bottom-6 right-6 w-20 h-20 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-10 w-6 h-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-sm"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 7,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 left-10 w-10 h-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-md"
          />
        </div>

        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies?.map((langs: string, i: number) => (
            <motion.span
              key={langs}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-content bg-[#1A1A1A] border-l-2 text-gray-300"
              style={{
                borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
              }}
            >
              {langs}
            </motion.span>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
              className="bg-[#121212]/70 rounded-xl overflow-hidden cursor-pointer hover:bg-[#181818]/70 transition-all border border-white/5 shadow-md hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/20"
              onClick={() => openProject(index)}
            >
              {getProjectCardContent(project, index)}
              <div className="p-3 flex justify-between items-center">
                <h3 className="text-md font-semibold font-content line-clamp-1">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#000000]/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProject();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-gradient-to-b from-[#101010]/80 to-[#000000]/80 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto shadow-xl shadow-black/50"
          >
            <div className="p-3 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-5 sticky top-0 z-10 bg-[#101010]/80 backdrop-blur-md py-2 -mt-2 -mx-3 sm:-mx-6 px-3 sm:px-6">
                <h3 className="text-base sm:text-2xl font-bold font-content text-white line-clamp-1 pr-2">
                  {PROJECTS[selectedProject].name}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  type="button"
                  onClick={closeProject}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-white/20 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
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
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
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
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.a>
                {!isGithubUrl(PROJECTS[selectedProject].hosted_url) && (
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
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
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ opacity: 0.2 }}
                    />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
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
