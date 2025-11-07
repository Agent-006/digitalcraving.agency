"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
    {
        title: "Lirante - Food Delivery Solution",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
        image:
            "https://images.unsplash.com/photo-1695185381786-548b877edfa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxmb29kJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlJTIwZGVsaXZlcnklMjBhcHAlMjByZXN0YXVyYW50fGVufDB8MXx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Lirante food delivery app - Damir Samatkulov on Unsplash",
    },
    {
        title: "Lirante - Food Delivery Solution",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
        image:
            "https://images.unsplash.com/photo-1619028006005-865078ab4db4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxmb29kJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlJTIwZGVsaXZlcnklMjBhcHAlMjByZXN0YXVyYW50fGVufDB8MXx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Lirante food delivery app - Jay Gajjar on Unsplash",
    },
];

const filterTags = [
    "Landing Page",
    "Product Design",
    "Animation",
    "Branding/print",
    "Saas",
];

export function BrandingPortfolioSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F5E5DB] via-[#F5E5DB] to-[#F5E5DB]">
            {/* Decorative blurred accent shapes */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.18, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#F5E5DB] via-[#FFB88C] to-[#FF7F50] rounded-full blur-3xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -bottom-40 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-[#F5E5DB] via-[#FFB88C] to-[#FF7F50] rounded-full blur-2xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.10, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-gradient-to-b from-[#F5E5DB] via-[#FFB88C] to-[#FF7F50] rounded-full blur-2xl opacity-40 z-0"
            />
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-black font-[family-name:var(--font-montserrat)]"
                    >
                        Lets have a look at
                        <br />
                        my{" "}
                        <span className="text-(--accent-orange)">
                            Portfolio
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Button className="bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2">
                            See all
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>

                {/* Portfolio Cards with enhanced design and animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.18,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                            }}
                            className="relative bg-gradient-to-br from-white/10 via-orange-400/5 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 group text-black"
                        >
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Animated overlay on hover */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <motion.h3
                                        initial={{ y: 30, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1,
                                        }}
                                        className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.15,
                                        }}
                                        className="text-base text-white/80 mb-4"
                                    >
                                        {item.description}
                                    </motion.p>
                                    <Button className="bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white px-6 py-3 rounded-full text-base flex items-center gap-2 shadow-lg">
                                        View Project
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-8"
                >
                    {filterTags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="outline"
                            className="px-6 py-3 text-base bg-white border-white/30 text-zinc-900 font-semibold hover:bg-(--accent-orange) hover:border-(--accent-orange) hover:text-black transition-all duration-300 rounded-full cursor-pointer shadow-md backdrop-blur-md"
                        >
                            {tag}
                        </Badge>
                    ))}
                </motion.div>

                {/* Project Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-8"
                >
                    <div className="flex items-center justify-center gap-3">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-[family-name:var(--font-montserrat)] drop-shadow-lg">
                            Lirante - Food Delivery Solution
                        </h3>
                        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                    <p className="text-lg text-zinc-900 max-w-3xl mx-auto bg-white/80 rounded-xl py-4 px-6 shadow-lg backdrop-blur-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed congue interdum ligula a dignissim. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed
                        lobortis orci elementum egestas lobortis.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
