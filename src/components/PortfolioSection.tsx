"use client";

import { Badge } from "@/components/ui/badge";
import ArrowDownRightIcon from "@/components/icons/ArrowDownRightIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Lirante - Food Delivery Solution",
    description:
      "A modern food delivery platform with beautiful UI and smooth animations.",
    image: "/portfolio-lirante.svg",
    tags: ["Landing Page", "Product Design", "Animation"],
    link: "https://lirante.com",
  },
  {
    title: "Glassmorphism Cards",
    description:
      "Showcase of glassmorphism design with interactive cards and transitions.",
    image: "/portfolio-glassmorphism.svg",
    tags: ["Glassmorphism", "Cards", "Animation"],
    link: "https://glasscards.com",
  },
  // Add more projects as needed
];

export function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [current]);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };
  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#F5E6DC] to-[#F9F6F2] py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#344054] font-montserrat"
          >
            Let&apos;s have a look at my Portfolio
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: "#FF7F50", color: "#fff" }}
            className="text-lg md:text-xl font-bold px-6 py-2 rounded-lg bg-[var(--accent-orange,#FF7F50)] text-white shadow-md transition-colors"
          >
            See All
          </motion.button>
        </div>

        <div className="space-y-12">
          <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] w-full">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1, backgroundColor: '#FFB88C', color: '#FF7F50' }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FF7F50] to-[#FFB88C] text-white rounded-full shadow-lg p-4 border-2 border-[#FF7F50] z-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
                aria-label="Previous"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.15" />
                  <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[current].title}
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-[#FF7F50]/20 p-8 flex flex-col items-center justify-center mx-auto"
              >
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl mb-6"
                />
                <div className="flex flex-wrap gap-3 mb-4 justify-center">
                  {projects[current].tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="px-4 py-1 text-base bg-white border-gray-200 text-black hover:bg-gray-50 shadow-sm rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#344054] font-[family-name:var(--font-montserrat)]">
                    {projects[current].title}
                  </h3>
                  <motion.a
                    href={projects[current].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="ml-2"
                  >
                    <ArrowDownRightIcon width={34} height={34} color="#FF7F50" />
                  </motion.a>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-[#344054] leading-relaxed max-w-2xl text-center"
                >
                  {projects[current].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1, backgroundColor: '#FFB88C', color: '#FF7F50' }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FF7F50] to-[#FFB88C] text-white rounded-full shadow-lg p-4 border-2 border-[#FF7F50] z-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
              aria-label="Next"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.15" />
                <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}