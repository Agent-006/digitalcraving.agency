"use client";

const services = [
  "UX Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "UX Design",
];

export function ScrollingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-(--accent-orange) py-4 -rotate-2 origin-center scale-110">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate the content for seamless loop */}
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center">
            {services.map((service, index) => (
              <div key={`${groupIndex}-${index}`} className="flex items-center px-6">
                <span className="text-2xl font-bold text-white">{service}</span>
                <span className="mx-6 text-white text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}