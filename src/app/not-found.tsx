import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#171717] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <div className="text-8xl font-bold text-[#FF7F50] mb-4">
                        404
                    </div>
                    <h2 className="text-3xl font-bold text-gray-100 mb-2">
                        Page Not Found
                    </h2>
                    <p className="text-gray-300 mb-6">
                        The page you're looking for doesn't exist or has been
                        moved.
                    </p>
                </div>

                <div className="space-y-3">
                    <Button
                        asChild
                        className="w-full bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white"
                    >
                        <Link href="/">Go to homepage</Link>
                    </Button>

                    <Button
                        variant="outline"
                        asChild
                        className="w-full border-gray-700 text-gray-500"
                    >
                        <Link href="/contact">Contact support</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
