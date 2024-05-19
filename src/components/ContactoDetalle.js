 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContactoDetalle = () => {
  const { id } = useParams();
  const [contacto, setContacto] = useState(null);

   useEffect(() => {
    const fetchContacto = async () => {
      try {
        const res = await axios.get(`/api/contacts/${id}`);
        setContacto(res.data);
      } catch (error) {
        console.error('Error al obtener el contacto', error);
      }
    };
    fetchContacto();
  }, [id]);

  if (!contacto) return <div>Cargando...</div>; // mensaje De carga

  
  return (
    <div>
      <h1>{contacto.name}</h1>
      <p>Teléfono: {contacto.phone}</p>
      <p>Email: {contacto.email}</p>
    </div>
  );
};

export default ContactoDetalle;
