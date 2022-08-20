import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai';
import image from '../logos/2.png';
const Navbar = () => {
  return (
    <div className="navbar-container">
      
      <div className="logo">
        <Link href="/">
          <div className="logo-container">
          <img src={image.src} alt="" className="logo" /> <p>WebShop</p>
          </div>
        </Link>
      </div>


      <button type="button" className="cart-icon" onCLick=''>
        <AiOutlineShopping/>
        <span className="cart-item-qty">2</span>
      </button>
    </div>
  )
}

export default Navbar;