import React from 'react';
import Image from 'next/image';
import toalha from '../assets/toalhas.svg';
import cortina from '../assets/cortina.svg';
import flats from '../assets/flats.svg';
import flats2 from '../assets/flat2.svg';
import toalha2 from '../assets/toalha2.svg';
import toalha3 from '../assets/toalha3.svg';
import enxoval from '../assets/enxoval.svg';
import enxoval2 from '../assets/enxoval2.svg';

// Tipagem para os produtos
interface Produto {
  src: string;
  name: string;
  descricao: string;
}

const Produtos = () => {
  const produtos: Produto[] = [
    { src: toalha as string, name: 'Toalhas', descricao: 'Toalhas de alta qualidade para o seu hotel.' },
    { src: cortina as string, name: 'Cortinas', descricao: 'Cortinas elegantes e de alta qualidade para qualquer ambiente.' },
    { src: enxoval as string, name: 'Enxoval completo', descricao: 'Enxoval completo para uma experiência inesquecível.' },
    { src: flats as string, name: 'Flats', descricao: 'Conforto e sofisticação desde um sofá cama até a cama principal.' },
    { src: toalha2 as string, name: 'Toalhas', descricao: 'Conforto e maciez do jeito que seu hospede vai amar.' },
    { src: flats2 as string, name: 'Flats', descricao: 'Decoramos seu flat na mais alta qualidade e luxo.' },
    { src: enxoval2 as string, name: 'Enxoval completo', descricao: 'Lençóis, colchas e travesseiros de qualidade superior.' },
    { src: toalha3 as string, name: 'Toalhas', descricao: 'Feitas com tecido premium e superabsorventes.' },
  ];

  console.log(produtos);
  

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h2 className="font-bold text-3xl mb-12 text-primary">Nossos Produtos</h2>
      <div className="flex flex-wrap justify-center gap-8 w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="bg-gray-100 border-2 border-green-600 rounded-lg p-6 w-60 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105"
          >
            <Image src={produto.src} alt={produto.name} className="w-full h-auto rounded-lg mb-4" />
            <p className="text-xl font-semibold text-green-600 mb-2 text-center">{produto.name}</p>
            <p className="text-base text-gray-600 text-center mb-4">{produto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
