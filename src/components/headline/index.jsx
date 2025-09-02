import React, { useRef } from 'react'
import './.css'

import apartment from '../../assets/apartment.png'

function Headline() {
  const ref = useRef()

  return (
    <div className="bg-lime-200 h-[100vh] w-full" ref={ref}>
      <div className='sticky top-0'>
        <div className='relative h-[100vh]'>
          <div className='headline_image-mask' />
          <img className='headline_image-apartment' src={apartment} />
        </div>
        <div className='absolute top-[25vh] z-10 w-full flex'>
          <div className='w-full max-w-[1280px] mx-auto text-white'>
            <div className='text-3xl'>Modern Retrofit Solutions</div>
            <div className='text-7xl ml-[-2px]'>Upgrades of the Future</div>
            <div className='text-3xl mt-[20px]'>Innovation at its finest</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headline