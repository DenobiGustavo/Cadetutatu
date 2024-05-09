import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary-green bg-opacity-80 text-white font-medium">
      <div className="container mx-auto py-4">
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link to="/" className="hover:text-gray-300 text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quem-somos" className="hover:text-gray-300 text-lg">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/dados" className="hover:text-gray-300 text-lg">
                Dados
              </Link>
            </li>
            <li>
              <Link to="/parceiro" className="hover:text-gray-300 text-lg">
                Seja um Parceiro
              </Link>
            </li>
            <li>
              <Link to="/administrativo" className="hover:text-gray-300 text-lg">
                Administrativo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
