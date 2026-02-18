import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Code Review Bot",
    description:
      "An LLM-powered GitHub bot that reviews pull requests, suggests improvements, and catches bugs before they reach production.",
    tags: ["TypeScript", "OpenAI API", "GitHub Actions", "Node.js"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "DevDash",
    description:
      "A developer productivity dashboard aggregating GitHub activity, CI/CD status, and team metrics into one unified interface.",
    tags: ["React", "Next.js", "Tailwind", "PostgreSQL"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Vectorize",
    description:
      "A semantic search engine for documentation. Upload any docs and query them in natural language using embeddings.",
    tags: ["Python", "FastAPI", "Pinecone", "React"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Streamline API",
    description:
      "A high-performance REST & GraphQL API boilerplate with auth, rate limiting, caching and full observability out of the box.",
    tags: ["Node.js", "GraphQL", "Redis", "Docker"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "FormFlow",
    description:
      "Drag-and-drop form builder with conditional logic, multi-step flows, and analytics — zero backend setup required.",
    tags: ["React", "TypeScript", "Zustand", "Supabase"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Pulse Monitor",
    description:
      "Real-time uptime monitoring with alerting via Slack/email, incident timelines, and a public status page generator.",
    tags: ["Next.js", "Prisma", "WebSockets", "Vercel"],
    demo: "#",
    github: "#",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Things I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="group rounded-2xl h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base font-semibold leading-tight">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="text-xs ml-2 shrink-0">Featured</Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-full px-2.5 py-0.5 font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="flex-1 text-xs">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
