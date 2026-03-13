"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { X } from "lucide-react";
import * as motion from "motion/react-client";

interface ModalsProps {
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
}

export default function Modals({ onClose, title, description, images }: ModalsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E0A002]/20"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#14213d]/80 flex items-center justify-center text-white hover:bg-[#E0A002] transition-colors duration-200"
        >
          <X size={16} />
        </button>

        {/* Slider */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#14213d]/5 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ))}

          {/* Nav boutons — seulement si plusieurs images */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#E0A002] transition-colors duration-200"
              >
                <FaArrowLeft size={14} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#E0A002] transition-colors duration-200"
              >
                <FaArrowRight size={14} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentSlide ? "w-5 h-2 bg-[#E0A002]" : "w-2 h-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Compteur */}
          {images.length > 1 && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-mono">
              {String(currentSlide + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-[#E0A002]" />
            <h2 className="text-lg sm:text-xl font-bold text-[#14213d]">{title}</h2>
          </div>
          <p className="text-sm text-[#14213d]/65 leading-relaxed whitespace-pre-line">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}