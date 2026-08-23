import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050508] text-white selection:bg-orange-600 selection:text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}