import React, { JSX } from 'react'

export default function Title({ text  } : { text : string }) : JSX.Element {
  return (
    <h2 className="text-center underline underline-offset-4">{text}</h2>
  )
}
