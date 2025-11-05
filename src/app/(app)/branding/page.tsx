import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { HomePortfolioSection } from "@/components/HomePortfolioSection";
import { HomeInsightsSection } from "@/components/HomeInsightsSection";
import { HomeCTASection } from "@/components/HomeCTASection";

export const metadata: Metadata = {
    title: "Branding Services",
    description: "Creating powerful brand identities that resonate with your audience and drive business growth.",
};

export default function BrandingPage() {
    return (
        <main className="min-h-screen bg-white">
            <HomeHeroSection />
            <HomeServicesSection />
            <ScrollingBanner />
            <HomePortfolioSection />
            <HomeInsightsSection />
            <HomeCTASection />
        </main>
    );
}