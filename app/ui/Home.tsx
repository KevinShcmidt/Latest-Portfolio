"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import React, { ReactNode } from "react";
import ButtonComponent from "./ButtonComponent";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home(): ReactNode {

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
      <div className="flex flex-col items-center z-10">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="w-full text-center">
        <p className="text-sm sm:text-base">Hello 👋 !</p>
        <p className="text-sm sm:text-base md:mt-1">
          I&apos;m{" "}
          <span className="font-bold text-primary">KEVIN RAKOTOVAO</span>
        </p>
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center mt-1 lg:mt-2 2xl:mt-4">
          Front-end developer and UI/UX Designer
        </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="relative mt-2 sm:mt-4 w-[120px] h-64 sm:w-[150px] sm:h-80 lg:w-[200px] lg:h-[350px] xl:w-[250px] xl:h-[375px] 2xl:w-[288px] 2xl:h-[400px]">
          <Image
            src="/images/walking.png"
            alt="Kevin Rakotovao FRONT-END DEVELOPER UI UX Designer"
            fill={true}
            priority
            sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 200px, (max-width: 1280px) 250px, 288px"
          />
        </motion.div>

        <Link href="#about" className="mt-4 sm:mt-6 z-10">
          <ButtonComponent
            isPrimary={true}
            onClick={() => null}
            icon={ChevronDown}
            label="Learn about me"
          />
        </Link>
      </div>

      <div className="absolute bg-custom-angular-gradient blur-[70px] w-full h-28 sm:h-32 md:h-40"></div>
    </div>
  );
}
