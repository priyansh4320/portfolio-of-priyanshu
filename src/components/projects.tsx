import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AG2 (AutoGen) — Multi-Agent Platform",
    description:
      "Core maintainer for the AG2 orchestration platform: GPT-5 series & apply_patch tooling, Bedrock/Gemini/Ollama resilience, DocAgent architecture, Dynamic RAG (Vector + Neo4j), and ParallelAgentRunner. Multiple merged PRs across model clients, tool concurrency, and agent refactors.",
    tags: ["Python", "GPT-5", "OpenAI", "RAG", "Neo4j", "Multi-agent"],
    demo: "https://github.com/ag2ai/ag2",
    github: "https://github.com/ag2ai/ag2",
    featured: true,
  },
  {
    title: "DocAgent & Dynamic RAG",
    description:
      "Concurrent document ingestion, thread-pool tool execution, supervisor pattern, and citation support. Extended with Graph RAG (Neo4j) and configurable vector+graph aggregator for multi-hop, relationship-aware retrieval.",
    tags: ["Python", "RAG", "Neo4j", "Concurrent I/O"],
    demo: "https://github.com/ag2ai/ag2/pull/2097",
    github: "https://github.com/ag2ai/ag2/pull/2105",
    featured: false,
  },
  {
    title: "GPT-5.1 apply_patch & Code-Editing Agents",
    description:
      "Support for GPT-5.1 apply_patch tool (V4A diff/patch format) enabling agents to emit structured, actionable multi-file diffs. Tutorial and notebook for safe autonomous refactoring and CI-friendly edits.",
    tags: ["OpenAI API", "Structured output", "Tool calling"],
    demo: "https://github.com/ag2ai/ag2/pull/2213",
    github: "https://github.com/ag2ai/ag2/pull/2213",
    featured: false,
  },
  {
    title: "ModelClient v2 (OpenAI, Gemini, Bedrock)",
    description:
      "v2 ModelClient protocol for OpenAI, Gemini, and Bedrock with rich multimodalities (text, image). Backward compatibility, documentation, and example notebooks. Bedrock retry/backoff and structured-output handling.",
    tags: ["Python", "OpenAI", "Gemini", "AWS Bedrock"],
    demo: "https://github.com/ag2ai/ag2/pull/2357",
    github: "https://github.com/ag2ai/ag2/pull/2357",
    featured: false,
  },
  {
    title: "ParallelAgentRunner & Agent Refactors",
    description:
      "ParallelAgentRunner for safe parallel agent execution (thread/process coordination, cancellation, result aggregation). ConversableAgent refactor for consistent message APIs and list[messages] enforcement across agents.",
    tags: ["Python", "Concurrency", "Multi-agent", "API design"],
    demo: "https://github.com/ag2ai/ag2/pull/2143",
    github: "https://github.com/ag2ai/ag2/pull/2086",
    featured: false,
  },
  {
    title: "AWS Bedrock resilience & structured outputs",
    description:
      "Exponential backoff and retry at the Bedrock provider layer; structured-output handling so transient failures don't cascade and downstream parsers consistently receive JSON. Production readiness for enterprise clouds.",
    tags: ["Python", "AWS Bedrock", "Resilience"],
    demo: "https://github.com/ag2ai/ag2/pull/2292",
    github: "https://github.com/ag2ai/ag2/pull/2292",
    featured: false,
  },
  {
    title: "Gemini ThinkingConfig & Ollama validation",
    description:
      "ThinkingConfig support for Gemini (reasoning depth/latency, thought signatures). Fixed LLMConfig validation for Ollama when native_tool_calls enabled — prevents misconfiguration crashes. Cross-provider stability.",
    tags: ["Python", "Gemini", "Ollama", "Config validation"],
    demo: "https://github.com/ag2ai/ag2/pull/2254",
    github: "https://github.com/ag2ai/ag2/pull/1951",
    featured: false,
  },
  {
    title: "Shell tool & multi-inbuilt tool execution (docs)",
    description:
      "Documentation and blog post on shell tool and multi-inbuilt tool execution in AG2 — how agents use shell and built-in tools safely, concurrency behavior, and deterministic outputs for planners.",
    tags: ["Documentation", "Shell tool", "Tool execution", "AG2"],
    demo: "https://github.com/ag2ai/ag2/pull/2288",
    github: "https://github.com/ag2ai/ag2/pull/2288",
    featured: false,
  },
  {
    title: "GPT-5 support & feature roadmap for AG2",
    description:
      "Co-authored proposal and roadmap for GPT-5 support in AG2: new models (gpt-5, gpt-5-mini, gpt-5-nano), reasoning effort, verbosity, custom tools, chain-of-thought passing, and migration path from older models.",
    tags: ["GPT-5", "Roadmap", "OpenAI", "Responses API", "AG2"],
    demo: "https://github.com/ag2ai/ag2/issues/1996",
    github: "https://github.com/ag2ai/ag2/issues/1996",
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
            Projects & contributions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            What I've built
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
                    {project.demo !== "#" && (
                      <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          View
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="ghost" size="sm" className="flex-1 text-xs">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                        {project.github.includes("issues") ? "Issue" : project.github.includes("pull") ? "PR" : "Repo"}
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
