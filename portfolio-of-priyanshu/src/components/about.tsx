import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const skills = [
  "AG2", "OpenAI SDK", "Anthropic SDK", "Gemini Client GCP",
  "Vertex AI", "Bedrock", "Azure", "Prompt Engineering",
  "Context Engineering", "Python", "TypeScript", "LangGraph",
  "GPT-5", "RAG", "Neo4j", "AWS", "Kubernetes",
  "Multi-agent systems", "Structured outputs", "Tool calling",
  "FastAPI", "Docker", "CI/CD", "Git",
]

const highlights = [
  { label: "Years in AI/ML", value: "3+" },
  { label: "Python OSS PRs", value: "50+" },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Welcome
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I help teams build production-ready AI systems — from multi-agent orchestration and
              frontier LLM integrations to scalable RAG architectures. As a core maintainer at
              <span className="font-medium text-foreground"> AG2 (AutoGen)</span>, I work on
              GPT-5 series tooling, safe code-editing agents, and document-scale retrieval systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in prompt and context engineering, provider integrations (OpenAI, Anthropic,
              Gemini, Bedrock, Azure), and building systems that are correct, observable, and fast.
              Whether you need help architecting agent workflows, optimizing RAG pipelines, or
              integrating the latest LLM capabilities, I can help you ship with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also contribute to Python OSS, write tutorials, and share what I learn along the way.
              Let's build something intelligent together.
            </p>

            <Separator className="my-6" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground mb-4">
                  Technologies I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
