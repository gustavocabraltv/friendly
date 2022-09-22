import React from 'react'

import Typed from 'react-typed'

export const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[-96px] h-screen w-full lg:mx-auto md:mx-auto text-center flex flex-col justify-center items-center text-white p-4'>
        <p className='text-white'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-4xl text-white text-5xl font-bold'>Grow with Data</h1>
        <div className='text-xl font-normal flex justify-center gap-3'>
            <p>Fast, flexible financing</p>
            <Typed strings={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <button className='lg:w-fit md:w-fit sm:w-fit md:mt-8 bg-white text-black px-4 md:py-2 rounded-sm w-full py-4 mt-8'>Get Started</button>

    </div>
  )
}
