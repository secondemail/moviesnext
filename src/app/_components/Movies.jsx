import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import Cards from './Cards'
import Link from 'next/link'

const Movies = () => {
  const Loop = [1,2,3,4,5,6]
  return (
    <Container className='tw-py-20'>
      <div className='tw-flex tw-justify-between tw-text-white tw-items-center'>
        <span className="tw-text-[35px]">Movies</span>
        <Link href="/allmovies">
          <span className='tw-flex tw-items-center tw-gap-2 tw-text-[#1976d2]'>
            See More
            <FaArrowRight/>
          </span>
        </Link>
      </div>
      <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-7  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-bg-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-bg-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-bg-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
        <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
          Drama
        </div>
      </div>
      <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        {
          Loop.map(i=>(
            <Cards key={i}/>
          ))
        }
      </div>
    </Container>
  )
}

export default Movies