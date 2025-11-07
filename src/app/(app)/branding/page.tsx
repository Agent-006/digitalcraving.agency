import { BrandingCTASection } from "@/components/BrandingCTASection";
import { BrandingHeroSection } from "@/components/BrandingHeroSection";
import { BrandingInsightsSection } from "@/components/BrandingInsightsSection";
import { BrandingPortfolioSection } from "@/components/BrandingPortfolioSection";
import { BrandingServicesSection } from "@/components/BrandingServicesSection";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Branding Services",
    description:
        "Creating powerful brand identities that resonate with your audience and drive business growth.",
};

export default function BrandingPage() {
    return (
        <main className="min-h-screen bg-[#F5E5DB]">
            <BrandingHeroSection />
            <BrandingServicesSection />
            <div className="relative z-20">
                <ScrollingBanner />
            </div>
            <div className="relative z-10">
                <BrandingPortfolioSection />
            </div>
            <BrandingInsightsSection />
            <BrandingCTASection />
        </main>
    );
}
