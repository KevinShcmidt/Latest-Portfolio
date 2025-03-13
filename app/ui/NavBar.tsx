"use client";

import React, { useState, useEffect } from "react";

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
  const [activeSection, setActiveSection] = useState("#home");
  
  // Fonction pour gérer le défilement fluide
  const handleClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    const targetId = href.substring(1); // Enlever le # du href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
      if (mobile && onItemClick) {
        onItemClick();
      }
    }
  };
  
  // Fonction pour détecter la section active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.href,
        element: document.getElementById(link.href.substring(1))
      })).filter(section => section.element !== null);
      
      // Trouver la section la plus proche du haut de la fenêtre
      let currentSection = sections[0]?.id || "#home";
      
      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifier la section active au chargement
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
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
          const isActive = activeSection === href;

          return (
            <li
              key={href}
              className={`relative p-2 group hover:text-primary transition-all duration-300 ${scrolled && !mobile ? "py-1" : "py-2"}`}
            >
              <a
                href={href}
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleClick(href, e)}
                className={`transition-colors duration-300 ease-in-out ${isActive ? "text-primary" : "hover:text-primary"}`}
                aria-label={label}
              >
                {label}
              </a>
              <span
                className={`absolute left-0 bottom-0 w-full h-[3px] bg-primary rounded-full transition-transform duration-300 ease-in-out ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}