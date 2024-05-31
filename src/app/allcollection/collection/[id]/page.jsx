import React from 'react'
import movbanner from '../../../../../public/image212.png'
import { FaStar,FaRegBookmark, FaPlay, FaArrowRight, FaImdb } from "react-icons/fa";
import { SlLike,SlDislike } from "react-icons/sl";
import movlogo from '../../../../../public/JW4logo.png'
import avatar from '../../../../../public/image138.png'
import avatar2 from '../../../../../public/image294.png'
import avatar3 from '../../../../../public/image92.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '@/app/_components/Cards';
import { SiAppletv,SiParamountplus,SiSony,SiNetflix,SiWarnerbros } from "react-icons/si";
import Link from 'next/link';

const Collection = () => {
  const loop = [1,2,3,4,5,6,7]
  return (
    <div className=' tw-w-full '>
      <div className='tw-w-full tw-relative tw-h-[550px]'>
        <Image className='tw-w-full tw-h-full tw-filter tw-blur-[2px]' src={movbanner} alt='' height={550} priority />
        <div className='tw-absolute tw-text-white tw-bottom-20 tw-left-5 lg:tw-left-20'>
          <div>
            <h1 className="tw-text-[30px] tw-font-bold">The Dark Knight Collection</h1>
            <p>
              When the menace known as the Joker wreaks havoc and chaos on the people <br/> of Gotham, Batman must accept one of the greatest psychological and physical <br/> tests of his ability to fight injustice.
            </p>
            <div className='tw-flex tw-gap-2 tw-items-center'>
              <span className='tw-text-yellow-400 tw-text-[40px]'>
                <FaImdb/>
              </span>
              <span className='tw-text-yellow-400 tw-text-xl tw-flex tw-gap-2 tw-items-center'>
                9
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </span>
              <span className=' tw-text-2xl tw-flex tw-gap-2 tw-items-center'>
                <SiWarnerbros/>
                <SiAppletv/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Container className='tw-text-white'>
        <div className='tw-mt-10'>
          <h2 className='tw-text-2xl lg:tw-text-4xl tw-font-bold'>،،The Dark Knight،،</h2>
          <div className=' tw-pt-7'>
          <Row className="tw-py-10">
          <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
            {
              loop.map(i=>(
                <Cards key={i}/>
              ))
            }
          </div>
          </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Collection
