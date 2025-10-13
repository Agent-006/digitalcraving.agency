"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const blogPosts = [
  {
    image: "/blog-1.svg",
    category: "UI/ UX Design",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    image: "/blog-2.svg",
    category: "App Design",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
    title: "Sugee: Loan Management System for Rural Sector.",
  },
  {
    image: "/blog-3.svg",
    category: "App Design",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
    title: "Cinetrade: Innovative way to invest in Digital Media",
  },
];

export function BlogSection() {
  return (
    <section className="relative bg-[#171717] py-20">
      <div className="max-w-[1400px] mx-auto px-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-bold text-[#FFFBEA] font-[family-name:var(--font-montserrat)]">
            From my blog post
          </h2>
          <button className="text-xl font-bold text-white hover:text-(--accent-orange) transition-colors">
            See All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-transparent border-none shadow-lg overflow-hidden">
              <div className="space-y-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
                <Badge className="bg-white text-black hover:bg-gray-100 px-6 py-2 text-base">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-4 text-[#FFFBEA]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-(--accent-orange)" />
                    <span className="text-lg">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-(--accent-orange)" />
                    <span className="text-lg">{post.date}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-normal text-[#FFFBEA] leading-tight font-[family-name:var(--font-montserrat)]">
                  {post.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}