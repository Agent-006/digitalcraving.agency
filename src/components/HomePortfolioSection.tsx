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
        image: "https://images.unsplash.com/photo-1695185381786-548b877edfa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxmb29kJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlJTIwZGVsaXZlcnklMjBhcHAlMjByZXN0YXVyYW50fGVufDB8MXx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Lirante food delivery app - Damir Samatkulov on Unsplash",
    },
    {
        title: "Lirante - Food Delivery Solution",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
        image: "https://images.unsplash.com/photo-1619028006005-865078ab4db4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxmb29kJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlJTIwZGVsaXZlcnklMjBhcHAlMjByZXN0YXVyYW50fGVufDB8MXx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
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

export function HomePortfolioSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="relative py-20 bg-(--darker-bg) overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-montserrat)]"
                    >
                        Lets have a look at
                        <br />
                        my <span className="text-(--accent-orange)">Portfolio</span>
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

                {/* Portfolio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group"
                        >
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

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
                            className="px-6 py-3 text-base bg-white/10 border-white/20 text-white hover:bg-(--accent-orange) hover:border-(--accent-orange) transition-all duration-300 rounded-full cursor-pointer"
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
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-montserrat)]">
                            Lirante - Food Delivery Solution
                        </h3>
                        <button className="w-12 h-12 rounded-full bg-(--accent-orange) flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                    </p>
                </motion.div>

                {/* Carousel Dots */}
                <div className="flex items-center justify-center gap-3">
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? "bg-(--accent-orange) w-8"
                                    : "bg-gray-500"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}