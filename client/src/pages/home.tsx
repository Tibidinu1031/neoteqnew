import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--deep-green))] text-white relative">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
