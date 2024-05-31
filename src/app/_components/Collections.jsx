import React from 'react'
import { Container } from 'react-bootstrap'
import basicimg from "../../../public/image166.png"
import basicimg2 from "../../../public/image169.png"
import basicimg3 from "../../../public/image179.png"
import basicimg4 from "../../../public/image175.png"
import basicimg5 from "../../../public/image180.png"
import im1 from "../../../public/image92.png"
import im2 from "../../../public/image130.png"
import Image from 'next/image'
import Link from 'next/link'
const Collections = () => {
  return (
    <Container className="tw-pt-7">
        <div className='tw-flex tw-justify-between tw-text-white tw-items-center tw-mb-5'>
          <Link href="/allcollection">
            <span className="tw-text-[27px] lg:tw-text-[35px]">Collection</span>
          </Link>
          <div className='tw-flex  tw-rounded-full tw-items-center tw-border-2 tw-border-[#1976d2]'>
            <span className=' tw-p-2 tw-rounded-full tw-text-gray-700'>Series</span>
            <span className='tw-p-2 tw-rounded-full tw-bg-[#1976d2]'>Movies</span>
          </div>
        </div>
        <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
          <Link href="/allcollection/collection/1">
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[250px] tw-h-[400px]'>
              <Image className='tw-absolute tw-left-10 tw-rounded-2xl tw-top-5' src={im2} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-5  tw-rounded-2xl tw-top-3' src={im1} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-0  tw-rounded-2xl tw-top-0' src={basicimg} alt="basicimg" width={200}/>
              <div className=' tw-rounded-2xl tw-h-[300px] tw-text-[39px] tw-bg-[rgb(3,10,27,53%)] tw-w-full tw-z-50 tw-text-white tw-font-bold tw-flex tw-items-center'>
                <h2 className="tw-pl-10">Musician</h2>
              </div>
            </div>
          </Link>
          <Link href="/allcollection/collection/1">
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[250px] tw-h-[400px]'>
              <Image className='tw-absolute tw-left-10 tw-rounded-2xl tw-top-5' src={im2} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-5  tw-rounded-2xl tw-top-3' src={im1} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-0  tw-rounded-2xl tw-top-0' src={basicimg2} alt="basicimg" width={200}/>
              <div className=' tw-rounded-2xl tw-h-[300px] tw-text-[39px] tw-bg-[rgb(3,10,27,53%)] tw-w-full tw-z-50 tw-text-white tw-font-bold tw-flex tw-items-center'>
                <h2 className="tw-pl-10">Marvel</h2>
              </div>
            </div>
          </Link>
          <Link href="/allcollection/collection/1">
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[250px] tw-h-[400px]'>
              <Image className='tw-absolute tw-left-10 tw-rounded-2xl tw-top-5' src={im2} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-5  tw-rounded-2xl tw-top-3' src={im1} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-0  tw-rounded-2xl tw-top-0' src={basicimg3} alt="basicimg" width={200}/>
              <div className=' tw-rounded-2xl tw-h-[300px] tw-text-[39px] tw-bg-[rgb(3,10,27,53%)] tw-w-full tw-z-50 tw-text-white tw-font-bold tw-flex tw-items-center'>
                <h2 className="tw-pl-10">Jhon Wick</h2>
              </div>
            </div>
          </Link>
          <Link href="/allcollection/collection/1">
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[250px] tw-h-[400px]'>
              <Image className='tw-absolute tw-left-10 tw-rounded-2xl tw-top-5' src={im2} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-5  tw-rounded-2xl tw-top-3' src={im1} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-0  tw-rounded-2xl tw-top-0' src={basicimg5} alt="basicimg" width={200}/>
              <div className=' tw-rounded-2xl tw-h-[300px] tw-text-[39px] tw-bg-[rgb(3,10,27,53%)] tw-w-full tw-z-50 tw-text-white tw-font-bold tw-flex tw-items-center'>
                <h2 className="tw-pl-10">Godzilla</h2>
              </div>
            </div>
          </Link>
          <Link href="/allcollection/collection/1">
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[250px] tw-h-[400px]'>
              <Image className='tw-absolute tw-left-10 tw-rounded-2xl tw-top-5' src={im2} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-5  tw-rounded-2xl tw-top-3' src={im1} alt="basicimg" width={200}/>
              <Image className='tw-absolute tw-left-0  tw-rounded-2xl tw-top-0' src={basicimg4} alt="basicimg" width={200}/>
              <div className=' tw-rounded-2xl tw-h-[300px] tw-text-[39px] tw-bg-[rgb(3,10,27,53%)] tw-w-full tw-z-50 tw-text-white tw-font-bold tw-flex tw-items-center'>
                <h2 className="tw-pl-10">DC</h2>
              </div>
            </div>
          </Link>
        </div>
    </Container>
  )
}

export default Collections