import React, { JSX } from "react";
import Title from "./Title";
import CardBackGround from "./CardBackGround";

export default function Career(): JSX.Element {
  return (
    <div className="mt-10 md:mt-8">
      <Title text="My Background" />
      <div className="w-full relative flex flex-col items-center justify-center">
        <div className="">
          <CardBackGround
            date="JAN 2025 - NOW"
            position="start"
            postTitle="Front-end Developer web & mobile | UI & UX Designer"
            logoEs="/images/viseo.jpg"
            es="Groupe VISEO"
            description="As a Front-End Developer at VISEO Group, I was responsible for designing intuitive UI/UX mockups and developing web and mobile applications."
          />
        </div>
      </div>
    </div>
  );
}
