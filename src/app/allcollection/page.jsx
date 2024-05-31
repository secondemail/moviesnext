import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import SearchBar from './SearchBar'
import im1 from "../../../public/image92.png"
import im2 from "../../../public/image130.png"
import basicimg3 from "../../../public/image179.png"
import Image from 'next/image'
import Link from 'next/link'

const AllCollection = () => {
  const loop = [1,2,3,4,5,6,7]
  return (
    <Container>
      <h1 className="tw-text-white tw-text-[30px] tw-text-center tw-underline tw-pt-10 tw-mb-20">Collections</h1>
      <Row>
        <SearchBar/>
      </Row>
      <Row className="tw-py-10">
        <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
          {
            loop.map(i=>(
              <Link key={i} href="/allcollection/collection/1">
                <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[250px] tw-h-[400px]'>
                  <Image className='tw-absolute tw-left-10 tw-rounded-2xl tw-top-5' src={im2} alt="basicimg" width={200}/>
                  <Image className='tw-absolute tw-left-5  tw-rounded-2xl tw-top-3' src={im1} alt="basicimg" width={200}/>
                  <Image className='tw-absolute tw-left-0  tw-rounded-2xl tw-top-0' src={basicimg3} alt="basicimg" width={200}/>
                  <div className=' tw-rounded-2xl tw-h-[300px] tw-text-[39px] tw-bg-[rgb(3,10,27,53%)] tw-w-full tw-z-50 tw-text-white tw-font-bold tw-flex tw-items-center'>
                    <h2 className="tw-pl-10">Jhon Wick</h2>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </Row>
    </Container>
  )
}

export default AllCollection
