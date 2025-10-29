"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import LogoIcon from "@/components/icons/LogoIcon";
import SocialIconsIcon from "@/components/icons/SocialIconsIcon";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const navigationLinks = ["Home", "About Us", "Service", "Resume", "Project"];
const contactInfo = [
    "+91 7738443636",
    "Jaycrea36@gmail.com",
    "Portfolio-jcrea.com",
];

export function Footer() {
    const footerRef = useRef(null);
    useEffect(() => {
        if (footerRef.current) {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
        }
    }, []);
    return (
        <motion.footer
            ref={footerRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative bg-[#171717] rounded-t-[50px] pt-16 pb-8 overflow-hidden"
        >
            {/* Decorative blurred accent shapes */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.18, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-(--accent-orange) rounded-full blur-3xl z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -bottom-32 right-0 w-[220px] h-[220px] bg-[#FFB88C] rounded-full blur-2xl z-0"
            />
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-7xl font-semibold text-[#FCFCFD] font-[family-name:var(--font-montserrat)] drop-shadow-lg"
                    >
                        Lets Connect there
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Button className="h-20 w-52 px-24 rounded-full bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white text-3xl font-medium flex items-center gap-3 shadow-xl">
                            <span>Hire me</span>
                            <ArrowUpRight className="w-14 h-14" />
                        </Button>
                    </motion.div>
                </div>
                <Separator className="bg-gray-700 mb-16" />
                {/* Main Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
                    {/* Logo & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <LogoIcon width={368} height={103} />
                        <p className="text-2xl text-[#FCFCFD] leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed congue interdum ligula a dignissim. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed lobortis orci elementum egestas lobortis.
                        </p>
                        <SocialIconsIcon
                            color="#FCFCFD"
                            width={168}
                            height={29}
                        />
                    </motion.div>
                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-(--accent-orange)">
                            Navigation
                        </h3>
                        <div className="space-y-6">
                            {navigationLinks.map((link, idx) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * idx,
                                    }}
                                    className="block text-xl text-[#FCFCFD] hover:text-(--accent-orange) transition-colors"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-(--accent-orange)">
                            Contact
                        </h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <motion.a
                                    key={info}
                                    href="#"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * idx,
                                    }}
                                    className="block text-xl text-[#FCFCFD] hover:text-(--accent-orange) transition-colors"
                                >
                                    {info}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-(--accent-orange)">
                            Get the latest information
                        </h3>
                        <div className="relative">
                            <Input
                                placeholder="Email Address"
                                className="h-14 rounded-full border-gray-700 bg-transparent text-white placeholder:text-gray-400 pr-12"
                            />
                            <motion.button
                                whileHover={{
                                    scale: 1.15,
                                    backgroundColor: "#FF7F50",
                                    color: "#fff",
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
                            >
                                <ArrowUpRight className="w-5 h-5 text-black" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <Separator className="bg-gray-700 mb-8" />
                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between text-base sm:text-lg md:text-2xl text-[#FCFCFD] gap-4"
                >
                    <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
                    <p>User Terms & Conditions | Privacy Policy</p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
