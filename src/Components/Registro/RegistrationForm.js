
import React, { useState } from 'react';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Formulario de registro enviado:', formData);
    alert('¡Registro exitoso!');
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
