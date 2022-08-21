import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';


const Product = ({product:{image, producttype, name, slug,price,discount,actualPrice}}) => {
  return (
    <div>
      
      <Link href={`/product/${producttype}/${slug.current} `}>
        <div className="product-card">
          <img src={urlFor(image && image[3])} width={250} height={250} className="product-image" alt="" />
          <p className="product-name">{name}</p>
          <p className="product-discount">{discount}</p>
          <div className="product-price">
          <p className="product-actualprice">Rs. {actualPrice}</p>
          <p>Rs. {price}/-</p>
          
          </div>

        </div>
      </Link>

    </div>
  )
}

export default Product