import { useState } from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "@/components/theme-provider"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-primary tracking-tight">
            Priyanshu.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: theme toggle + mobile menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className="flex flex-col pt-12 px-6 h-full">
          <a
            href="#"
            className="text-xl font-bold text-primary mb-6"
            onClick={() => setMobileOpen(false)}
          >
            Priyanshu.
          </a>
          <Separator className="mb-6" />
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Sheet>
    </>
  )
}
