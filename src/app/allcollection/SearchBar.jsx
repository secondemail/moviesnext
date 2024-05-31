"use client"
import React,{useState} from 'react'
import searchimg from '../../../public/logosearchlogo.png'
import Image from 'next/image'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  const [show,setShow]=useState(false);
  return (
    <div className="tw-border-2 tw-border-[#1976d2] tw-rounded-2xl tw-p-4 tw-relative">
      <div onClick={()=>setShow(!show)} className="tw-bg-[#1976d2] tw-cursor-pointer tw-text-white tw-p-2 tw-rounded-t-3xl tw-top-[-40px] tw-absolute" >Click To Advanced Search</div>
      {
          show === false ?
          (
            <Row>
              <Col xs="12">
                <InputGroup>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      aria-describedby="inputGroupPrepend"
                      className="tw-bg-[#030a1b] focus:tw-bg-[#030a1b] focus:tw-shadow-none focus:tw-text-white tw-py-3 tw-text-white tw-border-[#1976d2] tw-border-r-0"
                    />
                    <InputGroup.Text className="tw-bg-[#030a1b] tw-border-l-0 tw-text-white tw-border-[#1976d2]" id="inputGroupPrepend">
                      <FaSearch/>
                    </InputGroup.Text>
                  </InputGroup>
              </Col>
            </Row>
          ):null
        }
      <div className={show === true ? 'lg:tw-flex' : 'tw-hidden'}>
        <div className="lg:tw-w-[50%] lg:tw-h-full tw-flex tw-justify-center">
          <Image src={searchimg} alt='' width={200} />
        </div>
        <div className='lg:tw-w-[50%] lg:tw-h-full'>
          <Row className='tw-flex tw-justify-between'>
            <Col xs="6" className="tw-mb-4">
              <div className="tw-flex tw-items-center tw-text-white tw-gap-2">
                <span>Actor</span>
                <Form.Select className="tw-bg-[#030a1b] tw-text-white tw-border-[#1976d2]" aria-label="Default select example">
                  <option>Choose</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col xs="6" className="tw-mb-4">
              <div className="tw-flex tw-items-center tw-text-white tw-gap-2">
                <span>Country</span>
                <Form.Select className="tw-bg-[#030a1b] tw-text-white tw-border-[#1976d2]" aria-label="Default select example">
                  <option>Choose</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col xs="6" className="tw-mb-4">
              <div className="tw-flex tw-items-center tw-text-white tw-gap-2">
                <span>Year</span>
                <Form.Select className="tw-bg-[#030a1b] tw-text-white tw-border-[#1976d2]" aria-label="Default select example">
                  <option>Choose</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col xs="6" className="tw-mb-4">
              <div className="tw-flex tw-items-center tw-text-white tw-gap-2">
                <span>Director</span>
                <Form.Select className="tw-bg-[#030a1b] tw-text-white tw-border-[#1976d2]" aria-label="Default select example">
                  <option>Choose</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col xs="12" className="tw-mb-4">
              <InputGroup>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-describedby="inputGroupPrepend"
                    className="tw-bg-[#030a1b] focus:tw-bg-[#030a1b] focus:tw-shadow-none focus:tw-text-white tw-py-3 tw-text-white tw-border-[#1976d2] tw-border-r-0"
                  />
                  <InputGroup.Text className="tw-bg-[#030a1b] tw-border-l-0 tw-text-white tw-border-[#1976d2]" id="inputGroupPrepend">
                    <FaSearch/>
                  </InputGroup.Text>
                </InputGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className={show === true ? 'tw-px-5' : 'tw-hidden'}>
        <div style={{scrollbarWidth:"none"}} className=' tw-py-7 tw-flex tw-gap-7  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-bg-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-bg-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-bg-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
          <div className='tw-text-white tw-rounded-full tw-text-center tw-p-2 tw-px-7 tw-border-2 tw-border-[#ec5baa]'>
            Drama
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar