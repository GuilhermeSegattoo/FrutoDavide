import React from 'react';
import styled, { keyframes } from 'styled-components';
import Sala from '../../assets/imgSala.svg';

// Define a animação para mover a imagem de cima para baixo
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px); /* Começa 50px acima */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Termina na posição original */
  }
`;

const Inicio = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  background-color: var(--secondary-color);
`;

const Texto = styled.div`
  margin-top: 20px;
`;

const Titulo = styled.h1`
  font-weight: 700;
  color: var(--black-color);
  font-size: 96px;
  margin-top: -200px;
`;

const TituloVerde = styled.span`
  color: var(--primary-color);
`;

const SubTitulo = styled.p`
  font-weight: 500;
  color: var(--black-color);
  font-size: 32px;
  line-height: 40px;
  margin-top: -20px;
`;

const Botao = styled.button`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-top: 15px;
  margin-left: 50px;
  width: 320px;
  height: 54px;
  border: solid 2px var(--primary-color);
  border-radius: 15px;
  background-color: var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: transparent;
    color: var(--primary-color);
  }
`;

// Aplica a animação de slide com delay de 2 segundos
const Imagem = styled.img`
  margin-top: -200px;
  animation: ${slideDown} 1s ease-out forwards;
`;

const Header = () => {
  return (
    <Inicio id='inicio'>
      <Texto>
        <Titulo>Da<TituloVerde>vide</TituloVerde></Titulo>
        <SubTitulo>Soluções em decorações,<br/> transformando ambientes <br/>em experiências inesquecíveis!</SubTitulo>
        <Botao>Saiba Mais</Botao>
      </Texto>
      <Imagem src={Sala} alt="" />
    </Inicio>
  );
};

export default Header;
