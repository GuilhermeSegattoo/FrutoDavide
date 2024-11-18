import React from 'react';
import styled from 'styled-components';
import sala from '../../assets/sala.svg';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  padding: 20px;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    flex-direction: column; /* Muda o layout para coluna em telas menores */
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 370px;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    flex-direction: column; /* Coloca imagem abaixo do texto */
    height: auto; /* Ajusta a altura para auto */
  }
`;

const Dados = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--primary-color);
  border: 2px;
  border-radius: 8px;
  padding: 10px;
  margin-top: -90px;
  margin-bottom: 30px;
  width: 90%;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Dado = styled.div`
  text-align: center;
  color: white;
  margin: 10px 0;
`;

const Numero = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin: 0;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Descricao = styled.p`
  font-size: 14px;
  color: white;
  margin: 0;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Texto = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  width: 567px;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  margin-top: -155px;
  margin-left: 50px;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
    width: 80%; /* Reduz o tamanho da imagem */
    max-width: 300px;
  }
`;

const Frase = styled.h2`
  font-weight: 600;
  font-size: 25px;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubFrase = styled.p`
  font-weight: 300;
  font-size: 20px;
  width: 529px;

  // Ajuste para telas menores que 768px
  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

const Sobre = () => {
  return (
    <Section id="Sobre">
      <Div>
        <Texto>
          <Dados>
            <Dado>
              <Numero>150+</Numero>
              <Descricao>Projetos Concluídos</Descricao>
            </Dado>
            <Dado>
              <Numero>35 anos</Numero>
              <Descricao>Experiência no Mercado</Descricao>
            </Dado>
            <Dado>
              <Numero>500+</Numero>
              <Descricao>Apartamentos Decorados</Descricao>
            </Dado>
            <Dado>
              <Numero>80+</Numero>
              <Descricao>Clientes Satisfeitos</Descricao>
            </Dado>
          </Dados>
          <Frase>A melhor qualidade para seus hóspedes</Frase>
          <SubFrase>
            Nossa equipe teve o orgulho de transformar alguns dos mais icônicos prédios de
            Brasília em ambientes acolhedores e sofisticados.
          </SubFrase>
        </Texto>
        <Image src={sala} alt="Sala decorada" />
      </Div>
    </Section>
  );
};

export default Sobre;
