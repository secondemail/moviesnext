"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';


const ToTop = () => {
  const rout =usePathname()

  return (
    <>
      {
        rout !== "" ?
        (
          <a className={rout.includes('/login') || rout.includes('/signup') ? "d-none" :"tw-fixed tw-right-10 tw-bottom-10 tw-bg-[#ec5baa] tw-z-[10000] tw-text-white tw-text-[37px]  tw-rounded-full tw-p-2" } href="#top"><IoIosArrowUp/></a>
        ):null
      }
    </>
  )
}

export default ToTop
