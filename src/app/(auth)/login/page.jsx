"use client"
import React, { useState } from 'react'
import subtrac from '../../../../public/Subtract.png'
import Image from 'next/image';
import * as formik from 'formik';
import * as yup from 'yup';
import { Button, Form, Row,Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import { TbFidgetSpinner } from "react-icons/tb";
import { Flip, ToastContainer } from 'react-toastify';
import notify from './../../_components/useNotification';
import { useRouter } from 'next/navigation';


const Login = () => {
  const router =useRouter()
  const [loading,setLoading]=useState(false);
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const login=async(values)=>{
    setLoading(true)
    notify(`Welcome back, enjoy!!`,"success")
    setTimeout(() => {
      router.push("/")
    }, 1500);
  }

  return (
    <div className='tw-flex tw-flex-col lg:tw-flex-row tw-py-0 tw-pb-20 lg:tw-pb-0'>
      <div className='tw-h-[200px] tw-w-[100%] lg:tw-w-[40%] lg:tw-h-[100vh]'>
        <Image className='tw-h-[100%] tw-w-full ' src={subtrac} width={500} alt="df" priority />
      </div>
      <div className='tw-w-[100%] lg:tw-w-[50%] tw-pt-0 lg:tw-pt-20 tw-px-10 lg:tw-px-0'>
        <h2 className=" tw-border-2 tw-border-[#030a1b] tw-bg-[#030a1b] tw-rounded-full tw-absolute tw-top-[170px] lg:tw-static tw-text-[30px] tw-p-2  lg:tw-text-[50px] tw-text-center lg:tw-py-10 tw-text-white">Login</h2>
        <div className="tw-text-white tw-pt-[70px] lg:tw-p-0">
          <Formik
            validationSchema={schema}
            onSubmit={login}
            initialValues={{
              username: '',
              password: '',
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3 tw-flex tw-justify-center">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      {
                        errors.username ?
                        (
                          <Form.Control.Feedback className='tw-block tw-m-0' type="invalid">
                            {errors.username}
                          </Form.Control.Feedback>
                        )
                        :
                        (
                          <Form.Label>UserName</Form.Label>
                        )
                      }
                      <Form.Control className="tw-bg-inherit tw-text-white focus:tw-bg-inherit focus:tw-text-white placeholder:tw-text-gray-700 tw-border-2 tw-border-gray-700 " isInvalid={!!errors.username} name="username" onChange={handleChange} value={values.username} type="text" placeholder="User" required />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3 tw-flex tw-justify-center">
                    <Form.Group as={Col} md="6" controlId="validationCustom0">
                      {
                        errors.password ?
                        (
                          <Form.Control.Feedback className='tw-block tw-m-0' type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        )
                        :
                        (
                          <Form.Label>Password</Form.Label>
                        )
                      }
                      <Form.Control className="tw-bg-inherit tw-text-white focus:tw-bg-inherit focus:tw-text-white placeholder:tw-text-gray-700 tw-border-2 tw-border-gray-700 " isInvalid={!!errors.password} name="password" onChange={handleChange} value={values.password} type="password" placeholder="password" required />
                    </Form.Group>
                  </Row>
                  <Row className="tw-flex tw-justify-center">
                    <Col md="6" className="tw-flex tw-justify-center" >
                      {
                        !loading ? 
                        (
                          <Button type="submit">Login</Button>
                        ):
                        (
                          <div className='tw-flex tw-justify-center tw-text-white tw-text-[30px] '>
                            <TbFidgetSpinner className="tw-animate-spin"/>
                          </div>
                        )
                      }
                    </Col>
                  </Row>
                </Form>
            )}
          </Formik>
        </div>
        <div className='tw-text-white tw-py-10 tw-text-center'>
          <Link className='tw-underline' href="/signup">
            Dont have an account ? SignUp ...
          </Link>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} theme="colored" transition={Flip} />
    </div>
  )
}

export default Login