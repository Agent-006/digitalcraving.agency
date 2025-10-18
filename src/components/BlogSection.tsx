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
                <div className="flex items-center justify-between mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold text-[#FFFBEA] font-[family-name:var(--font-montserrat)]"
                    >
                        From my blog post
                    </motion.h2>
                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            backgroundColor: "#FF7F50",
                            color: "#fff",
                        }}
                        className="text-xl font-bold text-white hover:text-(--accent-orange) transition-colors px-6 py-2 rounded-lg"
                    >
                        See All
                    </motion.button>
                </div>

                <InvertedRadiusCards label="Blog" iconBg="bg-black" />
            </div>
        </section>
    );
}
