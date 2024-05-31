import React from 'react'
import { Container } from 'react-bootstrap'
import { TbBrandDisney,TbBrandHbo } from "react-icons/tb";
import { SiAppletv,SiParamountplus,SiSony,SiNetflix,SiWarnerbros } from "react-icons/si";






const Studios = () => {
  return (
    <Container>
      <h2 className='tw-text-center tw-text-white tw-text-[30px] tw-py-7'>Studios</h2>
      <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiParamountplus />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiAppletv />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiSony />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiNetflix />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <TbBrandDisney />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <TbBrandHbo />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiWarnerbros />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiParamountplus />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiAppletv />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiSony />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiNetflix />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <TbBrandDisney />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <TbBrandHbo />
        </div>
        <div className='tw-bg-white tw-text-[70px] tw-rounded-3xl tw-p-5 tw-text-center tw-flex tw-items-center'>
          <SiWarnerbros />
        </div>
      </div>
    </Container>
  )
}

export default Studios