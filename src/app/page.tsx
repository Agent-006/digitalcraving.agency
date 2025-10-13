"use client";

import { Navigation } from "@/components/Navigation";
import { VerticalLabels } from "@/components/VerticalLabels";
import { HeroSection } from "@/components/HeroSection";
import { Statistics } from "@/components/Statistics";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Hero Section with Dark Background */}
            <div className="bg-black">
                <Navigation />
                <VerticalLabels />
                <HeroSection />
                <Statistics />
            </div>

            {/* About Section */}
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Blog Section */}
            <BlogSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
