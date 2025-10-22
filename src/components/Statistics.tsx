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
    <div className="relative w-full py-16 px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="flex flex-col items-start">
                <span className="text-stat-number font-[family-name:var(--font-montserrat)]">
                  <NumberTicker value={stat.number} startValue={0} className="text-stat-number" />+
                </span>
                <span className="text-base text-white/80 mt-2">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <Separator orientation="vertical" className="h-24 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}