import './.css'
import { useRef } from 'react'
import { useScroll, useTransform } from 'motion/react'

import OutdoorSlide from '../../components/outdoorSlide'

import texts from '../../texts'
import img1 from '../../assets/building-bipv-vertical.png'
import img2 from '../../assets/building-eifs-vertical.png'
import img3 from '../../assets/solar-panel-roof-vertical.png'
import img4 from '../../assets/heat-pump-vertical.png'

function Outdoor() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 1']})

  const animations = {
    slide1: {
      opacity: {
        in: [0,1/3],
        out: [1, 0.2]
      },
      translateY: {
        in: [0,1/3],
        out: ['0', '-25vh']
      },
    },
    slide2: {
      opacity: {
        in: [1/3,2/3],
        out: [1, 0.2]
      },
      translateY: {
        in: [1/3,2/3],
        out: ['0', '-25vh']
      },
    },
    slide3: {
      opacity: {
        in: [2/3,1],
        out: [1, 0.2]
      },
      translateY: {
        in: [2/3,1],
        out: ['0', '-25vh']
      },
    },
  }

  const slide1Opacity = useTransform(scrollYProgress, animations.slide1.opacity.in, animations.slide1.opacity.out)
  const slide1TranslateY = useTransform(scrollYProgress, animations.slide1.translateY.in, animations.slide1.translateY.out)
  const slide2Opacity = useTransform(scrollYProgress, animations.slide2.opacity.in, animations.slide2.opacity.out)
  const slide2TranslateY = useTransform(scrollYProgress, animations.slide2.translateY.in, animations.slide2.translateY.out)
  const slide3Opacity = useTransform(scrollYProgress, animations.slide3.opacity.in, animations.slide3.opacity.out)
  const slide3TranslateY = useTransform(scrollYProgress, animations.slide3.translateY.in, animations.slide3.translateY.out)

  return (
    <div>
      <div className="h-[420vh] relative" ref={ref}>
        <OutdoorSlide
          image={img1}
          heading={texts['outdoor-slide-1-heading']}
          body={texts['outdoor-slide-1-body']}
          animateOpacity={slide1Opacity}
          animateTranslateY={slide1TranslateY}
        />
        <OutdoorSlide
          image={img2}
          heading={texts['outdoor-slide-2-heading']}
          body={texts['outdoor-slide-2-body']}
          animateOpacity={slide2Opacity}
          animateTranslateY={slide2TranslateY}
        />
        <OutdoorSlide
          image={img3}
          heading={texts['outdoor-slide-3-heading']}
          body={texts['outdoor-slide-3-body']}
          animateOpacity={slide3Opacity}
          animateTranslateY={slide3TranslateY}
        />
        <OutdoorSlide
          image={img4}
          heading={texts['outdoor-slide-4-heading']}
          body={texts['outdoor-slide-4-body']}
          animateOpacity={null}
          animateTranslateY={null}
        />
      </div>
    </div>
  )
}

export default Outdoor