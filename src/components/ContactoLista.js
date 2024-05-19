
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const ContactoLista = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const fetchContactos = async () => {
      try {
        const res = await axios.get('/api/contacts');
        setContactos(res.data);
      } catch (error) {
        console.error('Error al obtener contactos', error); // log  error
      }
    };
    fetchContactos();

  }, []);


  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ul>
        {contactos.map(contacto => (
          <li key={contacto._id}>
            <Link to={`/contacts/${contacto._id}`}>{contacto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactoLista;