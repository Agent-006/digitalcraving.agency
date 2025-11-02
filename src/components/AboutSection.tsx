"use client";

import { Marquee } from "./ui/marquee";
import { TimelineCard } from "./TimelineCard";
import { StatisticCard } from "./StatisticCard";
import { NumberTicker } from "./ui/number-ticker";
import { Sparkles, TrendingUp, Rocket, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="relative bg-[#F5E6DC] py-10 sm:py-16 md:py-20 overflow-hidden">
            {/* Decorative blurred accent shapes for depth */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.18, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-(--accent-orange) rounded-full blur-3xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -bottom-32 right-0 w-[220px] h-[220px] bg-[#FFB88C] rounded-full blur-2xl z-0"
            />
                        {/* Marquee Banner */}
                        <div className="mb-10 sm:mb-16 md:mb-20">
                                <Marquee
                                    className="w-full bg-[var(--accent-orange,#FF7F50)] -rotate-2 origin-center scale-110 py-4"
                                    pauseOnHover={true}
                                    reverse={false}
                                    repeat={3}
                                >
                                    {["UX Design", "App Design", "Dashboard", "Wireframe", "User Research", "UX Design"].map((service, index) => (
                                        <div key={index} className="flex items-center px-6">
                                            <span className="text-2xl font-bold text-white">{service}</span>
                                            <span className="mx-6 text-white text-2xl">✦</span>
                                        </div>
                                    ))}
                                </Marquee>
                        </div>
            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 mb-10 sm:mb-16 md:mb-20">
                    {/* Left - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                            About Us
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-[family-name:var(--font-montserrat)]"
                        >
                            We Are Experts<br />In Our Field<span className="text-(--accent-orange)">.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-sm sm:text-base md:text-lg text-gray-700 font-medium"
                        >
                            Our digital company of professionals has been developing products for 15 years.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-gray-600 leading-relaxed space-y-2 sm:space-y-4 font-[family-name:var(--font-inter)]"
                        >
                            <p>
                                Sybex Designs Limited is a UK-based SaaS and design agency that provides cutting-edge digital solutions to businesses worldwide. Specializing in UI/UX design, branding, web development, and AI-driven applications, Sybex Designs is committed to delivering innovative and user-centric experiences. The company focuses on accelerating AI application development, offering end-to-end machine learning lifecycle solutions, and helping brands establish a strong digital presence. With a dedication to clarity, trust, and innovation, Sybex Designs Limited empowers businesses to scale efficiently in the ever-evolving digital landscape.
                            </p>
                            <p>
                                We've got a lot of experience for our work and develop applications that became popular in the world. Every morning in our company begins with hot coffee and a stand-up. Discussion is an important thing in the development process. Thus new ideas and ingenious solutions are born. Then we get to work with renewed vigor and inspiration. We are never bored.
                            </p>
                        </motion.div>
                    </motion.div>
                    {/* Right - Timeline Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.18, delayChildren: 0.2 },
                            },
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                    >
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
                    </motion.div>
                </div>
                {/* Statistics */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.18, delayChildren: 0.2 },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8"
                >
                    <StatisticCard
                        value={<NumberTicker value={100} startValue={0} className="text-indigo-600" />}
                        label="Projects Completed"
                        valueColor="text-indigo-600"
                    />
                    <StatisticCard
                        value={<NumberTicker value={50000} startValue={0} className="text-purple-600" />}
                        label="Happy Users"
                        valueColor="text-purple-600"
                    />
                    <StatisticCard
                        value={<NumberTicker value={15} startValue={0} className="text-blue-600" />}
                        label="Countries"
                        valueColor="text-blue-600"
                    />
                    <StatisticCard
                        value={<span className="text-teal-600">24/7</span>}
                        label="Support"
                        valueColor="text-teal-600"
                    />
                </motion.div>
            </div>
        </section>
    );
}
