export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F5E6DC] flex items-center justify-center">
            <div className="relative">
                {/* Main spinner */}
                <div className="w-12 h-12 border-4 border-[#FF7F50]/20 rounded-full animate-spin border-t-[#FF7F50]"></div>

                {/* Optional: Pulsing background */}
                <div className="absolute inset-0 w-12 h-12 bg-[#FF7F50]/10 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}
