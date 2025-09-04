import React, { useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import './.css'

import useWindowDimensions from '../../hooks/useWindowDimension'

import imgBipv from '../../assets/bipv.png'
import imgBipvColored from '../../assets/bipv-colored.png'
import imgEifs from '../../assets/eifs.png'

function BuildingSolution() {
  const ref = useRef()
  const { width } = useWindowDimensions()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 1'] })
  const translateX = useTransform(scrollYProgress, [0.25, 1], [width, -2*width])
  // const translateX = useSpring(transformX, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // })

  return (
    <div className="bg-black w-full flex flex-col">

      <div className='w-full mx-auto h-[300vh] relative' ref={ref}>
        <div className='h-screen sticky top-0 flex overflow-hidden'>
          <motion.div className='buildingSolution_image-container' style={{ translateX }}>
            <div className='w-[100vw] h-full relative overflow-hidden'>
              <img src={imgBipv} />
              <div className='absolute bottom-[25vh] left-0 right-0'>
                <div className='text-center text-5xl buildingSolution_text-outline'>
                  Building-integrated<br />photovoltaics (BIPV)
                </div>
              </div>
            </div>
            <div className='w-[100vw] h-full relative overflow-hidden'>
              <img src={imgBipvColored} />
              <div className='absolute bottom-[25vh] left-0 right-0'>
                <div className='text-center text-5xl buildingSolution_text-outline'>
                  Comes in an assortment of colors
                </div>
              </div>
            </div>
            <div className='w-[100vw] h-full relative overflow-hidden'>
              <img src={imgEifs} />
              <div className='absolute bottom-[25vh] left-0 right-0'>
                <div className='text-center text-5xl buildingSolution_text-outline'>
                  External Insulation<br />Finishing System (EIFS)
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className='absolute top-[25vh] z-10 w-full flex flex-col'
          >
            <div className='text-4xl py-10 text-center leading-16 text-white'>
              Because making use of your space<br />is important
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BuildingSolution