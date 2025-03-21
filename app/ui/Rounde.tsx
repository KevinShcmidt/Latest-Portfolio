import React, { JSX } from 'react'

export default function Rounde() : JSX.Element {
  return (
    <div className='relative flex justify-center items-center'>
        <div className="absolute w-8 h-8 bg-white rounded-full">

        </div>
        <div className="absolute w-4 h-4 bg-primary animate-[spin_5s_linear_infinite]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
</div>
    </div>
  )
}
