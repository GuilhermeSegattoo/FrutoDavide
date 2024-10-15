import React from 'react'
import styled from 'styled-components';
import Sala from '../../assets/imgSala.svg'

const Inicio = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 550px;
 background-color: var(--secondary-color);
`
const Texto = styled.div`
 margin-top:20px
 
` 

const Titulo = styled.h1`
 font-weight: 700;
 color: var(--black-color);
 font-size: 96px;
margin-top:-200px
`
const TituloVerde = styled.span`
 color: var(--primary-color)
`
const SubTitulo = styled.p`
 font-weight: 100;
 color: var(--black-color);
 font-size: 32px;
 line-height: 40px;
 margin-top: -20px;
 
`
const Botao = styled.button`
  color: var(--primary-color)
  font-weight: 600;
  font-size: 24px;
  margin-top: 15px;
  margin-left: 50px; 
  width: 320px;
  height: 54px;
  border: solid 2px var(--primary-color); 
  border-radius: 15px;
  background-color: transparent; /* Define o fundo como transparente */
  color: var(--primary-color); /* Adicionei uma cor de texto, se necessário */
  cursor: pointer; /* Para indicar que é clicável */
  transition: background-color 0.3s, color 0.3s; /* Efeito de transição para hover */
  
  /* Adicione um efeito hover opcional */
  &:hover {
    background-color: var(--primary-color); /* Muda o fundo para a cor primária ao passar o mouse */
    color: white; /* Muda a cor do texto ao passar o mouse */
  }
`;

const Imagem = styled.img`
 margin-top: -200px;
`


const Header = () => {
    return (
        <Inicio>
            <Texto>
                <Titulo>Da<TituloVerde>vide</TituloVerde></Titulo>
                <SubTitulo>Soluções em decorações,<br/> transformando ambientes <br/>em  experiências inesquecíves.</SubTitulo>
                <Botao>Saiba Mais</Botao>
            </Texto>
            <Imagem src={Sala} alt="" />
        </Inicio>
    )
}

export default Header