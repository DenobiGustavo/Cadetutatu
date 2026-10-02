import React, { useEffect, useState } from "react";
import Header from "./header";
import Titulo from "./titulo";
import Footer from "./footer";
import Dados from "./dados";
import {
  listarEspeciesPublico,
  adaptarParaDados,
} from "../services/cadetutatuPublico";

const DadosPage = () => {
  const [especies, setEspecies] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    let ativo = true;
    setCarregando(true);
    setErro(false);

    listarEspeciesPublico()
      .then((lista) => {
        if (ativo) setEspecies(adaptarParaDados(lista));
      })
      .catch(() => {
        if (ativo) setErro(true);
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, [tentativa]);

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
          {carregando && (
            <div className="text-center p-6 text-gray-100 sm:text-base" role="status">
              <p className="font-semibold">Carregando espécies do Painel Científico…</p>
              <p className="text-sm opacity-80 mt-1">
                O primeiro acesso depois de um tempo pode levar até um minuto.
              </p>
            </div>
          )}

          {erro && !carregando && (
            <div className="text-center p-6 text-gray-100 sm:text-base" role="alert">
              <p className="font-semibold">
                Não foi possível carregar as espécies agora.
              </p>
              <button
                type="button"
                onClick={() => setTentativa((n) => n + 1)}
                className="mt-3 px-5 py-2 rounded-lg text-white font-semibold bg-[#156AC7] hover:bg-blue-700 transition"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {!carregando && !erro && <Dados data={especies} />}
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default DadosPage;
