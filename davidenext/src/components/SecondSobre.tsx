import { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../assets/almofada.svg';
import img2 from '../assets/toalha.svg';
import img3 from '../assets/image3.svg';
import img4 from '../assets/image4.svg';

const SecondSobre = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  // Função para avançar o índice da imagem
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // useEffect para mudar a imagem automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // 3000ms = 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []); // O array vazio garante que o efeito seja executado uma vez quando o componente for montado

  return (
    <div className="flex flex-wrap items-center justify-center p-12">
      <div className="flex-1 max-w-lg mr-5 mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-5 text-left">
          Soluções Sob Medida para Hospedagens Inesquecíveis
        </h2>
        <p className="text-2xl text-black text-left mb-4">
          Transforme suas ideias em experiências inesquecíveis
        </p>
        <p className="text-2xl text-black text-left mb-6">
          Do design dos quartos à escolha dos enxovais, criamos tudo sob medida para você.
        </p>
        <a
          href="#contato"
          className="inline-block mt-6 px-6 py-2 text-base font-semibold text-secondary border border-primary bg-primary rounded-lg hover:bg-green-500 hover:text-primary transition-colors duration-300"
        >
          Vamos dar vida ao projeto dos sonhos?
        </a>
      </div>

      <div className="flex-1 max-w-lg relative hidden sm:block">
        {/* Slide Images */}
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-700 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image src={img} alt={`Imagem ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators (listras) */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-100'} transition-colors duration-300`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSobre;
