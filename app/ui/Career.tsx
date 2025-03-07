import React, { JSX } from "react";
import Title from "./Title";
import CardBackGround from "./CardBackGround";
import Rounde from "./Rounde";
import * as motion from "motion/react-client";

const cardVariants = {
  leftToRight: (delay: number) => ({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay } },
  }),
  rightToLeft: (delay: number) => ({
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay } },
  }),
};

export default function Career(): JSX.Element {
  return (
    <div className="mt-10 md:mt-16 mx-6">
      <Title text="My Background" />
      <div className="w-full relative grid grid-cols-1 place-items-start md:place-items-center">
        <div className="h-[928px] w-1 bg-white mt-16"></div>
        <div className="absolute ml-[2px] top-16"><Rounde /></div>
        <div className="absolute ml-[2px] top-[304px] md:top-[296px]"><Rounde /></div>
        <div className="absolute ml-[2px] top-[536px] md:top-[528px]"><Rounde /></div>
        <div className="absolute ml-[2px] top-[768px] md:top-[760px]"><Rounde /></div>

        <div className="absolute top-6 grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-y-2 md:gap-y-0 gap-x-12 p-6">
          <motion.div
            className="w-full col-start-1 md:col-start-2 row-start-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.rightToLeft(0)}
          >
            <CardBackGround
              date="JAN 2025 - NOW"
              position="start"
              postTitle="Front-end Developer web & mobile | UI & UX Designer"
              logoEs="/images/viseo.jpg"
              es="Groupe VISEO"
              description="As a Front-End Developer at VISEO Group, I was responsible for designing intuitive UI/UX mockups and developing web and mobile applications."
            />
          </motion.div>

          <motion.div
            className="w-full col-start-1 row-start-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.leftToRight(0.3)}
          >
            <CardBackGround
              date="JUL 2024 - DEC 2024"
              position="start"
              postTitle="Interne Front-end Developer web  | UI & UX Designer"
              logoEs="/images/viseo.jpg"
              es="Groupe VISEO"
              description="As a Front-End Developer at VISEO Group, I was responsible for designing intuitive UI/UX mockups and developing web applications."
            />
          </motion.div>

          <motion.div
            className="w-full col-start-1 md:col-start-2 row-start-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.rightToLeft(0.6)}
          >
            <CardBackGround
              date="2023"
              position="start"
              postTitle="Management Information Systems"
              logoEs="/images/gsi.jpg"
              es="University GSI Madagascar"
              description="Graduation with a Bachelor's degree in Management Information Systems"
            />
          </motion.div>

          <motion.div
            className="w-full col-start-1 row-start-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.leftToRight(0.9)}
          >
            <CardBackGround
              date="(1 Week in 2023)"
              position="start"
              postTitle="Introduction to UI/UX Design"
              logoEs="/images/odc.jpg"
              es="Orange Digital Center Madagascar"
              description="The initiation in UI/UX Design at Orange Digital Center Madagascar helped me a lot in finding my path in my career. Despite its short duration, I learned a lot there, and thanks to this program, I discovered my passion."
            />
          </motion.div>
        </div>

        <div className="absolute rotate-90 top-[450px] bg-custom-angular-gradient blur-[70px] w-[800px] h-28"></div>
      </div>
    </div>
  );
}
