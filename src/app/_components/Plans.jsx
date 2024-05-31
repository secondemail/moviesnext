import React from 'react'
import { Container } from 'react-bootstrap'
import plan from "../../../public/Price_basic.png"
import plan2 from "../../../public/Price_Premium.png"
import plan3 from "../../../public/Price_sggested.png"
import Image from 'next/image'

const Plans = () => {
  return (
    <Container>
      <div className="tw-py-7">
        <h2 className='tw-text-center tw-text-white tw-text-[30px] tw-underline-offset-4 tw-underline'>Check Our Plans</h2>
      </div>
      <div className="tw-flex tw-items-center tw-gap-10 tw-justify-center">
        <div >
          <Image src={plan} width={200} alt="paln"/>
        </div>
        <div >
          <Image src={plan3} width={270} alt="paln1"/>
        </div>
        <div>
          <Image src={plan2} width={200} alt="paln2"/>
        </div>
      </div>
    </Container>
  )
}

export default Plans
