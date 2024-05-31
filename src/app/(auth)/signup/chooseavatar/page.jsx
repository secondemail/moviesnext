"use client"
import React,{useState} from 'react'
import av1 from '../../../../../public/image276.png'
import av2 from '../../../../../public/image277.png'
import av3 from '../../../../../public/image281.png'
import av4 from '../../../../../public/image138.png'
import { Button, Container, Row } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { TbFidgetSpinner } from "react-icons/tb";


const ChooseAvatar = () => {
  const [loading,setLoading]=useState(false);
  return (
    <Container>
      <Row>
        <div className='tw-text-white tw-py-10'>
          <h2 className='tw-text-center tw-text-[30px] tw-py-7'>Hi, kareem_1244</h2>
          <div className='tw-flex tw-justify-center tw-py-7'>
            <span className='tw-p-4 tw-bg-[#1976d2] tw-text-[80px] tw-rounded-full tw-text-white'>
              <FaUser />
            </span>
          </div>
          <h2 className='tw-text-center'>Choose Your Avatar</h2>
        </div>
      </Row>
      <div style={{scrollbarWidth:"none"}} className='tw-flex tw-justify-center tw-gap-10 tw-py-10'>
        <div><Image className='tw-rounded-full tw-filter tw-cursor-pointer tw-grayscale' src={av1} alt='' width={100}/></div>
        <div><Image className='tw-rounded-full tw-filter tw-cursor-pointer ' src={av2} alt='' width={100}/></div>
        <div><Image className='tw-rounded-full tw-filter tw-cursor-pointer tw-grayscale ' src={av3} alt='' width={100}/></div>
        <div><Image className='tw-rounded-full tw-filter tw-cursor-pointer tw-grayscale' src={av4} alt='' width={100}/></div>
      </div>
      <div className='text-center'>
        {
          !loading ? 
          (
            <Link onClick={()=>setLoading(true)} href="/signup/conferm" className='tw-text-white' >Confirm</Link>
          ):
          (
            <div className='tw-flex tw-justify-center tw-text-white tw-text-[30px] '>
              <TbFidgetSpinner className="tw-animate-spin"/>
            </div>
          )
        }
        
      </div>
    </Container>
  )
}

export default ChooseAvatar