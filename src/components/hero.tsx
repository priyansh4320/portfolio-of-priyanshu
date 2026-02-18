import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
})

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <motion.div {...fadeUp(0)}>
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            AI Engineer · Multi-agent systems · Python OSS
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          Building intelligent
          <span className="block text-primary">agents & systems</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto"
        >
          I'm <span className="font-semibold text-foreground">Priyanshu Deshmukh</span> — core maintainer
          at <span className="font-semibold text-foreground">AG2 (AutoGen)</span>, architecting
          multi-agent orchestration, frontier LLM integrations, and production RAG. I also
          deliver AI/ML solutions as a freelance architect for global clients.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button asChild size="lg" className="px-8">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="#contact">Email</a>
          </Button>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
