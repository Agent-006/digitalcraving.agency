"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import gsap from "gsap";

interface TimelineCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  year: string;
  yearBgColor: string;
}

export function TimelineCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  year,
  yearBgColor,
}: TimelineCardProps) {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { y: -10, scale: 0.9 },
        { y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <Card className="p-8 space-y-6 bg-white hover:shadow-lg transition-shadow">
        <div
          ref={iconRef}
          className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconBgColor)}
        >
          <Icon className={cn("w-6 h-6", iconColor)} />
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <Badge className={cn("rounded-lg px-4 py-2 text-sm font-semibold", yearBgColor)}>
          {year}
        </Badge>
      </Card>
    </motion.div>
  );
}