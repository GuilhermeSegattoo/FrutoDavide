import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiCopyrightFill } from 'react-icons/ri';

// Styled Components
const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  min-height: 200px;
  padding: 32px 16px;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BrandWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  color: white;
`;

const BrandTitle = styled.h2`
  display: flex;
  gap: 8px;
  align-items: center;

  h2 {
    font-size: 24px;
  }

  .info {
    font-weight: 700;
    font-size: 56px;
    color: white;
  }

  .gerencial {
    font-weight: 700;
    font-size: 56px;
    color: var(--secondary-color);
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: white;
`;

const ContactInfo = styled.div`
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: inherit;
    text-decoration: none;
  }

  .phone {
    font-weight: bold;
  }

  .address {
    font-style: italic;
  }

  .social-icons {
    display: flex;
    gap: 10px;

    a {
      font-size: 20px;
      color: white;
      transition: color 0.3s;

      &:hover {
        color: #297ffd;
      }
    }
  }
`;

const InfoLinks = styled.div`
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #297ffd;
    }
  }
`;

const Copyright = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  svg {
    font-size: 16px;
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <BrandWrapper href="#inicio">
          <BrandTitle>
            <h2 className="info">Fruto</h2>
            <h2 className="gerencial">Davide</h2>
          </BrandTitle>
          <h3>solução em decorações.</h3>
        </BrandWrapper>

        <ContactInfo>
          <SectionTitle>Contato</SectionTitle>
          <a
            href="https://wa.me/5561999911375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!"
            className="phone"
          >
            +55 (61) 99982-1919
          </a>
  
          <div className="address">Brasília - DF, 59625-900</div>
          <div className="cnpj">37.109.394/0001-20</div>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/inforgerencial/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para Nosso Instagram"
              title="Link para Nosso Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5561999911375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para Nosso Whatsapp"
              title="Link para Nosso Whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </ContactInfo>

        <InfoLinks>
          <SectionTitle>Informações</SectionTitle>
          <a href="#Sobre">Sobre</a>
          <a href="#contato">Fale Conosco</a>
          <h3 className="cursor-pointer">Termos e Condições</h3>
          <a href="#Sobre">Nossa Politica</a>
          <a href="#contato">Termos</a>
        </InfoLinks>
      </FooterWrapper>

      <Copyright>
        <RiCopyrightFill />
        <span>Todos os direitos reservados.</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
