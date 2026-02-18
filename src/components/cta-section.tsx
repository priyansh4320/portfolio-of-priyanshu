import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  const copyEmail = () => {
    navigator.clipboard.writeText("priyanshu@example.com")
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-2xl border border-border shadow-sm">
            <CardContent className="p-10 text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Get in touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-4">
                Let's build something
                <span className="block text-primary">intelligent together</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you're building multi-agent systems, need help with RAG or
                LLM integration, or want to collaborate on Python OSS (e.g. AG2) —
                I'm happy to connect.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="px-8 gap-2">
                  <a href="mailto:priyanshu@example.com">
                    <Mail className="h-4 w-4" />
                    Send an Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={copyEmail}
                  className="px-8 gap-2"
                >
                  Copy Email
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
