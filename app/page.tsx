import Intro from "@/components/intro";
import About from "@/components/about";
import Divider from "@/components/divider";
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <Divider />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
