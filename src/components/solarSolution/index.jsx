import React, { useRef } from 'react'
import { easeIn, motion } from 'motion/react'
import './.css'

import imgParking from '../../assets/parking-lot-2.png'
import imgParkingSolar from '../../assets/parking-lot-2-w-solar.png'

function SolarSolution() {
  const imgParkingRef = useRef()

  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: 3 }
    },
    visibleText: {
      y: -30,
      opacity: 1,
      transition: { duration: 3, y: { duration: 1.5, ease: 'easeOut' } }
    },
    hidden: {
      opacity: 0,
    },
  }

  return (
    <div className="bg-white w-full flex flex-col">


      <div className='w-full mx-auto h-[100vh] relative'>
        <div className='h-screen sticky top-0 flex'>
          <div className='solarSolution_image-container'>
            <motion.img src={imgParking} className='z-1' />
            <motion.img
              src={imgParkingSolar}
              className="z-2"
              ref={imgParkingRef}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className='absolute top-[25vh] z-10 w-full flex flex-col'
            variants={variants}
            initial="hidden"
            whileInView="visibleText"
            viewport={{ once: true }}
          >
            <div className='w-full max-w-[1280px] mx-auto text-white'>
              <div className='text-7xl ml-[-2px]'>Install solar car ports</div>
            </div>
            <div className='w-full max-w-[1280px] mx-auto text-white'>
              <div className='text-5xl mt-[30px] ml-[20px]'>Keep it shaded</div>
              <div className='text-5xl mt-[30px] ml-[20px]'>Easy supply of charge</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SolarSolution