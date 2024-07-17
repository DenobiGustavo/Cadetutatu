import React from 'react';
import Header from './header';
import Titulo from './titulo';
import Body from './body';
import Footer from './footer';

const Mapa = () => {
  return (
    <div className="flex flex-col">
     <div className='h-screen overflow-hidden'>
        <div className='sticky'> 
        <Titulo className="pb-8"/>
        <Header />
        </div>
      <div className="h-[79.3%]">
      <iframe
          title="Meu Mapa"
          src="https://cadetutatu-mapa.vercel.app"
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
