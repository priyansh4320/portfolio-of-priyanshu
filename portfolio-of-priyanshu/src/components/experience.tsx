import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    year: "2024 – Present",
    role: "Senior Full Stack Engineer",
    company: "Stealth AI Startup",
    description:
      "Building the core product — an AI-assisted developer workflow platform. Leading frontend architecture, API design, and LLM integration.",
    tags: ["React", "TypeScript", "LLMs", "FastAPI"],
  },
  {
    year: "2022 – 2024",
    role: "Full Stack Developer",
    company: "Razorpay",
    description:
      "Worked on the merchant dashboard and payments SDK. Improved checkout performance by 40% and built a real-time analytics pipeline.",
    tags: ["React", "Node.js", "PostgreSQL", "Kafka"],
  },
  {
    year: "2021 – 2022",
    role: "Frontend Engineer",
    company: "Wingify",
    description:
      "Built A/B testing UI and experimentation tooling for enterprise clients. Introduced Storybook and drove the component library migration.",
    tags: ["Vue.js", "JavaScript", "CSS", "Storybook"],
  },
  {
    year: "2020 – 2021",
    role: "Software Engineer (Intern → Full-time)",
    company: "Clarisights",
    description:
      "Started as an intern, converted full-time. Built data visualization features for marketing analytics dashboards used by Fortune 500 brands.",
    tags: ["React", "Ruby on Rails", "D3.js", "GraphQL"],
  },
]

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

        {/* Timeline */}
        <div className="relative border-l border-border pl-8 space-y-8 ml-2">
          {experiences.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
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
                    {item.description}
                  </p>
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
