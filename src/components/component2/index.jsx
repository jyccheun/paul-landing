import React, { useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import './.css'

import a from '../../assets/a.jpg'
import b from '../../assets/b.jpg'
import c from '../../assets/c.jpg'
import d from '../../assets/d.jpg'

function Component2() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '0.5 0', '1 0'] })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest)
  })

  return (
    <div className="bg-yellow-200 w-full">
      <motion.div className='flex flex-row py-[50px]'>
        <div className='text-7xl flex-1 flex items-center justify-center'>
          1
        </div>
        <motion.div ref={ref} style={{
          opacity: scrollYProgress
        }}>
          <img src={a} className='max-w-[50vw] min-h-[50vh]' />
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row py-[50px]'>
        <div className='text-7xl flex-1 flex items-center justify-center'>
          2
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={b} className='max-w-[50vw] min-h-[50vh]' />
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row py-[50px]'>
        <div className='text-7xl flex-1 flex items-center justify-center'>
          3
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={c} className='max-w-[50vw] min-h-[50vh]' />
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row py-[50px]'>
        <div className='text-7xl flex-1 flex items-center justify-center'>
          4
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={d} className='max-w-[50vw] min-h-[50vh]' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Component2