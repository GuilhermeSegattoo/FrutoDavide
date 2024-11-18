import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { RiCopyrightFill } from 'react-icons/ri';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary min-h-[200px] p-8 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Marca */}
        <a href="#inicio" className="flex flex-col gap-2 text-white no-underline">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">Fruto</h2>
            <h2 className="text-3xl font-bold text-secondary">Davide</h2>
          </div>
          <h3>Solução em decorações.</h3>
        </a>

        {/* Contato */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Contato</h2>
          <a
            href="https://wa.me/5561999911375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!"
            className="font-bold no-underline text-white"
          >
            +55 (61) 99982-1919
          </a>
          <div className="italic">Brasília - DF, 59625-900</div>
          <div>CNPJ: 37.109.394/0001-20</div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/inforgerencial/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para Nosso Instagram"
              title="Link para Nosso Instagram"
              className="text-xl hover:text-green-800 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5561999911375?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o!"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para Nosso Whatsapp"
              title="Link para Nosso Whatsapp"
              className="text-xl hover:text-green-800 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Informações */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Informações</h2>
          <a href="#Sobre" className="hover:text-green-900 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-green-900 transition-colors">Fale Conosco</a>
          <span className="cursor-pointer hover:text-green-900 transition-colors">Termos e Condições</span>
          <a href="#Sobre" className="hover:text-green-900 transition-colors">Nossa Política</a>
          <a href="#contato" className="hover:text-green-900 transition-colors">Termos</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center gap-2 mt-8 text-sm">
        <RiCopyrightFill className="text-lg" />
        <span>Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
