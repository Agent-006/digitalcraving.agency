"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

import { NumberTicker } from "@/components/ui/number-ticker";

interface StatCardProps {
    number: string | number;
    label: string;
    rating?: number;
    avatars?: string[];
    className?: string;
}

export function StatCard({
    number,
    label,
    rating,
    avatars,
    className,
}: StatCardProps) {
    return (
        <Card
            className={cn(
                "glassmorphic p-6 space-y-3 w-fit shadow-xl",
                className
            )}
        >
            <div className="flex items-center gap-4">
                {avatars && (
                    <div className="flex -space-x-2">
                        {avatars.map((avatar, i) => (
                            <Avatar
                                key={i}
                                className="w-8 h-8 border-2 border-white"
                            >
                                <AvatarImage
                                    src={avatar}
                                    alt={`Avatar ${i + 1}`}
                                />
                                <AvatarFallback>A{i + 1}</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                )}
                <span className="text-4xl font-bold text-white">
                    <NumberTicker
                        value={
                            typeof number === "string"
                                ? parseInt(number)
                                : number
                        }
                        startValue={0}
                        className="text-4xl font-bold text-white"
                    />
                    +
                </span>
            </div>

            <div className="space-y-2">
                <p className="text-sm font-medium text-gray-200">{label}</p>
                {rating && (
                    <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 fill-(--accent-orange) text-(--accent-orange)"
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-600">
                            {rating}/5 Review
                        </span>
                    </div>
                )}
            </div>
        </Card>
    );
}
