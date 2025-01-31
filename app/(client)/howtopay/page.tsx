import React from 'react'
import './style.css'

const page = () => {
  return (
    <div className='howtopay-section-container font-sans'>
        <div className="howtopay-section container mx-auto">
            <h2>How To Pay</h2>
            <div className="list-container">
                <div className="item flex items-center">
                    <img src="/star.svg" alt="" />
                    <p>Select the amount to pay</p>
                </div>

                <div className="item flex items-center">
                    <img src="/star.svg" alt="" />
                    <p>Enter Name(Optional) and mobile no</p>
                </div>

                <div className="item flex items-center">
                    <img src="/star.svg" alt="" />
                    <p>After that  click the pay now button</p>
                </div>

                <div className="item flex items-center">
                    <img src="/star.svg" alt="" />
                    <p>Complete the payment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page