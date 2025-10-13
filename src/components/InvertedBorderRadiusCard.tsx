import { ArrowRight } from "lucide-react";

interface InvertedRadiusCardsProps {
    label?: string;
    iconBg?: string;
}

export default function InvertedRadiusCards({
    label,
    iconBg = "bg-white",
}: InvertedRadiusCardsProps) {
    const cards = [
        {
            img:
                "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop",
            color: "bg-[#d3b19a]",
            title: "Trust & Co.",
            desc:
                "Fill out the form and the algorithm will offer the right team of experts",
        },
        {
            img:
                "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop",
            color: "bg-[#70b3b1]",
            title: "Trust & Co.",
            desc:
                "Fill out the form and the algorithm will offer the right team of experts",
        },
        {
            img:
                "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop",
            color: "bg-[#d05fa2]",
            title: "Trust & Co.",
            desc:
                "Fill out the form and the algorithm will offer the right team of experts",
        },
    ];

    return (
        <section className="py-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
                    Cards with inverted border-radius
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {cards.map((card, index) => (
                    <div key={index} className="w-[300px]">
                        {/* Label at top */}
                        {label && (
                            <div className="pt-4 pl-4 flex justify-start">
                                <h2 className="text-lg md:text-2xl font-bold text-white mb-2">
                                    {label}
                                </h2>
                            </div>
                        )}
                        <div className="relative h-[300px] rounded-[25px] overflow-hidden group">
                            {/* Image */}
                            <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Inverted corner icon */}
                            <div
                                className={`absolute bottom-0 right-0 w-[85px] h-[85px] rounded-tl-[50px] p-3 ${iconBg}`}
                            >
                                <div
                                    className={`absolute top-[-18px] right-0 w-[18px] h-[18px] rounded-br-[30px]`}
                                    style={{
                                        boxShadow: `10px 10px 0 10px ${
                                            iconBg.startsWith("bg-[")
                                                ? iconBg.slice(4, -1)
                                                : iconBg === "bg-white"
                                                ? "#fff"
                                                : iconBg.replace("bg-", "")
                                        }`,
                                    }}
                                />
                                <div
                                    className={`absolute bottom-0 left-[-18px] w-[18px] h-[18px] rounded-br-[30px]`}
                                    style={{
                                        boxShadow: `10px 10px 0 10px ${
                                            iconBg.startsWith("bg-[")
                                                ? iconBg.slice(4, -1)
                                                : iconBg === "bg-white"
                                                ? "#fff"
                                                : iconBg.replace("bg-", "")
                                        }`,
                                    }}
                                />

                                <span
                                    className={`${card.color} w-[70px] h-[70px] rounded-full flex items-center justify-center rotate-[-40deg] transition-transform duration-300 hover:scale-110 cursor-pointer`}
                                >
                                    <ArrowRight className="text-white w-6 h-6" />
                                </span>
                            </div>
                        </div>

                        {/* Card content */}
                        <div className="mt-4 text-center">
                            <h3 className="text-2xl font-semibold mb-1 text-gray-200">
                                {card.title}
                            </h3>
                            <p className="text-gray-200 text-sm">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
