import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="hidden sm:flex bg-primary-green text-white font-medium">
      <div className="container mx-auto py-5">
        <nav>
          <ul className="flex space-x-[9rem] items-center justify-center">
            <li className='rounded-lg transition transform hover:scale-110'>
              <Link to="/" className="w-[4rem] text-[1.3rem]">
                Home
              </Link>
            </li>
            <li className='rounded-lg transition transform hover:scale-110'>
              <Link to="/mapa" className="w-[4rem] text-[1.3rem]">
                Mapa
              </Link>
            </li>
            <li className='rounded-lg transition transform hover:scale-110'>
              <Link to="/dados" className="w-[4rem] text-[1.3rem]">
                Dados
              </Link>
            </li>
            <li className='rounded-lg transition transform hover:scale-110'>
              <Link to="/quem-somos" className="w-[4rem] text-[1.3rem]">
                Quem Somos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;