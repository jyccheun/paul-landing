import React from 'react'
import './.css'

function Header() {
  return (
    <div className="absolute top-0 z-99 w-full flex flex-row py-[24px]">
      <div className='text-white text-2xl w-full max-w-[1280px] mx-auto'>
        Company Name
      </div>
    </div>
  )
}

export default Header
