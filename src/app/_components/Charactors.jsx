import React from 'react'
import { Container } from 'react-bootstrap'
import avatar from '../../../public/image138.png'
import avatar2 from '../../../public/image294.png'
import avatar3 from '../../../public/image92.png'
import Image from 'next/image'

const Charactors = () => {
  return (
    <Container>
        <div className='tw-flex tw-justify-between tw-text-white tw-items-center tw-mb-5'>
          <span className="tw-text-[27px] lg:tw-text-[35px]">Charactors</span>
          <div className='tw-flex  tw-rounded-full tw-items-center tw-border-2 tw-border-[#1976d2]'>
            <span className=' tw-p-2 tw-rounded-full tw-text-gray-700'>Directors</span>
            <span className='tw-p-2 tw-rounded-full tw-bg-[#1976d2]'>Actors</span>
          </div>
        </div>
        <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
          </div>
          <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
            <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
          </div>
        </div>
    </Container>
  )
}

export default Charactors
