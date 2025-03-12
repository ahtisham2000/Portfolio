"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import FloatingNav from "@/components/floating-nav";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <CustomCursor />
      <div ref={containerRef} className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <FloatingNav />
        <main className="min-h-screen">
          <section id="hero" className="min-h-screen">
            <Hero />
          </section>
          <section id="about" className="min-h-screen py-20">
            <About />
          </section>
          <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen py-20">
            <Skills />
          </section>
          <section id="experience" className="min-h-screen py-20">
            <Experience />
          </section>
          <section id="contact" className="min-h-screen py-20">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
