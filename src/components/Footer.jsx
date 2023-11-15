import React from 'react'
import LOGO, {HoYo} from "../assets/index";

const Footer = () => {
  return (
    <div className=' bg-black flex flex-col items-center justify-center text-[#cdc4c4] h-[120px]'>
        
        <img
          src={HoYo}
          alt="GENSHIN"
          className=" xs:h-[40px] ss:h-[25px] sm:h-[30px] xs:w-[160px] ss:w-[100px] sm:w-[180px] z-10"
        />
        <span className='mt-4 mb-1'>Copyright © Muraoka_Genshin. All Rights Reserved.</span>
    </div>
  )
}

export default Footer