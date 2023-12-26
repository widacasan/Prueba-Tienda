// ShoppingCart.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, onQuantityChange, onRemoveItem }) => {
  const [total, setTotal] = useState(calculateTotal());

  useEffect(() => {
    setTotal(calculateTotal());
    localStorage.setItem('cart', JSON.stringify(cartItems));
    // eslint-disable-next-line
  }, [cartItems]);

  function calculateTotal() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <div className="shopping-cart">
    <h2>Carrito de Compras</h2>
    <Link to="/">
      <button>Volver a la Página Principal</button>
    </Link>
    {cartItems.length === 0 ? (
      <p>El carrito está vacío. ¡Agrega productos desde la página de productos!</p>
    ) : (
      <>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price.toFixed(2)}</p>
            </div>
            <div>
              <input
                type="number"
                className="quantity-input"
                value={item.quantity}
                onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
              />
              <span onClick={() => onRemoveItem(item.id)} className="remove-button">
                Eliminar
              </span>
            </div>
          </div>
        ))}
        <div className="total">
          <p>Total: ${total.toFixed(2)}</p>
        </div>
        <Link to="/checkout">
          <button>Realizar Pedido</button>
        </Link>
      </>
    )}
  </div>
  );
};

export default ShoppingCart;
