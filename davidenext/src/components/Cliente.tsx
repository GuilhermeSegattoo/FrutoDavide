import { FC } from 'react';
import Image from 'next/image';
import golden from '../assets/Golden.svg';
import cullinan from '../assets/Cullinan.svg';
import lets from '../assets/Lets.svg';
import nobile from '../assets/Nobile.svg';
import plaza from '../assets/Plaza.svg';
import royal from '../assets/Royal.svg';

const Cliente: FC = () => {
  return (
    <section className="w-full p-10 bg-secondary text-primary flex flex-col justify-start">
      <h3 className="text-2xl lg:text-3xl font-semibold mb-10 text-left">Nossos clientes</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="cliente-card flex flex-col items-center bg-green-900 rounded-lg p-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <Image src={golden} alt="Golden Tulip Brasília" width={240} height={240} className="rounded-lg mb-4" />
          <p className="text-lg font-bold text-secondary">Golden Tulip Brasília</p>
        </div>
        
        <div className="cliente-card flex flex-col items-center bg-green-900 rounded-lg p-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <Image src={plaza} alt="Plaza Brasília Hotel" width={240} height={240} className="rounded-lg mb-4" />
          <p className="text-lg font-bold text-secondary">Plaza Brasília Hotel</p>
        </div>
        
        <div className="cliente-card flex flex-col items-center bg-green-900 rounded-lg p-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <Image src={royal} alt="Royal Tulip Hotel" width={240} height={240} className="rounded-lg mb-4" />
          <p className="text-lg font-bold text-secondary">Royal Tulip Hotel</p>
        </div>
        
        <div className="cliente-card flex flex-col items-center bg-green-900 rounded-lg p-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <Image src={nobile} alt="Nobile Monumental" width={240} height={240} className="rounded-lg mb-4" />
          <p className="text-lg font-bold text-secondary">Nobile Monumental</p>
        </div>
        
        <div className="cliente-card flex flex-col items-center bg-green-900 rounded-lg p-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <Image src={lets} alt="Let's Brasília" width={240} height={240} className="rounded-lg mb-4" />
          <p className="text-lg font-bold text-secondary">Let's Brasília</p>
        </div>
        
        <div className="cliente-card flex flex-col items-center bg-green-900 rounded-lg p-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <Image src={cullinan} alt="Cullinan Hotel" width={240} height={240} className="rounded-lg mb-4" />
          <p className="text-lg font-bold text-secondary">Cullinan Hotel</p>
        </div>
      </div>
    </section>
  );
};

export default Cliente;
