import { useActionData } from 'react-router-dom';
import './index.scss'
import Cabecalho from '../../Components/cabeçalho';
import Clientes from '../../Components/clientes';

export const Inicio = () => {

  const objective = [
    { id: 1, title: 'AUMENTAR A VISIBILIDADE DA MARCA', subtitle: 'Impulsione sua visibilidade online e atraia mais clientes com um site otimizado e atraente.', image: 'images/aumento.png' },
    { id: 2, title: 'AUMENTAR AS VENDAS', subtitle: 'Transforme visitantes em clientes com um site projetado para aumentar vendas e conversões.', image: 'images/vendas.png' },
    { id: 1, title: 'MELHORAR A CREDIBILIDADE DA EMPRESA', subtitle: 'Desenvolver um site impressionante que eleve a percepção de profissionalismo e confiança da sua empresa.', image: 'images/credibilidade.png' },
  ]

  const friends = [
   {id: 1, image: 'images/hosti.png'},
   {id: 2, image: 'images/norton.png'},
   {id: 3, image: 'images/figmaa1.png'},

  ]






  return (
    <div className='main'>
      <Cabecalho />
      <div className='main-especialista'>
        <div className='especialista'>
          <h1 className='text1'>15 ANOS FACILITANDO SEU SUCESSO ONLINE</h1>
          <h4>EMPODERANDO SEU SITE COM TECNOLOGIA E CRIATIVIDADE</h4>
          <p className='text2'>  NA ConstruaWeb, transformamos suas ideias em sites PERSONALIZADOS e EFICAZES. Com foco em inovação e simplicidade, garantimos uma presença online marcante e profissional.</p>
          <p className='text3'>PRONTO PRA INICIAR? Entre em contato conosco e descubra como podemos ajudar no seu projeto digital.</p>
          <a href="">Fale com um Especialista</a>
        </div>
        <img src="images/women.png" alt="" />

      </div>
      <div className='main-objetivo'>
        <div className='objetivo'>
          <h1>QUAL É O OBJETIVO DO SEU SITE?</h1>
          <div className='propostas'>
            {
              objective.map(item => (
                <div key={item.id} className='bloco'>
                  <img src={item.image} alt="" />
                  <h1>{item.title}</h1>
                  <p>{item.subtitle}</p>
                  <a href="">SAIBA MAIS</a>
                </div>
              ))
            }
          </div>
        </div>

      </div>
      <Clientes />
      <div className='main-parcerias'>
        <div className='parcerias'>
          <div className='colaboradores'>
           <h1>NOSSAS PARCERIAS</h1>
           <p>Colaboramos com parceiros estratégicos para oferecer soluções inovadoras e completas, garantindo resultados excepcionais para seu projeto digital.</p>
          </div>
         <div className='parceros'>
          <img src="images/hosti.png" alt="" />
          <img src="images/norton.png" alt="" />
          <img src="images/figmaa1.png" alt="" />
        </div>
        
        </div>

      </div>

     <div className='end'>

     </div>


    </div>
  )
}



export default Inicio;