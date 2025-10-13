"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Earth, Trophy } from "lucide-react";
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
              we are sybex designs – a uk-based saas and design agency
              transforming businesses with cutting-edge digital experiences.
            </p>
            <p className="text-base text-(--text-gray) leading-relaxed">
              you can also white label off all our services for the best price
              on the market.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <Avatar className="w-12 h-12 border-2 border-black">
                <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12 border-2 border-black">
                <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12 border-2 border-black">
                <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">12M</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-(--text-gray)">World active user</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <Badge variant="outline" className="px-6 py-3 rounded-full bg-transparent border-(--border-gray) text-white hover:bg-white/5">
              <Earth className="w-4 h-4" />
              <span className="text-sm">World Class Agency</span>
            </Badge>
            <Badge variant="outline" className="px-6 py-3 rounded-full bg-transparent border-(--border-gray) text-white hover:bg-white/5">
              <Trophy className="w-4 h-4" />
              <span className="text-sm">2023 Best Agency</span>
            </Badge>
          </div>
        </div>

        {/* Right Content - Hero Image with Floating Cards */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            {/* Circular Background */}
            <div className="absolute inset-0 rounded-full bg-(--hero-bg) overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1656554660452-c2dbe6eae387?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxwZXJzb24lMjB0YWJsZXQlMjBwcm9mZXNzaW9uYWwlMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDB8MXx8fDE3NjAwOTQzNjB8MA&ixlib=rb-4.1.0&q=85"
                alt="Joseph Kellner on Unsplash"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stat Cards */}
            <StatCard
              number="180"
              label="Satisfied Customer"
              rating={4.9}
              avatars={[
                "https://i.pravatar.cc/150?img=4",
                "https://i.pravatar.cc/150?img=5",
                "https://i.pravatar.cc/150?img=6",
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