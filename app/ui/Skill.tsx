import React, { JSX } from "react";
import Title from "./Title";
import Image from "next/image";
import Technologie from "./Technologie";

export default function Skill(): JSX.Element {
  return (
    <section className="relative mt-10 md:mt-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <Title text="My Skills" />
      
      {/* Texte responsive avec meilleure lisibilité */}
      <p className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-center font-medium leading-relaxed max-w-3xl mx-auto">
        As a front-end developer, I have gained extensive knowledge of
        technologies related to this field while also exploring back-end
        development for a better understanding of the industry. Here they are:
      </p>
      
      {/* Container principal */}
      <div className="mt-8 md:mt-12 relative flex flex-col md:flex-row justify-center items-center">
        {/* Technologies en orbite - visible seulement sur grand écran */}
        <div className="hidden md:block absolute w-1/2 h-1/2 animate-spin-slow">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <Technologie iconPath="/images/icons/flutter.png" alt="Flutter Logo" />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <Technologie iconPath="/images/icons/laravel.png" alt="Laravel Logo" />
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <Technologie iconPath="/images/icons/dart.png" alt="Dart Logo" />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Technologie iconPath="/images/icons/php.png" alt="PHP Logo" />
          </div>
        </div>
        
        {/* Image centrale et technologies principales */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
          {/* Image visible seulement sur tablette et desktop */}
          <Image
            src="/images/ctrl.png"
            alt="Kevin Rakotovao FRONT-END DEVELOPER UI UX Designer"
            width={400}
            height={500}
            className="hidden md:block mx-auto"
          />
          
          {/* Technologies principales - adaptées pour tous les écrans */}
          <div className="flex flex-wrap md:absolute md:z-10 md:top-8 w-full justify-center md:justify-between gap-4 md:gap-0">
            {/* Groupe gauche */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Technologie
                iconPath="/images/icons/html.png"
                alt="HTML logo"
                className="col-span-1"
              />
              <Technologie
                iconPath="/images/icons/css.png"
                alt="CSS logo"
                className="col-span-1"
              />
              <Technologie
                iconPath="/images/icons/js.png"
                alt="Javascript logo"
                className="col-span-1"
              />
              <Technologie
                iconPath="/images/icons/ts.png"
                alt="TypeScript logo"
                className="col-span-1"
              />
            </div>
            
            {/* Groupe droit */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Technologie
                iconPath="/images/icons/react.png"
                alt="React logo"
                className="col-span-1"
              />
              <Technologie
                iconPath="/images/icons/nextjs.png"
                alt="Next.js logo"
                className="col-span-1"
              />
              <Technologie
                iconPath="/images/icons/figma.png"
                alt="Figma Logo"
                className="col-span-1"
              />
              <Technologie
                iconPath="/images/icons/tailwind.png"
                alt="Tailwind logo"
                className="col-span-1"
              />
            </div>
          </div>
          
          {/* Afficher les technologies en orbite pour mobile dans une grille simple */}
          <div className="flex md:hidden justify-center mt-8 gap-4">
            <Technologie iconPath="/images/icons/flutter.png" alt="Flutter Logo" />
            <Technologie iconPath="/images/icons/dart.png" alt="Dart Logo" />
            <Technologie iconPath="/images/icons/laravel.png" alt="Laravel Logo" />
            <Technologie iconPath="/images/icons/php.png" alt="PHP Logo" />
          </div>
        </div>
      </div>
      <div className="absolute top-[450px] bg-custom-angular-gradient blur-[70px] w-[800px] h-28"></div>
    </section>
  );
}