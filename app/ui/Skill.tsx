"use client";
import React, { JSX } from "react";
import Title from "./Title";
import * as motion from "motion/react-client";
import { IconType } from "react-icons";
import {
  FaHtml5, FaCss3Alt, FaReact, FaPhp, FaFigma,
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiFlutter, SiDart, SiLaravel,
} from "react-icons/si";
import Image from "next/image";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  level: number;
};

type SkillCategory = {
  label: string;
  skills: Skill[];
};

const CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML",       icon: FaHtml5,       color: "#E34F26", level: 95 },
      { name: "CSS",        icon: FaCss3Alt,      color: "#1572B6", level: 90 },
      { name: "JavaScript", icon: SiJavascript,   color: "#F7DF1E", level: 85 },
      { name: "TypeScript", icon: SiTypescript,   color: "#3178C6", level: 80 },
      { name: "React",      icon: FaReact,        color: "#61DAFB", level: 85 },
      { name: "Next.js",    icon: SiNextdotjs,    color: "#000000", level: 80 },
      { name: "Tailwind",   icon: SiTailwindcss,  color: "#06B6D4", level: 90 },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#54C5F8", level: 75 },
      { name: "Dart",    icon: SiDart,    color: "#0175C2", level: 72 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", level: 60 },
      { name: "PHP",     icon: FaPhp,     color: "#777BB4", level: 58 },
    ],
  },
  {
    label: "Design",
    skills: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 88 },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#E0A002]/15 bg-white/60 backdrop-blur-sm hover:border-[#E0A002]/50 hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#E0A002]/10"
    >
      {/* Level badge */}
      <span className="absolute top-2 right-2 text-[10px] font-bold text-[#E0A002] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {skill.level}%
      </span>

      {/* Icon */}
      <Icon size={36} color={skill.color} />

      {/* Name */}
      <span className="text-[11px] sm:text-xs font-semibold text-[#14213d] text-center leading-tight">
        {skill.name}
      </span>

      {/* Level bar */}
      <div className="w-full h-1 rounded-full bg-[#E0A002]/15 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.07 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#E0A002] to-[#f5c842]"
        />
      </div>
    </motion.div>
  );
}

export default function Skill(): JSX.Element {
  return (
    <section className="bg-[#e5e5e5]/50 py-16 relative text-[#14213d] w-full mt-10 md:mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 pb-16">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title text="My Skills" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-sm md:text-base text-center text-[#14213d]/70 max-w-2xl mx-auto leading-relaxed"
      >
        As a front-end developer, I&apos;ve built extensive knowledge across the stack —
        from pixel-perfect UIs to mobile apps and backend fundamentals.
      </motion.p>

      {/* ── Layout principal : image gauche + skills droite ── */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

        {/* Image centrale avec halo */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          {/* Halo doré derrière */}
          <div className="absolute w-[220px] h-[220px] rounded-full bg-[#E0A002]/08 blur-3xl" />
          <div className="absolute w-[180px] h-[180px] rounded-full border border-[#E0A002]/20 animate-ping-slow" />
          <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-[#E0A002]/15"
            style={{ animation: "spin 18s linear infinite" }}
          />

          {/* Petits noeuds sur le cercle */}
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#E0A002]/50"
              style={{
                transform: `rotate(${deg}deg) translateY(-120px)`,
              }}
            />
          ))}

          <div className="relative w-[180px] h-[260px] sm:w-[200px] sm:h-[300px]">
            <Image
              src="/images/ctrl.png"
              alt="Kevin Rakotovao skills"
              fill
              className="object-contain drop-shadow-xl"
              sizes="200px"
            />
          </div>
        </motion.div>

        {/* ── Catégories de skills ── */}
        <div className="flex-1 w-full flex flex-col gap-8">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
            >
              {/* Label catégorie */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-[#E0A002]">
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#E0A002]/40 to-transparent" />
              </div>

              {/* Grid de cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-3">
                {cat.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={si + ci * 3} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Barre de légende niveau ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 flex items-center justify-center gap-6 flex-wrap"
      >
        {[
          { label: "Learning", range: "< 65%" },
          { label: "Comfortable", range: "65–80%" },
          { label: "Proficient", range: "80–90%" },
          { label: "Expert", range: "> 90%" },
        ].map(({ label, range }) => (
          <div key={label} className="flex items-center gap-2 text-xs text-[#14213d]/60">
            <span className="w-2 h-2 rounded-full bg-[#E0A002]/50" />
            <span className="font-medium text-[#14213d]/80">{label}</span>
            <span>{range}</span>
          </div>
        ))}
      </motion.div>

      <style>{`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`}</style>
    </section>
  );
}