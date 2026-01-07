import './.css'
import texts from '../../texts'

function Header() {
  return (
    <div className="absolute top-0 z-99 w-full flex flex-row py-[24px]">
      <div className="text-white text-2xl w-[89.5%] mx-auto">
        {texts['company-name']}
      </div>
    </div>
  )
}

export default Header
