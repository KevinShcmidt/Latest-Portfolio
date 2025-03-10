"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import { ChangeMode } from "./ChangeMode";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

export default function Header(): ReactNode {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? "/images/lightLogoMode.png" : "/images/logo.png";
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour gérer l'ouverture/fermeture du menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Fonction pour gérer le défilement fluide
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("#home");
  };

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 ease-in-out
        ${scrolled 
          ? "md:px-28 px-3 py-2 bg-opacity-85 backdrop-blur-3xl shadow-md" 
          : "md:px-40 px-4 py-4 bg-opacity-0"
        } 
        ${theme === "light" ? "bg-white" : "bg-[#10002B]"}`
      }
    >
      <a 
        href="#home" 
        onClick={handleLogoClick}
        className={`relative w-[50px] h-8 transition-all duration-300 ${scrolled ? "scale-90" : ""}`}
        aria-label="Go to Home"
      >
        <Image
          src={logoSrc}
          alt="Kevin Rakotovao | Front-end developer & UI/UX Designer"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </a>

      {/* Navigation pour les écrans moyens et grands */}
      <NavBar scrolled={scrolled} />

      {/* Menu burger pour les petits écrans */}
      <div className="flex items-center gap-4">
        <ChangeMode />
        
        <button 
          className="md:hidden block transition-transform duration-200 hover:scale-110"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className={`${theme === "light" ? "text-black" : "text-white"} transition-all duration-300`} />
          ) : (
            <Menu size={24} className={`${theme === "light" ? "text-black" : "text-white"} transition-all duration-300`} />
          )}
        </button>
      </div>

      {/* Menu mobile en plein écran */}
      {mobileMenuOpen && (
        <div 
          className={`fixed inset-0 top-16 z-40 md:hidden
            ${theme === "light" ? "bg-white" : "bg-[#10002B]"}
            animate-fadeIn`}
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(16, 0, 43, 0.95)"
          }}
        >
          <NavBar mobile={true} onItemClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}