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

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('x changed to', latest)
  })

  return (
    <div className="bg-black w-full flex flex-col">

      <div className='w-full mx-auto h-[300vh] relative' ref={ref}>
        <div className='h-screen sticky top-0 flex overflow-hidden'>
          <motion.div className='buildingSolution_image-container' style={{ translateX }}>
            <motion.img src={imgBipv} style={{ width }} />
            <motion.img src={imgBipvColored} style={{ width }} />
            <motion.img src={imgEifs} style={{ width }} />
          </motion.div>

          <motion.div
            className='absolute top-[25vh] z-10 w-full flex flex-col'
          >
            <div className='text-5xl py-10 text-center leading-16 text-white'>
              Because making use of your space<br />is important
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BuildingSolution