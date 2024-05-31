import React from 'react'
import movbanner from '../../../../../public/image303.png'
import { FaStar,FaRegBookmark, FaPlay, FaArrowRight } from "react-icons/fa";
import { SlLike,SlDislike } from "react-icons/sl";
import movlogo from '../../../../../public/JW4logo.png'
import avatar from '../../../../../public/image138.png'
import avatar2 from '../../../../../public/image294.png'
import avatar3 from '../../../../../public/image92.png'

import Image from 'next/image'
import { Container } from 'react-bootstrap';
import Cards from '@/app/_components/Cards';
const Movie = () => {
  const Loop=[1,2,3,4,5,6,7,8]
  return (
    <div className=' tw-w-full '>
      <div className='tw-w-full tw-relative tw-h-[550px]'>
        <Image className='tw-w-full tw-h-full' src={movbanner} alt='' height={550} priority />
        <div className='tw-absolute tw-w-full tw-top-0 tw-h-full'>
          <Container className='tw-text-white tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-h-full'>
            <div className='tw-flex tw-flex-col tw-pt-10 lg:tw-pt-0 tw-items-center tw-justify-center '>
              <h1 className='tw-text-5xl tw-font-bold'>John Wick 4</h1>
              <span>2h 49m - 2023-USA </span>
              <div className="tw-text-yellow-400 tw-flex tw-gap-2 tw-items-center tw-py-2">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className="tw-flex tw-gap-2 tw-items-center tw-py-2">
                <div className='tw-rounded-full tw-p-3 tw-text-xl tw-bg-[#030a1b] tw-border-2 tw-border-[#1976d2]'>
                  <FaRegBookmark/>
                </div>
                <div className='tw-rounded-full tw-p-3 tw-text-xl tw-bg-[#030a1b] tw-border-2 tw-border-[#1976d2]'>
                  <SlLike/>
                </div>
                <div className='tw-rounded-full tw-p-3 tw-text-xl tw-bg-[#030a1b] tw-border-2 tw-border-[#1976d2]'>
                  <SlDislike/>
                </div>
              </div>
            </div>
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center' >
              <div>
                <Image src={movlogo} alt='' width={500}/>
              </div>
              <div className='tw-flex tw-items-center tw-gap-5 tw-py-5 '>
                <div className='tw-flex tw-gap-2 lg:tw-px-10 lg:tw-py-2 tw-p-2 tw-bg-[#1976d2] tw-rounded-lg tw-items-center'>
                  <FaPlay/>
                  Watch Movie
                </div>
                <div className='tw-flex tw-gap-2 lg:tw-px-10 lg:tw-py-2 tw-p-2 tw-border-2 tw-border-[#1976d2] tw-rounded-lg tw-items-center'>
                  More Info
                  <FaArrowRight/>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container className='tw-text-white'>
        <div className='tw-mt-10'>
          <h2 className='tw-text-2xl lg:tw-text-4xl tw-font-bold'>about John Wick 4</h2>
          <p className='tw-text-md lg:tw-text-lg tw-py-7'>
            With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.
          </p>
          <p className='tw-text-md lg:tw-text-lg'>
            Development of the fourth John Wick film, formally announced by Lionsgate in May 2019, was confirmed before the release of its predecessor. It is the first film in the franchise that was not written by franchise creator Derek Kolstad, with Hatten hired in May 2020, followed by Finch in March 2021. Principal photography took place from June to October 2021, and filming locations included France, Germany, New York City, and Japan.
          </p>
        </div>
        <div className='tw-mt-10'>
          <h2 className='tw-text-4xl tw-font-bold'>Genres</h2>
          <div className='tw-flex tw-gap-7 tw-p-7'>
            <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-border-2 tw-border-[#ec5baa] tw-px-7 tw-bg-[#ec5baa]'>
              Drama
            </div>
            <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
              Drama
            </div>
          </div>
        </div>
        <div className='tw-mt-10'>
          <h2 className='tw-text-4xl tw-font-bold'>Charactors</h2>
          <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
            </div>
            <div className=' tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
            </div>
            <div className=' tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
            </div>
            <div className='  tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
            </div>
            <div className=' tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
            </div>
            <div className=' tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
            </div>
            <div className='tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
            </div>
            <div className='tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
            </div>
            <div className=' tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
            </div>
            <div className='tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
            </div>
            <div className='tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar2} alt="a" width={100} />
            </div>
            <div className='tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-h-[100px]'>
              <Image className='tw-rounded-full' src={avatar3} alt="a" width={100} />
            </div>
          </div>
        </div>
        <div className='tw-mt-10'>
          <h2 className='tw-text-4xl tw-font-bold'>Director</h2>
          <div className=' tw-pt-7'>
            <div className='tw-flex'>
              <Image className='tw-rounded-full' src={avatar} alt="a" width={100} />
            </div>
          </div>
        </div>
        <div className='tw-mt-10'>
          <h2 className='tw-text-4xl tw-font-bold'>Suggestions like ،،John Wick،،</h2>
          <div className=' tw-pt-7'>
            <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
              {
                Loop.map(i=>(
                  <Cards key={i}/>
                ))
              }
            </div>
          </div>
        </div>
        <div className='tw-mt-10'>
          <h2 className='tw-text-4xl tw-font-bold'>Comments</h2>
          <div className=' tw-pt-7'>
            <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
              {
                Loop.map(i=>(
                  <div key={i} className='tw-rounded-lg tw-border-2 tw-flex tw-flex-col tw-flex-shrink-0 tw-flex-grow-0 tw-border-[#1976d2] tw-p-2 tw-w-[300px] '>
                    <div className="tw-flex tw-gap-4 tw-items-center">
                      <Image className='tw-rounded-full' src={avatar} alt='' width={40} />
                      <span className='tw-text-gray-400'> kareem_124 </span>
                    </div>
                    <div className='tw-p-4'>
                      <p>
                        That was perfect ...
                      </p>
                    </div>
                    <div className='tw-flex tw-justify-end tw-gap-2'>
                      <div className='tw-flex tw-items-center tw-gap-2'>
                        3<SlDislike/>
                      </div>
                      <div className='tw-flex tw-items-center tw-gap-2'>
                        <SlLike/> 12
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Movie
