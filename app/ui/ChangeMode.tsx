"use client";

import { Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ChangeMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Fonction pour gérer le défilement fluide vers la section contact
  const handleContactClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null; // Empêche le rendu SSR

  return (
    <div className="flex items-center gap-4">
      <a
        href="#contact"
        onClick={handleContactClick}
        className="flex items-center justify-center gap-2 p-2 border rounded-full transition-all hover:bg-primary hover:text-white hover:border-primary"
        aria-label="Contact me"
      >
        <span>
          <Phone size={16} />
        </span>
      </a>

      {/* Toggle Switch */}
      <div
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="relative z-10 w-12 h-6 rounded-full bg-primary cursor-pointer transition-all backdrop-blur-sm"
        aria-label="Toggle Dark Mode"
      >
        
        {/* Toggle Knob */}
        <div
          className="relative z-10 w-12 h-6 rounded-full cursor-pointer transition-all backdrop-blur-2xl"
          aria-label="Toggle Dark Mode"
        >
          {/* Toggle Knob - Overflowing */}
          <div
            className={`absolute z-10 w-8 h-8 rounded-full bg-primary dark:bg-gray-900 shadow-md transform transition-transform ${
              resolvedTheme === "dark" ? "translate-x-5" : "translate-x-0"
            } top-1/2 -translate-y-1/2 flex items-center justify-center`}
          >
            {/* Icons */}
            {resolvedTheme === "dark" ? (
              <Moon className="w-5 h-5 text-pink-500" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </div>
        </div>
        <div className="absolute z-0 w-14 h-3 bg-secondaryBlue blur-[20px] -top-1 -left-1"></div>
      </div>
    </div>
  );
}
