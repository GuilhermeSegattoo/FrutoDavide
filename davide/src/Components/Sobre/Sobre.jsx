import React from 'react'
import styled from 'styled-components'
import sala from '../../assets/sala.svg'

const Section = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: var(--white-color);
`
const Div = styled.div`
 display: flex;
 aling-items: space-betwen; 
 height: 370px;
`
const Texto = styled.div`
  margin-top: 100px;
  margin-left: 50px; 
  width: 567px;
`
const Image = styled.img`
  margin-top: -155px;
  margin-left: 50px; 
`
const Frase = styled.h2`
 font-weight: 600;
  font-size: 32px;
`
const SubFrase = styled.p`
 font-weight: 300;
 font-size: 24px;
 width: 529px;
`


const Sobre = () => {
  return (
    <Section>
      <Div>
        <Image src={sala} alt="" />
        <Texto>
          <Frase>
            A 35 anos no mercado e décadas de experiência
          </Frase>
          <SubFrase>
            nossa equipe teve o orgulho
            de transformar alguns dos mais icônicos prédios de
            Brasília em ambientes acolhedores e sofisticados.
          </SubFrase>
        </Texto>
      </Div>
    </Section>
  )
}

export default Sobre