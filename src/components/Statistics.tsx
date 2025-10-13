import { Separator } from "@/components/ui/separator";

const stats = [
  { number: "723", label: "Success Project" },
  { number: "10", label: "Years Experience" },
  { number: "500", label: "Product Launched" },
  { number: "100", label: "Startup Raised" },
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
                  {stat.number}+
                </span>
                <span className="text-base text-white/80 mt-2">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <Separator orientation="vertical" className="h-24 bg-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-end gap-4 mt-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-(--accent-orange)"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-white/20"></div>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 -ml-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}