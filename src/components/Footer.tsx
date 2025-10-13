"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import LogoIcon from "@/components/icons/LogoIcon";
import SocialIconsIcon from "@/components/icons/SocialIconsIcon";

const navigationLinks = ["Home", "About Us", "Service", "Resume", "Project"];
const contactInfo = ["+91 7738443636", "Jaycrea36@gmail.com", "Portfolio-jcrea.com"];

export function Footer() {
  return (
    <footer className="relative bg-[#171717] rounded-t-[50px] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-7xl font-semibold text-[#FCFCFD] font-[family-name:var(--font-montserrat)]">
            Lets Connect there
          </h2>
          <Button className="h-20 px-12 rounded-full bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white text-3xl font-medium flex items-center gap-3">
            Hire me
            <ArrowUpRight className="w-12 h-12" />
          </Button>
        </div>

        <Separator className="bg-gray-700 mb-16" />

        {/* Main Content */}
        <div className="grid grid-cols-4 gap-16 mb-16">
          {/* Logo & Description */}
          <div className="space-y-8">
            <LogoIcon width={368} height={103} />
            <p className="text-2xl text-[#FCFCFD] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <SocialIconsIcon width={168} height={29} />
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-(--accent-orange)">Navigation</h3>
            <div className="space-y-6">
              {navigationLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-xl text-[#FCFCFD] hover:text-(--accent-orange) transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-(--accent-orange)">Contact</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info}
                  href="#"
                  className="block text-xl text-[#FCFCFD] hover:text-(--accent-orange) transition-colors"
                >
                  {info}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-(--accent-orange)">
              Get the latest information
            </h3>
            <div className="relative">
              <Input
                placeholder="Email Address"
                className="h-14 rounded-full border-gray-700 bg-transparent text-white placeholder:text-gray-400 pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Copyright */}
        <div className="flex items-center justify-between text-2xl text-[#FCFCFD]">
          <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}