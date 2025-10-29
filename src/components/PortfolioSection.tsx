"use client";

import { Badge } from "@/components/ui/badge";
import ArrowDownRightIcon from "@/components/icons/ArrowDownRightIcon";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
    {
        title: "Lirante - Food Delivery Solution",
        description:
            "A modern food delivery platform with beautiful UI and smooth animations.",
        image: "/portfolio-lirante.svg",
        tags: ["Landing Page", "Product Design", "Animation"],
        link: "https://lirante.com",
    },
    {
        title: "Glassmorphism Cards",
        description:
            "Showcase of glassmorphism design with interactive cards and transitions.",
        image: "/portfolio-glassmorphism.svg",
        tags: ["Glassmorphism", "Cards", "Animation"],
        link: "https://glasscards.com",
    },
    // Add more projects as needed
];

export function PortfolioSection() {
    const [current, setCurrent] = useState(0);

    return (
        <section className="relative bg-gradient-to-br from-[#F5E6DC] to-[#F9F6F2] py-20 overflow-hidden">
            {/* Decorative blurred shapes for depth */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-[#FF7F50] rounded-full blur-3xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.18, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -bottom-32 right-0 w-[300px] h-[300px] bg-[#FFB88C] rounded-full blur-2xl z-0"
            />
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-[#344054] font-montserrat drop-shadow-lg"
                    >
                        Let&apos;s have a look at my Portfolio
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{
                            scale: 1.15,
                            backgroundColor: "#FF7F50",
                            color: "#fff",
                            boxShadow: "0 12px 40px rgba(255,127,80,0.22)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="text-lg md:text-xl font-bold px-8 py-3 rounded-2xl bg-[var(--accent-orange,#FF7F50)] text-white shadow-xl transition-colors border-2 border-[#FF7F50]/40"
                    >
                        See All
                    </motion.button>
                </div>
                {/* Main Content Animation: staggered entrance */}
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
                    className="space-y-12"
                >
                    <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] w-full">
                        <Carousel className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] max-w-3xl mx-auto cursor-grab">
                            <CarouselContent>
                                {projects.map((project, idx) => (
                                    <CarouselItem
                                        key={project.title}
                                        className="flex items-center justify-center"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 + idx * 0.18 }}
                                            viewport={{ once: true }}
                                            className="w-full h-full bg-gradient-to-br from-[#fff] to-[#F5E6DC] rounded-3xl shadow-2xl border-4 border-[#FF7F50]/20 p-6 sm:p-10 flex flex-col items-center justify-center mx-auto overflow-hidden relative"
                                            style={{ minHeight: "100%", maxHeight: "100%" }}
                                        >
                                            {/* Floating accent shape inside card */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.7, x: -60, y: -60 }}
                                                animate={{ opacity: 0.14, scale: 1, x: 0, y: 0 }}
                                                transition={{ duration: 1.1, delay: 0.3 }}
                                                className="absolute top-0 left-0 w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] bg-[#FF7F50] rounded-full blur-2xl z-0"
                                            />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-2xl mb-6 sm:mb-8 shadow-xl border-2 border-[#FFB88C]/30 mix-blend-multiply"
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 24 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.7, delay: 0.3 }}
                                                viewport={{ once: true }}
                                                className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 justify-center"
                                            >
                                                {project.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="outline"
                                                        className="px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-base bg-white/80 border-gray-200 text-black hover:bg-gray-50 shadow-md rounded-full transition-all duration-200 backdrop-blur-md"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </motion.div>
                                            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                                                <motion.h3
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.4 }}
                                                    viewport={{ once: true }}
                                                    className="text-lg sm:text-2xl md:text-4xl font-bold text-[#344054] font-[family-name:var(--font-montserrat)] drop-shadow-lg"
                                                >
                                                    {project.title}
                                                </motion.h3>
                                                <motion.a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.5 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{
                                                        scale: 1.3,
                                                        rotate: 16,
                                                        boxShadow: "0 6px 24px #FF7F50",
                                                    }}
                                                    className="ml-2 bg-(--accent-orange) rounded-full flex items-center justify-center p-2 font-semibold"
                                                >
                                                    Go to
                                                    <ArrowDownRightIcon
                                                        width={28}
                                                        height={28}
                                                        color="#FF7F50"
                                                    />
                                                </motion.a>
                                            </div>
                                            <motion.p
                                                initial={{ opacity: 0, y: 24 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.7, delay: 0.6 }}
                                                viewport={{ once: true }}
                                                className="text-sm sm:text-lg md:text-xl text-[#344054] leading-relaxed max-w-2xl text-center bg-white/70 rounded-xl px-4 py-2 shadow backdrop-blur-md"
                                            >
                                                {project.description}
                                            </motion.p>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* Hide navigation buttons on mobile */}
                            <div className="hidden sm:block">
                                <CarouselPrevious />
                                <CarouselNext />
                            </div>
                        </Carousel>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
