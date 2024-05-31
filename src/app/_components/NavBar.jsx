"use client"
import React, { useEffect } from 'react'
import logo from "../../../public/Logo.png"
import Image from 'next/image'
import { CiBoxList } from "react-icons/ci";
import { Container } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const NavBar = () => {
  const router =usePathname();

  return (
    <nav className={router.includes('/login') || router.includes('/signup') ? " d-none tw-bg-[#1976d2]" :"tw-bg-[#1976d2]"}>
      <Container>
        <div className='tw-flex tw-justify-between tw-items-center'>
          <div>
            <Link href="/">
              <Image src={logo} alt='logo' width={70} />
            </Link>
          </div>
          <div className='tw-text-2xl tw-text-white'>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar