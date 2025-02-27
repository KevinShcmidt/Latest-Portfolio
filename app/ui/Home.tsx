"use client";
import Image from 'next/image'
import React, { ReactNode } from 'react'
import ButtonComponent from './ButtonComponent'

export default function Home() : ReactNode {
  return (
    <div
        className="relative w-full flex flex-col items-center justify-center h-screen px-4 xmd:px-8 xl:px-40"
        >
          <p className="text-sm">Hello 👋 !</p>
          <p className="text-sm md:mt-1">
            I&apos;m <span className="font-bold text-primary">KEVIN RAKOTOVAO</span>
          </p>
          <h1 className="xl:text-xl 2xl:text-4xl lg:mt-2 2xl:mt-4">
            Front-end developer and UI/UX Designer
          </h1>
          <div className="relative mt-2 w-[150px] h-80 2xl:w-[288px] 2xl:h-[400px]">
            <Image
              src="/images/walking.png"
              alt="Kevin Rakotovao FRONT-END DEVELOPER UI UX Designer"
              fill={true}
            />
          </div>
          <div className="mt-4">
            <ButtonComponent
              isPrimary={true}
              onClick={() => null}
              label="Learn about me"
            />
          </div>
          <div className="absolute bg-custom-angular-gradient blur-[70px] w-full h-28"></div>
        </div>
  )
}
