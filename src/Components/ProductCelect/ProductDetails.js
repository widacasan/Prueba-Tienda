import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Product.css';

const ProductDetails = ({ products }) => {
  const navigate = useNavigate();
  const { productId } = useParams();

 
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
   
    navigate('/');
    return null;
  }

  const handleGoBack = () => {
  
    navigate('/');
  };

  return (
    <div className='product-details'>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className='product-image' />
      <p>{product.description2}</p>
      <p>Precio: $ {product.price}</p>
      <button className='back-button' onClick={handleGoBack}>
        Regresar al Menú Principal
      </button>
    </div>
  );
};

export default ProductDetails;