"use client"
import  React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap'

const Questions = () => {
  return (
    <Container className='tw-py-10'>
      <h2 className='tw-text-center tw-text-white tw-text-[30px] tw-py-7'>SkyLineMovies Questions Everyone`s Asking</h2>
      <Row>
        <div className='tw-py-3'>
          <Accordion>
            <Accordion.Item eventKey="0" className='tw-bg-inherit tw-text-white  tw-border-[#ec5baa] tw-border-2'>
              <Accordion.Header>What is SkyLineMovies ?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='tw-py-5'>
          <Accordion>
            <Accordion.Item className='tw-bg-inherit tw-text-white  tw-border-[#ec5baa] tw-border-2' eventKey="0">
              <Accordion.Header>How do I Get Help If I Have Any Issues?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='tw-py-5'>
          <Accordion>
            <Accordion.Item className='tw-bg-inherit tw-text-white  tw-border-[#ec5baa] tw-border-2' eventKey="0">
              <Accordion.Header>Is SkyLineMovies Good For Kids & Families?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='tw-py-5'>
          <Accordion>
            <Accordion.Item className='tw-bg-inherit tw-text-white  tw-border-[#ec5baa] tw-border-2' eventKey="0">
              <Accordion.Header>How much Does SkyLineMovies Cost?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Row>
    </Container>
  )
}

export default Questions
