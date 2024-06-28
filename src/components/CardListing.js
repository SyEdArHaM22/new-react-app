import React from 'react';
import  { useState, useEffect } from 'react';
import './CardListing.css';
import Spinner from './Spinner';

const CardListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false)
      } catch (error) {
        setLoading(false);
       
      }
    };

    fetchData();
  }, []);

  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    {loading ? (
    <Spinner loading={loading} />
    ) : ( 
    
      products.map(product => (

        <div key={product.id} className="card">
          <div className='card-img'>
          <img src={product.image} alt={product.title} />
          </div>
          
          <div className="card-content">

            <h3>{product.title}</h3>
            <p className='desc'>{product.description}</p>
            <p><b>Price:</b> ${product.price}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Rating:</b> {product.rating.rate} ({product.rating.count} reviews)</p>

          </div>
        </div>

      ))
  
  )} 
    
    {/* <div className="product-list">

      {products.map(product => (

        <div key={product.id} className="card">
          <div className='card-img'>
          <img src={product.image} alt={product.title} />
          </div>
          
          <div className="card-content">

            <h3>{product.title}</h3>
            <p className='desc'>{product.description}</p>
            <p><b>Price:</b> ${product.price}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Rating:</b> {product.rating.rate} ({product.rating.count} reviews)</p>

          </div>
        </div>

      ))};
      
    </div> */}

    </>
  );
};

export default CardListing;
