import React, { useState } from "react";

const Titulo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex font-destaque">
      <div className="sm:hidden bg-primary-blue flex justify-between items-center w-full h-[7rem]">
        <img src="/img/logo.png" alt="logo" className="flex w-[4rem] h-[3rem] ml-2 sm:ml-4"/>
        <div className="flex flex-col items-center text-center">
          <p className="text-white text-[1.6rem]">CadeTuTatu?</p>
          <p className="text-white text-[1rem]">Gestão de Dados e Educação Ambiental</p>
        </div>
        <img
          src="/img/confgicon.png"
          alt="confgicon"
          className="flex w-[2.4rem] h-[2.4rem] mr-2 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div className="bg-primary-blue hidden sm:flex justify-between items-center w-full h-[8.5rem]">
        <img src="/img/logo.png" alt="logo" className="w-[6rem] h-[6rem] ml-2 sm:ml-6"/>
        <p className="text-white text-[1.8rem]">CadeTuTatu? - Gestão de Dados e Educação Ambiental</p>
        <img
          src="/img/confgicon.png"
          alt="confg"
          className="w-11 h-10 mr-6 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {menuOpen && (
        <div className="absolute z-50 top-0 right-0 mt-16 mr-4 bg-green-200 shadow-lg rounded-lg">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li>
              <a href="/" className="text-primary-blue hover:text-primary-green">Home</a>
            </li>
            <li>
              <a href="/quem-somos" className="text-primary-blue hover:text-primary-green">Quem Somos</a>
            </li>
            <li>
              <a href="/dados" className="text-primary-blue hover:text-primary-green">Dados</a>
            </li>
            <li>
              <a href="/parceiro" className="text-primary-blue hover:text-primary-green">Seja um Parceiro</a>
            </li>
            <li>
              <a href="/administrativo" className="text-primary-blue hover:text-primary-green">Administrativo</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Titulo;
