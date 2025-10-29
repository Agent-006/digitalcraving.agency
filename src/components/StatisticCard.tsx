"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface StatisticCardProps {
    value: ReactNode;
    label: string;
    valueColor: string;
}

export function StatisticCard({
    value,
    label,
    valueColor,
}: StatisticCardProps) {
    return (
        <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow">
            <div className={cn("text-5xl font-bold mb-3", valueColor)}>
                {value}
            </div>
            <div className="text-gray-600 text-base">{label}</div>
        </Card>
    );
}
