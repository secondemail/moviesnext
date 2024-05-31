import React from 'react'
import banner from "../../../public/image200.png"
import banner2 from "../../../public/image201.png"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='banner-shadow tw-bg-[#daa521] tw-py-10 tw-shadow-2xl tw-shadow-[#daa521] '>
      <div className='tw-text-center tw-mb-10'>
        <span className='lg:tw-text-[30px] tw-font-bold tw-border-b-2 tw-border-b-black '>
            Watching Golden Globe 2024 Movies
        </span>
      </div>
      <div className='tw-flex tw-justify-between tw-items-center'>
        <div>
          <Image src={banner} alt="banner" width={500} />
        </div>
        <div>
          <Image className='banner-shadow2' src={banner2} alt="banner" width={700} />
        </div>
      </div>
    </div>
  )
}

export default Banner