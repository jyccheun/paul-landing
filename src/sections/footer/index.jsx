import './.css'

import texts from '../../texts'

function Footer() {
  return (
    <div className="bg-black h-[50vh] w-full">
      <div className='w-full max-w-[1280px] mx-auto flex flex-row p-30'>
        <div className='flex-2' />
        <div className='flex-1 text-white text-xl'>
          {texts['contact']}
          <br />
          {texts['contact-email']}
          <br />
          {texts['contact-number']}
        </div>
      </div>
    </div>
  )
}

export default Footer