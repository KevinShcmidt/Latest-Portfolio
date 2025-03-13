import Image from "next/image";
import React, { JSX } from "react";
interface CardWorkProps {
  imagePath: string;
  title: string;
  description: string;
  buttonAction: () => void;
}

export default function CardWork({
  imagePath,
  title,
  description,
  buttonAction,
}: CardWorkProps): JSX.Element {
  return (
    <div className="w-full h-96 rounded-2xl glass flex flex-col gap-4 items-center justify-start hover:scale-105 transition-transform duration-300 group">
      <div className="relative w-full h-52 rounded-t-[16px] overflow-hidden">
        <Image
          src={imagePath}
          fill={true}
          alt="Image of a project"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 w-full">
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-sm text-start mt-4 font-normal flex-1 overflow-y-auto">{description}</p>
        <button
          onClick={buttonAction}
          className="w-full text-end mt-4 text-base text-primary font-bold"
        >
          View project
        </button>
      </div>
    </div>
  );
}