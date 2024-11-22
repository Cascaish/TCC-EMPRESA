import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Clientes } from './pages/clientes';
import 'remixicon/fonts/remixicon.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Inicio/>}/>

      <Route path='/Clientes' element={<Clientes/>}/>

      </Routes>
     </BrowserRouter>
);

