
import React, { useState } from 'react';
import './ContactForm.css';  

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    celular: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('¡El formulario se envió con éxito!');

  };

  return (
    <div className="container">
      <h2 className="heading">Tienes dudas? Contactanos:</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" />
        </label>
        <br />
        <label className="label">
          Correo Electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" />
        </label>
        <br />
        <label className="label">
          Celular:
          <input type="tel" name="celular" value={formData.celular} onChange={handleChange} className="input" />
        </label>
        <br />
        <label className="label">
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange} className="textarea" />
        </label>
        <br />
        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
