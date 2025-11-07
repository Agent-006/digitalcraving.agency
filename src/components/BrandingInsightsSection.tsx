"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const blogPosts = [
    {
        title: "The Future of Branding in 2025",
        description:
            "Exploring how emerging trends in digital design will shape brand identities in the coming years.",
        image:
            "https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxicmFuZGluZyUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDB8MHx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Future of branding - 2H Media on Unsplash",
    },
    {
        title: "Building Digital-First Brands",
        description:
            "Strategies for creating compelling brand experiences in an increasingly digital world.",
        image:
            "https://images.unsplash.com/photo-1601919263076-4a6a8514c461?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxsYXB0b3AlMjBkaWdpdGFsJTIwZGVzaWduJTIwdGVjaG5vbG9neSUyMHNjcmVlbnxlbnwwfDB8fGJsdWV8MTc2MjMzMjM2NXww&ixlib=rb-4.1.0&q=85",
        alt: "Digital first brands - Hillary Black on Unsplash",
    },
    {
        title: "Sustainable Brand Design",
        description:
            "Creating eco-friendly brand identities that resonate with environmentally conscious consumers.",
        image:
            "https://images.unsplash.com/photo-1529323326646-6b3545d24dc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxzdXN0YWluYWJsZSUyMGVjby1mcmllbmRseSUyMG5hdHVyYWwlMjBncmVlbiUyMGRlc2lnbnxlbnwwfDB8fGdyZWVufDE3NjIzMzIzNjZ8MA&ixlib=rb-4.1.0&q=85",
        alt: "Sustainable design - Fabrizio Conti on Unsplash",
    },
];

export function BrandingInsightsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#23232a] via-[#18181c] to-[#1a1a22]">
            {/* Decorative blurred accent shapes */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.18, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-gradient-to-br from-[#F5E5DB] via-[#FFB88C] to-[#FF7F50] rounded-full blur-3xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -bottom-40 right-0 w-[220px] h-[220px] bg-gradient-to-tl from-[#F5E5DB] via-[#FFB88C] to-[#FF7F50] rounded-full blur-2xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-gradient-to-b from-[#F5E5DB] via-[#FFB88C] to-[#FF7F50] rounded-full blur-2xl opacity-40 z-0"
            />
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 z-10">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 font-[family-name:var(--font-montserrat)] text-white drop-shadow-lg"
                >
                    <span className="inline-block animate-text-gradient bg-gradient-to-r from-(--accent-orange) via-white to-(--accent-orange) bg-clip-text text-transparent">
                        Latest <span className="text-white">Insights</span>
                    </span>
                </motion.h2>

                {/* Blog Cards with enhanced design and animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
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
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                            }}
                        >
                            <Card className="bg-white/80 border-none shadow-xl hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden group backdrop-blur-lg">
                                <CardContent className="p-0">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Animated overlay on hover */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-gradient-to-t from-orange-100/60 via-orange-200/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <motion.h3
                                                initial={{ y: 30, opacity: 0 }}
                                                whileHover={{
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.1,
                                                }}
                                                className="text-xl font-bold text-orange-900 mb-2 font-[family-name:var(--font-montserrat)]"
                                            >
                                                {post.title}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ y: 30, opacity: 0 }}
                                                whileHover={{
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.15,
                                                }}
                                                className="text-base text-orange-800 mb-4"
                                            >
                                                {post.description}
                                            </motion.p>
                                            <Button className="bg-(--accent-orange) hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base flex items-center gap-2 shadow-lg">
                                                Read More
                                                <ArrowUpRight className="w-5 h-5" />
                                            </Button>
                                        </motion.div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.2,
                                            }}
                                            viewport={{ once: true }}
                                            className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-montserrat)] group-hover:text-(--accent-orange) transition-colors duration-300"
                                        >
                                            {post.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.3,
                                            }}
                                            viewport={{ once: true }}
                                            className="text-gray-600 leading-relaxed"
                                        >
                                            {post.description}
                                        </motion.p>
                                        <button className="text-(--accent-orange) font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                                            Read More
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
