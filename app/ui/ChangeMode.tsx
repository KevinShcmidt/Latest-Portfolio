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
        className="flex text-[#000000] border-2 border-primary items-center justify-center gap-2 py-2 px-4 rounded-full transition-all  hover:text-white hover:bg-primary"
        aria-label="Contact me"
      >
        
        <span>
          <Phone size={16} />
        </span>
        Contact
      </a>

      {/* Toggle Switch */}
      
    </div>
  );
}
