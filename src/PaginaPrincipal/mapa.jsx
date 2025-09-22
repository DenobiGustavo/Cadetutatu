import React, { useState } from 'react';
import Header from './header';
import Titulo from './titulo';
import { ArrowLeft } from "lucide-react"; // Ícone da seta

const Mapa = () => {
  const [showTitulo, setShowTitulo] = useState(false);

  // Função para voltar à página inicial
  const voltarInicio = () => {
    window.location.href = "/"; // redireciona para a raiz do site
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Só aparece em telas médias pra cima */}
      <div className="hidden md:block">
        {/* Área sensível só abre o título */}
        <div
          className="absolute top-0 left-0 w-full h-2 z-50"
          onMouseEnter={() => setShowTitulo(true)}
        />

        {/* Container fixo no topo */}
        <div className="fixed top-0 left-0 w-full z-40 flex flex-col bg-white">
          
          <div
            className={`transition-all duration-500 ${
              showTitulo ? "max-h-40" : "max-h-0"
            }`}
            onMouseLeave={() => setShowTitulo(false)}
            style={{
              overflow: showTitulo ? "visible" : "hidden"
            }}
          >
            <Titulo />
          </div>

          {/* Header verde */}
          <Header />
        </div>
      </div>

      {/* Ícone de voltar - só no mobile */}
      <button
        onClick={voltarInicio}
        className="absolute top-4 left-4 z-50 md:hidden bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Iframe ocupando 100% da tela */}
      <iframe
        title="Meu Mapa"
        src="https://newcadetutatu.vercel.app/"
        className={`w-full h-screen md:transition-all md:duration-300 ${
          showTitulo
            ? "md:h-[calc(100vh-200px)] md:mt-[208px]"
            : "md:h-[calc(100vh-70px)] md:mt-[70px]"
        }`}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Mapa;
