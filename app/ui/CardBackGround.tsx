import Image from 'next/image'
import React, { JSX } from 'react'

interface CardBackGroundProps {
    date: string;
    postTitle: string;
    logoEs: string;
    es: string;
    description: string;
    position: string; // 'start', 'center', 'end', etc.
}

export default function CardBackGround({ date, postTitle, logoEs, es, description, position }: CardBackGroundProps): JSX.Element {
  // Construire la classe de positionnement
  const justifyClass = `justify-${position}`;
  
  return (
    <div className={`w-80 lg:w-96 lg:h-56 text-[12px] lg:text-sm glass rounded-2xl flex flex-col items-start ${justifyClass} gap-2 p-4`}>
      <p className='font-semibold'>{date}</p>
      <h3 className='font-semibold text-[#7B2CBF]'>{postTitle}</h3>
      <div className="flex justify-start items-center gap-2">
        <div className="relative w-8 h-8 rounded-full">
          <Image src={logoEs} style={{ borderRadius: "100%" }} alt="Logo Viseo" fill={true} />
        </div>
        <h4 className='font-semibold'>{es}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}