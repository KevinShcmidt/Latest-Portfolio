import React, { JSX } from "react";
import Title from "./Title";
import CardWork from "./CardWork";

export default function Work(): JSX.Element {
    const WorkItems = [
        {
          id: 1,
          image: "/images/CardImage/pride.png",
          title: "Pride",
          description:
            "A mockup for a music platform that I designed with Figma, highlighting design trends adapted to user personas.",
          buttonAction: () => {},
        },
        {
          id: 2,
          image: "/images/CardImage/energie.png",
          title: "Green Future",
          description:
            "A landing page mockup for a company called Green Future, which focuses on green energy.",
          buttonAction: () => {},
        },
        {
          id: 3,
          image: "/images/CardImage/goodVibe.png",
          title: "Good Vibe",
          description:
            "A mobile app mockup for a platform that allows users to listen to music.",
          buttonAction: () => {},
        },
        {
          id: 4,
          image: "/images/CardImage/chargeoEv.png",
          title: "Chargeo EV",
          description:
            "An application that allows users to find available electric vehicle chargers and recharge their EV.",
          buttonAction: () => {},
        },
        {
          id: 5,
          image: "/images/CardImage/elcdis.png",
          title: "Chargeo EV Dashboard",
          description:
            "Frontend of the Chargeo EV mobile application dashboard, developed with React JS.",
          buttonAction: () => {},
        },
        {
          id: 6,
          image: "/images/CardImage/evoyage.png",
          title: "E-Voyage",
          description:
            "The biggest project I've developed since learning to code: a web app for booking seats on land trips.",
          buttonAction: () => {},
        },
      ];
  return (
    <div className="mt-10 md:mt-16 mx-4 md:mx-16 lg:mx-40">
      <Title text="My latest projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {
            WorkItems.map((item) => (
                <CardWork key={item.id} imagePath={item.image} title={item.title} description={item.description} buttonAction={item.buttonAction} /> ))
        }
      </div>
    </div>
  );
}
