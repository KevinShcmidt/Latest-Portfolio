import React, { JSX } from "react";
import * as motion from "motion/react-client";
import Title from "./Title";
import CardWork from "./CardWork";
import Modals from "./Modals";

export default function Work(): JSX.Element {
  const [isActiveModal, setIsActiveModal] = React.useState(false);
  const WorkItems = [
    {
      id: 1,
      image: "/images/CardImage/pride.png",
      title: "Pride",
      description:
        "A mockup for a music platform that I designed with Figma, highlighting design trends adapted to user personas.",
      buttonAction: () => {
        setIsActiveModal(!isActiveModal);
      },
    },
    {
      id: 2,
      image: "/images/CardImage/energie.png",
      title: "Green Future",
      description:
        "A landing page mockup for a company called Green Future, which focuses on green energy.",
      buttonAction: () => {setIsActiveModal(!isActiveModal);},
    },
    {
      id: 3,
      image: "/images/CardImage/goodVibe.png",
      title: "Good Vibe",
      description:
        "A mobile app mockup for a platform that allows users to listen to music.",
      buttonAction: () => {setIsActiveModal(!isActiveModal);},
    },
    {
      id: 4,
      image: "/images/CardImage/chargeoEv.png",
      title: "Chargeo EV",
      description:
        "An application that allows users to find available electric vehicle chargers and recharge their EV.",
      buttonAction: () => {setIsActiveModal(!isActiveModal);},
    },
    {
      id: 5,
      image: "/images/CardImage/elcdis.png",
      title: "Chargeo EV Dashboard",
      description:
        "Frontend of the Chargeo EV mobile application dashboard, developed with React JS.",
      buttonAction: () => {setIsActiveModal(!isActiveModal);},
    },
    {
      id: 6,
      image: "/images/CardImage/evoyage.png",
      title: "E-Voyage",
      description:
        "The biggest project I've developed since learning to code: a web app for booking seats on land trips.",
      buttonAction: () => {setIsActiveModal(!isActiveModal);},
    },
  ];

  return (
    <div className="relative mt-10 md:mt-16 mx-4 md:mx-16 lg:mx-40">
      <Title text="My latest projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {WorkItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <CardWork
              imagePath={item.image}
              title={item.title}
              description={item.description}
              buttonAction={item.buttonAction}
            />
          </motion.div>
        ))}
      </div>
      {
        isActiveModal && (
          <Modals />
        )
      }
      <div className="absolute top-[450px] bg-custom-angular-gradient blur-[70px] w-[800px] h-28"></div>
    </div>
  );
}
