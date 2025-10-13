"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";
import AwardIcon from "@/components/icons/AwardIcon";
import CertificateIcon from "@/components/icons/CertificateIcon";

export function ContactSection() {
  return (
    <section className="relative bg-[#F5E6DC] py-20">
      <div className="max-w-[1200px] mx-auto px-24">
        <h2 className="text-8xl font-semibold text-[#344054] text-center mb-12 leading-tight font-[family-name:var(--font-montserrat)]">
          Have an Awsome Project Idea? <span className="text-(--accent-orange)">Let's Discuss</span>
        </h2>

        <div className="space-y-8">
          <div className="relative">
            <Input
              placeholder="Name"
              className="h-20 rounded-full border-2 border-gray-200 px-12 text-2xl bg-white"
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-8 bg-(--accent-orange) rounded" />
          </div>

          <div className="relative">
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="h-20 rounded-full border-2 border-gray-200 px-12 text-2xl bg-white"
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-8 bg-(--accent-orange) rounded" />
          </div>

          <div className="relative flex items-center gap-4 border-2 border-gray-200 rounded-full bg-white p-4">
            <div className="flex-1 relative">
              <Textarea
                placeholder="Enter Message"
                className="min-h-16 border-none shadow-none px-8 text-2xl resize-none bg-transparent"
                rows={1}
              />
              <div className="absolute left-2 top-4 w-10 h-8 bg-(--accent-orange) rounded" />
            </div>
            <Button className="h-16 px-12 rounded-full bg-(--accent-orange) hover:bg-(--accent-orange)/90 text-white text-2xl font-medium">
              Send
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 fill-(--accent-orange) text-(--accent-orange)" />
              <span className="text-2xl text-black">4.9/5 Average Ratings</span>
            </div>
            <div className="flex items-center gap-3">
              <AwardIcon width={23} height={29} color="#FD853A" />
              <span className="text-2xl text-black">25+ Winning Awards</span>
            </div>
            <div className="flex items-center gap-3">
              <CertificateIcon width={25} height={29} color="#292D32" />
              <span className="text-2xl text-black">Certified Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}