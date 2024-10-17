import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/image1.svg';
import img2 from '../../assets/image2.svg';
import img3 from '../../assets/image3.svg';
import img4 from '../../assets/image4.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Styled-components
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px;
   
`;

const TextContainer = styled.div`
    flex: 1;
    max-width: 500px;
    margin-right: 20px;
`;

const Title = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: var(--primary-color);
    text-align: left;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    color: var(--black-color);
    text-align: left;
`;

const ImageContainer = styled.div`
    flex: 1;
    max-width: 500px;
`;

const Botao = styled.button`
  color: var(--primary-color)
  font-weight: 500;
  font-size: 15px;
  margin-top: 15px;
  margin-left: 50px; 
  width: 420px;
  height: 54px;
  border: solid 2px var(--primary-color); 
  border-radius: 15px;
  background-color: var(--primary-color); 
  color: var(--secondary-color); /* Adicionei uma cor de texto, se necessário */
  cursor: pointer; /* Para indicar que é clicável */
  transition: background-color 0.3s, color 0.3s; /* Efeito de transição para hover */
  
  /* Adicione um efeito hover opcional */
  &:hover {
    background-color: #00FF00;
    color: var(--primary-color); 
  }
`;

const SegundoSobre = () => {
    return (
        <Container>
            <TextContainer>
                <Title>Soluções Sob Medida para Hospedagens Inesquecíveis</Title>
                <Description>Transforme suas ideias em experiências inesquecíveis</Description>
                <Description>Do design dos quartos à escolha dos enxovais, 
                criamos tudo sob medida para você.
                </Description> 
                <Botao>Vamos dar vida ao projeto dos sonhos?</Botao>      
            </TextContainer>

            <ImageContainer>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="Imagem 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="Imagem 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="Imagem 3" />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="Imagem 4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </ImageContainer>
        </Container>
    );
};

export default SegundoSobre;
