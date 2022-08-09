import React from 'react';
import {Product, FooterBanner, HeroBanner} from '../components/index'
const Home = () => {
  return(
    <>

    <HeroBanner/>
    <div className="products-heading">
    <h1>Best Selling Products</h1>
    <p>Speakers of many variations</p>

    </div>

    <div className="products-container">
      {
        ['product1', 'product2',' product3'].map((product) => product)
      }
    </div>

    <FooterBanner/>

    </>
  )
}


export default Home;