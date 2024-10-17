import React from 'react';
import golden from '../../assets/Golden.svg';
import cullinan from '../../assets/Cullinan.svg';
import lets from '../../assets/Lets.svg';
import nobile from '../../assets/Nobile.svg';
import plaza from '../../assets/Plaza.svg';
import royal from '../../assets/Royal.svg';
import styled from 'styled-components';

const Fundo = styled.section`
  width: 100%;
  padding: 40px;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 40px;
    text-align: left;
  }

  .clientes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .cliente-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      max-width: 240px;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    p {
      font-size: 18px;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      color: var(--primary-color);
    }
  }
`;

const Cliente = () => {
  return (
    <Fundo>
      <h3>Nossos clientes</h3>
      <div className="clientes-grid">
        <div className="cliente-card">
          <img src={golden} alt="Golden Tulip Brasília" />
          <p>Golden Tulip Brasília</p>
        </div>
        <div className="cliente-card">
          <img src={plaza} alt="Plaza Brasília Hotel" />
          <p>Plaza Brasília Hotel</p>
        </div>
        <div className="cliente-card">
          <img src={royal} alt="Royal Tulip Hotel" />
          <p>Royal Tulip Hotel</p>
        </div>
        <div className="cliente-card">
          <img src={nobile} alt="Nobile Monumental" />
          <p>Nobile Monumental</p>
        </div>
        <div className="cliente-card">
          <img src={lets} alt="Let's Brasília" />
          <p>Let's Brasília</p>
        </div>
        <div className="cliente-card">
          <img src={cullinan} alt="Cullinan Hotel" />
          <p>Cullinan Hotel</p>
        </div>
      </div>
    </Fundo>
  );
};

export default Cliente;
