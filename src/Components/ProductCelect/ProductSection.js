// ProductSection.js

import React, { useState } from 'react';
import Product from './Product';
import ProductDetails from './ProductDetails';
import './Product.css';

const ProductSection = ({ products, onAddToCart }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDetailsClick = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="product-section">
      <h2>Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={onAddToCart}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>
      {selectedProductId && <ProductDetails productId={selectedProductId} />}
    </div>
  );
};

export default ProductSection;
