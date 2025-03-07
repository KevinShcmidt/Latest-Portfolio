import Image from "next/image";
import React, { JSX } from "react";
import ButtonComponent from "./ButtonComponent";
import SkewText from "./SkewText";
import Title from "./Title";
import { ArrowDownToLine } from "lucide-react";
import * as motion from "motion/react-client";

// Composant d'enveloppe animée pour SkewText
const AnimatedSkewWrapper: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: [0.8, 1.2, 1] }}
      viewport={{ once: true }}
      transition={{
        delay: delay,
        duration: 0.7,
        times: [0, 0.7, 1],
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function About(): JSX.Element {
  return (
    <div className="relative w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title text="About me" />
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-2 place-items-center items-center mt-10 sm:mt-12 md:mt-16">
        {/* Partie texte */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="text-center flex flex-col items-center justify-center max-w-md mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center text-lg sm:text-xl md:text-xl lg:text-2xl">
            <motion.span whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
              I like creating
            </motion.span>

            <AnimatedSkewWrapper delay={0.4} className="my-2 md:my-0">
              <SkewText text="Simple" rotation={5} color="#FF9100" className="my-2 md:my-0" />
            </AnimatedSkewWrapper>

            <motion.span whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.3 }} className="mx-1">
              ,
            </motion.span>

            <AnimatedSkewWrapper delay={0.7} className="my-2 md:my-0">
              <SkewText text="easy-to-use" rotation={-5} color="#F20089" className="my-2 md:my-0" />
            </AnimatedSkewWrapper>
          </div>

          <div className="flex flex-wrap items-center justify-center mt-6 sm:mt-10 md:mt-14 text-lg sm:text-xl md:text-xl lg:text-2xl">
            <motion.span whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.5 }}>
              web & mobile application
              <span className="mx-1">with a</span>
            </motion.span>

            <AnimatedSkewWrapper delay={1.1} className="my-2 md:my-1">
              <SkewText text="good design" rotation={10} color="#2D00F7" className="my-2 md:my-1" />
            </AnimatedSkewWrapper>
          </div>

          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-center text-xs sm:text-sm md:text-base mt-6 sm:mt-10 md:mt-14 max-w-sm"
          >
            I am a caring person; I don&apos;t like seeing people struggle while using what I&apos;ve developed. So, I pay close attention to design and provide a better user experience.
          </motion.p>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="w-full flex items-center justify-center mt-8 sm:mt-10 md:mt-14"
          >
            <ButtonComponent isPrimary={true} label="Download resume" icon={ArrowDownToLine} onClick={() => null} />
          </motion.div>
        </motion.div>

        {/* Image partie */}
        <motion.div
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="relative mt-8 md:mt-0 w-48 h-[320px] sm:w-52 sm:h-[360px] md:w-56 md:h-[400px] lg:w-60 lg:h-[440px]"
        >
          <Image src="/images/yes.png" alt="Kevin Rakotovao about me" fill={true} className="object-contain" sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 240px" />
        </motion.div>
      </div>

      {/* Élément décoratif */}
      <motion.div
        whileInView={{ opacity: [0, 0.3, 0.7], scale: [0.5, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 md:bottom-12 lg:bottom-24 right-0 md:right-24 lg:right-52 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-[#f2008933] rounded-full blur-3xl opacity-70 md:opacity-100"
      />
    </div>
  );
}
