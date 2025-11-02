"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import StarRatingIcon from "@/components/icons/StarRatingIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const testimonials = [
	{
		name: "Jayesh Patil",
		role: "CEO, Lirante",
		avatar: "/user-avatar.jpg",
		rating: 5.0,
		text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
	},
	{
		name: "Jayesh Patil",
		role: "CEO, Lirante",
		avatar: "/user-avatar.jpg",
		rating: 5.0,
		text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
	},
	{
		name: "Amit Sharma",
		role: "CTO, TechNova",
		avatar: "/user-avatar.jpg",
		rating: 4.8,
		text: "Jayesh's work exceeded our expectations. The UI/UX was flawless and the project was delivered ahead of schedule.",
	},
];

export function TestimonialsSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(0); // 1 for right, -1 for left
	const numTestimonials = testimonials.length;
	const containerRef = useRef(null);
	const sectionRef = useRef(null);

	// Animate section entrance with gsap
	useEffect(() => {
		if (sectionRef.current) {
			gsap.fromTo(
				sectionRef.current,
				{ opacity: 0, y: 60 },
				{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }
			);
		}
	}, []);

	// Auto swipe effect
	useEffect(() => {
		const interval = setInterval(() => {
			setDirection(1);
			setActiveIndex((prev) => (prev + 1) % numTestimonials);
		}, 4000); // 4 seconds per swipe
		return () => clearInterval(interval);
	}, [numTestimonials]);

	// Swipe gesture for carousel
	const handleDragEnd = (event, info) => {
		if (info.offset.x < -50 && activeIndex < numTestimonials - 1) {
			setDirection(1);
			setActiveIndex(activeIndex + 1);
		} else if (info.offset.x > 50 && activeIndex > 0) {
			setDirection(-1);
			setActiveIndex(activeIndex - 1);
		}
	};

	// Dot click handler
	const handleDotClick = (idx) => {
		setDirection(idx > activeIndex ? 1 : -1);
		setActiveIndex(idx);
	};

	return (
		<motion.section
			ref={sectionRef}
			initial={{ opacity: 0, y: 60 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, type: "spring" }}
			className="relative bg-[#171717] py-20 overflow-hidden"
		>
			{/* Decorative blurred accent shapes */}
			<motion.div
				initial={{ opacity: 0, scale: 0.7 }}
				animate={{ opacity: 0.18, scale: 1 }}
				transition={{ duration: 1.2, delay: 0.2 }}
				className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[var(--accent-orange,#FF7F50)] rounded-full blur-3xl z-0"
			/>
			<motion.div
				initial={{ opacity: 0, scale: 0.7 }}
				animate={{ opacity: 0.12, scale: 1 }}
				transition={{ duration: 1.2, delay: 0.4 }}
				className="absolute -bottom-32 right-0 w-[220px] h-[220px] bg-[#FFB88C] rounded-full blur-2xl z-0"
			/>
			<div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-center mb-16 space-y-6"
				>
					<h2 className="text-6xl font-medium text-[#FCFCFD] leading-tight font-[family-name:var(--font-montserrat)]">
						Testimonials That Speak to My{" "}
						<span className="text-[var(--accent-orange,#FF7F50)]">Results</span>
					</h2>
					<motion.p
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-2xl text-[#F9FAFB] max-w-4xl mx-auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
						interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Sed lobortis orci elementum egestas lobortis.
					</motion.p>
				</motion.div>
				<div className="flex justify-center items-center mt-20">
					<div className="w-full max-w-3xl relative min-h-[340px] overflow-hidden">
						<AnimatePresence initial={false} custom={direction}>
							<motion.div
								key={activeIndex}
								ref={containerRef}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								onDragEnd={handleDragEnd}
								initial={{
									opacity: 0,
									scale: 0.96,
									x: direction === 1 ? 100 : -100,
								}}
								animate={{ opacity: 1, scale: 1, x: 0 }}
								exit={{
									opacity: 0,
									scale: 0.96,
									x: direction === 1 ? -100 : 100,
								}}
								transition={{ type: "spring", stiffness: 400, damping: 40 }}
								className="absolute inset-0 glassmorphic p-8 space-y-6 bg-white/10 backdrop-blur-md border-white/20 rounded-2xl shadow-lg cursor-grab"
								style={{ touchAction: "pan-x", minHeight: 340 }}
							>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.7, delay: 0.2 }}
									className="flex items-center justify-between"
								>
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: 0.3 }}
										className="flex items-center gap-4"
									>
										<Avatar className="w-16 h-16">
											<AvatarImage
												src={testimonials[activeIndex].avatar}
												alt={testimonials[activeIndex].name}
											/>
											<AvatarFallback>
												{testimonials[activeIndex].name[0]}
											</AvatarFallback>
										</Avatar>
										<div>
											<h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FCFCFD]">
												{testimonials[activeIndex].name}
											</h4>
											<p className="text-base sm:text-lg md:text-xl text-[#FCFCFD]">
												{testimonials[activeIndex].role}
											</p>
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: 0.3 }}
										className="flex items-center gap-2"
									>
										<StarRatingIcon width={192} height={38} />
										<span className="text-lg sm:text-2xl md:text-3xl font-medium text-[#FCFCFD]">
											{testimonials[activeIndex].rating}
										</span>
									</motion.div>
								</motion.div>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.7, delay: 0.4 }}
									className="text-base sm:text-lg md:text-2xl text-[#F9FAFB] leading-relaxed"
								>
									{testimonials[activeIndex].text}
								</motion.p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.5 }}
					className="flex justify-center gap-3 mt-12"
				>
					{testimonials.map((_, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: activeIndex === idx ? 1.1 : 1 }}
							transition={{ duration: 0.4, delay: 0.1 * idx }}
							className={`w-4 h-4 rounded-full transition-all duration-300 ${
								activeIndex === idx
									? "bg-[var(--accent-orange,#FF7F50)] scale-110"
									: "bg-white/20"
							}`}
							style={{ cursor: "pointer" }}
							onClick={() => handleDotClick(idx)}
						/>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}