import Hero from "@/components/section/Hero"
import Navbar from "@/components/section/Navbar"
import ProjectsSection from "@/components/section/Projects"
import ContactSection from "@/components/section/Contact"
import FooterSection from "@/components/section/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}
