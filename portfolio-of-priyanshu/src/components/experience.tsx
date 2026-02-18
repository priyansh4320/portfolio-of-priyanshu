import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AG2_SECTIONS = [
  {
    title: "1) GPT-5 series, apply_patch & shell-tool support",
    items: [
      { text: "OpenAI Response, Gemini, Bedrock client support — v2 ModelClient protocol for mentioned clients, supporting rich multimodalities (text, image, etc.), backward compatibility, documentation and example notebook updates.", pr: 2357 },
      { text: "GPT-5 & GPT-5.2 model enablement — Full GPT-5.2 support and reasoning-effort configuration so AG2 agents can use higher-fidelity reasoning modes (including xhigh) and the Responses API. Updated model enums, pricing/effort mappings, and responses client.", pr: 2250 },
      { text: "GPT-5.1 apply_patch tool (Responses API) — Support for apply_patch (V4A diff/patch format) so agents emit structured, actionable multi-file diffs (safe autonomous refactoring, CI-friendly edits). Tutorial/notebook included. Skills: tool-calling design, structured output parsing, patch application safety.", pr: 2213 },
      { text: "Shell tool / tool concurrency — Shell/tool execution improvements so agent tool calls are concurrency-safe and return machine-parseable structured outputs. Reduced deadlocks/race conditions; deterministic outputs for planners. Skills: concurrency safety, tool contract design.", pr: null },
    ],
  },
  {
    title: "2) Provider & infra resilience (Bedrock, Gemini, Ollama)",
    items: [
      { text: "AWS Bedrock resilience & structured outputs — Exponential backoff and retry at the Bedrock provider layer; structured-output handling so transient failures don't cascade and parsers receive JSON consistently. Production readiness for enterprise clouds.", pr: 2292 },
      { text: "Gemini: ThinkingConfig / reasoning controls — ThinkingConfig support for Gemini so AG2 can control depth/latency of reasoning and capture thought signatures for traceability in multi-step planning. Skills: provider abstraction, reasoning controls, cross-provider parity.", pr: 2254 },
      { text: "Ollama validation fixes — Fixed LLMConfig validation paths that caused runtime errors when native_tool_calls were enabled, preventing misconfiguration crashes. Skills: config validation, cross-provider stability.", pr: 1951 },
    ],
  },
  {
    title: "3) DocAgent — architecture, dynamic RAG, high-throughput document workflows",
    items: [
      { text: "DocAgent architecture optimization — ThreadPoolExecutor for tool execution, pseudo-supervisor for task orchestration, concurrent document ingestion, citation support, flexible inner-agent prompting. Improved ingestion throughput and query latency. Technical highlights: concurrent ingestion pipelines, thread pools for I/O-bound tasks, scalable supervisor pattern.", pr: 2097 },
      { text: "Dynamic RAG (Vector + Graph / Neo4j + aggregator) — Graph RAG (Neo4j) and dynamic rag_config to select/aggregate vector and graph retrievals. Multi-hop, relationship-aware queries and result aggregator for combined RAG outputs. Enables sub-second, multi-hop retrieval for enterprise search.", pr: 2105 },
    ],
  },
  {
    title: "4) Agent runtime refactors, networking & message model improvements",
    items: [
      { text: "ConversableAgent refactor — Consistent message list APIs, clearer state transitions, improved extensibility for multi-turn scenarios. Skills: API design, state-machine clarity, multi-turn correctness.", pr: 2086 },
      { text: "Agent networking / list[messages] API enforcement — Standardized list[messages] semantics across agent messaging; improved inter-agent communication and group chat / networking integration.", pr: 2081 },
      { text: "ParallelAgentRunner / concurrency orchestration — Run agents in parallel safely: thread/process coordination, result aggregation, cancellation semantics. Skills: concurrency patterns, cancellation semantics, thread-safe result aggregation.", pr: 2143 },
    ],
  },
  {
    title: "5) Reliability, fixes & dependency hygiene",
    items: [
      { text: "Memory / long-context stability — Replaced brittle long-context paths and added safer concurrency patterns to avoid context overwrites in document agents (DocAgent refactors).", pr: null },
      { text: "Dependency & resolver hardening — Pinned dependencies to ranges where appropriate; fixed async validation issues across providers to reduce release friction and breakages.", pr: null },
    ],
  },
  {
    title: "6) Docs, tutorials & community enablement",
    items: [
      { text: "Apply-patch tutorial & notebook — Tutorial for GPT-5.1 apply_patch flows in AG2; linked from release notes.", pr: 2213 },
      { text: "DocAgent & Dynamic RAG notebooks — Sample notebooks for concurrent ingestion, dynamic RAG configuration, and example runs.", pr: 2097 },
      { text: "Developer DX — Python 3.14 devcontainer for contributor environments; documented lifecycle hooks (process_message_before_send) for custom logic in message pipelines.", pr: null },
    ],
  },
]

