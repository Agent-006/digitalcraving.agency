"use client";

import { ScrollingBanner } from "./ScrollingBanner";
import { TimelineCard } from "./TimelineCard";
import { StatisticCard } from "./StatisticCard";
import { Sparkles, TrendingUp, Rocket, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative bg-[#F5E6DC] py-20">
      {/* Scrolling Banner */}
      <div className="mb-20">
        <ScrollingBanner />
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 mb-20">
          {/* Left - About Text */}
          <div className="space-y-6">
            <div className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              About Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-[family-name:var(--font-montserrat)]">
              We Are Experts<br />In Our Field<span className="text-(--accent-orange)">.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              Our digital company of professionals has been developing products for 15 years.
            </p>
            <div className="text-gray-600 leading-relaxed space-y-4 font-[family-name:var(--font-inter)]">
              <p>
                Sybex Designs Limited is a UK-based SaaS and design agency that provides cutting-edge digital solutions to businesses worldwide. Specializing in UI/UX design, branding, web development, and AI-driven applications, Sybex Designs is committed to delivering innovative and user-centric experiences. The company focuses on accelerating AI application development, offering end-to-end machine learning lifecycle solutions, and helping brands establish a strong digital presence. With a dedication to clarity, trust, and innovation, Sybex Designs Limited empowers businesses to scale efficiently in the ever-evolving digital landscape.
              </p>
              <p>
                We've got a lot of experience for our work and develop applications that became popular in the world. Every morning in our company begins with hot coffee and a stand-up. Discussion is an important thing in the development process. Thus new ideas and ingenious solutions are born. Then we get to work with renewed vigor and inspiration. We are never bored.
              </p>
            </div>
          </div>

          {/* Right - Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TimelineCard
              icon={Sparkles}
              iconColor="text-indigo-600"
              iconBgColor="bg-indigo-100"
              title="Foundation"
              description="Started in 2020 with a vision to transform digital experiences through innovative design solutions."
              year="2020"
              yearBgColor="bg-indigo-100 text-indigo-700"
            />
            <TimelineCard
              icon={TrendingUp}
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
              title="Global Expansion"
              description="Expanded operations to 3 continents, building a diverse portfolio of 100+ successful projects."
              year="2024"
              yearBgColor="bg-blue-100 text-blue-700"
            />
            <TimelineCard
              icon={Rocket}
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
              title="First Major Project"
              description="Launched our first enterprise SaaS platform, serving over 10,000 users globally."
              year="2022"
              yearBgColor="bg-purple-100 text-purple-700"
            />
            <TimelineCard
              icon={Lightbulb}
              iconColor="text-teal-600"
              iconBgColor="bg-teal-100"
              title="Future Vision"
              description="Pioneering AI-driven design solutions and expanding into emerging markets."
              year="2025"
              yearBgColor="bg-teal-100 text-teal-700"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <StatisticCard
            value="100+"
            label="Projects Completed"
            valueColor="text-indigo-600"
          />
          <StatisticCard
            value="50k+"
            label="Happy Users"
            valueColor="text-purple-600"
          />
          <StatisticCard
            value="15+"
            label="Countries"
            valueColor="text-blue-600"
          />
          <StatisticCard
            value="24/7"
            label="Support"
            valueColor="text-teal-600"
          />
        </div>
      </div>
    </section>
  );
}