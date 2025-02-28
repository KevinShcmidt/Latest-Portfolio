import React, { JSX } from "react";
import Title from "./Title";
import Image from "next/image";
import Technologie from "./Technologie";

export default function Skill(): JSX.Element {
  return (
    <div className="mt-10 md:mt-16 mx-4 md:mx-16 lg:mx-40">
      <Title text="My Skills" />

      {/* Texte responsive */}
      <p className="mt-8 text-sm md:text-lg lg:text-xl text-center font-medium leading-relaxed max-w-3xl mx-auto">
        As a front-end developer, I have gained extensive knowledge of
        technologies related to this field while also exploring back-end
        development for a better understanding of the industry. Here they are:
      </p>

      {/* Image responsive */}
      <div className="relative mt-12 flex justify-center items-center">
      <div className="absolute w-[50%] h-[50%] animate-spin-slow rotate-y-25">
    {/* Positions des icônes en orbite verticale */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      <Technologie iconPath="/images/icons/flutter.png" alt="Figma" />
    </div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <Technologie iconPath="/images/icons/laravel.png" alt="Laravel" />
    </div>
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
      <Technologie iconPath="/images/icons/dart.png" alt="Dart" />
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <Technologie iconPath="/images/icons/php.png" alt="PHP" />
    </div>
  </div>
        <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto">
          <Image
            src="/images/ctrl.png"
            alt="Kevin Rakotovao FRONT-END DEVELOPER UI UX Designer"
            width={400}
            height={500}
          />
          <div className="absolute z-10 top-8 w-full h-40 flex justify-between items-center">
            <div className="w-[30%] h-36 grid grid-cols-3 grid-rows-4 gap-8">
              <Technologie
                iconPath="/images/icons/html.png"
                alt="html"
                className="col-start-2 row-start-1"
              />
              <Technologie
                iconPath="/images/icons/js.png"
                alt="html"
                className="col-start-2 row-start-3"
              />
              <Technologie
                iconPath="/images/icons/css.png"
                alt="html"
                className="col-start-1 row-start-2"
              />
              <Technologie
                iconPath="/images/icons/ts.png"
                alt="html"
                className="col-start-3 row-start-2"
              />
            </div>
            <div className="w-[30%] h-36 grid grid-cols-3 grid-rows-4 gap-8">
              <Technologie
                iconPath="/images/icons/react.png"
                alt="html"
                className="col-start-2 row-start-1"
              />
              <Technologie
                iconPath="/images/icons/nextjs.png"
                alt="html"
                className="col-start-2 row-start-3"
              />
              <Technologie
                iconPath="/images/icons/figma.png"
                alt="html"
                className="col-start-1 row-start-2"
              />
              <Technologie
                iconPath="/images/icons/tailwind.png"
                alt="html"
                className="col-start-3 row-start-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
