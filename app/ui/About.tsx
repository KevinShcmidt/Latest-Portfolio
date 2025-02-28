import Image from "next/image";
import React, { JSX } from "react";
import ButtonComponent from "./ButtonComponent";
import SkewText from "./SkewText";
import Title from "./Title";

export default function About(): JSX.Element {
  return (
    <div className="relative w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
      <Title text="About me" />
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 place-items-center items-center mt-10 sm:mt-12 md:mt-16">
        {/* Partie texte */}
        <div className="text-center flex flex-col items-center justify-center max-w-md mx-auto">
          <div className="flex flex-wrap items-center justify-center text-lg sm:text-xl md:text-xl lg:text-2xl">
            I like creating
            <SkewText text="Simple" rotation={5} color="#FF9100" className="my-2 md:my-0" />
            <span className="mx-1">,</span>
            <SkewText text="easy-to-use" rotation={-5} color="#F20089" className="my-2 md:my-0" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center mt-6 sm:mt-10 md:mt-14 text-lg sm:text-xl md:text-xl lg:text-2xl">
            web & mobile application
            <span className="mx-1">with a</span>
            <SkewText text="good design" rotation={10} color="#2D00F7" className="my-2 md:my-1" />
          </div>
          
          <p className="text-center text-xs sm:text-sm md:text-base mt-6 sm:mt-10 md:mt-14 max-w-sm">
            I am a caring person; I don&apos;t like seeing people struggle while
            using what I&apos;ve developed. So, I pay close attention to design and
            provide a better user experience.
          </p>
          
          <div className="w-full mt-8 sm:mt-10 md:mt-14">
            <ButtonComponent
              isPrimary={true}
              label="Download resume"
              onClick={() => null}
            />
          </div>
        </div>
        
        {/* Image partie */}
        <div className="relative mt-8 md:mt-0 w-48 h-[320px] sm:w-52 sm:h-[360px] md:w-56 md:h-[400px] lg:w-60 lg:h-[440px]">
          <Image
            src="/images/yes.png"
            alt="Kevin Rakotovao about me"
            fill={true}
            className="object-contain"
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
          />
        </div>
      </div>
      
      {/* Élément décoratif */}
      <div className="absolute bottom-0 md:bottom-12 lg:bottom-24 right-0 md:right-24 lg:right-52 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-[#f2008933] rounded-full blur-3xl opacity-70 md:opacity-100"></div>
    </div>
  );
}