"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
    {
        title: "Brand Strategy",
        image: "https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwaG9uZSUyMG1vY2t1cCUyMGFwcCUyMGludGVyZmFjZSUyMG1vYmlsZSUyMGRlc2lnbiUyMFVJfGVufDB8MXx8fDE3NjIzMzIzNjF8MA&ixlib=rb-4.1.0&q=85",
        alt: "Brand strategy mockup - Typerium App on Unsplash",
    },
    {
        title: "Identity Designs",
        image: "https://images.unsplash.com/photo-1562561568-e1ab23be103e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHx0YWJsZXQlMjBtb2NrdXAlMjBkZXNpZ24lMjBzeXN0ZW0lMjBjb2xvciUyMHBhbGV0dGUlMjBicmFuZGluZ3xlbnwwfDB8fG9yYW5nZXwxNzYyMzMyMzYxfDA&ixlib=rb-4.1.0&q=85",
        alt: "Identity designs mockup - Luis Soto on Unsplash",
    },
    {
        title: "Rebranding",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxkZXZpY2UlMjBtb2NrdXAlMjByZWJyYW5kaW5nJTIwbXVsdGlwbGUlMjBzY3JlZW5zJTIwZGVzaWdufGVufDB8MHx8fDE3NjIzMzIzNjV8MA&ixlib=rb-4.1.0&q=85",
        alt: "Rebranding mockup - Jonas Leupe on Unsplash",
    },
];

export function HomeServicesSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="relative py-20 bg-(--hero-bg) overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                {/* Header */}
                <div className="mb-16 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-montserrat)]"
                    >
                        My <span className="text-(--accent-orange)">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        Comprehensive marketing solutions tailored to your needs, designed to elevate your brand, engage your target audience and drive growth. From branding and digital presence to social media management and content creation, we're committed to help you achieve your business goals.
                    </motion.p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">
                                            {service.title}
                                        </h3>
                                        <button className="w-14 h-14 rounded-full bg-black flex items-center justify-center hover:bg-(--accent-orange) transition-colors duration-300 group-hover:scale-110">
                                            <ArrowUpRight className="w-6 h-6 text-white" />
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