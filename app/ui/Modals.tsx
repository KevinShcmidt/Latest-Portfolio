import Image from 'next/image'
import React from 'react'

export default function Modals() {
  return (
    <div className='w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 ease-in-out p-6 bg-primary'>
        <div className="w-full grid grid-cols-2">
            <div className="w-full relative">
                <Image src="/images/kevin-rakotovao.jpg" alt="Kevin Rakotovao" layout="fill" objectFit="cover" />
            </div>
            <div className="w-full p-4">
                <h2 className="text-2xl font-bold text-white">Kevin Rakotovao</h2>
                <p className="text-white">Front-end developer and UI/UX Designer</p>
                <p className="text-white">I am a front-end developer and UI/UX Designer based in Antananarivo, Madagascar. I am passionate about creating beautiful and functional websites and applications. I have experience in developing websites and applications using modern technologies such as React, Next.js, and Tailwind CSS.</p>
            </div>
        </div>

    </div>
  )
}
