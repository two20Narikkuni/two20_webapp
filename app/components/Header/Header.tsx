import React from 'react'
import Image from 'next/image'
import './header.css'

const Header = () => {
  return (
    <div className='header-container '>
        <div className='header container mx-auto flex items-center justify-between'>
            <div className="logo">
                <Image src="/logo.svg" alt="logo" width={100} height={100}/>
            </div>

            <div className="hamburger-btn">
                <Image src="/hamicon.svg" alt="hamburger" width={30} height={30}/>
            </div>
        </div>
    </div>
  )
}

export default Header