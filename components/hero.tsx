"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ParticleBackground from "./particle-background";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Frontend Developer",
    "Software Engineer",
    "UI/UX Enthusiast",
  ];
  const period = 2000; // pause between words

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(75); // faster when deleting
      } else {
        setTypingSpeed(150); // normal typing speed
      }

      // If completed typing the word
      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), period);
      }
      // If deleted the word
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, mounted, titles, typingSpeed]);

  if (!mounted) return null;

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <ParticleBackground />
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Front-End Developer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="block">Ahtisham ul Haq</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              <span>{text}</span>
              <span className="animate-blink">|</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-lg mb-8 text-xl text-muted-foreground"
          >
            Building beautiful, interactive, and performant web experiences with
            modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="#experience" passHref>
              <Button size="lg" className="gap-2">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="#contact" passHref>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
