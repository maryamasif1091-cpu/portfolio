"use client";

import React, { useState, useEffect } from "react";
import { FileText, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle theme and update HTML class for global styles
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  // Sync theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="flex items-center justify-between w-full max-w-5xl bg-[#0a0a0f]/85 dark:bg-[#0a0a0f]/85 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 rounded-full px-6 py-3 shadow-2xl transition-colors duration-300">
        
        {/* Logo / Name */}
        <a href="#home" className="font-bold text-lg tracking-tight">
          <span className="text-[#00ced1]">Maryam</span> <span className="dark:text-white light:text-black">Asif</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-gray-300 light:text-gray-700">
          <a href="#home" className="hover:text-[#00ced1] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#00ced1] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#00ced1] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#00ced1] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#00ced1] transition-colors">Contact</a>
        </div>

        {/* Right Actions: Resume & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full border border-white/20 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-black dark:text-white hover:border-[#00ced1] transition-all cursor-pointer"
          >
            {darkMode ? <Sun size={16} className="text-[#00ced1]" /> : <Moon size={16} className="text-[#00ced1]" />}
          </button>

          {/* Resume Open / Download Link */}
          <a
            href="/resume/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ced1]/40 bg-[#00ced1]/10 hover:bg-[#00ced1]/20 text-[#00ced1] text-xs font-semibold transition-all shadow-sm"
          >
            <FileText size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
}