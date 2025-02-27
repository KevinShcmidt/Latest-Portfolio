import React, { JSX } from "react";
import Title from "./Title";
import CardBackGround from "./CardBackGround";
import Rounde from "./Rounde";

export default function Career(): JSX.Element {
  return (
    <div className="mt-10 md:mt-16 mx-6">
      <Title text="My Background" />
      <div className="w-full relative flex flex-col items-start justify-start lg:items-center">
        <div className="h-[928px] w-1 bg-white mt-16"></div>
        <div className="absolute ml-[2px] top-16">
          <Rounde />
        </div>
        <div className="absolute ml-[2px] top-[296px]">
          <Rounde />
        </div>
        <div className="absolute ml-[2px] top-[528px]">
          <Rounde />
        </div>
        <div className="absolute ml-[2px] top-[760px]">
          <Rounde />
        </div>
        <div className="absolute top-12 ml-8 lg:ml-0 lg:right-60 2xl:right-32">
          <CardBackGround
            date="JAN 2025 - NOW"
            position="start"
            postTitle="Front-end Developer web & mobile | UI & UX Designer"
            logoEs="/images/viseo.jpg"
            es="Groupe VISEO"
            description="As a Front-End Developer at VISEO Group, I was responsible for designing intuitive UI/UX mockups and developing web and mobile applications."
          />
        </div>
        <div className="absolute top-[280px] ml-8 lg:ml-0 lg:left-60 2xl:left-32">
          <CardBackGround
            date="JUL 2024 - DEC 2024"
            position="start"
            postTitle="Interne Front-end Developer web  | UI & UX Designer"
            logoEs="/images/viseo.jpg"
            es="Groupe VISEO"
            description="As a Front-End Developer at VISEO Group, I was responsible for designing intuitive UI/UX mockups and developing web applications."
          />
        </div>
        <div className="absolute top-[512px] ml-8 lg:ml-0 lg:right-60 2xl:right-32">
          <CardBackGround
            date="2023"
            position="start"
            postTitle="Management Information Systems"
            logoEs="/images/gsi.jpg"
            es="University GSI Madagascar"
            description="Graduation with a Bachelor&apos;s degree in Management Information Systems"
          />
        </div>
        <div className="absolute top-[744px] ml-8 lg:ml-0 lg:left-60 2xl:left-32">
          <CardBackGround
            date="(1 Week in 2023)"
            position="start"
            postTitle="Introduction to UI/UX Design"
            logoEs="/images/odc.jpg"
            es="Orange Digital Center Madagascar"
            description="The initiation in UI/UX Design at Orange Digital Center Madagascar helped me a lot in finding my path in my career. Despite its short duration, I learned a lot there, and thanks to this program, I discovered my passion."
          />
        </div>
        <div className="absolute rotate-90 top-[450px] bg-custom-angular-gradient blur-[70px] w-[800px] h-28"></div>
      </div>
    </div>
  );
}