const AG2_TAGS = ["Python", "GPT-5", "OpenAI API", "RAG", "Neo4j", "Multi-agent", "Structured outputs", "Tool calling", "Bedrock", "Gemini", "Ollama"]

const OTHER_EXPERIENCES = [
  {
    year: "Aug 2024 – Jul 2025",
    role: "Software Engineer (AI)",
    company: "Alvyl",
    summary:
      "Architected FusionSecurity.ai, an enterprise-grade multi-agent security intelligence platform for Fortune 500 clients.",
    highlights: [
      { text: "Designed LangGraph-powered architecture with role-based agents processing daily security events with high uptime." },
      { text: "Implemented hierarchical Supervisor Agent orchestration across 15+ specialized sub-agents in containerized AWS/Kubernetes." },
      { text: "Engineered multi-modal RAG combining vector search, graph relationships, and structured data analysis; self-evolving threat intelligence DB." },
      { text: "Integrated Semgrep SAST in CI/CD; multi-cloud metadata analysis agents for AWS/Azure/GCP compliance monitoring." },
    ],
    tags: ["LangGraph", "Python", "AWS", "Kubernetes", "RAG", "Multi-agent", "Docker"],
  },
  {
    year: "2022 – 2024",
    role: "Freelance AI/ML Solutions Architect",
    company: "BlackCoffer, Digipplus, PrecilyAI, UniAcco",
    summary:
      "Delivered AI transformation solutions across industries. Built scalable ML pipelines with end-to-end MLOps integration.",
    highlights: [
      { text: "Designed and delivered ML pipelines and MLOps workflows for analytics, NLP, and decision systems." },
      { text: "Worked with clients on data strategy, model deployment, and production monitoring." },
    ],
    tags: ["Python", "MLOps", "NLP", "ML", "Data pipelines"],
  },
]

const prUrl = (num: number) => `https://github.com/ag2ai/ag2/pull/${num}`

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative border-l border-border pl-8 space-y-8 ml-2">
          {/* AG2 — detailed highlighted block */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="absolute -left-[2.65rem] top-5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
            <Card className="rounded-2xl border-primary/20 bg-primary/5 hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <p className="font-semibold text-foreground text-lg">AI Engineer & Maintainer</p>
                    <p className="text-sm text-primary font-medium">AG2 (AutoGen)</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-medium shrink-0">
                    Jul 2025 – Present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Core maintainer and AI systems engineer for AG2's multi-agent orchestration platform. Own integration of frontier LLM capabilities (GPT-5 series), production-grade tooling for safe code edits, concurrency-safe agent runtimes, and document-scale RAG. Drive refactors that improve agent correctness, observability, and throughput; produce tutorials and docs that accelerate adoption.
                </p>

                <div className="space-y-6">
                  {AG2_SECTIONS.map((section, sidx) => (
                    <div key={sidx}>
                      <h4 className="text-sm font-semibold text-foreground mb-2 mt-4 first:mt-0">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary shrink-0">·</span>
                            <span>
                              {item.text}
                              {item.pr != null && (
                                <>
                                  {" "}
                                  <a
                                    href={prUrl(item.pr)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                  >
                                    PR #{item.pr}
                                  </a>
                                </>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-border">
                  {AG2_TAGS.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs rounded-full px-2.5 py-0.5 font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other roles */}
          {OTHER_EXPERIENCES.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[2.65rem] top-5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <Card className="rounded-2xl hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="font-semibold text-foreground">{item.role}</p>
                      <p className="text-sm text-primary font-medium">{item.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-medium shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary shrink-0">·</span>
                        <span>{h.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs rounded-full px-2.5 py-0.5 font-normal">
                        {tag}
                      </Badge>
                    ))}
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
