import './.css'
import { useRef } from 'react'
import { useMotionTemplate, useScroll, motion, useTransform } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

import img1 from '../../assets/random-building-3-BkkwaFFK.png'
import img2 from '../../assets/building-solar-2-DJW7df3q.png'

function Introduction() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  // <div className="bg-[#181a19] relative z-10"
  // // style="height: 200vh; padding-bottom: 0px;"
  // >
  //   <div className="introduction_wrapper">
  //     <div className="introduction_image-wrapper z-4 right-0"
  //     // style="opacity: 1; width: 100vw; transform: translateX(8.92857vw);"
  //     >
  //       <img className="introduction_image" src="/paul-landing/assets/random-building-3-BkkwaFFK.png"
  //       // style="height: 60vh;"
  //       />
  //     </div>
  //     <div
  //       className="introduction_text bg-[#181a19] text-xl z-3 left-0 bottom-0"
  //     // style="opacity: 1; height: 40vh; width: 100vw; transform: translateX(8.92857vw);"
  //     >
  //       In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
  //     </div>
  //     <div
  //       className="introduction_image-wrapper z-2 top-0 left-0"
  //     // style="width: 100vw; opacity: 0.0892857; transform: none;"
  //     >
  //       <img className="introduction_image" src="/paul-landing/assets/building-solar-2-DJW7df3q.png"
  //       // style="height: 60vh;"
  //       />
  //     </div>
  //     <div
  //       className="introduction_text text-xl right-0 bottom-0 z-1"
  //     // style="height: 40vh; width: 100vw; background-color: rgb(0, 0, 0); transform: none;"
  //     >
  //       <span style="opacity: 0.0892857;">
  //         Nulla eget eros pulvinar, scelerisque elit eu, dictum diam. Nam id diam vitae est porta mattis. Suspendisse iaculis elementum dolor, sed auctor nisi.
  //       </span>
  //     </div>
  //   </div>
  // </div>

  return (
    <div
      className="bg-[#181a19] relative z-10"
    // style="height: 300vh; padding-bottom: 50vh;"
    >
      <div className="introduction_wrapper">
        <div
          className="introduction_image-wrapper z-4 right-0"
          // style="opacity: 1; width: 100vw; transform: scale(1.2);"
        >
          <img className="introduction_image" src={img1}
          // style="height: 110vh;"
          />
        </div>
        <div
          className="introduction_text bg-[#181a19] text-xl z-3 left-0 bottom-0"
          // style="height: 100vh; width: 50vw; opacity: 1; transform: translateX(-45px);"
        >
          In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
        </div>
        <div
          className="introduction_image-wrapper z-2 top-0 left-0"
          // style="opacity: 1; width: 0vw; transform: none;"
        >
          <img className="introduction_image" src={img2}
          // style="height: 110vh;"
          />
        </div>
        <div
          className="introduction_text text-xl right-0 bottom-0 z-1"
          // style="background-color: transparent; height: 100vh; width: 50vw; transform: translateY(45px);"
        >
          <span
            // style="opacity: 0;"
          >
            Nulla eget eros pulvinar, scelerisque elit eu, dictum diam. Nam id diam vitae est porta mattis. Suspendisse iaculis elementum dolor, sed auctor nisi.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Introduction