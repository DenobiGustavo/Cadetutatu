import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center ]">
    <div>
      <Link to="/mapa">
        <img src="/img/mapa.png" alt="mapa" className="w-[12rem] h-[10rem] sm:w-[20rem] sm:h-[16rem] rounded-lg transition transform hover:scale-110"/>
      </Link>
      <p className="font-sans text-center text-white sm:text-[2rem] text-[1.6rem] pt-4 font-medium">Mapa Interativo</p>
    </div>
    <div>
      <a href="https://cadetutatu.uenp.edu.br/">
        <img src="/img/base.png" alt="base" className="h-[10rem] w-[10rem] sm:h-[16rem] sm:w-[16rem] rounded-lg transition transform hover:scale-110"/>
      </a>
      <p className="font-sans font-medium text-center text-white sm:text-[2rem] text-[1.6rem] pt-[0.7rem]">Base de Dados</p>
    </div>
    </div>

  );
};

export default Body;
