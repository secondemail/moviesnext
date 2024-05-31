import React from 'react'
import im1 from '../../../public/panda.png'
import im2 from '../../../public/sing.png'
import im3 from '../../../public/raya.png'
import im11 from '../../../public/pandashadow1.png'
import im22 from '../../../public/singshadow1.png'
import im33 from '../../../public/rayashadow1.png'
import Image from 'next/image'
const KidsSection = () => {
  return (
    <div className='tw-bg-[#1976d2] tw-w-full tw-py-10'>
      <div className="tw-text-center tw-text-white">
        <h2 className='tw-text-[35px]'>Family-friendly Streaming</h2>
        <p className='tw-my-10'>create kids profile, set parental control, and choose rating levels. Easily findnew<br/>favvrites by srting by characters and using age filters.</p>
      </div>
      <div className='tw-flex tw-gap-5 tw-justify-center'>
        <div>
          <Image src={im2} alt='im1'  height={350} width={300}   />
        </div>
        <div>
          <Image src={im1} alt='im1'  height={350} width={300} />
        </div>
        <div>
          <Image src={im3} alt='im1'  height={350} width={300} />
        </div>
      </div>
      <div className="tw-text-center tw-my-10">
        <button className='tw-bg-[#030a1b] tw-rounded-lg tw-text-white tw-text-center tw-text-xl tw-py-2 tw-px-7'>Watch Childern Section</button>
      </div>
    </div>
  )
}

export default KidsSection