import React from 'react'
import Cabecalho from '../../Components/cabeçalho'
import './index.scss'

export const Clientes = () => {
  return (
    <div className='cliente'>
        <Cabecalho/>
        <div className='clientes'>
          <h1>Clientes</h1>
          <p>Com mais de 500 clientes atendidos, a ConstruaWeb possui a expertise necessária para desenvolver projetos de marketing digital personalizados, alinhando estratégias às necessidades específicas de cada empresa e aos seus objetivos de crescimento.</p>
        </div>
        <div className='logos'>
          <img src="images/logoNatura.png" alt="" />
          <img src="images/logostar.png" alt="" />
          <img src="images/tnlogo.png" alt="" />
          <img className='cacau' src="images/cacauLOGO.png" alt="" />
          <img className='cost' src="images/costuraLog.png" alt="" />
          <img className='central'  src="images/centralLogo.png" alt="" />
        </div>
    </div>
  )
}
