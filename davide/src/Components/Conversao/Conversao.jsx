import React from 'react';
import styled from 'styled-components';
import msg from '../../assets/msg.svg';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

`;

const TextContent = styled.div`
  max-width: 50%;
  margin-left: 140px;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color)
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: #333;
  margin: 1rem 0;

  &:nth-child(3) {
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;

const ButtonLink = styled.a`
  margin-left: 60px;
  display: inline-block;
  background-color: #00e676; /* Verde vibrante */
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c853;
  }
`;

const Image = styled.img`
  max-width: 30%;
  margin-right: 80px;
`;

const Conversao = () => {
  return (
    <Section>
      <TextContent>
        <Heading>Faça um orçamento!</Heading>
        <Paragraph>
          Seja com cortinas, estofados ou móveis personalizados, oferecemos
          soluções completas que aliam funcionalidade e estilo para cada
          detalhe do seu hotel.
        </Paragraph>
        <Paragraph>
          Clique no botão abaixo e entre em contato pelo WhatsApp para
          descobrir como podemos transformar seu projeto em realidade!
        </Paragraph>
        <ButtonLink href="https://wa.me/SEUNUMERODEWHATSAPP" target="_blank">
          Quero saber mais
        </ButtonLink>
      </TextContent>
      <Image src={msg} alt="Imagem ilustrativa" />
    </Section>
  );
};

export default Conversao;
