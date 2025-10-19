"use client";

import { Navigation } from "@/components/Navigation";
import { VerticalLabels } from "@/components/VerticalLabels";
import { HeroSection } from "@/components/HeroSection";
import { Statistics } from "@/components/Statistics";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#F5E6DC] flex flex-col">
            {/* Hero Section with Dark Background */}
            <div className="bg-black w-full">
                <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                    <Navigation />
                    <VerticalLabels />
                    <HeroSection />
                    <Statistics />
                </div>
            </div>

            {/* About Section */}
            <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <AboutSection />
            </section>

            {/* Services Section */}
            <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <ServicesSection />
            </section>

            {/* Portfolio Section */}
            <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <PortfolioSection />
            </section>

            {/* Blog Section */}
            <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <BlogSection />
            </section>

            {/* Testimonials Section */}
            <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <TestimonialsSection />
            </section>

            {/* Contact Section */}
            <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <ContactSection />
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
