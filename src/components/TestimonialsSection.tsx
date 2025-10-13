"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import StarRatingIcon from "@/components/icons/StarRatingIcon";

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
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#171717] py-20">
      <div className="max-w-[1400px] mx-auto px-24">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-6xl font-medium text-[#FCFCFD] leading-tight font-[family-name:var(--font-montserrat)]">
            Testimonials That Speak to My <span className="text-(--accent-orange)">Results</span>
          </h2>
          <p className="text-2xl text-[#F9FAFB] max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glassmorphic p-8 space-y-6 bg-white/10 backdrop-blur-md border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-3xl font-bold text-[#FCFCFD]">{testimonial.name}</h4>
                    <p className="text-xl text-[#FCFCFD]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <StarRatingIcon width={192} height={38} />
                  <span className="text-3xl font-medium text-[#FCFCFD]">{testimonial.rating}</span>
                </div>
              </div>
              <p className="text-2xl text-[#F9FAFB] leading-relaxed">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          <div className="w-4 h-4 rounded-full bg-(--accent-orange)" />
          <div className="w-4 h-4 rounded-full bg-white/20" />
          <div className="w-4 h-4 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}