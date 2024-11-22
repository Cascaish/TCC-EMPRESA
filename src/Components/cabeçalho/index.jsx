import React from 'react'
import './index.scss'

export const Cabecalho = () => {
  return (
    <header>
    <div className='main-header'>
        <nav className='site-title'>
      <img src="images/ConstruaWeb.png" alt="" />
         <div className='navigation-bar'>
            <a href="">Serviços</a>
            <a href="">Clientes</a>
            <a href="">Resultados</a>
            <a href="">Sobres</a>
         </div>
           <button>
            Entrar em Contato
            <i className='ri-user-line'></i>
           </button>
        </nav>
    </div>
 </header>

  )
}

export default Cabecalho;