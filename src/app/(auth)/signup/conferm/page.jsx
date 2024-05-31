"use client"
import React,{useEffect} from 'react'
import av2 from '../../../../../public/image277.png'
import { Container, Row } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { Flip, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import notify from './../../../_components/useNotification';



const Conferm = () => {
  const router =useRouter();
  useEffect(()=>{
    notify(`Your Account Created, enjoy!!`,"success")
    setTimeout(() => {
      router.push("/")
    }, 1500);
  },[]);
  return (
    <Container>
      <Row>
        <div className='tw-text-white tw-py-10'>
          <div className='tw-flex tw-justify-center tw-py-7'>
            <Image src={av2} alt='' width={200} className="tw-rounded-full"/>
          </div>
          <h2 className='tw-text-center'>Hi, kareem_1244</h2>
          <h2 className='tw-text-center tw-text-[30px] tw-py-7'>
            Your account has been successfully created 
          </h2>
          <div className='tw-flex tw-justify-center tw-py-7 tw-text-green-500 tw-text-[100px]'>
            <FaCheckCircle className='tw-animate-bounce '/>
          </div>
          <div className='tw-flex tw-justify-center tw-py-7 tw-text-white'>
            <Link href="/" className="tw-underline">go to home page ...</Link>
          </div>
        </div>
      </Row>
      <ToastContainer position="top-center" autoClose={1500} theme="colored" transition={Flip} />
    </Container>
  )
}

export default Conferm