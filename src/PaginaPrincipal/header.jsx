import React from 'react';
import { NavLink } from 'react-router-dom';

// A pagina atual ganha sublinhado (nao depende so de cor) e aria-current="page" automatico
const navClasse = ({ isActive }) =>
  `w-[4rem] text-[1.3rem] ${isActive ? "underline underline-offset-8 decoration-2" : ""}`;

const Header = () => {
  return (
    <header className="hidden sm:flex bg-primary-green text-white font-medium">
      <div className="container mx-auto py-5">
        <nav aria-label="Navegação principal">
          <ul className="flex space-x-[9rem] items-center justify-center">
            <li className='rounded-lg transition transform hover:scale-110'>
              <NavLink to="/" end className={navClasse}>
                Home
              </NavLink>
            </li>
            <li className='rounded-lg transition transform hover:scale-110'>
              <NavLink to="/mapa" end className={navClasse}>
                Mapa
              </NavLink>
            </li>
            <li className='rounded-lg transition transform hover:scale-110'>
              <NavLink to="/dados" end className={navClasse}>
                Dados
              </NavLink>
            </li>
            <li className='rounded-lg transition transform hover:scale-110'>
              <NavLink to="/quem-somos" end className={navClasse}>
                Quem Somos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;