import React from 'react'
import banner from "../../../public/witcherBanner.png"
import netflix from "../../../public/image41.png"
import im1 from "../../../public/image130.png"
import im2 from "../../../public/image29.png"
import im3 from "../../../public/image294.png"
import Image from 'next/image'
import witch from '../../../public/Layer0.png'
import { FaStar,FaStarHalf,FaImdb,FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className=' tw-relative tw-flex tw-justify-end'>
      <div className='tw-relative'>
        <Image src={banner} width={1000} height={1000} alt=''/>
        <div className='tw-absolute banner tw-top-0 tw-left-0 tw-w-full tw-h-full'></div>
      </div>
      <div className=' tw-absolute tw-text-white tw-bg-[rgb(3,10,27,53%)] tw-top-0 tw-left-0 tw-w-full tw-h-full'>
        <div className="tw-relative tw-h-[50%] tw-w-full">
          <Image className=' tw-static tw-w-[200px] tw-pt-10 lg:tw-pt-0 lg:tw-w-[500px] tw-h-auto tw-m-auto lg:tw-absolute tw-left-[250px] tw-top-[100px]' alt='wi' src={witch} width={500}/>
        </div>
        <div className=' tw-p-10 lg:tw-p-0 lg:tw-flex tw-justify-between'>
          <div className='lg:tw-w-[50%] lg:tw-p-10'>
            <h2 className='tw-text-[30px] lg:tw-text-[50px]'>The Witcher</h2>
            <p className='tw-text-[10px] lg:tw-text-[15px]'>Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts</p>
            <div className="tw-text-yellow-400 tw-flex tw-gap-2 tw-items-center tw-py-2">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
              <FaImdb className="tw-text-[30px]"/>
              <span className="tw-text-white">8.1</span>
              <Image src={netflix} alt='netflex' width={50} />
            </div>
            <div className='tw-flex tw-items-center tw-gap-5 tw-py-5 '>
              <div className='tw-flex tw-gap-2 lg:tw-px-10 lg:tw-py-2 tw-p-2 tw-bg-[#1976d2] tw-rounded-full tw-items-center'>
                <FaPlay/>
                Watch Movie
              </div>
              <div className='tw-flex tw-gap-2 lg:tw-px-10 lg:tw-py-2 tw-p-2 tw-border-2 tw-border-[#1976d2] tw-rounded-full tw-items-center'>
                More Info
                <FaArrowRight/>
              </div>
            </div>
          </div>
          <div className='lg:tw-w-[50%] tw-flex tw-justify-center tw-items-center tw-pt-7 lg:pt-0'>
            <div className='tw-w-full tw-flex tw-justify-center tw-relative'>
              <Image className="tw-filter  tw-blur-[2px] tw-contrast-100 hover:tw-filter-none hover:tw-z-[10] hover:tw-top-[-15px] tw-transition tw-cursor-pointer tw-h-[150px]  tw-absolute tw-right-[0px] lg:tw-right-[150px] tw-rounded-lg " src={im1} alt="im2" width={100} height={100}/>
              <Image className="                                                                    tw-z-[10]       tw-top-[-15px] tw-transition tw-cursor-pointer tw-h-[150px]  tw-absolute tw-right-[50px] lg:tw-right-[220px] tw-rounded-lg " src={banner} alt="im1" width={100} height={100}/>
              <Image className="tw-filter  tw-blur-[2px] tw-contrast-100 hover:tw-filter-none hover:tw-z-[10] hover:tw-top-[-15px] tw-transition tw-cursor-pointer tw-h-[150px]  tw-absolute tw-right-[120px] lg:tw-right-[300px] tw-rounded-lg " src={im2} alt="im3" width={100} height={100}/>
              <Image className="tw-filter  tw-blur-[2px] tw-contrast-100 hover:tw-filter-none hover:tw-z-[10] hover:tw-top-[-15px] tw-transition tw-cursor-pointer tw-h-[150px]  tw-absolute tw-right-[170px] lg:tw-right-[380px] tw-rounded-lg " src={im3} alt="im4" width={100} height={100}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
