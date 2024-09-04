import React from 'react'
import { HERO_CONTENT } from '@/constants'
import Profile2 from '@/assets/p3.png'

import Image from 'next/image'

const Profile = () => {
  return (
    <div className='border-b border-neutral-900 pb-24 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-16  text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Oussama SEQQAM</h1>
            <span
              className='bg-gradient-to-r
              from-pink-300 via-slate-500
              to-purple-500
              bg-clip-text
              text-4xl
              text-transparent'
            >
              Full Stack Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light'>{HERO_CONTENT}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-9'>
          <div className='flex justify-center'>
            <Image src={Profile2} alt='Profile Picture' width={600} height={300} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile