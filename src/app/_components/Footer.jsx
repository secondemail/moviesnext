"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaTelegram } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const router =usePathname();
  return (
    <Container className={router.includes('/login') || router.includes('/signup') ? " d-none" :"tw-py-10"}>
      <Row className='tw-text-white tw-py-2 '>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1  ">
            Get App<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            Help<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            Site Index<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            SkyLine Pro<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            Advertising<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            Developer<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            Jops<IoIosArrowForward/> 
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="tw-flex tw-items-center tw-gap-1 ">
            Privacy Policy<IoIosArrowForward/> 
          </div>
        </Col>
      </Row>
      <div className='tw-text-white tw-flex tw-justify-center tw-gap-4 tw-py-2 tw-text-2xl'>
        <div className="tw-flex tw-items-center tw-gap-1 ">
          <FaFacebook/> 
        </div>
        <div className="tw-flex tw-items-center tw-gap-1 ">
          <FaInstagram/> 
        </div>
        <div className="tw-flex tw-items-center tw-gap-1 ">
          <FaLinkedin/> 
        </div>
        <div className="tw-flex tw-items-center tw-gap-1 ">
          <FaTelegram/> 
        </div>
        <div className="tw-flex tw-items-center tw-gap-1 ">
          <FaYoutube/> 
        </div>
      </div>
    </Container>
  )
}

export default Footer
