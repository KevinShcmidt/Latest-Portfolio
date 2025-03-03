import React, { JSX } from "react";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact(): JSX.Element {
  return (
    <div className="w-full px-40">
      <h2 className="text-base text-center mt-20">
        Would you like a stunning design and high performance for your mobile
        and web app?
      </h2>
      <div className="mt-12 w-full flex items-center justify-center">
        <ButtonComponent label="Contact me" onClick={() => null} />
      </div>
      <h3 className="text-sm underline underline-offset-4 mt-16">
        Get in touch
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-4">
        <div className="w-full flex items-center justify-center flex-col">
          <div className="relative w-56 h-36">
            <Image
              src="/images/logo.png"
              alt="Kevin UI|UX Designer && Front-end developer"
              fill={true}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-base">
            Feel free to contact me and send me a message here 😁.
          </p>
          <div className="w-full mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
