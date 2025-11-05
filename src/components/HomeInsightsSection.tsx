"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const blogPosts = [
    {
        title: "The Future of Branding in 2025",
        description:
            "Exploring how emerging trends in digital design will shape brand identities in the coming years.",
        image: "https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxicmFuZGluZyUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDB8MHx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Future of branding - 2H Media on Unsplash",
    },
    {
        title: "Building Digital-First Brands",
        description:
            "Strategies for creating compelling brand experiences in an increasingly digital world.",
        image: "https://images.unsplash.com/photo-1601919263076-4a6a8514c461?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxsYXB0b3AlMjBkaWdpdGFsJTIwZGVzaWduJTIwdGVjaG5vbG9neSUyMHNjcmVlbnxlbnwwfDB8fGJsdWV8MTc2MjMzMjM2NXww&ixlib=rb-4.1.0&q=85",
        alt: "Digital first brands - Hillary Black on Unsplash",
    },
    {
        title: "Sustainable Brand Design",
        description:
            "Creating eco-friendly brand identities that resonate with environmentally conscious consumers.",
        image: "https://images.unsplash.com/photo-1529323326646-6b3545d24dc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxzdXN0YWluYWJsZSUyMGVjby1mcmllbmRseSUyMG5hdHVyYWwlMjBncmVlbiUyMGRlc2lnbnxlbnwwfDB8fGdyZWVufDE3NjIzMzIzNjZ8MA&ixlib=rb-4.1.0&q=85",
        alt: "Sustainable design - Fabrizio Conti on Unsplash",
    },
];

export function HomeInsightsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 font-[family-name:var(--font-montserrat)]"
                >
                    Latest Insights
                </motion.h2>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-montserrat)] group-hover:text-(--accent-orange) transition-colors duration-300">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {post.description}
                                        </p>
                                        <button className="text-(--accent-orange) font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                                            Read More
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel Dots */}
                <div className="flex items-center justify-center gap-3">
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? "bg-(--accent-orange) w-8"
                                    : "bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}