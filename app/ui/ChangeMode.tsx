"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";

export function ChangeMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Empêche le rendu SSR

  return (
   <div className="flex items-center gap-4">
     <ButtonComponent isPrimary={false} onClick={() => null} label="Contact me" />
    
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
