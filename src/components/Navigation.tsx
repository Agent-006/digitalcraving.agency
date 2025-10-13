"use client";

import { AtSign } from "lucide-react";

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
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1200px]">
      <div className="flex items-center justify-between px-8 py-4 rounded-full border border-(--border-gray) bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <AtSign className="w-6 h-6 text-black" />
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`text-sm font-medium transition-colors ${
                item.active
                  ? "text-(--accent-orange)"
                  : "text-white hover:text-(--accent-orange)"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}