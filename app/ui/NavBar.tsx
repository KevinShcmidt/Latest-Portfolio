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

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  

  return (
    <nav className="py-2 px-4 hidden md:block">
      <ul className="flex text-sm font-medium items-center justify-center gap-16 list-none">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href} className="relative p-2 group hover:text-primary">
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
