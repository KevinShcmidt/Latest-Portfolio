"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#work", label: "Work" },
];

interface NavBarProps {
  mobile?: boolean;
  scrolled?: boolean;
  onItemClick?: () => void;
}

export default function NavBar({ mobile = false, scrolled = false, onItemClick }: NavBarProps) {
  const pathname = usePathname();
  
  return (
    <nav className={`py-2 px-4 ${mobile ? "block w-full" : "hidden md:block"} transition-all duration-300`}>
      <ul className={`
        font-medium list-none transition-all duration-300
        ${mobile 
          ? "flex flex-col items-center justify-start gap-8 text-lg pt-12" 
          : `flex items-center justify-center transition-all duration-300 ${
              scrolled ? "gap-10 text-xs" : "gap-16 text-sm"
            }`}
      `}>
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li 
              key={href} 
              className={`relative p-2 group hover:text-primary transition-all duration-300 ${
                scrolled && !mobile ? "py-1" : "py-2"
              }`}
              onClick={() => mobile && onItemClick?.()}
            >
              <Link
                href={href}
                className={`transition-colors duration-300 ease-in-out ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`}
                aria-label={label}
              >
                {label}
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-primary transition-transform duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}