import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import FeaturesSection from "@/components/features-sectuon"

export const metadata: Metadata = {
  title: "Sendit | Monetize Effortlessly. Sell Globally.",
  description: "Sendit helps creators, traders, and innovators sell digital products seamlessly.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

