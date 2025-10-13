"use client";

import InvertedRadiusCards from "./InvertedBorderRadiusCard";

export function ServicesSection() {
    return (
        <section className="relative bg-black py-20 overflow-hidden">
            {/* Decorative Blob - Left */}
            <div className="absolute left-0 top-0 w-[400px] h-[600px] opacity-60">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FFB088] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4" />
            </div>

            {/* Decorative Blob - Right */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[700px] opacity-60">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#FF6B35] via-[#FF8C5A] to-[#FFB088] rounded-full blur-3xl transform translate-x-1/3 translate-y-1/4" />
            </div>

            {/* Decorative Blob - Top Center */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-40">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB088] to-[#FF8C5A] rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-24">
                <div className="flex items-start justify-between mb-16">
                    <h2 className="text-5xl font-bold text-white font-[family-name:var(--font-montserrat)]">
                        My{" "}
                        <span className="text-(--accent-orange)">Services</span>
                    </h2>
                    <p className="text-white text-lg max-w-xl leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis lacus nunc, posuere in justo vulputate, bibendum
                        sodales
                    </p>
                </div>
                <InvertedRadiusCards label="Service" iconBg="bg-black" />
            </div>
        </section>
    );
}
