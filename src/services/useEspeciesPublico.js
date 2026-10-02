import { useEffect, useState } from "react";
import { listarEspeciesPublico, adaptarParaDados } from "./cadetutatuPublico";

/**
 * Carrega as espécies do Painel Científico já no formato do componente
 * `Dados`, com estado de carregamento/erro e `tentarNovamente`.
 */
export function useEspeciesPublico() {
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

  return {
    especies,
    carregando,
    erro,
    tentarNovamente: () => setTentativa((n) => n + 1),
  };
}
