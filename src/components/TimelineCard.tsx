"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <Card className="p-8 space-y-6 bg-white hover:shadow-lg transition-shadow">
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconBgColor)}>
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
  );
}