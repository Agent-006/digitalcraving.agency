"use client";

import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Badge } from "@/components/ui/badge";
import { Earth, Trophy } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { StatCard } from "./StatCard";

export function HeroSection() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-24 pt-32 pb-24">
            <div className="max-w-[1400px] w-full grid grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <h1 className="text-heading font-[family-name:var(--font-montserrat)] text-white">
                        Crafting Digital Brilliance.
                    </h1>

                    <div className="space-y-4 font-[family-name:var(--font-inter)]">
                        <p className="text-base text-(--text-gray) leading-relaxed">
                            we are sybex designs – a uk-based saas and design
                            agency transforming businesses with cutting-edge
                            digital experiences.
                        </p>
                        <p className="text-base text-(--text-gray) leading-relaxed">
                            you can also white label off all our services for
                            the best price on the market.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <AvatarCircles
                            avatarUrls={[
                                {
                                    imageUrl: "https://i.pravatar.cc/150?img=1",
                                    profileUrl: "#",
                                },
                                {
                                    imageUrl: "https://i.pravatar.cc/150?img=2",
                                    profileUrl: "#",
                                },
                                {
                                    imageUrl: "https://i.pravatar.cc/150?img=3",
                                    profileUrl: "#",
                                },
                            ]}
                            className="h-12"
                        />

                        <div className="flex flex-col">
                            <span className="text-4xl font-bold text-white">
                                12M
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-sm text-(--text-gray)">
                                    World active user
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-8">
                        <Badge
                            variant="outline"
                            className="px-6 py-3 rounded-full bg-transparent border-(--border-gray) text-white hover:bg-white/5"
                        >
                            <Earth className="w-4 h-4" />
                            <AnimatedShinyText className="text-sm text-white">
                                World Class Agency
                            </AnimatedShinyText>
                        </Badge>
                        <Badge
                            variant="outline"
                            className="px-6 py-3 rounded-full bg-transparent border-(--border-gray) text-white hover:bg-white/5"
                        >
                            <Trophy className="w-4 h-4" />
                            <AnimatedShinyText className="text-sm text-white">
                                2023 Best Agency
                            </AnimatedShinyText>
                        </Badge>
                    </div>
                </div>

                {/* Right Content - Hero Image with Floating Cards */}
                <div className="relative flex items-center justify-center">
                    <div className="relative w-[600px] h-[600px]">
                        {/* Abstract Full Background */}
                        <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
                            {/* Large irregular abstract SVG shape */}
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 600 600"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient
                                        id="abstractGrad"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#2dd4bf"
                                            stopOpacity="0.7"
                                        />
                                        <stop
                                            offset="60%"
                                            stopColor="#38bdf8"
                                            stopOpacity="0.6"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#e0f2fe"
                                            stopOpacity="0.5"
                                        />
                                    </linearGradient>
                                </defs>
                                    <defs>
                                        <linearGradient id="abstractGrad" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.7" />
                                            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
                                            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.5" />
                                        </linearGradient>
                                        <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                                        </radialGradient>
                                        <radialGradient id="radial2" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                    <rect x="60" y="60" width="480" height="480" rx="48" fill="#fff" opacity="0.08" />
                                    <ellipse cx="180" cy="180" rx="120" ry="80" fill="url(#radial1)" opacity="0.7" />
                                    <ellipse cx="420" cy="420" rx="100" ry="60" fill="url(#radial2)" opacity="0.5" />
                                    <path d="M120,100 Q300,0 480,120 Q600,300 400,500 Q200,600 80,400 Q0,200 120,100 Z" fill="url(#abstractGrad)" opacity="0.85" />
                                    <path d="M200,200 Q350,100 500,250 Q550,400 350,500 Q150,550 100,350 Q50,250 200,200 Z" fill="#fff" opacity="0.06" />
                                    <path d="M400,120 Q500,60 580,200 Q600,400 420,480 Q300,600 180,480 Q60,400 120,300 Q180,200 400,120 Z" fill="#2dd4bf" opacity="0.08" />
                            </svg>
                            {/* Blurred overlays for depth */}
                            <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-blue-400/20 rounded-3xl blur-3xl rotate-12" />
                            <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-teal-400/20 rounded-full blur-2xl" />
                            <div className="absolute left-1/4 top-1/2 w-1/4 h-1/4 bg-white/10 rounded-full blur-2xl" />

                            {/* Foreground abstract device / illustration */}
                            <svg
                                className="relative w-64 h-64 drop-shadow-2xl"
                                viewBox="0 0 240 240"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Abstract tech illustration"
                            >
                                <defs>
                                    <linearGradient id="fg" x1="0" x2="1">
                                        <stop offset="0%" stopColor="#2dd4bf" />
                                        <stop
                                            offset="100%"
                                            stopColor="#38bdf8"
                                        />
                                    </linearGradient>
                                    <filter
                                        id="f1"
                                        x="-50%"
                                        y="-50%"
                                        width="200%"
                                        height="200%"
                                    >
                                        <feGaussianBlur
                                            stdDeviation="6"
                                            result="b"
                                        />
                                        <feBlend in="SourceGraphic" in2="b" />
                                    </filter>
                                </defs>
                                <rect
                                    x="14"
                                    y="20"
                                    width="212"
                                    height="160"
                                    rx="16"
                                    fill="url(#fg)"
                                    opacity="0.95"
                                    filter="url(#f1)"
                                />
                                <rect
                                    x="38"
                                    y="46"
                                    width="164"
                                    height="96"
                                    rx="8"
                                    fill="rgba(255,255,255,0.08)"
                                />
                                <circle
                                    cx="66"
                                    cy="162"
                                    r="8"
                                    fill="#e0f2fe"
                                    opacity="0.85"
                                />
                                <circle
                                    cx="86"
                                    cy="162"
                                    r="6"
                                    fill="#2dd4bf"
                                    opacity="0.6"
                                />
                                <circle
                                    cx="106"
                                    cy="162"
                                    r="5"
                                    fill="#38bdf8"
                                    opacity="0.45"
                                />
                                <g
                                    transform="translate(60,60)"
                                    opacity="0.95"
                                    fill="none"
                                    stroke="#e0f2fe"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M0 0 C30 -20 80 -20 110 0"
                                        opacity="0.6"
                                    />
                                    <path
                                        d="M0 18 C30 0 80 0 110 18"
                                        opacity="0.4"
                                    />
                                </g>
                            </svg>
                        </div>

                        {/* Floating Stat Cards */}
                        <StatCard
                            number="180"
                            label="Satisfied Customer"
                            rating={4.9}
                            avatars={[
                                "https://i.pravatar.cc/150?img=4",
                                "https://i.pravatar.cc/150?img=5",
                                "pravatar.cc/150?img=6",
                            ]}
                            className="absolute top-16 -left-8"
                        />

                        <StatCard
                            number="150"
                            label="Happy Companies Registered"
                            className="absolute bottom-16 -right-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
