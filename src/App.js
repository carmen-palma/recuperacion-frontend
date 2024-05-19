
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import Inicio from './components/Inicio';
import Crear from './components/Crear';
import ContactoDetalle from './components/ContactoDetalle';

const App = () => {

  return (
    <div>
      <Navegacion /> {/* componente de navegación */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/create" element={<Crear />} />
        <Route path="/contacts/:id" element={<ContactoDetalle />} />
      </Routes>
    </div>

  );
};


export default App;