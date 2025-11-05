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
import { SpinningText } from "@/components/ui/spinning-text";

export default function PortfolioPage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#F5E6DC] flex flex-col">
            {/* Hero Section with Dark Background */}
            <div className="bg-black w-full">
                <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                    {/* <Navigation /> */}
                    <div className="hidden md:block">
                        <VerticalLabels />
                    </div>
                    <HeroSection />
                    <Statistics />
                </div>
            </div>

            {/* About Section */}
            <section className="w-full mx-auto max-w-auto">
                <AboutSection />
            </section>

            {/* Services Section */}
            <section className="w-full mx-auto max-w-auto">
                <ServicesSection />
            </section>

            {/* Portfolio Section */}
            <section className="w-full mx-auto max-w-auto">
                <PortfolioSection />
            </section>

            {/* Blog Section */}
            <section className="w-full mx-auto max-w-auto">
                <BlogSection />
            </section>

            {/* Testimonials Section */}
            <section className="w-full mx-auto max-w-auto">
                <TestimonialsSection />
            </section>

            {/* Contact Section */}
            <section className="w-full mx-auto max-w-auto">
                <ContactSection />
            </section>

            {/* Footer */}
            {/* <Footer /> */}

            {/* Scroll to Top Button with SpinningText */}
            <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                    <SpinningText
                        className="w-20 h-20 text-white font-semibold mix-blend-color-burn"
                        duration={8}
                        radius={4.5}
                        style={{ pointerEvents: "none" }}
                    >
                        {"SCROLL TO TOP SCROLL TO TOP"}
                    </SpinningText>
                    <button
                        aria-label="ScrollToTop"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 text-white shadow-lg flex items-center justify-center hover:bg-black/90 transition"
                    >
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 19V5" />
                            <path d="M5 12l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    );
}
