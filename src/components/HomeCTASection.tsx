"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomeCTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxtZWV0aW5nJTIwcm9vbSUyMGNvbmZlcmVuY2UlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8MHx8fDE3NjIzMzIzNjZ8MA&ixlib=rb-4.1.0&q=85"
                    alt="Professional meeting room - Danielle Cerullo on Unsplash"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-[family-name:var(--font-montserrat)]">
                        Ready to Transform Your Brand?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Let's create something extraordinary together. Book a consultation and start your brand journey today.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            size="lg"
                            className="bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white text-lg px-12 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            Book a Consultation
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}