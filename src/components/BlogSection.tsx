"use client";

import InvertedRadiusCards from "@/components/InvertedBorderRadiusCard";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const blogPosts = [
    // Add a 'link' property for demonstration
    {
        image: "/blog-1.svg",
        category: "UI/ UX Design",
        author: "Jayesh Patil",
        date: "10 Nov, 2023",
        title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
        link: "/blog/design-unraveled",
    },
    {
        image: "/blog-2.svg",
        category: "App Design",
        author: "Jayesh Patil",
        date: "09 Oct, 2023",
        title: "Sugee: Loan Management System for Rural Sector.",
        link: "/blog/sugee-loan-management",
    },
    {
        image: "/blog-3.svg",
        category: "App Design",
        author: "Jayesh Patil",
        date: "13 Aug, 2023",
        title: "Cinetrade: Innovative way to invest in Digital Media",
        link: "/blog/cinetrade-innovative-investment",
    },
];

export function BlogSection() {
    const cardsRef = useRef([]);
    const bgRef = useRef(null);

    useEffect(() => {
        if (cardsRef.current) {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                }
            );
        }
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                backgroundPosition: "200% 0%",
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <section className="relative bg-black py-20 overflow-hidden">
            {/* Decorative blurred blobs for depth */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.18, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute left-0 top-0 w-[400px] h-[600px] bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FFB088] rounded-full blur-3xl opacity-60 z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute right-0 bottom-0 w-[500px] h-[700px] bg-gradient-to-tl from-[#FF6B35] via-[#FF8C5A] to-[#FFB088] rounded-full blur-3xl opacity-60 z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.10, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-b from-[#FFB088] to-[#FF8C5A] rounded-full blur-3xl opacity-40 z-0"
            />
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFBEA] font-[family-name:var(--font-montserrat)]"
                    >
                        From my blog post
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{
                            scale: 1.08,
                            backgroundColor: "#FF7F50",
                            color: "#fff",
                        }}
                        className="text-base sm:text-lg md:text-xl font-bold text-white hover:text-(--accent-orange) transition-colors px-6 py-2 rounded-lg"
                    >
                        See All
                    </motion.button>
                </div>
                {/* Staggered entrance for blog cards */}
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
                >
                    <InvertedRadiusCards label="Blog" iconBg="bg-black" />
                </motion.div>
            </div>
        </section>
    );
}
