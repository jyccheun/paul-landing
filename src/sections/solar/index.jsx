import './.css'
import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'

import imgBefore from '../../assets/solar-car-port-edit-DkZ1M-F1.png'
import imgAfter from '../../assets/solar-car-port-edit-2-oxQSxhRE.png'

function Solar() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 1']})

  const [transition, setTransition] = useState(false)

  const variants = {
    backgroundActive: {
      backgroundColor: '#374151',
      transition: { duration: 0.5 }
    },
    backgroundInactive: {
      backgroundColor: '#181a19',
      transition: { duration: 0.5 }
    },
    beforeActive: {
      height: '80vh',
      transition: { duration: 0.5 }
    },
    beforeInactive: {
      height: '0vh',
      transition: { duration: 0.5 }
    },
    afterActive: {
      height: '0%',
      transition: { duration: 0.5 }
    },
    afterInactive: {
      height: '100%',
      transition: { duration: 0.5 }
    },
  }

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setTransition(latest > 1/2)
  })

  return (
    <motion.div
      className="flex flex-col py-[25vw]"
      variants={variants}
      animate={transition ? 'backgroundInactive' : 'backgroundActive'}
      // style="background-color: rgb(24, 26, 25);"
    >
      <div className="solar_text">
        In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
      </div>
      <div className="solar_image-wrapper" ref={ref}>
        <motion.div
          className="absolute z-2 top-0 overflow-hidden"
          style={{ transformOrigin: 'center bottom' }}
          variants={variants}
          animate={ transition ? 'beforeInactive' : 'beforeActive' }
        // style="transform-origin: center bottom; height: 80vh;"
        >
          <div className="solar_image-container">
            <img src={imgBefore} style={{ height: 'auto' }} />
          </div>
        </motion.div>
        <div className="absolute z-1 top-0">
          <div className="solar_image-container">
            <img src={imgAfter} style={{ height: 'auto' }} />
          </div>
        </div>
      </div>
      <div className="solar_text">
        Donec posuere ante eget lorem tristique, sed mollis lectus ullamcorper.
        {/* <span style="opacity: 0.3;">Donec </span>
        <span style="opacity: 0.3;">posuere </span>
        <span style="opacity: 0.3;">ante </span>
        <span style="opacity: 0.3;">eget </span>
        <span style="opacity: 0.3;">lorem </span>
        <span style="opacity: 0.3;">tristique, </span>
        <span style="opacity: 0.3;">sed </span>
        <span style="opacity: 0.3;">mollis </span>
        <span style="opacity: 0.3;">lectus </span>
        <span style="opacity: 0.3;">ullamcorper. </span> */}
      </div>
    </motion.div>
  )
}

export default Solar