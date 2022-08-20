import React from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 WebShop All rights reserved</p>
      <p>Made with ❤️ by Deepak</p>
      <p className="icons">
        <p>
          <Link href=''><AiFillInstagram/></Link> 
        </p>
        <p>
           <Link href=''><AiOutlineTwitter/></Link>
        </p>
        <p>
         <Link href=''><AiFillGithub/></Link> 
        </p>
        <p>
          <Link href=''><AiFillLinkedin/></Link> 
        </p>
       
          
         
        
      </p>
    </div>
  )
}

export default Footer