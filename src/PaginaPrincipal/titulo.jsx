import React from "react";

const Titulo = () => {
  return (
    <div className="flex h-full font-destaque">

    <div className="sm:hidden bg-primary-blue flex justify-between items-center w-full">
      <img src="/img/logo.png" alt="logo" className="flex w-[3rem] h-[3rem] ml-2 sm:ml-4"/>
      <div className="flex flex-col items-center text-center">
        <p className="text-white text-[1.6rem]">CadeTuTatu?</p>
        <p className="text-white text-[1rem]">Gestão de Dados e Educação Ambiental</p>
      </div>
      <img src="/img/confgicon.png" alt="confgicon" className="flex w-[3rem] h-[3rem] mr-2"/>
    </div>
    
    <div className="hidden bg-primary-blue sm:flex justify-between items-center w-full h-[8.5rem]">
      <img src="/img/logo.png" alt="logo" className="w-[6rem] h-[6rem] ml-2 sm:ml-6"/>
      <p className="text-white text-[1.8rem]">CadeTuTatu? - Gestão de Dados e Educação Ambiental</p>
      <img src="/img/confgicon.png" alt="confg" className="w-11 h-10 mr-6"/>
    </div>
    </div>
  );
};

export default Titulo;
