import React, {useState} from 'react'
import { client, urlFor } from '../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { Product } from '../../../components';
import { useStateContext } from '../../../context/StateContext';

function ProductDetails({smartTV,smartTVs}) {

    const [index, setIndex] = useState(0);

    const { decQty, incQty, qty, onAdd} = useStateContext();

   
    
    const { image,name, details, price,actualPrice,discount} = smartTV 
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[index])} alt="" className='product-detail-image' />
                 
                </div>

                <div className="small-images-container">
                    {image?.map((item,i) => (
                        <img src={urlFor(item)} key={item._id} className={`${i === index ?('small-image selected-image'):('small-image')}`} onMouseEnter= {() => setIndex(i)} />
                    ))}
                </div>
            </div>

            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                         <AiFillStar/>
                         <AiFillStar/>
                         <AiFillStar/>
                         <AiFillStar/>
                         <AiFillStar/>
                         <AiOutlineStar/>
                    </div>
                    <p>(20)</p>
                </div>

                <h4>Details:</h4>
                <p>{details}</p>
                <p className="product-actualprice">Rs.{actualPrice}</p>
                <p className="price">Rs.{price}/-</p>
                <p className="product-discount">{discount}</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                        <span className="minus" onClick={decQty}>
                            <AiOutlineMinus/>

                        </span>
                        <span className="num" onClick="">
                          {qty}

                        </span>
                        <span className="plus" onClick={incQty}>
                            <AiOutlinePlus/>

                        </span>
                    </p>

                </div>

                <div className="buttons">
                    <button onClick={() => onAdd(smartTV,qty) } className="add-to-cart">Add to cart</button>
                    <button className="buy-now">Buy Now</button>
                </div>
            </div>



        </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    
                    <div className="maylike-products-container track">
                        {
                            smartTVs.map((item) => (
                                <Product key={item._id} product={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}


export const getStaticProps  = async ({params:{slug}}) => {
    
    const smartTVquery = `*[_type == "smartTV" && slug.current == '${slug}'][0]`;
    const smartTV = await client.fetch(smartTVquery);
    const smartTVsQuery = '*[_type == "smartTV"]';
    const smartTVs = await client.fetch(smartTVsQuery);
  
  
    
  
    return {
      props: { smartTV, smartTVs},
    };
  };

  export const getStaticPaths = async () => {

    const query = `*[_type == "smartTV"] {
        slug{
            current
        }

    }
    `;

    const smartTVs = await client.fetch(query);
    const paths = smartTVs.map((product) => ({
        params: {
            slug:product.slug.current
        }
    }));

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }

}
export default ProductDetails; 