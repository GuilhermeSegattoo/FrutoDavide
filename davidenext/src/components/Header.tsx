import Image from 'next/image';
import SalaImage from '../assets/imgsala.svg'; // ajuste o caminho para sua imagem

const Header = () => {
  return (
    <div id="inicio" className="flex items-center justify-between h-550 bg-secondary text-left p-8 md:px-16 lg:px-32">
      <div className="max-w-lg">
        <h1 className="lg:text-[96px] md:text-[60px] sm:text-[70px] text-[40px] font-bold text-black mb-1">
          Da<span className="text-primary">Vide</span>
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-2">
          Soluções em decorações, transformando ambientes em experiências inesquecíveis!
        </h3>
        <button className="px-8 py-3 text-white bg-green-900 font-semibold text-lg rounded-lg hover:bg-transparent hover:text-primary border-2 border-green-900 transition-colors">
          Saiba Mais
        </button>
      </div>
      <div className="-mt-36 ml-10 hidden sm:block">
        <Image src={SalaImage} alt="Imagem de Sala" width={500} height={500} className="rounded-lg" />
      </div>
    </div>
  );
}

export default Header;
