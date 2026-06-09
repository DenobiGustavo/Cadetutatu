import React from "react";
import SiteFooter from "../../components/layout/SiteFooter";
import SiteHeader from "../../components/layout/SiteHeader";
import TopBanner from "../../components/layout/TopBanner";
import speciesData from "./speciesData";
import SpeciesList from "./SpeciesList";

const SpeciesPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg">
      {/* Cabeçalho */}
      <div>
        <TopBanner />
        <SiteHeader />
      </div>

      {/* Conteúdo principal – cresce para empurrar o footer */}
      <main className="flex-1 px-4 sm:px-0">
        <div className="flex flex-col items-center pt-8 sm:pt-20">
          <SpeciesList data={speciesData} />
        </div>
      </main>

      {/* Rodapé */}
      <SiteFooter />
    </div>
  );
};

export default SpeciesPage;
