import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import { AboutMePhoto } from '@/components/AboutMePhoto'
import PortfolioGrid from '@/components/PortfolioGrid'
import { ExperiencePage } from '@/components/ExperiencePage'
import SkillsSection from '@/components/SkillsSection'
import ServicesSection from '@/components/ServicesSection'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { CursorTracker } from '@/components/CursorTracker'
import { FloatingParticles } from '@/components/FloatingParticles'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorTracker />
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <section id="about">
        <AboutMePhoto />
      </section>
      <section id="portfolio">
        <PortfolioGrid />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
