import Image from "next/image";
import React, { JSX } from "react";
import ButtonComponent from "./ButtonComponent";
import SkewText from "./SkewText";
import Title from "./Title";

export default function About(): JSX.Element {
  return (
    <div className="relative w-full mt-10 md:mt-8">
      <Title text="About me" />
      <div className="w-full md:px-8 xl:px-40 grid grid-cols-1 md:grid-cols-2 place-items-center items-center mt-16">
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-xl 2xl:text-2xl flex items-center justify-center">
            I like creating
            <SkewText text="Simple" rotation={5} color="#FF9100" /> ,
            <SkewText text="easy-to-use" rotation={-5} color="#F20089" />
          </p>
          <p className="text-xl 2xl:text-2xl flex items-center justify-center mt-6">
            web & mobile application
            <span className="">with a</span>
            <SkewText text="good design" rotation={10} color="#2D00F7" />
          </p>
          <p className="text-center text-sm mt-8">
            I am a caring person; I don&apos;t like seeing people struggle while
            using what I&apos;ve developed. So, I pay close attention to design and
            provide a better user experience.
          </p>
          <div className="w-full mt-10">
            <ButtonComponent
              isPrimary={true}
              label="Download resume"
              onClick={() => null}
            />
          </div>
        </div>
        <div className="relative hidden md:flex justify-center items-center w-60 h-[440px]">
          <Image
            src="/images/yes.png"
            alt="Kevin Rakotovao about me"
            fill={true}
          />
        </div>
      </div>
      <div className="hidden absolute bottom-0 right-0 md:block w-52 h-52 bg-[#F20089] rounded-full blur-3xl"></div>
    </div>
  );
}
