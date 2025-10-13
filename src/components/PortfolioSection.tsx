"use client";

import { Badge } from "@/components/ui/badge";
import ArrowDownRightIcon from "@/components/icons/ArrowDownRightIcon";

const tags = ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"];

export function PortfolioSection() {
  return (
    <section className="relative bg-[#F5E6DC] py-20">
      <div className="max-w-[1400px] mx-auto px-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-6xl font-bold text-[#344054] font-[family-name:var(--font-montserrat)]">
            Lets have a look at my Portfolio
          </h2>
          <button className="text-xl font-bold text-white hover:text-(--accent-orange) transition-colors">
            See All
          </button>
        </div>

        <div className="space-y-12">
          <img
            src="/portfolio-lirante.svg"
            alt="Lirante Food Delivery Solution"
            className="w-full rounded-3xl shadow-lg"
          />

          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-6 py-2 text-base bg-white border-gray-200 text-black hover:bg-gray-50"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-5xl font-bold text-[#344054] font-[family-name:var(--font-montserrat)]">
                Lirante - Food Dilvery Solution
              </h3>
              <ArrowDownRightIcon width={34} height={34} color="#344054" />
            </div>
            <p className="text-xl text-[#344054] leading-relaxed max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}