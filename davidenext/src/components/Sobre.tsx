import Image from 'next/image';
import Sala from '../assets/sala.svg';

const Sobre = () => {
  return (
    <section id="Sobre" className="bg-green-900 p-8 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Imagem */}
      <div className="rounded-lg overflow-hidden w-full max-w-xs lg:max-w-md">
        <Image src={Sala} alt="Imagem de Sala" width={500} height={500} className="rounded-lg" />
      </div>

      {/* Texto e Dados */}
      <div className="text-center lg:text-left text-white">
        {/* Título */}
        <h2 className="text-4xl lg:text-[50px] font-semibold mb-4 leading-tight">
          A melhor qualidade para seus hóspedes
        </h2>

        {/* Frase de Descrição */}
        <p className="text-xl md:text-2xl font-medium mb-6">
          Nossa equipe teve o orgulho de transformar alguns dos mais icônicos prédios de
          Brasília em ambientes acolhedores e sofisticados
        </p>

        {/* Tabela de Dados */}
        <div className="bg-secondary p-6 rounded-lg grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
          <div className="text-center">
            <p className="text-primary text-3xl lg:text-4xl font-bold">150+</p>
            <p className="text-green-950 text-sm lg:text-base">Projetos Concluídos</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-3xl lg:text-4xl font-bold">35 anos</p>
            <p className="text-green-950 text-sm lg:text-base">Experiência no Mercado</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-3xl lg:text-4xl font-bold">500+</p>
            <p className="text-green-950 text-sm lg:text-base">Apartamentos Decorados</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-3xl lg:text-4xl font-bold">80+</p>
            <p className="text-green-950 text-sm lg:text-base">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
