import React from 'react';
import styled from 'styled-components';
import toalha from '../../assets/toalhas.svg';
import cortina from '../../assets/cortina.svg';
import flats from '../../assets/flats.svg';
import flats2 from '../../assets/flat2.svg';
import toalha2 from '../../assets/toalha2.svg';
import toalha3 from '../../assets/toalha3.svg';
import enxoval from '../../assets/enxoval.svg';
import enxoval2 from '../../assets/enxoval2.svg';

// Container geral
const Container = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Título da seção
const Titulo = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: var(--primary-color);
`;

// Estilo para a exibição em duas colunas horizontais
const ProdutosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permitir quebra de linha */
  justify-content: center;
  gap: 30px; /* Espaçamento entre os produtos */
  width: 90%;

  @media (max-width: 768px) {
    gap: 20px; /* Diminui o espaço entre os produtos em telas menores */
  }
  
  @media (max-width: 480px) {
    gap: 15px; /* Diminui ainda mais o espaço em telas muito pequenas */
  }
`;

// Card do produto
const ProdutoCard = styled.div`
  background-color: #F8F8F8;
  border: 2px solid #4F6D3C;
  border-radius: 15px;
  padding: 20px;
  width: 250px; /* Largura fixa para cada card */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px; /* Diminui a largura do card em telas menores */
  }

  @media (max-width: 480px) {
    width: 150px; /* Diminui ainda mais a largura do card em telas muito pequenas */
  }
`;

// Imagem do produto
const ProdutoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

// Nome do produto
const ProdutoName = styled.p`
  font-size: 1.25rem;
  color: #4F6D3C;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; /* Centraliza o texto em telas menores */
`;

// Breve descrição do produto
const ProdutoDescricao = styled.p`
  font-size: 1rem;
  color: #777;
  text-align: center;
  margin-bottom: 20px;
`;



const Produtos = () => {
  const produtos = [
    { src: toalha, name: 'Toalhas', descricao: 'Toalhas de alta qualidade para o seu hotel.' },
    { src: cortina, name: 'Cortinas', descricao: 'Cortinas elegantes e de alta qualidade para qualquer ambiente.' },
    { src: enxoval, name: 'Enxoval completo', descricao: 'Enxoval completo para uma experiência inesquecível.' },
    { src: flats, name: 'Flats', descricao: 'Conforto e sofisticação desde um sofá cama até a cama princípal.' },
    { src: toalha2, name: 'Toalhas', descricao: 'Conforto e maciez do jeito que seu hospede vai amar' },
    { src: flats2, name: 'Flats', descricao: 'Decoramos seu flat na mais alta qualidade e luxo' },
    { src: enxoval2, name: 'Enxoval completo', descricao: 'Lençóis, colchas e travesseiros de qualidade superior.' },
    { src: toalha3, name: 'Toalhas', descricao: 'Feitas com tecido premium e superabsorventes.' },
    
    // Adicione mais produtos conforme necessário
  ];

  return (
    <Container>
      <Titulo>Nossos Produtos</Titulo>
      <ProdutosWrapper>
        {produtos.map((produto, index) => (
          <ProdutoCard key={index}>
            <ProdutoImage src={produto.src} alt={produto.name} />
            <ProdutoName>{produto.name}</ProdutoName>
            <ProdutoDescricao>{produto.descricao}</ProdutoDescricao>
          </ProdutoCard>
        ))}
      </ProdutosWrapper>
    </Container>
  );
};

export default Produtos;
