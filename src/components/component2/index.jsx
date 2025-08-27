import React, { useRef } from 'react'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import './.css'

import a from '../../assets/ai-solar-panel.png'
import b from '../../assets/Gemini_Generated_Image_hsvyd2hsvyd2hsvy.png'
import c from '../../assets/Gemini_Generated_Image_i62ou8i62ou8i62o.png'

function Component2() {
  const ref = useRef()
  const containerRef = useRef()
  const { scrollY, scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] })
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.333], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.333, 0.6, 0.666], [1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.666, 0.7, 1], [1, 1, 1])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest)
  })

  return (
    <div className="bg-yellow-200 w-full">
      <div className='text-7xl py-10 px-[15%] text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend lorem non vestibulum.
      </div>
      <div className='bg-sky-200 h-[300vh] relative' ref={ref}>
        <div className='absolute top-0 left-0 flex flex-row'>
          <div className='flex-1'>
            <div className='flex items-center text-4xl h-screen'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend lorem non vestibulum.
            </div>
            <div className='flex items-center text-4xl h-screen'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend lorem non vestibulum.
            </div>
            <div className='flex items-center text-4xl h-screen'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend lorem non vestibulum.
            </div>
          </div>
          <div className='flex-1' />
        </div>
        <div className='h-screen sticky top-0 flex flex-row p-[30px]'>
          <div className='flex-1' />
          <div className='flex-1 clip-image' style={{ position: 'relative' }}>
            <motion.img src={a} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 3, opacity: opacity1 }} />
            <motion.img src={b} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 2, opacity: opacity2 }} />
            <motion.img src={c} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, opacity: opacity3 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component2