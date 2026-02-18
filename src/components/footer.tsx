import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const socials = [
  { label: "GitHub", href: "https://github.com/ag2ai/ag2", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/priyanshusharma", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-primary">Priyanshu.</p>

          <p className="text-xs text-muted-foreground order-last md:order-none">
            © {new Date().getFullYear()} Priyanshu Deshmukh. Built with React + shadcn/ui.
          </p>

          <div className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <Button key={label} asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
