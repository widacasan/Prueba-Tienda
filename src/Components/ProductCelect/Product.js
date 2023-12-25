import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, image, title, description, price, onAddToCart, onDetailsClick }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        <Link to={`/details/${id}`} onClick={() => onDetailsClick(id)} className="details-button">
  Detalles
</Link>
      </div>
    </div>
  );
};

export default Product;