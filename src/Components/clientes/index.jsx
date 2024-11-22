import React from 'react'
import './index.scss'

export const Clientes = () => {


    const results = [
        { id: 1, title: 'CRESCIMENTO DE 60% NAS VENDAS', image: 'images/starbuksTCC.png', logo: 'images/Frame 1.png' },
        { id: 2, title: 'AUMENTO DE 40% NAS REDES SOCIAS', image: 'images/cacaushowTCC.png', logo: 'images/cacauLOGO.png' },
        { id: 3, title: 'AUMENTO NA VISIBILIDADE DE PRODUTOS', image: 'images/costura.png', logo: 'images/costuraLG.png' },
        { id: 4, title: '60% DE CRESCIMENTO NO ENGAJAMENTO', image: 'images/tn.png', logo: 'images/tnlogo.png' },
        { id: 5, title: 'MELHORA NA QUANTIDADE DE VISITAS ', image: 'images/central.png', logo: 'images/centralLogo.png' },
        { id: 6, title: 'AUMENTO EM 30% NAS VENDAS ONLINES', image: 'images/natura-loja.png', logo: 'images/logoNatura.png' },

    ]






    return (
        <div className='main-resultados'>
            <div className='resultados'>
                <h1 className='test'>POR QUE ESCOLHER A CONSTRUAWEB?</h1>
                <p>Optar pela ConstruaWeb significa escolher agilidade e clareza. Focamos em entregar soluções sob medida para suas necessidades, garantindo o melhor retorno sobre seu investimento digital.</p>
                <div className='resultados2'>
                    {
                        results.map(item => (
                            <div key={item.id} className='blocos2'>
                                <div className='mascara'>
                                    <img src={item.logo} alt="" />
                                    <h1>{item.title}</h1>
                                    <a href="">SAIBA MAIS</a>
                                </div>
                                <img className='fundo' src={item.image} alt="" />
                            </div>
                        ))

                    }
                </div>
                <a href="">Ver todos os Resultados</a>
            </div>

        </div>
    )
}

export default Clientes;
