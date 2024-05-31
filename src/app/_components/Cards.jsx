import React from 'react'
import im1 from "../../../public/image130.png"
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Cards = () => {
  return (
    <div className='tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[200px] tw-h-[250px] tw-rounded-lg'>
      <Link href={`/allmovies/movie/1`}>
        <div className='tw-relative tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-w-[200px] tw-h-[250px] tw-rounded-lg'>
          <div className='tw-absolute tw-top-[-8px] tw-left-[-8px] tw-flex tw-items-center tw-px-2  tw-font-bold   tw-rounded-lg tw-text-center tw-border-8 tw-border-[#030a1b] '>
            <div className='tw-bg-transparent tw-rounded-lg tw-p-3 tw-pr-3 tw-text-[25px] tw-text-[#030a1b]'>
              <FaPlay />
            </div>
          </div>
          <Image className='tw-rounded-lg tw-w-full tw-h-full' src={im1} alt="sa" width={200} height={250}  />
        </div>
      </Link>
    </div>
  )
}

export default Cards
