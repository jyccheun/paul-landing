import './.css'
import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

import texts from '../../texts'
import img1 from '../../assets/random-building-2.png'
import img2 from '../../assets/building-solar-1.png'

function Introduction() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 1']})

  const animations = {
    img1: {
      width: {
        in: [0,1/4],
        out: !isMobile ? ['100vw', '50vw'] : ['100vw', '100vw'],
      },
      scale: {
        in: [0, 1/4],
        out: !isMobile ? [1.2, 1] : [1, 1],
      },
      opacity: {
        in: [1/4, 1/3],
        out: !isMobile ? [1, 0] : [1, 1],
      },
      translateX: {
        in: [1/3, 1],
        out: !isMobile ? ['0vw', '0vw'] : ['0vw', '100vw'],
      },
    },
    text1: {
      height: !isMobile ? '100vh' : '50vh',
      width: !isMobile ? '50vw' : '100vw',
      opacity: {
        in: [1/4, 1/3],
        out: !isMobile ? [1, 0] : [1, 1],
      },
      translateX: {
        in: !isMobile ? [0, 1/4] : [1/3, 1],
        out: !isMobile ? [-45, 0] : ['0vw', '100vw'],
      }
    },
    img2: {
      width: {
        in: [1/3, 3/4, 1],
        out: !isMobile ? ['0vw', '40vw', '100vw'] : ['100vw', '100vw', '100vw'],
      },
      scale: {
        in: [3/4, 1],
        out: !isMobile ? [1, 1.2] : [1, 1],
      },
      opacity: {
        in: !isMobile ? [1/4, 1/3] : [1/3, 1],
        out: !isMobile ? [1, 1] : [0, 1],
      },
    },
    text2: {
      height: !isMobile ? '100vh' : '50vh',
      width: !isMobile ? '50vw' : '100vw',
      opacity: {
        in: !isMobile ? [1/2, 3/4] : [1/3, 1],
        out: !isMobile ? [0, 1] : [0, 1],
      },
      translateY: {
        in: [1/2, 3/4],
        out: !isMobile ? [45, 0] : [0, 0],
      },
      background: {
        in: [2/3, 1],
        out: !isMobile ? ['#00000000', '#00000000'] : ['#000000', '#181a19'],
      },
    },
  }

  const img1Width = useTransform(scrollYProgress, animations.img1.width.in, animations.img1.width.out)
  const img1Scale = useTransform(scrollYProgress, animations.img1.scale.in, animations.img1.scale.out)
  const img1Opacity = useTransform(scrollYProgress, animations.img1.opacity.in, animations.img1.opacity.out)
  const img1TranslateX = useTransform(scrollYProgress, animations.img1.translateX.in, animations.img1.translateX.out)
  const text1Height = animations.text1.height
  const text1Width = animations.text1.width
  const text1Opacity = useTransform(scrollYProgress, animations.text1.opacity.in, animations.text1.opacity.out)
  const text1TranslateX = useTransform(scrollYProgress, animations.text1.translateX.in, animations.text1.translateX.out)
  const img2Width = useTransform(scrollYProgress, animations.img2.width.in, animations.img2.width.out)
  const img2Opacity = useTransform(scrollYProgress, animations.img2.opacity.in, animations.img2.opacity.out)
  const img2Scale = useTransform(scrollYProgress, animations.img2.scale.in, animations.img2.scale.out)
  const text2Height = animations.text2.height
  const text2Width = animations.text2.width
  const text2Opacity = useTransform(scrollYProgress, animations.text2.opacity.in, animations.text2.opacity.out)
  const text2TranslateY = useTransform(scrollYProgress, animations.text2.translateY.in, animations.text2.translateY.out)
  const text2Background = useTransform(scrollYProgress, animations.text2.background.in, animations.text2.background.out)

  return (
    <div className='bg-dark' style={{ paddingBottom: !isMobile ? '50vh' : 0 }}>
      <div
        ref={ref}
        className="relative z-10"
        style={{ height: !isMobile ? '300vh' : '200vh', paddingBottom: !isMobile ? 0 : 0 }}
      >
        <div className="introduction_wrapper">
          <motion.div
            className="introduction_image-wrapper z-4 right-0"
            style={{ width: img1Width, scale: img1Scale, opacity: img1Opacity, translateX: img1TranslateX }}
          >
            <img
              className="introduction_image" src={img1}
              style={{ height: !isMobile ? '110vh' : '50vh' }}
            />
          </motion.div>
          <motion.div
            className="introduction_text bg-[#181a19] text-xl z-3 left-0 bottom-0"
            style={{ height: text1Height, width: text1Width, opacity: text1Opacity, translateX: text1TranslateX }}
          >
            {texts['intro-body-1']}
          </motion.div>
          <motion.div
            className="introduction_image-wrapper z-2 top-0 left-0"
            style={{ width: img2Width, scale: img2Scale, opacity: img2Opacity }}
          >
            <img className="introduction_image" src={img2} style={{ height: !isMobile ? '110vh' : '50vh' }} />
          </motion.div>
          <motion.div
            className="introduction_text text-xl right-0 bottom-0 z-1"
            style={{ height: text2Height, width: text2Width, opacity: text2Opacity, translateY: text2TranslateY, backgroundColor: text2Background }}
          >
            {texts['intro-body-2']}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Introduction