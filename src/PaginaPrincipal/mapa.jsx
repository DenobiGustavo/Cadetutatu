import React from 'react';
import Header from './header';
import Titulo from './titulo';
import Body from './body';
import Footer from './footer';

const Mapa = () => {
  return (
    <div className="flex flex-col">
     <div className='h-screen'>
        <div>
        <Titulo className="pb-8"/>
        <Header />
        </div>
      <div className="h-[90%]">
      <iframe
          title="Meu Mapa"
          src="https://cadetutatu.uenp.edu.br/"
          width="100%"
          height="100%"
          loading="lazy" 
          className="iframe-map"
        ></iframe>
     </div>
    </div>
    </div>
  );
};

export default Mapa;
