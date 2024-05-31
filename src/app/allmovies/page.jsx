import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Cards from '../_components/Cards'

const AllMovies = () => {
  const loop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <Container>
      <h1 className="tw-text-white tw-text-center tw-underline tw-text-[30px] tw-pt-10 tw-mb-20">Movies</h1>
      <Row>
        <SearchBar/>
      </Row>
      <Row className="tw-py-10">
        <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
          {
            loop.map(i=>(
              <Cards key={i}/>
            ))
          }
        </div>
      </Row>
    </Container>
  )
}

export default AllMovies
