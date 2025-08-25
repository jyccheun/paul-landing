import React, { useRef } from 'react'
import './.css'

import { motion, useScroll } from 'motion/react'

function Component1() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 0'] })

  return (
    <>
      <div className="bg-lime-200 h-screen w-full" ref={ref}>

        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: '#ff0088',
          }}
        />
      </div>
    </>
  )
}

export default Component1
