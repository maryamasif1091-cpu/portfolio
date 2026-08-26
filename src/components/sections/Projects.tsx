"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projectsData = [
  {
    title: "AI_Move_Recommender",
    description: "An AI system filtering movies using CSP and search algorithms with machine learning clustering core.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "AI / ML"],
    teamTag: "Team Project (2 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu/AI_Move_Recommender",
    liveUrl: "https://aimoverecommender-mrg2rzdjmrc69twqntcsrd.streamlit.app/",
    mediumUrl: "",
    image: "/images/Projects/AI-movie-recommender.jpg",
    domain: "Artificial Intelligence",
  },
  {
    title: "Recruitment & Applicant Tracking System (ATS)",
    description: "A full-stack recruitment platform developed for managing hiring workflows and role-based access.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    teamTag: "Team Project (3 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu/Web_Final_Project",
    liveUrl: "",
    mediumUrl: "",
    image: "/images/Projects/Applicant-Tracking-System-ATS.jpg",
    domain: "Web Development",
  },
  {
    title: "Dynamic Pathfinding Agent",
    description: "Interactive pathfinding visualizer showing A* and Greedy Best-First Search on a grid with obstacles.",
    technologies: ["Python", "Tkinter", "A* Search", "Algorithms"],
    githubUrl: "https://github.com/maryamasif1091-cpu/AI-Path-Finding-Visualizer-",
    liveUrl: "",
    mediumUrl: "https://medium.com/@maryamasif1091/dynamic-path-finding-agent-0004f5df78e9",
    image: "/images/Projects/dynamic-path-agent.jpg",
    domain: "Algorithms & GUI",
  },
  {
    title: "Wumpus World Game",
    description: "A web-based Wumpus World simulation demonstrating game logic and environment exploration mechanics.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/maryamasif1091-cpu/Wumpus-world-game",
    liveUrl: "https://wumpus-world-game-six.vercel.app/",
    mediumUrl: "",
    image: "/images/Projects/wumpus-word.jpg",
    domain: "Artificial Intelligence",
  },
  {
    title: "Smart Bank App – Core Banking System (CBS)",
    description: "A simplified core banking system managing accounts, transactions, and audit logs with transaction control.",
    technologies: ["PHP", "MySQL", "JavaScript", "SQL"],
    teamTag: "Team Project (3 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu/Core-Banking-System",
    liveUrl: "",
    mediumUrl: "https://medium.com/@maryamasif1091/building-a-simplified-core-banking-system-cbs-using-php-mysql-4a9b4ffcfe95",
    image: "/images/Projects/Core-banking-system.jpg",
    domain: "Systems Programming",
  },
  {
    title: "Rock Paper Scissors",
    description: "A realistic hand battle game featuring smooth shaking animations and score tracking for web users.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Animation"],
    githubUrl: "https://github.com/maryamasif1091-cpu/Rock-Paper-Scissors-Game",
    liveUrl: "https://fun-with-rps.netlify.app/",
    mediumUrl: "",
    image: "/images/Projects/rock-paper-scissor.jpg",
    domain: "Web Development",
  },
  {
    title: "Google Drive File System",
    description: "A C++ console simulation of cloud storage using advanced data structures and RLE compression.",
    technologies: ["C++", "Data Structures", "Algorithms", "File Systems"],
    teamTag: "Team Project (3 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu/Google-Drive-File-System-Console-Based-File-Management-Simulation-Using-Data-Structures-in-C-",
    liveUrl: "",
    mediumUrl: "https://medium.com/@maryamasif1091/word-guessing-game-c-oop-project-cae9224bceaa",
    image: "/images/Projects/google-drive.jpg",
    domain: "Data Structures",
  },
  {
    title: "Memory Card Game",
    description: "A modern interactive memory matching game featuring smooth animations and real-time move tracking.",
    technologies: ["React", "Tailwind CSS", "State Management"],
    githubUrl: "https://github.com/maryamasif1091-cpu/Flip_Card_Game",
    liveUrl: "https://flip-card-game-rosy.vercel.app",
    mediumUrl: "",
    image: "/images/Projects/flip-card.jpg",
    domain: "Web Development",
  },
  {
    title: "Scientific Calculator",
    description: "A modern scientific calculator supporting trigonometry, logarithms, and powers with real evaluation.",
    technologies: ["TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/maryamasif1091-cpu/Scientific-Calculator",
    liveUrl: "https://scientific-calculator-rust-omega.vercel.app/",
    mediumUrl: "",
    image: "/images/Projects/scientific-calculator.jpg",
    domain: "Web Development",
  },
  {
    title: "Ping Pong Game",
    description: "A two-player Ping Pong game developed in 16-bit x86 Assembly running in DOSBox with video memory.",
    technologies: ["Assembly (NASM)", "DOSBox", "Low-Level"],
    teamTag: "Team Project (2 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu/Pingpong_game_",
    liveUrl: "",
    mediumUrl: "https://medium.com/@maryamasif1091/ping-pong-game-x86-assembly-language-cee3d54a89cd",
    image: "/images/Projects/ping-pong.jpg",
    domain: "Low-Level",
  },
  {
    title: "Tic Tac Toe",
    description: "A responsive Tic Tac Toe game featuring a professional dashboard, score tracking, and pause controls.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/maryamasif1091-cpu/TIC_TAC_TOA",
    liveUrl: "https://game-tic-tac-toe-a5.netlify.app/",
    mediumUrl: "",
    image: "/images/Projects/tic-tac-toe.jpg",
    domain: "Web Development",
  },
  {
    title: "Job Portal",
    description: "A responsive React Job Fair Portal where users can explore listings and apply through forms.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/maryamasif1091-cpu/job-portal",
    liveUrl: "https://react-app-job-fair.netlify.app/",
    mediumUrl: "",
    image: "/images/Projects/react-job-portal.jpg",
    domain: "Web Development",
  },
  {
    title: "SafeHer - Women Safety Frontend UI",
    description: "A responsive women safety frontend UI featuring quick access to SOS alerts and live location sharing.",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    githubUrl: "https://github.com/maryamasif1091-cpu/Safe-Her-Women-Safety-UI",
    liveUrl: "https://safe-her-56ef.netlify.app/",
    mediumUrl: "https://medium.com/@maryamasif1091/%EF%B8%8F-safeher-women-safety-frontend-ui-3f22e87975c2",
    image: "/images/Projects/SafeHer-Women Safety.jpg",
    domain: "UI/UX & Frontend",
  },
  {
    title: "NU-Information Exchange System",
    description: "Simulates multi-campus communication using TCP for secure routing and UDP for real-time broadcasts.",
    technologies: ["C++", "TCP/UDP", "Multi-threading", "Networking"],
    teamTag: "Team Project (3 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu/Information-Exchange-System",
    liveUrl: "",
    mediumUrl: "https://medium.com/@maryamasif1091/campus-network-communication-using-tcp-and-udp-multi-campus-system-7ba476799f23",
    image: "/images/Projects/multi-campus-communication.jpg",
    domain: "Networking",
  },
  {
    title: "Word Guessing Game",
    description: "A console-based word guessing game implemented in C++ using OOP principles and dynamic grids.",
    technologies: ["C++", "OOP", "File Handling"],
    githubUrl: "https://github.com/maryamasif1091-cpu/word-guessing-game-cpp",
    liveUrl: "",
    mediumUrl: "https://medium.com/@maryamasif1091/word-guessing-game-c-oop-project-cae9224bceaa",
    image: "/images/Projects/word-guess-game.jpg",
    domain: "Systems Programming",
  },
  {
    title: "To-Do List Web Application",
    description: "A modern task management tool that allows users to seamlessly add, edit, and delete daily tasks.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/maryamasif1091-cpu/to-do-list",
    liveUrl: "https://to-do-list-987.netlify.app/",
    mediumUrl: "",
    image: "/images/Projects/to-do-list.jpg",
    domain: "Web Development",
  },
  {
    title: "Judivexa Law Firm Website",
    description: "An internship corporate law firm website featuring multi-page responsive templates and portals.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/maryamasif1091-cpu",
    liveUrl: "",
    mediumUrl: "",
    image: "/images/Projects/Judivexa.jpg",
    domain: "Web Development",
    customBottomText: "Internship Project",
  },
  {
    title: "SolarProject Platform",
    description: "An internship project structuring core templates for a renewable energy platform and green solutions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/maryamasif1091-cpu",
    liveUrl: "",
    mediumUrl: "",
    image: "/images/Projects/solar-project.jpg",
    domain: "Web Development",
    customBottomText: "Internship Project",
  },
  {
    title: "Designing Rent Rest",
    description: "A mobile application UI design to simplify property renting by connecting tenants and owners.",
    technologies: ["Figma", "UI/UX Prototyping", "Mobile Design"],
    githubUrl: "NOT_AVAILABLE",
    liveUrl: "https://www.figma.com/proto/mxbLpqqhr5qT4HW3u8Wssn/Untitled?node-id=79-283&t=eDwnI3jdBsSoRUEx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=79%3A283",
    mediumUrl: "",
    image: "/images/Projects/Designing-Rent-Rest.jpg",
    domain: "UI/UX Design",
  },
  {
    title: "BritonOne Technology",
    description: "A complete SaaS platform enabling businesses to hire vetted software developers and digital solutions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code"],
    teamTag: "Team Project (3 Members)",
    githubUrl: "https://github.com/maryamasif1091-cpu",
    liveUrl: "",
    mediumUrl: "",
    image: "/images/Projects/britonone.jpg",
    domain: "Web Development",
    customBottomText: "Internship Project",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <section id="projects" className="py-24 bg-[#050508] dark:bg-[#050508] light:bg-[#f8f9fa] relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ced1]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00ced1]/10 border border-[#00ced1]/20 text-[#00ced1] text-xs font-semibold uppercase tracking-wider mb-4">
            Projects
          </div>
          
          <div className="mb-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight flex justify-center flex-wrap gap-x-3 gap-y-1"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
                className="text-white dark:text-white light:text-black inline-block"
              >
                Featured
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 12, stiffness: 100, delay: 0.12 } }
                }}
                className="text-[#00ced1] inline-block"
              >
                Projects
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base mt-4 max-w-xl mx-auto"
            >
              Showcase of projects.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/15 dark:border-white/10 light:border-black/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#00ced1]/60 transition-all duration-300 group"
            >
              <div>
                {/* Project Image - Top aligned */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-900 dark:bg-gray-900 light:bg-gray-100 border-b border-white/10 dark:border-white/10 light:border-black/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] dark:from-[#0c0c14] light:from-white via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#050508]/80 dark:bg-[#050508]/80 light:bg-white/90 backdrop-blur-md text-[#00ced1] border border-[#00ced1]/30">
                      {project.domain}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white dark:text-white light:text-black mb-2.5 group-hover:text-[#00ced1] transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Clean short description without truncation dots */}
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-6 h-[40px] overflow-hidden">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.teamTag && (
                    <span className="text-[11px] bg-[#00ced1]/15 border border-[#00ced1]/30 text-[#00ced1] px-2 py-0.5 rounded-md font-semibold">
                      {project.teamTag}
                    </span>
                  )}
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] bg-[#00ced1]/5 dark:bg-[#00ced1]/5 light:bg-[#00ced1]/10 border border-[#00ced1]/15 text-[#00ced1]/90 dark:text-[#00ced1]/90 light:text-[#008b8b] px-2 py-0.5 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10 text-xs font-semibold">
                  {/* GitHub Link or Not Available */}
                  {project.githubUrl === "NOT_AVAILABLE" ? (
                    <span className="text-gray-500 text-[11px]">
                      Not Available
                    </span>
                  ) : project.githubUrl !== "https://github.com/maryamasif1091-cpu" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] transition-colors"
                    >
                      <FaGithub size={15} /> Code
                    </a>
                  ) : (
                    <span className="text-gray-500 inline-flex items-center gap-1.5">
                      <FaGithub size={15} /> Code Private
                    </span>
                  )}

                  {/* Live or Medium or Internship Project text */}
                  {project.customBottomText ? (
                    <span className="text-[#00ced1] font-medium text-[11px]">
                      {project.customBottomText}
                    </span>
                  ) : project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] transition-colors"
                    >
                      <ExternalLink size={15} /> {project.domain === "UI/UX Design" ? "Figma Prototype" : "Live Demo"}
                    </a>
                  ) : project.mediumUrl ? (
                    <a
                      href={project.mediumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] transition-colors"
                    >
                      <BookOpen size={15} /> Medium
                    </a>
                  ) : (
                    <span className="text-gray-500 text-[11px]">
                      Not Available
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}