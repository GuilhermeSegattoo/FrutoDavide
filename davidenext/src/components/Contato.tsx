import React from 'react';
import Image from 'next/image';
import msg from '../assets/msg.svg';

const Contato: React.FC = () => {
  return (
    <section
      id="contato"
      className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-10"
    >
      {/* Texto à esquerda */}
      <div className="lg:w-1/2 max-w-lg lg:ml-20">
        <h2 className="text-3xl font-bold text-primary mb-4">Faça um orçamento!</h2>
        <p className="text-lg text-gray-700 mb-4">
          Seja com cortinas, estofados ou móveis personalizados, oferecemos soluções completas que
          aliam funcionalidade e estilo para cada detalhe do seu hotel.
        </p>
        <p className="text-lg text-gray-700 font-semibold mb-6">
          Clique no botão abaixo e entre em contato pelo WhatsApp para descobrir como podemos
          transformar seu projeto em realidade!
        </p>
        <div className="flex justify-center lg:justify-start">
          <a
            href="https://wa.me/SEUNUMERODEWHATSAPP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full transition-colors duration-300 hover:bg-green-700"
          >
            Quero saber mais
          </a>
        </div>
      </div>

      {/* Imagem maior à direita */}
      <div className="lg:w-1/2 flex justify-center lg:mr-20 mt-8 lg:mt-0">
        <Image src={msg} alt="Imagem ilustrativa" className="w-full max-w-md lg:max-w-full" />
      </div>
    </section>
  );
};

export default Contato;
