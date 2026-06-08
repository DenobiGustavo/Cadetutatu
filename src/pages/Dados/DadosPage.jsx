import React from "react";
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Titulo from "../Home/titulo"
import dados2 from "./dados2"
import Dados from "./dados";


const DadosPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg">
      {/* Cabeçalho */}
      <div>
        <Titulo />
        <Header />
      </div>

      {/* Conteúdo principal – cresce para empurrar o footer */}
      <main className="flex-1 px-4 sm:px-0">
        <div className="flex flex-col items-center pt-8 sm:pt-20">
          <Dados data={dados2} />
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default DadosPage;
