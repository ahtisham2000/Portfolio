"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="container px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-purple-500 opacity-75 blur"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden border">
                <img
                  src="/profileImg.jpeg?height=400&width=400"
                  alt="Profile"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
            <a
                  href="https://github.com/ahtisham2000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-5 h-5" />
              </Button>
              </a>
              <a
                  href="https://www.linkedin.com/in/ahtisham10/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
              </a>
              <a
                  href="https://x.com/AULHAQ_10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Ahtisham, a passionate front-end developer with over
                2 years of experience creating engaging and responsive web
                applications. I specialize in modern JavaScript frameworks like
                React and Next.js, with a strong focus on creating intuitive
                user experiences.
              </p>
              <p>
                My journey in web development began during my Computer Science
                studies, where I discovered my passion for creating visually
                appealing and functional interfaces. Since then, I've worked
                with startups and established companies to bring their digital
                products to life.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and community events.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/docs/Resume-Ahtisham Ul Haq.pdf"
                download="Resume-Ahtisham_Ul_Haq.pdf"
              >
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">2+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">20+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">10+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
