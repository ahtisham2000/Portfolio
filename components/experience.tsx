"use client"

import React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "United Software & Technologies Intl",
    period: "2024 - Present",
    description:
      "Worked in the frontend development team in building and maintaining a large-scale SaaS platform. Implementing new features, optimizing performance, and mentoring junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "MUI", "Tailwind CSS",
      , "Redux", "Redux Toolkit"],
  },
  {
    id: 2,
    role: "Web Developer - Trainee ",
    company: "Programmers Force",
    period: "2023",
    description:
      "Developed responsive web applications for various clients. Collaborated with designers and backend developers to implement features and ensure cross-browser compatibility.",
    technologies: ["Vue JS", "JavaScript", "Vuetify", "REST API", "VueX"],
  },
  {
    id: 3,
    role: "Internship",
    company: "Visiomate",
    period: "2022",
    description:
      "Designed and developed user interfaces for web and mobile applications. Created interactive prototypes and implemented designs using modern frontend technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
  },
]

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University",
    period: "2019 - 2023",
    description:
     "Graduated with honors. Coursework included Web Development, Algorithms, Data Structures, and Software Engineering.",
  },
  {
    id: 2,
    degree: "Pre-Engineering",
    institution: "Punjab College",
    period: "2017 - 2019",
    description:
      "Studied core subjects like Mathematics, Physics, and Chemistry, building a strong foundation for problem-solving and analytical thinking.",
  },
]

export default function Experience() {
  return (
    <div className="container px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and educational background in the field of web development and design.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-3 mb-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
        </motion.div>

        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            {index % 2 === 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:items-end text-left md:text-right">
                        <Badge className="mb-2 w-fit md:ml-auto">{exp.period}</Badge>
                        <h4 className="text-xl font-bold">{exp.role}</h4>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="hidden md:block"></div>
              </>
            ) : (
              <>
                <div className="hidden md:block"></div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col">
                        <Badge className="mb-2 w-fit">{exp.period}</Badge>
                        <h4 className="text-xl font-bold">{exp.role}</h4>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </>
            )}
          </React.Fragment>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-3 mt-12 mb-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
        </motion.div>

        {education.map((edu, index) => (
          <React.Fragment key={edu.id}>
            {index % 2 === 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:items-end text-left md:text-right">
                        <Badge className="mb-2 w-fit md:ml-auto">{edu.period}</Badge>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="hidden md:block"></div>
              </>
            ) : (
              <>
                <div className="hidden md:block"></div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col">
                        <Badge className="mb-2 w-fit">{edu.period}</Badge>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

