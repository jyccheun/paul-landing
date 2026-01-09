import './.css'
import { useRef } from 'react'
import { useMotionTemplate, useScroll, motion, useTransform } from 'motion/react'

import texts from '../../texts'
import imgApartment from '../../assets/random-building-1.png'

function Headline() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 0']})
  const transformBackground = useTransform(scrollYProgress, [0, 1/3], ['100%', '0%'])
  const scrollBackground = useMotionTemplate`linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0) ${transformBackground}, rgb(0, 0, 0))`
  const transformFooter = useTransform(scrollYProgress, [2/3, 1], [1, 0])

  return (
    <div className="h-[200vh] flex flex-col" ref={ref}>
      <div className="sticky top-0 h-screen">
        <motion.div
          className="headline_image-container"
          style={{ background: scrollBackground }}
        >
          <img className="headline_image-apartment" src={imgApartment} />
        </motion.div>
      </div>
      <div className="absolute bottom-0 z-10 w-full flex flex-col justify-center p-1">
        <div className="mx-auto">
          <div className="headline_sub-text">{texts['headline-slogan-1']}</div>
          <div className="headline_main-text">
            {(texts['headline-slogan-2']).split('').map((char, i) =>
              <motion.span
                key={i}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1, transition: { delay: 0.05 * i }}}
              >
                {char}
              </motion.span>
            )}
          </div>
        </div>
      </div>
      <motion.div
        className="headline_footer"
        style={{ opacity: transformFooter, translateY: transformFooter, scale: transformFooter }}
      >
        {texts['headline-footer-1']}
      </motion.div>
    </div>
  )
}

export default Headline