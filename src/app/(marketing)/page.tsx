import { Hero } from "@/components/marketing/hero"
import { Services } from "@/components/marketing/services"
import { Features } from "@/components/marketing/features"
import { Testimonials } from "@/components/marketing/testimonials"
import { Contact } from "@/components/marketing/contacto"

export default function LandingPage() {
  return (
    <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}