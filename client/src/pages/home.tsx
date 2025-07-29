import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
