"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Medicare",
    description: "A modern doctor booking platform built with React js and Stripe integration.",
    image: "/medicare.png?height=400&width=600",
    tags: ["React", "Tailwind CSS", "MongoDB", "Context API"],
    demoUrl: "https://doctor-medicare-booking.netlify.app/",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Music Streaming App",
    description: "A music streaming application with playlist management and audio visualization.",
    image: "/music-academy.png?height=400&width=600",
    tags: ["React", , "TypeScript", "Next js", "Aceternity UI"],
    demoUrl: "https://musicwebsite-theta.vercel.app/",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Instive",
    description: "Instive is an insurance management platform for policy handling and claims processing.",
    image: "/instive.png?height=400&width=600",
    tags: ["React", "Firebase", "React Bootstrap",],
    demoUrl: "https://insurance-website.netlify.app",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking application with progress visualization.",
    image: "/fitness.webp?height=400&width=600",
    tags: ["React Native", "TypeScript", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
  {
    id: 5,
    title: "Travel World",
    description: "A platform that simplifies trip planning, bookings, and travel management for a seamless experience.",
    image: "/travelworld.png?height=400&width=600",
    tags: ["React", "Mongo DB", "Tailwind CSS"],
    demoUrl: "https://travel-manage.netlify.app",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Blogs Website",
    description: "A platform for creating, sharing, and reading blogs built with Vue Js, Vuetify",
    image: "/blogproj.png?height=400&width=600",
    tags: ["Vue", "Vuetify", "VueX"],
    demoUrl: "#",
    githubUrl: "#",
    category: "web",
  }
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile Apps" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="container px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work, showcasing my skills in front-end development, responsive design, and
          interactive user experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10"
      >
        <div className="flex gap-2 p-1 border rounded-lg">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "ghost"}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full group">
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top blur-none transition-transform duration-300 group-hover:scale-105 relative z-10" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="gap-1">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Link href="#projects" >
        <Button variant="outline" size="lg">
          View All Projects
        </Button>
        </Link>
      </motion.div>
    </div>
  )
}

