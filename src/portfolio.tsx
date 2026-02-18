import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
