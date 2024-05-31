import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import Cards from './Cards'
import Link from 'next/link'

const Trends = () => {
  const Loop = [1,2,3,4,5,6]
  return (
    <Container className='tw-pt-20 tw-mt-[300px] lg:tw-mt-0'>
      <div className='tw-flex tw-justify-between tw-text-white tw-items-center tw-my-5'>
        <span className="tw-text-[35px]">Trends</span>
        <Link href="/allmovies">
          <span className='tw-flex tw-items-center tw-gap-2 tw-text-[#1976d2]'>
            See More
            <FaArrowRight/>
          </span>
        </Link>
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

export default Trends