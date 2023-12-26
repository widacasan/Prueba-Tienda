import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import PaymentGateway from "../Pay/PaymentGateway";
import "./ShoppingCart.css";

Modal.setAppElement("#root");

const ShoppingCart = ({
  cartItems,
  setCartItems,
  onQuantityChange,
  onRemoveItem,
}) => {
  const [total, setTotal] = useState(calculateTotal());
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotal());
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // eslint-disable-next-line
  }, [cartItems]);

  function calculateTotal() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  const handlePaymentComplete = () => {
    alert("¡Pago exitoso! Gracias por tu compra.");
    setIsPaymentOpen(false);
    setCartItems([]);
    localStorage.removeItem("cart");
    navigate("/");
  };

  const handlePaymentOpen = () => {
    setIsPaymentOpen(true);
  };

  const handlePaymentClose = () => {
    setIsPaymentOpen(false);
  };

  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      <Link to="/">
        <button>Volver a la Página Principal</button>
      </Link>
      {cartItems.length === 0 ? (
        <p>
          El carrito está vacío. ¡Agrega productos desde la página de productos!
        </p>
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
                  onChange={(e) =>
                    onQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <span
                  onClick={() => onRemoveItem(item.id)}
                  className="remove-button"
                >
                  Eliminar
                </span>
              </div>
            </div>
          ))}
          <div className="total">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          <button onClick={handlePaymentOpen}>Continuar pago</button>

          <Modal
            isOpen={isPaymentOpen}
            onRequestClose={handlePaymentClose}
            contentLabel="Pasarela de Pagos"
            className="payment-modal"
            overlayClassName="payment-overlay"
          >
            <PaymentGateway
              total={total}
              onPaymentComplete={handlePaymentComplete}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
