import './.css'
import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

import texts from '../../texts'
import imgBefore from '../../assets/solar-car-port-before.png'
import imgAfter from '../../assets/solar-car-port-after.png'

function Solar() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['1 0', '1 1']})

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
    setTransition(latest >= 1)
  })

  return (
    <motion.div
      className="flex flex-col py-[25vw]"
      variants={variants}
      animate={transition ? 'backgroundInactive' : 'backgroundActive'}
    >
      <div className="solar_text">
        {texts['solar-body-1']}
      </div>
      <div className="solar_image-wrapper">
        <motion.div
          className="absolute z-2 top-0 overflow-hidden"
          style={{ transformOrigin: 'center bottom' }}
          variants={variants}
          animate={ transition ? 'beforeInactive' : 'beforeActive' }
        >
          <div className="solar_image-container">
            <img src={imgAfter} style={{ height: 'auto' }} />
          </div>
        </motion.div>
        <div className="absolute z-1 top-0">
          <div className="solar_image-container">
            <img src={imgBefore} style={{ height: 'auto' }} />
          </div>
        </div>
      </div>
      <div className="solar_text" ref={ref}>
        {(texts['solar-body-2']).split('').map((char, i) =>
          <motion.span
            key={i}
            animate={transition ? { opacity: 0.3 } : { opacity: 1, transition: { delay: 0.01 * i }}}
          >
            {char}
          </motion.span>
        )}
      </div>
    </motion.div>
  )
}

export default Solar