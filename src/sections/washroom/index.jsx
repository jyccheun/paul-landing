import './.css'

function Washroom() {
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

    <div className="pb-[40vh] bg-cool overflow-hidden">
      {/* <div className="washroom_wrapper">
        <div className="washroom_carousel">
          <div className="washroom_container">
            <img src="/paul-landing/assets/indoor-washroom-split-1-B0_UuQaB.png">
            <div className="washroom_see-more" style="top: 42%; left: 25%; border-radius: 1.5em;">
              <div className="p-[16px] overflow-hidden" style="height: 48px; width: 48px;">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                </path>
              </svg>
              <div className="text-xl mt-[16px] w-[262px]">
                Aerator
                <br>
                In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
              </div>
            </div>
          </div>
        </div>
        <div className="washroom_container">
          <img src="/paul-landing/assets/indoor-washroom-split-2-DK92V5fo.png">
          <div className="washroom_see-more" style="bottom: 30%; left: 30%; border-radius: 1.5em;">
            <div className="p-[16px] overflow-hidden" style="height: 48px; width: 48px;">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="absolute bottom-[16px]" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
              </path>
            </svg>
            <div className="text-xl w-[262px]" style="margin-top: 32px; margin-bottom: 0px;">
              Low-flow Toilets
              <br>
              In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
            </div>
          </div>
        </div>
      </div>
      <div className="washroom_container">
        <img src="/paul-landing/assets/indoor-washroom-split-3-Bb7eXrmw.png">
        <div className="washroom_see-more" style="top: 12%; right: 23%; border-radius: 1.5em;">
          <div className="p-[16px] overflow-hidden" style="height: 48px; width: 48px;">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="absolute right-[16px]" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
              </path>
            </svg>
            <div className="text-xl mt-[32px] w-[262px]">
              Low-flow Showerheads
              <br>
              In dapibus purus nec nisl hendrerit aliquam. Aenean sit amet leo ut nisi molestie ultrices vel ac est. Donec augue felis, pulvinar a mi at, fringilla blandit enim.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5%] left-[18%] text-2xl font-semibold z-5 max-w-[25%]">
        Discover ways to improve your bathrooms and enhance your day-to-day experience while also saving on hydro bills.
      </div>
    </div> */}
    </div>
  )
}

export default Washroom