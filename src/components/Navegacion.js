 
 import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/create">Crear Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navegacion;
