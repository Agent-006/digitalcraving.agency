import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
    { number: 723, label: "Success Project" },
    { number: 10, label: "Years Experience" },
    { number: 500, label: "Product Launched" },
    { number: 100, label: "Startup Raised" },
];

export function Statistics() {
    return (
        <div className="relative w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between items-stretch">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="flex-1 min-w-[140px] bg-black/70 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center mb-4 sm:mb-0"
                        >
                            <span className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-montserrat)]">
                                <NumberTicker
                                    value={stat.number}
                                    startValue={0}
                                    className="text-3xl sm:text-4xl text-[#FF6B35]"
                                />
                                +
                            </span>
                            <span className="text-sm sm:text-base text-white/80 mt-2 text-center">
                                {stat.label}
                            </span>
                            {index < stats.length - 1 && (
                                <Separator
                                    orientation="horizontal"
                                    className="w-8 h-0.5 bg-white/10 my-4 sm:hidden"
                                />
                            )}
                            {index < stats.length - 1 && (
                                <Separator
                                    orientation="vertical"
                                    className="h-12 bg-white/10 mx-4 hidden sm:block"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
