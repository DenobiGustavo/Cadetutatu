/**
 * Consome o endpoint público (sem login) do Painel Científico CadeTuTatu
 * (projeto separado, backend em cadetutatu.onrender.com). Só leitura.
 */
const PUBLICO_API_URL = "https://cadetutatu.onrender.com/api/publico";

/** Busca todas as páginas e devolve um array único com todas as espécies. */
export async function listarEspeciesPublico() {
  const todas = [];
  let pagina = 1;

  for (;;) {
    const resposta = await fetch(
      `${PUBLICO_API_URL}/especies?page=${pagina}&limit=100`
    );
    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os dados do Painel Científico.");
    }
    const json = await resposta.json();
    todas.push(...json.especies);
    if (pagina >= json.paginacao.totalPaginas) break;
    pagina += 1;
  }

  return todas;
}

/**
 * Converte a ficha pública do Painel Científico para o formato que o
 * componente `Dados` já espera, para reaproveitá-lo sem reescrever os cards.
 */
export function adaptarParaDados(especies) {
  return especies.map((especie) => ({
    id: especie.uuid,
    specie: {
      name: especie.nomePopular || especie.nomeCientifico,
      scientific_name: especie.nomeCientifico,
      family: especie.familia || "",
      food: especie.alimentacao || "",
      geographic_distribution: especie.distribuicao || "",
      habitat: especie.habitat || "",
      habits: especie.habitos || "",
      order: especie.ordem || "",
      curiosities: (especie.curiosidades || []).join(" "),
      // `Dados` só distingue Planta (division === "Plantae") de Animal
      // (division numérico) para o filtro — não precisa do código exato.
      division: especie.tipo === "PLANTA" ? "Plantae" : "1",
      image_url: especie.foto?.url || null,
      image_credit: especie.foto?.credito || null,
    },
  }));
}
