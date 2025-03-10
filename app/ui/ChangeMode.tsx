"use client";

import { Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ChangeMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Fonction pour gérer le défilement fluide vers la section contact
  const handleContactClick = (e: { preventDefault: () => void; }) => {
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
        className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-500 rounded-lg transition-all hover:bg-primary hover:text-white hover:border-primary"
        aria-label="Contact me"
      >
        Contact me <span><Phone size={16} /></span>
      </a>

      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg bg-gray-800 dark:bg-gray-200 transition-all"
        aria-label="Toggle Dark Mode"
      >
        {resolvedTheme === "dark" ? (
          <Moon color="#f72585" size={18} />
        ) : (
          <Sun color="#ffd500" size={18} />
        )}
      </button>
    </div>
  );
}