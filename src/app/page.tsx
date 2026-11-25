import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LogosStrip } from "@/components/LogosStrip";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <Navbar overlayHero />
      <main id="contenido-principal" className="flex-1">
        <HeroSection />
        <AboutSection />
        <LogosStrip />
        <WhyChooseSection />
        <StatsSection />
        <ServicesSection />
        <TeamSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <NewsletterSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
