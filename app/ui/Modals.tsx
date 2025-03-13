import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

export default function Modals({ onClose }: { onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Example images for the slider
  const images = [
    "/images/CardImage/chargeoEv.png",
    "/images/CardImage/elcdis.png",
    "/images/CardImage/energie.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
        >
          <FaTimes size={24} />
        </button>

        {/* Slider Section */}
        <div className="relative w-full h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}

          {/* Slider Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Kevin Rakotovao</h2>
          <p className="text-gray-600 mt-2">
            Front-end Developer and UI/UX Designer
          </p>
          <p className="text-gray-600 mt-4">
            I am a front-end developer and UI/UX Designer based in Antananarivo,
            Madagascar. I am passionate about creating beautiful and functional
            websites and applications. I have experience in developing websites
            and applications using modern technologies such as React, Next.js,
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}