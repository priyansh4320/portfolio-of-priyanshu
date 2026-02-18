import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const skills = [
  "React", "TypeScript", "Next.js", "Node.js",
  "Python", "PostgreSQL", "Docker", "AWS",
  "Tailwind CSS", "GraphQL", "Redis", "Git",
]

const highlights = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Open Source PRs", value: "50+" },
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
            A builder at heart
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
              I'm a full-stack engineer who loves turning complex problems into
              clean, elegant solutions. I've spent the last five years building
              products across fintech, developer tooling, and AI — always with a
              bias toward shipping fast and iterating faster.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My background spans both the frontend and backend, with a growing
              focus on AI-integrated systems. I care deeply about developer
              experience, performance, and writing code that future-me will
              actually understand.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not building, I'm reading about systems design, contributing
              to open source, or writing about what I've learned.
            </p>

            <Separator className="my-6" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
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
