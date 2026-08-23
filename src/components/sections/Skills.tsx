"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Wrench, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal className="text-[#00ced1]" size={26} />,
    skills: ["C++", "C", "Assembly", "Python", "Shell Scripting"],
  },
  {
    title: "Frontend Development",
    icon: <Layout className="text-[#00ced1]" size={26} />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend & Databases",
    icon: <Server className="text-[#00ced1]" size={26} />,
    skills: ["Next.js", "Node.js", "Express.js", "MongoDB", "PL/SQL"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="text-[#00ced1]" size={26} />,
    skills: ["GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    title: "Core Computer Science",
    icon: <Code2 className="text-[#00ced1]" size={26} />,
    skills: ["OOP", "Data Structures", "Artificial Intelligence", "Software Engineering", "Algorithms", "DBMS", "Computer Networks"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#050508] dark:bg-[#050508] light:bg-[#f8f9fa] py-24 px-6 relative overflow-hidden flex items-center transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ced1]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ced1]/10 border border-[#00ced1]/20 text-[#00ced1] text-xs font-semibold mb-4">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-black tracking-tight">
            Technical <span className="text-[#00ced1]">Skills</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A comprehensive overview of my programming stack, tools, and technical proficiencies.
          </p>
        </div>

        {/* Flexbox Container to Center all 5 Cards Responsively */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 30,
                transition: { duration: 0.2 } 
              }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00ced1]/60 rounded-3xl p-6 flex flex-col justify-between transition-colors duration-300 group shadow-xl"
              style={{ minHeight: "260px" }}
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#00ced1]/10 border border-[#00ced1]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-black mb-3 group-hover:text-[#00ced1] transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/5 dark:border-white/5 light:border-black/10 text-gray-200 dark:text-gray-200 light:text-gray-800 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}