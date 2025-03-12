"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const frontendSkills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3/SCSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 90 },
  { name: "Vue JS", level: 80 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 92 },

]

const backendSkills = [
  { name: "Node.js", level: 75 },
  { name: "Express", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "Firebase", level: 80 },
  { name: "REST API", level: 85 },
  { name: "GraphQL", level: 70 },
]

const toolsSkills = [
  { name: "Git/GitHub", level: 90 },
  { name: "Webpack", level: 75 },
  { name: "Jest", level: 60 },
  { name: "Postman", level: 85 },
  { name: "Figma", level: 80 },
  { name: "VS Code", level: 95 },
]

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="container px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical expertise spans across front-end development, with some back-end knowledge and proficiency in
          various development tools and workflows.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & Others</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {frontendSkills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="backend">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {backendSkills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tools">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {toolsSkills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
      >
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6z" />
                <circle cx="12" cy="12" r="3" />
                <path d="m19 12-3-2v4l3-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Creating responsive, accessible, and performant user interfaces with modern frameworks.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                <path d="m8 16 4-4 4 4" />
                <path d="M16 16v6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Designing intuitive and visually appealing interfaces with a focus on user experience.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 2v8" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="m8 22 4-10 4 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
            <p className="text-muted-foreground">
              Optimizing web applications for speed, accessibility, and search engine visibility.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

