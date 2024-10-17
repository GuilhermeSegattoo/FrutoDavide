import React from 'react';
import styled from 'styled-components';
import toalha from '../../assets/toalhas.svg';
import cortina from '../../assets/cortina.svg';
import flats from '../../assets/flats.svg';

// Container do carrossel
const CarrosselWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Permitir rolagem horizontal */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  scroll-behavior: smooth; /* Rolagem suave */
  white-space: nowrap; /* Impedir que as imagens quebrem a linha */
`;

// Estilo dos itens do carrossel
const ProdutoCard = styled.div`
  background-color: #F8F8F8;
  border: 2px solid #4F6D3C;
  border-radius: 15px;
  display: inline-block; /* Impedir quebra de linha */
  padding: 10px;
  width: 250px;
  margin-right: 20px; /* Espaço entre os cards */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Faz o item "saltar" ao passar o mouse */
  }
`;

const ProdutoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ProdutoName = styled.p`
  font-size: 1.25rem;
  color: #4F6D3C;
  margin-top: 10px;
`;
const Titulo = styled.h2`
  margin-top: 20px;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: left;
  margin-left: 160px;
  color: var(--primary-color)
`

const Produtos = () => {
  const produtos = [
    { src: toalha, name: 'Toalhas' },
    { src: flats, name: 'Flats' },
    { src: cortina, name: 'Cortinas' },
    // Adicione mais produtos aqui
  ];

  return (
    <section>
     <Titulo>Nossos Produtos</Titulo>  
    <CarrosselWrapper>
      {produtos.map((produto, index) => (
        <ProdutoCard key={index}>
          <ProdutoImage src={produto.src} alt={produto.name} />
          <ProdutoName>{produto.name}</ProdutoName>
        </ProdutoCard>
      ))}
    </CarrosselWrapper>
    </section>
  );
};

export default Produtos;
