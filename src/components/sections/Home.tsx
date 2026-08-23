"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

// Array of the 5 custom technology icons positioned precisely on the outer circle
const orbitIcons = [
  { name: "C++", src: "/icons/Cicon.png", top: "-5%", left: "50%", delay: 0 },
  { name: "JavaScript", src: "/icons/JS-icon.png", top: "22%", left: "97%", delay: 0.4 },
  { name: "React", src: "/icons/react-icon.png", top: "82%", left: "82%", delay: 0.8 },
  { name: "Python", src: "/icons/python-icon.png", top: "82%", left: "18%", delay: 1.2 },
  { name: "Figma", src: "/icons/figma-icon.png", top: "22%", left: "3%", delay: 1.6 },
];

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050508] dark:bg-[#050508] light:bg-[#f8f9fa] flex items-center justify-center pt-32 pb-16 relative overflow-hidden font-['Inter','Saira',sans-serif] transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ced1]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          {/* Single-word banner/pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ced1]/10 border border-[#00ced1]/20 text-[#00ced1] text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Intro</span>
          </div>

          {/* Heading with Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white dark:text-white light:text-black tracking-tight leading-tight mb-4">
              Hi! I am <span className="text-[#00ced1]">Maryam Asif</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 dark:text-gray-200 light:text-gray-800 mb-6">
              Web Developer
            </h2>
          </motion.div>

          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            CS Student | C/C++ Developer | JavaScript | SQL | Shell Scripting | MERN Stack Developer | Python | HTML, CSS | Next.js
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ced1] hover:bg-[#00bfff] text-[#050508] font-bold text-sm transition-all shadow-lg shadow-[#00ced1]/25"
            >
              View Projects
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/20 text-white dark:text-white light:text-black font-semibold text-sm transition-all shadow-sm"
            >
              <Mail size={16} className="text-[#00ced1]" />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Column: Circular Profile Image with 5 Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center py-10"
        >
          {/* Main Container with extra padding space so icons sit nicely outside the image */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">

            {/* Static dashed outer ring matching the orbit layout */}
            <div className="absolute inset-4 rounded-full border border-[#00ced1]/25 border-dashed pointer-events-none" />

            {/* Center Profile Image Container (Clean circle) */}
            <div className="absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full overflow-hidden border-2 border-[#00ced1]/40 shadow-2xl bg-gradient-to-b from-[#00ced1]/10 to-transparent z-10">
              <Image
                src="/images/Home-section.png"
                alt="Maryam Asif"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Orbiting / Floating Tech Icons placed cleanly along the dashed line */}
            {orbitIcons.map((item, index) => (
              <motion.div
                key={index}
                className="absolute z-20 w-12 h-12 sm:w-14 sm:h-14 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-[#0c0c14]/95 dark:bg-[#0c0c14]/95 light:bg-white border border-[#00ced1]/40 shadow-lg shadow-[#00ced1]/20 backdrop-blur-md p-2.5"
                style={{ top: item.top, left: item.left }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0] 
                }}
                transition={{
                  opacity: { duration: 0.5, delay: item.delay },
                  scale: { duration: 0.5, delay: item.delay },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={30}
                  height={30}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}