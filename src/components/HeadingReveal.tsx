"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeadingRevealProps {
  text: string;
  className?: string;
  subtitle?: string;
}

export default function HeadingReveal({ text, className = "", subtitle }: HeadingRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="mb-12">
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex flex-wrap gap-x-3 gap-y-1 ${className}`}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>
      
      {/* Accent Underline Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "3rem", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-1 bg-[#00ced1] rounded-full mt-3"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}