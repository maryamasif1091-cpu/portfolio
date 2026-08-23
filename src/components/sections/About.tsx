"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
  const [activeJourneyPoint, setActiveJourneyPoint] = useState(0);

  const journeyPoints = [
    {
      title: "Core Programming & Algorithms",
      description: "Developing strong problem-solving skills and low-level understanding using C, C++, x86 Assembly, and Python."
    },
    {
      title: "Full-Stack Web Development",
      description: "Building responsive, component-based applications utilizing Next.js, React, TypeScript, and Tailwind CSS."
    },
    {
      title: "Practical Industry Execution",
      description: "Gaining real-world software delivery experience through structured professional internships and collaborative workflows."
    }
  ];

  const educationData = [
    {
      title: "National University of Computer and Emerging",
      subtitle: "Sciences (FAST-NUCES)",
      degree: "Bachelor of Science - BS, Computer Science",
      duration: "Aug 2023 – Jun 2027",
      details: "Computer Science student driven by a passion for solving problems and building responsive web applications with clean, scalable architecture"
    },
    {
      title: "Superior College",
      subtitle: "Faisalabad",
      degree: "FSC, Pre-Engineering",
      duration: "Aug 2021 – Aug 2023",
      details: "Focused on advanced mathematics, physics, and analytical problem-solving methodologies."
    },
    {
      title: "Royal Education Complex",
      subtitle: "High School",
      degree: "Matriculation (Science)",
      duration: "Mar 2013 – Jul 2021",
      details: "Completed foundational secondary education emphasizing core sciences and computational logic."
    }
  ];

  const experienceData = [
    {
      title: "Prob N Tech (Pvt.) Ltd.",
      role: "Web Development Intern",
      duration: "22 June – 10 August 2026",
      details: "Completed an intensive 7-week industrial internship working on client-based web development projects. Developed responsive pages and reusable components using Next.js, TypeScript, and Tailwind CSS, collaborating directly within agile engineering pods and participating in peer code reviews to deliver production-ready features."
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#050508] dark:bg-[#050508] light:bg-[#f8f9fa] py-24 px-6 relative overflow-hidden flex items-center transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ced1]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ced1]/10 border border-[#00ced1]/20 text-[#00ced1] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-black tracking-tight">
            About <span className="text-[#00ced1]">Me</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Get to know more about my background, education, and professional journey.
          </p>
        </motion.div>

        {/* Top Toggle Banner Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 shadow-lg">
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-[#00ced1] text-[#050508] shadow-md shadow-[#00ced1]/25"
                  : "text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-black"
              }`}
            >
              <GraduationCap size={18} />
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-[#00ced1] text-[#050508] shadow-md shadow-[#00ced1]/25"
                  : "text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-black"
              }`}
            >
              <Briefcase size={18} />
              Experience
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Professional Journey Card (Interactive Point Form) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-black mb-6">
              Professional <span className="text-[#00ced1]">Journey</span>
            </h3>

            <div className="space-y-4">
              {journeyPoints.map((point, index) => {
                const isActive = activeJourneyPoint === index;
                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveJourneyPoint(index)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                      isActive
                        ? "bg-[#00ced1]/10 border-[#00ced1]/40 shadow-md shadow-[#00ced1]/10"
                        : "bg-white/5 dark:bg-white/5 light:bg-gray-50 border-white/5 dark:border-white/5 light:border-black/5 hover:border-white/10 dark:hover:border-white/10 light:hover:border-black/10"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isActive ? "bg-[#00ced1] text-[#050508]" : "bg-white/10 dark:bg-white/10 light:bg-gray-200 text-gray-300 dark:text-gray-300 light:text-gray-700"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-bold mb-1 transition-colors ${isActive ? "text-[#00ced1]" : "text-white dark:text-white light:text-black"}`}>
                          {point.title}
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Dynamic Detail Card (Education / Experience) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md min-h-[440px]"
          >
            <AnimatePresence mode="wait">
              {activeTab === "education" ? (
                <motion.div
                  key="education-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-bold text-white dark:text-white light:text-black border-b border-white/10 dark:border-white/10 light:border-black/10 pb-3 flex items-center gap-2">
                    <GraduationCap size={20} className="text-[#00ced1]" />
                    Educational Background
                  </h4>
                  {educationData.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/5 dark:border-white/5 light:border-black/5 hover:border-[#00ced1]/40 transition-all flex flex-col justify-between"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                        <div>
                          <h5 className="text-sm font-bold text-white dark:text-white light:text-black leading-snug">{item.title}</h5>
                          <h5 className="text-sm font-bold text-white dark:text-white light:text-black leading-snug">{item.subtitle}</h5>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-[#00ced1]/10 text-[#00ced1] border border-[#00ced1]/20 w-fit shrink-0 h-fit">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#00ced1]/90 mb-1.5">{item.degree}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="experience-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-bold text-white dark:text-white light:text-black border-b border-white/10 dark:border-white/10 light:border-black/10 pb-3 flex items-center gap-2">
                    <Briefcase size={20} className="text-[#00ced1]" />
                    Professional Experience
                  </h4>
                  {experienceData.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/5 dark:border-white/5 light:border-black/5 hover:border-[#00ced1]/40 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h5 className="text-sm font-bold text-white dark:text-white light:text-black">{item.title}</h5>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-[#00ced1]/10 text-[#00ced1] border border-[#00ced1]/20 w-fit">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">{item.role}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div> 
    </section>
  );
}