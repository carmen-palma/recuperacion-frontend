import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactoFormulario = ({ contacto }) => {
  const [name, setName] = useState(contacto ? contacto.name : '');
  const [phone, setPhone] = useState(contacto ? contacto.phone : '');
  const [email, setEmail] = useState(contacto ? contacto.email : '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const nuevoContacto = { name, phone, email };

    try {
      if (contacto) {
        await axios.put(`/api/contacts/${contacto._id}`, nuevoContacto);
      } else {
        await axios.post('/api/contacts', nuevoContacto);
      }
      navigate('/');
    } catch (error) {
      console.error('Error al guardar el contacto', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Teléfono</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ContactoFormulario;