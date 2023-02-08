import Image from 'next/image'
import React from 'react'
import image from '../assets/successImg.png'



const Success = () => {
  return (
  <div style={{
    'display':'flex',
    'justifyContent':'center',
    'alignItems':'center',
    'flexDirection':'column'
  }}>
    <img src={image.src} alt="" className="logo-container" style={{ width:'400px'}} />

    <p style={{
      'text-align':'center',
      'fontSize':'30px',
      'margin':'50px'

  }}>
    Order Successfull 🥳
    </p>

  </div>
  )
}

export default Success