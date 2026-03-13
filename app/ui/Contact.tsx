"use client";
import React, { JSX } from "react";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import * as motion from "motion/react-client";

export default function Contact(): JSX.Element {
  return (
    <div className="bg-[#14213d] relative w-full py-20 px-6 sm:px-10 md:px-20 lg:px-40 overflow-hidden">

      {/* ── Déco géométrique fond sombre ── */}
      {/* Arc top-right */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-[#E0A002]/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full border border-[#E0A002]/15 -translate-y-1/3 translate-x-1/3" />
      {/* Losange bottom-left */}
      <div
        className="absolute bottom-16 left-10 w-16 h-16 border border-[#E0A002]/20"
        style={{ transform: "rotate(45deg)" }}
      />
      {/* Ligne dashed */}
      <div className="absolute top-20 left-0 w-32 h-px border-t border-dashed border-[#E0A002]/20" />
      {/* Glow blob */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#E0A002]/04 blur-3xl pointer-events-none" />

      {/* ── CTA principal ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mt-8 sm:mt-12"
      >
        {/* Ligne déco au-dessus */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#E0A002]/60" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#E0A002]">Let's work together</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#E0A002]/60" />
        </div>

        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-2xl mx-auto">
          Would you like a{" "}
          <span className="relative inline-block text-[#E0A002]">
            stunning design
            <span className="absolute -bottom-1 left-0 w-full h-px bg-[#E0A002]/40" />
          </span>{" "}
          and high performance for your mobile and web app?
        </h2>

        <div className="mt-8 flex items-center justify-center">
          <ButtonComponent icon={ChevronDown} label="Contact me" onClick={() => null} />
        </div>
      </motion.div>

      {/* ── Séparateur ── */}
      <div className="relative z-10 my-14 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E0A002]/30 to-transparent" />
        <span className="text-[#E0A002]/50 text-xs tracking-widest uppercase">Get in touch</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E0A002]/30 to-transparent" />
      </div>

      {/* ── Grid infos + formulaire ── */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* Colonne gauche */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center md:items-start gap-8"
        >
          {/* Logo */}
          <div className="relative w-32 h-20 opacity-90">
            <Image
              src="/images/logo.png"
              alt="Kevin UI|UX Designer && Front-end developer"
              fill
              className="object-contain"
            />
          </div>

          {/* Infos contact */}
          <div className="flex flex-col gap-4 w-full">
            {[
              { icon: MapPin,  text: "Antananarivo, Madagascar" },
              { icon: Mail,    text: "kevinrakoto77@gmail.com" },
              { icon: Phone,   text: "+261 32 48 268 45" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg border border-[#E0A002]/20 bg-[#E0A002]/08 flex items-center justify-center group-hover:border-[#E0A002]/50 group-hover:bg-[#E0A002]/15 transition-all duration-200">
                  <Icon size={14} className="text-[#E0A002]" />
                </div>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Réseaux */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/profile.php?id=100029404757920", icon: FaFacebook, hoverColor: "hover:text-[#1877F2]", label: "Facebook" },
              { href: "https://www.linkedin.com/in/kevin-rakotovao-92813a273/", icon: FaLinkedin, hoverColor: "hover:text-[#0A66C2]", label: "LinkedIn" },
              { href: "https://github.com/KevinShcmidt", icon: FaGithub, hoverColor: "hover:text-white", label: "GitHub" },
            ].map(({ href, icon: Icon, hoverColor, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-xl border border-[#E0A002]/15 bg-white/05 flex items-center justify-center text-white/50 ${hoverColor} hover:border-[#E0A002]/40 hover:bg-white/10 transition-all duration-200`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite — formulaire */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <p className="text-white/60 text-sm mb-6 text-center md:text-left">
            Feel free to contact me and send me a message here 😁
          </p>
          <ContactForm />
        </motion.div>
      </div>

      {/* ── Footer bas ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 mt-16 pt-8 border-t border-white/08 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs"
      >
        <span>© {new Date().getFullYear()} Kevin Rakotovao. All rights reserved.</span>
        <div className="flex items-center gap-1">
          <span>Designed & built with</span>
          <span className="text-[#E0A002]">♥</span>
          <span>in Madagascar</span>
        </div>
      </motion.div>

      {/* Effet blur original conservé */}
      <div className="absolute top-[450px] bg-custom-angular-gradient blur-[70px] w-full max-w-[800px] h-28 left-1/2 -translate-x-1/2" />
    </div>
  );
}