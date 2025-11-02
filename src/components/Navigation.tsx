"use client";

import { AtSign, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const navItems = [
    { label: "Home", active: true },
    { label: "Branding", active: false },
    { label: "Digital", active: false },
    { label: "Marketing", active: false },
    { label: "Products", active: false },
    { label: "About Us", active: false },
    { label: "Contact Us", active: false },
    { label: "Our blog", active: false },
    { label: "Careers", active: false },
];

export function Navigation() {
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            {/* Desktop/NavBar for md+ */}
            <nav className="hidden md:block fixed top-6 left-0 right-0 z-50 w-full">
                <div className="mx-auto flex items-center justify-between px-8 py-4 rounded-full border border-[var(--border-gray,#E5E7EB)] bg-black/80 backdrop-blur-md max-w-[1200px]">
                    {/* Logo at left */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <AtSign className="w-6 h-6 text-black" />
                        </div>
                    </div>
                    {/* Menu at right */}
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className={`text-sm font-medium transition-colors ${
                                    item.active
                                        ? "text-[var(--accent-orange,#FF7F50)]"
                                        : "text-white hover:text-[var(--accent-orange,#FF7F50)]"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden w-full fixed top-6 z-50 flex items-center justify-between px-4">
                {/* Logo at left */}
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <AtSign className="w-6 h-6 text-black" />
                </div>
                {/* Hamburger at left */}
                <Button
                    aria-label="Open menu"
                    onClick={() => setOpen(true)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 border border-(--border-gray) text-white shadow-lg mx-4"
                >
                    <Menu className="w-7 h-7" />
                </Button>
            </div>

            {/* Sliding Mobile Menu (client only) */}
            {isClient && (
                <div
                    className={`fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm transition-all duration-300 ${
                        open ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-black border-r border-(--border-gray) shadow-xl p-8 flex flex-col gap-6 transform transition-transform duration-300 ${
                            open ? "translate-x-0" : "-translate-x-full"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <AtSign className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-lg font-bold text-white">
                                Menu
                            </span>
                        </div>
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className={`text-base font-medium text-left transition-colors ${
                                    item.active
                                        ? "text-(--accent-orange)"
                                        : "text-white hover:text-(--accent-orange)"
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
