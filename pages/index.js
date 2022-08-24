import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components/index";
import { client } from "../lib/client";
const Home = ({
  products,
  bannerData,
  smartphones,
  laptops,
  cloths,
  smartTVs,
}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData} />

      <div className="products-heading">
        <h1>Best Selling Products</h1>
        <p>Browse by Categories</p>
      </div>

      <h1 className="products-heading">Accessories</h1>
      <div className="products">
        <div className="products-container">
          {products?.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>

      <div className="products-heading">
        <h1>Smart Phones</h1>
        <p>Best in class smartphones at affordable price</p>
      </div>
      <div className="products">
        <div className="products-container">
          {smartphones?.map((phone) => (
            <Product product={phone} key={phone._id} />
          ))}
        </div>
      </div>
      <div className="products-heading">
        <h1>Smart TV</h1>
      </div>
      <div className="products">
        <div className="products-container">
          {smartTVs?.map((TV) => (
            <Product product={TV} key={TV._id} />
          ))}
        </div>
      </div>
      <div className="products-heading">
        <h1>CLothing and Fashion</h1>
        <p>Comfortable and funky summer wears for men and women</p>
      </div>
      <div className="products">
        <div className="products-container">
          {cloths?.map((cloth) => (
            <Product product={cloth} key={cloth._id} />
          ))}
        </div>
      </div>
      <div className="products-heading">
        <h1>Laptops</h1>
        <p>Performance packed laptops that will ease your work life</p>
      </div>
      <div className="products">
        <div className="products-container">
          {laptops?.map((laptop) => (
            <Product product={laptop} key={laptop._id} />
          ))}
        </div>
      </div>

      <FooterBanner footerBanner = {bannerData && bannerData[1]}/>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const smartphonequery = '*[_type=="smartphone"]';
  const smartphones = await client.fetch(smartphonequery);

  const laptopquery = '*[_type=="laptop"]';
  const laptops = await client.fetch(laptopquery);

  const clothquery = '*[_type=="clothing"]';
  const cloths = await client.fetch(clothquery);

  const smartTVquery = '*[_type=="smartTV"]';
  const smartTVs = await client.fetch(smartTVquery);

  return {
    props: { products, bannerData, smartphones, laptops, cloths, smartTVs },
  };
};

export default Home;
