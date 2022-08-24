import React from 'react';
import Link from 'next/link';
import {urlFor} from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
        
        <div>
            <p className="beats-solo">
                {heroBanner[0].smallText}
            </p>
            <h3>{heroBanner[0].midText}</h3>
            <h1>{heroBanner[0].largeText1}</h1>
            <h1>{heroBanner[0].largeText2}</h1>
            <img src={urlFor(heroBanner[0].image)} alt="headphones" className="hero-banner-image" />
            <div>
                <Link href={`/product/smartphone/${heroBanner[0].slug.current}`}>
                    <button type="button">{heroBanner[0].buttonText}</button>
                </Link>

                <div className="hero-banner-price">
                <p className="beats-solo">{heroBanner[0].discount}</p>
                <p className="beats-solo">{heroBanner[0].saleTime}</p>

                </div>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner[0].desc} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner;