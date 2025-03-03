import React, { JSX } from "react";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { ChevronDown } from "lucide-react";

export default function Contact(): JSX.Element {
  return (
    <div className="relative w-full px-6 sm:px-10 md:px-20 lg:px-40">
      <h2 className="text-base text-center mt-16 sm:mt-20">
        Would you like a stunning design and high performance for your mobile
        and web app?
      </h2>

      <div className="mt-8 sm:mt-12 w-full flex items-center justify-center">
        <ButtonComponent icon={ChevronDown} label="Contact me" onClick={() => null} />
      </div>

      <h3 className="text-sm underline underline-offset-4 mt-12 sm:mt-16 text-center sm:text-left">
        Get in touch
      </h3>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <div className="relative w-40 h-28 sm:w-56 sm:h-36">
            <Image
              src="/images/logo.png"
              alt="Kevin UI|UX Designer && Front-end developer"
              fill={true}
            />
          </div>
        </div>

        {/* Formulaire */}
        <div className="w-full">
          <p className="text-sm sm:text-base text-center sm:text-left">
            Feel free to contact me and send me a message here 😁.
          </p>
          <div className="w-full mt-4">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Effet Blur */}
      <div className="absolute top-[450px] bg-custom-angular-gradient blur-[70px] w-full max-w-[800px] h-28 left-1/2 -translate-x-1/2"></div>
    </div>
  );
}
