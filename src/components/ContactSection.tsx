"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";
import AwardIcon from "@/components/icons/AwardIcon";
import CertificateIcon from "@/components/icons/CertificateIcon";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section className="relative bg-[#F5E6DC] py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-8xl font-semibold text-[#344054] text-center mb-12 leading-tight font-[family-name:var(--font-montserrat)]"
                >
                    Have an Awsome Project Idea?{" "}
                    <span className="text-(--accent-orange)">
                        Let's Discuss
                    </span>
                </motion.h2>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className=""
                    >
                        <Input
                            placeholder="Name"
                            className="h-20 rounded-full border-2 border-gray-200 px-8 text-2xl bg-white focus:border-(--accent-orange) transition-all duration-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className=""
                    >
                        <Input
                            type="email"
                            placeholder="Enter Email Address"
                            className="h-20 rounded-full border-2 border-gray-200 px-8 text-2xl bg-white focus:border-(--accent-orange) transition-all duration-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className=""
                    >
                        <Textarea
                            placeholder="Enter Message"
                            className="h-20 rounded-full border-2 border-gray-200 px-8 py-7 text-2xl bg-white focus:border-(--accent-orange) transition-all duration-300"
                            rows={1}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="flex justify-end"
                    >
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            className=""
                        >
                            <Button className="h-16 px-12 rounded-full bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white text-2xl font-medium shadow-lg transition-all duration-300">
                                Send
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="flex items-center justify-center gap-12 pt-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3"
                        >
                            <Star className="w-8 h-8 fill-(--accent-orange) text-(--accent-orange)" />
                            <span className="text-2xl text-black">
                                4.9/5 Average Ratings
                            </span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3"
                        >
                            <AwardIcon width={23} height={29} color="#FD853A" />
                            <span className="text-2xl text-black">
                                25+ Winning Awards
                            </span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3"
                        >
                            <CertificateIcon
                                width={25}
                                height={29}
                                color="#292D32"
                            />
                            <span className="text-2xl text-black">
                                Certified Product Designer
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
