import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

const OutdoorSlide = ({ image, heading, body, animateOpacity, animateTranslateY }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="outdoor_wrapper">
      <div
        className="outdoor_slide"
        // style="flex-direction: column; height: 896px;"
      >
        <motion.div
          className="outdoor_slide-content"
          style={{ opacity: animateOpacity, translateY: animateTranslateY }}
        >
          <div className="outdoor_slide-title text-2xl">
            {heading}
          </div>
          <div
            className="flex-row-reverse"
            style={{ display: !isMobile ? 'flex' : 'inline' }}
          >
            <div
              className="outdoor_slide-image"
              style={{ height: !isMobile ? '100vh' : '50vh' }}
            >
              <img src={image} />
            </div>
            <div
              className="outdoor_slide-text text-xl"
              style={{ height: !isMobile ? '100vh' : '50vh' }}
            >
              <div>{body}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OutdoorSlide