import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#F5E6DC] flex flex-col">
            {/* Header with semantic HTML */}
            <header className="relative z-10">
                <Navigation />
            </header>
            
            {/* Main content area with semantic HTML */}
            <main className="flex-1 relative z-0">
                {children}
            </main>
            
            {/* Footer with semantic HTML */}
            <Footer />
        </div>
    );
}
