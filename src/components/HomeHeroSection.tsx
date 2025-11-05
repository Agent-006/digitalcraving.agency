"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomeHeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwZW9wbGUlMjB3b3JraW5nJTIwZGVza3MlMjBjb21wdXRlcnN8ZW58MHwwfHx8MTc2MjMzMjM2MXww&ixlib=rb-4.1.0&q=85"
                    alt="Modern office workspace - Bernd 📷 Dittrich on Unsplash"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-32 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight font-[family-name:var(--font-montserrat)]">
                            Building Brands That Inspire.
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
                            Comprehensive marketing solutions tailored to your needs, designed to elevate your brand, engage your target audience, and drive growth. From branding and digital presence to social media management and content creation, we're committed to help you achieve your business goals.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Button
                                size="lg"
                                className="bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white text-lg px-12 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Mockup Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full h-[600px] flex items-center justify-center">
                            {/* T-shirt Mockup */}
                            <motion.div
                                initial={{ opacity: 0, x: -50, rotate: -10 }}
                                animate={{ opacity: 1, x: 0, rotate: -5 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute top-0 left-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1590378206665-a7bfba2e333c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx0LXNoaXJ0JTIwbW9ja3VwJTIwYmx1ZSUyMGFwcGFyZWx8ZW58MHwxfHxibHVlfDE3NjIzMzIzNjF8MA&ixlib=rb-4.1.0&q=85"
                                    alt="Blue t-shirt mockup - Alejandro Barba on Unsplash"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Bag Mockup */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute top-20 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1590378206665-a7bfba2e333c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx0LXNoaXJ0JTIwbW9ja3VwJTIwYmx1ZSUyMGFwcGFyZWx8ZW58MHwxfHxibHVlfDE3NjIzMzIzNjF8MA&ixlib=rb-4.1.0&q=85"
                                    alt="Blue tote bag mockup - Alejandro Barba on Unsplash"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Business Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, rotate: 10 }}
                                animate={{ opacity: 1, x: 0, rotate: 5 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="absolute bottom-0 left-1/4 w-64 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1631367097572-cf497e3883e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxidXNpbmVzcyUyMGNhcmRzJTIwbW9ja3VwJTIwc3RhdGlvbmVyeSUyMGJyYW5kaW5nfGVufDB8MHx8fDE3NjIzMzIzNjF8MA&ixlib=rb-4.1.0&q=85"
                                    alt="Business cards mockup - Glenn Carstens-Peters on Unsplash"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Blue Card with "YOUR HERE" text */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="absolute bottom-20 right-12 w-40 h-56 rounded-2xl bg-blue-600 shadow-2xl border-4 border-white/20 flex items-center justify-center"
                            >
                                <div className="text-center">
                                    <div className="text-white text-2xl font-bold">YOUR</div>
                                    <div className="text-white text-2xl font-bold">HERE</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}