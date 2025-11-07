"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function BrandingCTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 z-0 bg-[#F5E5DB]" />

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                        }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-montserrat)] text-black"
                    >
                        Ready to{" "}
                        <span className="text-(--accent-orange) animate-pulse">
                            Transform
                        </span>{" "}
                        Your{" "}
                        <span className="text-(--accent-orange)">Brand?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl text-black/90 max-w-3xl mx-auto leading-relaxed"
                    >
                        Let's create something{" "}
                        <span className="text-(--accent-orange) font-semibold">
                            extraordinary
                        </span>{" "}
                        together. Book a consultation and start your brand
                        journey today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button
                                size="lg"
                                className="bg-(--accent-orange) hover:bg-orange-500 text-white text-lg px-12 py-6 rounded-full shadow-2xl transition-all duration-300 font-bold tracking-wide"
                            >
                                Book a Consultation
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
