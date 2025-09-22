import React, { useState } from "react";
import { Home, MapPin, Database, Users } from "lucide-react";

const Titulo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative w-full">
      {/* Header mobile */}
      <div className="sm:hidden flex justify-between items-center bg-primary-blue h-[7rem] px-4">
        <img src="/img/logo.png" alt="logo" className="w-[3.4rem] h-[3rem]" />
        <div className="flex flex-col items-center text-center">
          <p className="text-white text-[1.8rem] font-bold tracking-tight">
            CadeTuTatu?
          </p>
          <p className="text-white text-[1rem] font-medium tracking-wide px-2 text-center">
            Gestão de Dados e Educação Ambiental
          </p>
        </div>
        <img
          src="/img/confgicon.png"
          alt="menu"
          className="w-[2rem] h-[1.5rem] cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Header desktop/tablet */}
      <div className="hidden sm:flex justify-between items-center bg-primary-blue 
                      h-[8.5rem] md:h-[9.5rem] px-6"> {/* tablet altura maior */}
        <img
          src="/img/logo.png"
          alt="logo"
          className="w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem]" /> {/* logo maior no tablet */}
        <p className="text-white text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-extrabold tracking-wide leading-tight text-center">
          CadeTuTatu? - Gestão de Dados e Educação Ambiental
        </p>
        <img
          src="/img/confgicon.png"
          alt="menu"
          className="w-11 h-10 md:w-12 md:h-11 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Menu dropdown */}
      {menuOpen && (
        <div className="absolute z-50 top-full right-4 sm:right-6 mt-2 bg-green-200 shadow-lg rounded-lg w-48">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"
              >
                <Home className="w-4 h-4" /> Home
              </a>
            </li>
            <li>
              <a
                href="/mapa"
                className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"
              >
                <MapPin className="w-4 h-4" /> Mapa
              </a>
            </li>
            <li>
              <a
                href="/dados"
                className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"
              >
                <Database className="w-4 h-4" /> Dados
              </a>
            </li>
            <li>
              <a
                href="/quem-somos"
                className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"
              >
                <Users className="w-4 h-4" /> Quem Somos
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Titulo;
