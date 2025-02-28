import React, { JSX } from 'react'
import Title from './Title'
import Image from 'next/image'

export default function Skill() : JSX.Element {
  return (
    <div className="mt-10 md:mt-16 mx-6 lg:mx-40">
        <Title text='My Skills' />
        <p className='mt-12 font-medium text-xl text-center'>
        As a front-end developer, I have gained extensive knowledge of technologies related to this field while also exploring back-end development for a better understanding of the industry. Here they are:
        </p>
        <div className="relative mt-16 w-full flex justify-center items-center">
            <div className="relative w-[300px] h-96 2xl:w-[288px] 2xl:h-[400px]">
                <Image src="/images/ctrl.png" alt="Kevin Rakotovao FRONT-END DEVELOPER UI UX Designer" fill={true} />
            </div>
        </div>
    </div>
  )
}
