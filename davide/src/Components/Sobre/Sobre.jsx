import React from 'react'
import styled from 'styled-components'
import sala from '../../assets/sala.svg'

const Section = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 370px;
 background-color: var(--white-color);
`

const Sobre = () => {
  return (
    <section>
      <div>
        <img src={sala} alt="" />
            <h2>
            A 35 anos no mercado e décadas de experiência
            </h2>
            <p>
            nossa equipe teve o orgulho 
            de transformar alguns dos mais icônicos prédios de 
            Brasília em ambientes acolhedores e sofisticados. 
            </p>
        </div>
    </section>
  )
}

export default Sobre