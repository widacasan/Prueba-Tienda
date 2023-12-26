import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = ({ total, onPaymentComplete }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    alert(`Pago exitoso. Total: $${total}`);
    onPaymentComplete();
    navigate('/');
  };

  return (
    <div className="payment-gateway-overlay">
      <div className="payment-gateway">
      <h2>Pasarela de Pagos</h2>
      <div>
        <label>Número de Tarjeta:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </div>
      <div>
        <label>Fecha de Vencimiento:</label>
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
      </div>
      <div>
        <label>CVV:</label>
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </div>
      <button onClick={handlePayment}>Pagar</button>
    </div>
    </div>
  );
};

export default PaymentGateway;