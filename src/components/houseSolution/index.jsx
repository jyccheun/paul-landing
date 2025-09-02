import React from 'react'
import './.css'

import imgHpwh from '../../assets/heat-pump-water-heater.png'
import imgLight from '../../assets/light-fixture.png'
import imgToilet from '../../assets/low-flow-toilet.png'

function HouseSolution() {
  return (
    <div className="bg-black w-full flex flex-col py-10">
      <div className='text-5xl py-10 text-center text-white leading-16'>
        Plan and manage your projects<br />under keen individuals
      </div>

      <div className='w-full max-w-[1280px] mx-auto'>
        <div>

          <div className='houseSolution_item-container'>
            <img src={imgHpwh} className='houseSolution_item-img' />
            <div className='text-3xl text-center text-white houseSolution_item-text'>
              Integrate household air and water heating<br />using heat pump technology
            </div>
          </div>

          <div className='houseSolution_item-container'>
            <img src={imgLight} className='houseSolution_item-img' />
            <div className='text-3xl text-center text-white houseSolution_item-text'>
              Energy efficient LED lighting in<br />common areas and inside apartments
            </div>
          </div>

          <div className='houseSolution_item-container'>
            <img src={imgToilet} className='houseSolution_item-img houseSolution_item-img-toilet' />
            <div className='text-3xl text-center text-white houseSolution_item-text'>
              Low-Flow toilets, Showerheads, and<br />Aerators enhancements in washrooms
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseSolution