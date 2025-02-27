"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import { ChangeMode } from "./ChangeMode";
import { useTheme } from "next-themes";

export default function Header(): ReactNode {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? "/images/lightLogoMode.png" : "/images/logo.png";
  return (
    <header id="#home" className="w-full flex items-center justify-between md:px-40 px-4 py-4">
      <div className="relative w-[50px] h-8">
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
      </div>
      <NavBar />
      <ChangeMode />
    </header>
  );
}
