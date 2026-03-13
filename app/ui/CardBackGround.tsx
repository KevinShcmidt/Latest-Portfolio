import Image from "next/image";
import React, { JSX } from "react";

interface CardBackGroundProps {
  date: string;
  postTitle: string;
  logoEs: string;
  es: string;
  description: string;
  position: string; // 'start', 'center', 'end', etc.
}

export default function CardBackGround({
  date,
  postTitle,
  logoEs,
  es,
  description,
  position,
}: CardBackGroundProps): JSX.Element {
  // Construire la classe de positionnement
  const justifyClass = `justify-${position}`;

  return (
    <div
      className={`bg-[#f1f1f1] w-full md:w-80 lg:w-96 h-[232px] text-[11px] sm:text-[12px] lg:text-sm rounded-xl sm:rounded-2xl flex flex-col items-start ${justifyClass} gap-1 sm:gap-2 p-3 sm:p-4`}
    >
      <p className="font-medium text-[#14213d]">{date}</p>
      <h3 className="font-semibold text-[#14213d] text-sm sm:text-base">
        {postTitle}
      </h3>
      <div className="flex justify-start items-center gap-2 mt-1">
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full overflow-hidden">
          <Image
            src={logoEs}
            alt={`Logo ${es}`}
            fill={true}
            sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
            className="object-cover"
          />
        </div>
        <h4 className="font-semibold text-[#fca311]">{es}</h4>
      </div>
      {/* Description avec ellipsis si dépassement */}
      <p className="text-[#333333] mt-1 sm:mt-2 h-[80px] overflow-hidden text-ellipsis line-clamp-5">
        {description}
      </p>
    </div>
  );
}
