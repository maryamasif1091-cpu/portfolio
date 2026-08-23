"use client";

import React from "react";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border-t border-white/10 dark:border-white/10 light:border-black/10 py-12 px-6 text-gray-400 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Name / Brand */}
        <div className="text-center md:text-left">
          <a href="#home" className="font-bold text-lg tracking-tight">
            <span className="text-[#00ced1]">Maryam</span> <span className="text-white dark:text-white light:text-black">Asif</span>
          </a>
          
        </div>

        {/* Quick Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700">
          <a href="#home" className="hover:text-[#00ced1] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#00ced1] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#00ced1] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#00ced1] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#00ced1] transition-colors">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/maryamasif1091-cpu"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] hover:border-[#00ced1]/40 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maryam-asif-25d2004"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] hover:border-[#00ced1]/40 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" rx="1" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@maryamasif1091"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
            className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] hover:border-[#00ced1]/40 transition-all"
          >
            <FileText size={18} />
          </a>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 dark:border-white/5 light:border-black/10 text-center text-xs text-gray-400 dark:text-gray-400 light:text-gray-500">
        © {new Date().getFullYear()} Maryam Asif. All rights reserved.
      </div>
    </footer>
  );
}