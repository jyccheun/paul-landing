import './.css'
import { IoMdAdd } from 'react-icons/io'
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

import texts from '../../texts'
import img1 from '../../assets/indoor-washroom-split-1.png'
import img2 from '../../assets/indoor-washroom-split-2.png'
import img3 from '../../assets/indoor-washroom-split-3.png'

function Washroom() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ maxWidth: 1224 })

  const popupMotion = {
    rest: { height: 48, width: 48 },
    hover: { height: 'auto', width: 'auto', transition: { type: 'tween' }}
  }

  const popupTextMotion = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0, delay: 0.2 }}
  }

  return (
  // <div className="pb-[40vh] bg-cool overflow-hidden">
  //   <div className="washroom_wrapper washroom_wrapper_m">
  //     <div className=" washroom_carousel_m">
  //       <div className="washroom_container washroom_container_m">
  //         <img src="/paul-landing/assets/indoor-washroom-split-1-B0_UuQaB.png">
  //         <div className="washroom_see-more" style="top: 2.5vw; left: 2.5vw; border-radius: 0.5em;">
  //           <div className="p-[16px] overflow-hidden" style="height: auto; width: 75vw;">
  //             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
  //               </path>
  //             </svg>
  //             <div className="text-xl mt-[16px] w-[262px]">
  //               Aerator
  //               <br>
  //               In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="washroom_container washroom_container_m">
  //         <img src="/paul-landing/assets/indoor-washroom-split-2-DK92V5fo.png">
  //         <div className="washroom_see-more" style="bottom: 30%; left: 2.5vw; border-radius: 0.5em;">
  //           <div className="p-[16px] overflow-hidden" style="height: auto; width: 75vw;">
  //             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="absolute bottom-[16px]" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
  //               </path>
  //             </svg>
  //             <div className="text-xl w-[262px]" style="margin-top: 0px; margin-bottom: 32px;">
  //               Low-flow Toilets
  //               <br>
  //               In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="washroom_container washroom_container_m">
  //         <img src="/paul-landing/assets/indoor-washroom-split-3-Bb7eXrmw.png">
  //         <div className="washroom_see-more" style="top: 25%; right: 2.5vw; border-radius: 0.5em;">
  //           <div className="p-[16px] overflow-hidden" style="height: auto; width: 75vw;">
  //             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="absolute right-[16px]" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
  //               </path>
  //             </svg>
  //             <div className="text-xl mt-[32px] w-[262px]">
  //               Low-flow Showerheads
  //               <br>
  //               In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

    <div className="pb-[40vh] pt-[20vh] bg-cool overflow-hidden">
      {isTablet ?
        <div className="text-xl font-semibold text-white m-[5vw]">
          {texts['washroom-heading']}
        </div> : null
      }
      <div className={'washroom_wrapper' + (isMobile ? ' washroom_wrapper_m' : '')}>
        <div className={!isMobile ? 'washroom_carousel' : 'washroom_carousel_m'}>
          <div className={'washroom_container' + (isMobile ? ' washroom_container_m' : '')}>
            <img src={img1} />
            <motion.div
              className="washroom_see-more"
              style={{ top: !isMobile ? '42%' : '2.5vw', left: !isMobile ? '25%' : '2.5vw' }}
              initial={!isMobile ? 'rest' : 'hover'}
              whileHover="hover"
            >
              <motion.div variants={popupMotion}>
                {!isMobile ?
                  <div className='h-[48px] w-[48px] flex justify-center items-center absolute top-0 left-0'>
                    <IoMdAdd size={28} />
                  </div> : null
                }
                <motion.div
                  className="text-xl p-[16px]"
                  style={{ width: !isMobile ? 262 : '75vw', paddingTop: !isMobile ? 48 : 16 }}
                  variants={popupTextMotion}
                >
                  {texts['washroom-item-1-heading']}
                  <div className='mt-[0.5em]'>
                    {texts['washroom-item-2-body']}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className={'washroom_container' + (isMobile ? ' washroom_container_m' : '')}>
            <img src={img2} />
            <motion.div
              className="washroom_see-more"
              style={{ bottom: '30%', left: !isMobile ? '30%' : '2.5vw' }}
              initial={!isMobile ? 'rest' : 'hover'}
              whileHover="hover"
            >
              <motion.div variants={popupMotion}>
                {!isMobile ?
                  <div className='h-[48px] w-[48px] flex justify-center items-center absolute bottom-0 left-0'>
                    <IoMdAdd size={28} />
                  </div> : null
                }
                <motion.div
                  className="text-xl p-[16px]"
                  style={{ width: !isMobile ? 262 : '75vw', paddingBottom: !isMobile ? 48 : 16 }}
                  variants={popupTextMotion}
                >
                  {texts['washroom-item-2-heading']}
                  <div className='mt-[0.5em]'>
                    {texts['washroom-item-2-body']}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className={'washroom_container' + (isMobile ? ' washroom_container_m' : '')}>
            <img src={img3} />
            <motion.div
              className="washroom_see-more"
              style={{ top: !isMobile ? '12%' : '25%', right: !isMobile ? '23%' : '2.5vw' }}
              initial={!isMobile ? 'rest' : 'hover'}
              whileHover="hover"
            >
              <motion.div variants={popupMotion}>
                {!isMobile ?
                  <div className='h-[48px] w-[48px] flex justify-center items-center absolute top-0 right-0'>
                    <IoMdAdd size={28} />
                  </div> : null
                }
                <motion.div
                  className="text-xl p-[16px]"
                  style={{ width: !isMobile ? 262 : '75vw', paddingTop: !isMobile ? 48 : 16 }}
                  variants={popupTextMotion}
                >
                  {texts['washroom-item-3-heading']}
                  <div className='mt-[0.5em]'>
                    {texts['washroom-item-3-body']}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {!isTablet ?
          <div className="absolute top-[5%] left-[18%] text-2xl font-semibold z-5 max-w-[25%]">
            {texts['washroom-heading']}
          </div> : null
        }
      </div>
    </div>
  )
}

export default Washroom