import React from 'react';

const Header = () => {
  return (
     <header className="bg-primary-green bg-opacity-80 text-white font-medium">
       <div className="hidden container mx-auto sm:flex justify-center items-center py-4 ">
         <nav>
           <ul className="flex space-x-32 items-center">
             <li>
               <a href="/" className="hover:text-gray-300 text-lg">
                Home
               </a>
             </li>
             <li>
               <a href="/" className="hover:text-gray-300 text-lg">
                 Quem Somos
               </a>
             </li>
             <li>
               <a href="/" className="hover:text-gray-300 text-lg">
                 Dados
               </a>
             </li>
             <li>
               <a href="/" className="hover:text-gray-300 text-lg">
                 Seja um Parceiro
               </a>
             </li>
             <li>
               <a href="/" className="hover:text-gray-300 text-lg">
                 Administrativo
               </a>
             </li>
           </ul>
         </nav>
       </div>
     </header>
  );
};

export default Header;