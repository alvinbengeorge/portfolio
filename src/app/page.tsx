// import Image from 'next/image'

import { SocialIcon } from "react-social-icons";
import React from 'react';
import { Rubik_80s_Fade } from "next/font/google";

const heading_font = Rubik_80s_Fade({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
    <div className='text-center'>
      <h1 className={'text-8xl text-center p-2 rounded-md text-white  inline '+heading_font.className}>
        Hello World!  
      </h1>
    </div>
    <p className='text-center text-slate-100 p-4 text-wrap'>
      Hi, I am <span className='text-slate-400'>Alvin Ben George</span><br></br>
      <span className='text-slate-400'>Backend Developer</span> from India
    </p>
    <div className="flex justify-center">
      <div className="p-1">
        <SocialIcon url="https://github.com/alvinbengeorge" target="_blank" className="p-2"/>
      </div>
      <div className="p-1">
        <SocialIcon url="https://linkedin.com/in/alvinbengeorge" target="_blank" className="p-2"/>
      </div>
      <div className="p-1">
        <SocialIcon url="https://www.instagram.com/alvinallen333/" target="_blank" className="p-2"/>
      </div>
      <div className="p-1">
        <SocialIcon url="https://monkeytype.com/profile/alvinbengeorge" target="_blank" className="p-2"/>
      </div>
    </div>
    </>
  )
}
