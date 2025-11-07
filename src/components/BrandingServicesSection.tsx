"use client";

import InvertedRadiusCards from "./InvertedBorderRadiusCard";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
    {
        title: "Brand Strategy",
        image:
            "https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwaG9uZSUyMG1vY2t1cCUyMGFwcCUyMGludGVyZmFjZSUyMG1vYmlsZSUyMGRlc2lnbiUyMFVJfGVufDB8MXx8fDE3NjIzMzIzNjF8MA&ixlib=rb-4.1.0&q=85",
        alt: "Brand strategy mockup - Typerium App on Unsplash",
    },
    {
        title: "Identity Designs",
        image:
            "https://images.unsplash.com/photo-1562561568-e1ab23be103e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHx0YWJsZXQlMjBtb2NrdXAlMjBkZXNpZ24lMjBzeXN0ZW0lMjBjb2xvciUyMHBhbGV0dGUlMjBicmFuZGluZ3xlbnwwfDB8fG9yYW5nZXwxNzYyMzMyMzYxfDA&ixlib=rb-4.1.0&q=85",
        alt: "Identity designs mockup - Luis Soto on Unsplash",
    },
    {
        title: "Rebranding",
        image:
            "https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxkZXZpY2UlMjBtb2NrdXAlMjByZWJyYW5kaW5nJTIwbXVsdGlwbGUlMjBzY3JlZW5zJTIwZGVzaWdufGVufDB8MHx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Rebranding mockup - Jonas Leupe on Unsplash",
    },
];

export function BrandingServicesSection() {
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
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-b from-[#FFB088] to-[#FF8C5A] rounded-full blur-3xl opacity-40 z-0"
            />
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 z-10">
                <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-montserrat)]"
                    >
                        My{" "}
                        <span className="text-(--accent-orange)">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-base sm:text-lg text-white max-w-xl leading-relaxed"
                    >
                        Comprehensive branding solutions tailored to your needs,
                        designed to elevate your brand, engage your target
                        audience and drive growth. From strategy and identity to
                        rebranding, we're committed to help you achieve your
                        business goals.
                    </motion.p>
                </div>
                {/* Staggered entrance for service cards */}
                <motion.div
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
                    <InvertedRadiusCards
                        label="Branding Service"
                        iconBg="bg-black"
                    />
                </motion.div>
            </div>
        </section>
    );
}
