import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai';
import image from '../logos/2.png';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const { showCart, setShowCart , totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      
      <div className="logo">
        <Link href="/">
          <div className="logo-container">
          <img src={image.src} alt="" className="logo" /> <p>WebShop</p>
          </div>
        </Link>
      </div>


      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        {console.log(showCart)}
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart/>  }
    </div>
  )
}

export default Navbar;